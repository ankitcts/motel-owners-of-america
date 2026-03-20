"""
MongoDB connection and CRUD operations for Motel Owners of America.

Collections:
- properties: Individual hotel/motel records
- owners: Owner/LLC/Corporation records
- state_summaries: Pre-computed state-level counts per year
- county_summaries: Pre-computed county-level counts per year
- ownership_trends: Year-over-year citizenship breakdown
- conflicts: Records with conflicting data (potential dupes)
- scrape_jobs: Scraper run tracking
"""

from pymongo import MongoClient
from pymongo.collection import Collection
from pymongo.errors import DuplicateKeyError
from datetime import datetime, timezone
from typing import Optional
import os

MONGO_URI = os.getenv("MONGO_URI", "mongodb://moa_admin:moa_secret_2024@localhost:27017/motel_owners?authSource=admin")
DB_NAME = "motel_owners"

_client: Optional[MongoClient] = None


def get_db():
    """Get MongoDB database connection (lazy singleton)."""
    global _client
    if _client is None:
        _client = MongoClient(MONGO_URI)
    return _client[DB_NAME]


def get_collection(name: str) -> Collection:
    """Get a collection by name."""
    return get_db()[name]


# ─── Property CRUD ─────────────────────────────────

def upsert_property(doc: dict) -> tuple[str, bool, Optional[dict]]:
    """
    Insert or update a property. Dedup by normalized address + city + state.

    Returns: (action, is_conflict, conflict_doc)
    - ("inserted", False, None) — new record
    - ("updated", False, None) — existing record updated with new source data
    - ("conflict", True, conflict_doc) — conflicting data saved to conflicts table
    """
    col = get_collection("properties")
    conflicts_col = get_collection("conflicts")

    key = {
        "address_normalized": doc["address_normalized"],
        "city_normalized": doc["city_normalized"],
        "state_abbr": doc["state_abbr"],
    }

    existing = col.find_one(key)

    if existing is None:
        # New record
        doc["created_at"] = datetime.now(timezone.utc)
        doc["updated_at"] = datetime.now(timezone.utc)
        doc["sources"] = [doc.get("source", "unknown")]
        try:
            col.insert_one(doc)
            return ("inserted", False, None)
        except DuplicateKeyError:
            return ("duplicate", False, None)

    # Existing record — check for conflicts
    has_conflict = _check_conflicts(existing, doc)

    if has_conflict:
        conflict_doc = {
            "original_id": existing["_id"],
            "original_name": existing.get("name", ""),
            "address_normalized": doc["address_normalized"],
            "city_normalized": doc.get("city_normalized", ""),
            "state_abbr": doc["state_abbr"],
            "conflicting_data": doc,
            "conflict_fields": has_conflict,
            "source": doc.get("source", "unknown"),
            "status": "pending",  # pending | resolved | ignored
            "created_at": datetime.now(timezone.utc),
        }
        conflicts_col.insert_one(conflict_doc)
        return ("conflict", True, conflict_doc)

    # No conflict — merge sources and update
    new_sources = list(set(existing.get("sources", []) + [doc.get("source", "unknown")]))
    update = {
        "$set": {
            "updated_at": datetime.now(timezone.utc),
            "sources": new_sources,
        }
    }
    # Merge year_data if present
    if "year_data" in doc:
        for yd in doc["year_data"]:
            update.setdefault("$addToSet", {})["year_data"] = yd

    col.update_one({"_id": existing["_id"]}, update)
    return ("updated", False, None)


def _check_conflicts(existing: dict, new: dict) -> Optional[list[str]]:
    """
    Check if new data conflicts with existing record.
    Returns list of conflicting field names, or None if no conflict.
    """
    conflicts = []

    # Name mismatch (beyond minor differences)
    if new.get("name") and existing.get("name"):
        from utils.normalize import normalize_name
        if normalize_name(new["name"]) != normalize_name(existing["name"]):
            # Could be a rebrand — only flag if very different
            from difflib import SequenceMatcher
            ratio = SequenceMatcher(None, normalize_name(new["name"]), normalize_name(existing["name"])).ratio()
            if ratio < 0.5:
                conflicts.append("name")

    # Owner mismatch
    if new.get("owner_name") and existing.get("owner_name"):
        from utils.normalize import normalize_name
        if normalize_name(new["owner_name"]) != normalize_name(existing["owner_name"]):
            conflicts.append("owner")

    # Property type mismatch
    if new.get("property_type") and existing.get("property_type"):
        if new["property_type"] != existing["property_type"]:
            conflicts.append("property_type")

    return conflicts if conflicts else None


# ─── State/County Summary CRUD ─────────────────────

def upsert_state_summary(doc: dict):
    """Upsert state summary (keyed by state_abbr + year)."""
    col = get_collection("state_summaries")
    doc["updated_at"] = datetime.now(timezone.utc)
    col.update_one(
        {"state_abbr": doc["state_abbr"], "year": doc["year"]},
        {"$set": doc},
        upsert=True,
    )


def upsert_county_summary(doc: dict):
    """Upsert county summary (keyed by county_fips + year)."""
    col = get_collection("county_summaries")
    doc["updated_at"] = datetime.now(timezone.utc)
    col.update_one(
        {"county_fips": doc["county_fips"], "year": doc["year"]},
        {"$set": doc},
        upsert=True,
    )


# ─── Scrape Job Tracking ──────────────────────────

def start_scrape_job(year: int, source: str) -> str:
    """Record start of a scrape job. Returns job_id."""
    col = get_collection("scrape_jobs")
    result = col.insert_one({
        "year": year,
        "source": source,
        "status": "running",
        "started_at": datetime.now(timezone.utc),
        "records_processed": 0,
        "records_inserted": 0,
        "records_updated": 0,
        "records_conflicted": 0,
    })
    return str(result.inserted_id)


def finish_scrape_job(job_id: str, stats: dict):
    """Record completion of a scrape job."""
    from bson import ObjectId
    col = get_collection("scrape_jobs")
    col.update_one(
        {"_id": ObjectId(job_id)},
        {"$set": {
            "status": "completed",
            "finished_at": datetime.now(timezone.utc),
            **stats,
        }},
    )


# ─── Utility ───────────────────────────────────────

def get_stats():
    """Get collection counts."""
    db = get_db()
    return {
        "properties": db.properties.count_documents({}),
        "owners": db.owners.count_documents({}),
        "state_summaries": db.state_summaries.count_documents({}),
        "county_summaries": db.county_summaries.count_documents({}),
        "conflicts": db.conflicts.count_documents({}),
        "scrape_jobs": db.scrape_jobs.count_documents({}),
    }
