// MongoDB initialization script
// Creates database, collections, and indexes for Motel Owners of America

db = db.getSiblingDB("motel_owners");

// ─── Properties Collection ─────────────────────────
// Each hotel/motel/inn/resort as a unique record
db.createCollection("properties");
db.properties.createIndex({ "address_normalized": 1, "city_normalized": 1, "state_abbr": 1 }, { unique: true, name: "idx_unique_address" });
db.properties.createIndex({ "state_abbr": 1, "county_fips": 1 }, { name: "idx_state_county" });
db.properties.createIndex({ "slug": 1 }, { unique: true, sparse: true, name: "idx_slug" });
db.properties.createIndex({ "location": "2dsphere" }, { sparse: true, name: "idx_geo" });
db.properties.createIndex({ "owner_ids": 1 }, { name: "idx_owners" });
db.properties.createIndex({ "source": 1 }, { name: "idx_source" });
db.properties.createIndex({ "year_data.year": 1 }, { name: "idx_year" });
db.properties.createIndex({ "name": "text", "address": "text" }, { name: "idx_text_search" });

// ─── Owners Collection ─────────────────────────────
// Individual, LLC, Corporation, Trust, Partnership
db.createCollection("owners");
db.owners.createIndex({ "name_normalized": 1, "registration_state": 1 }, { unique: true, name: "idx_unique_owner" });
db.owners.createIndex({ "slug": 1 }, { unique: true, sparse: true, name: "idx_slug" });
db.owners.createIndex({ "owner_type": 1 }, { name: "idx_type" });
db.owners.createIndex({ "citizenship": 1 }, { name: "idx_citizenship" });
db.owners.createIndex({ "states_present": 1 }, { name: "idx_states" });
db.owners.createIndex({ "name": "text" }, { name: "idx_text_search" });

// ─── State Summaries Collection ────────────────────
// Pre-computed counts per state per year
db.createCollection("state_summaries");
db.state_summaries.createIndex({ "state_abbr": 1, "year": 1 }, { unique: true, name: "idx_state_year" });

// ─── County Summaries Collection ───────────────────
// Pre-computed counts per county per year
db.createCollection("county_summaries");
db.county_summaries.createIndex({ "county_fips": 1, "year": 1 }, { unique: true, name: "idx_county_year" });
db.county_summaries.createIndex({ "state_abbr": 1, "year": 1 }, { name: "idx_state_year" });

// ─── Ownership Trends Collection ───────────────────
// Year-over-year citizenship breakdown
db.createCollection("ownership_trends");
db.ownership_trends.createIndex({ "year": 1 }, { unique: true, name: "idx_year" });

// ─── Conflicts Collection ──────────────────────────
// Records that conflict with existing data (potential duplicates with different info)
db.createCollection("conflicts");
db.conflicts.createIndex({ "original_id": 1 }, { name: "idx_original" });
db.conflicts.createIndex({ "address_normalized": 1, "state_abbr": 1 }, { name: "idx_address" });
db.conflicts.createIndex({ "status": 1 }, { name: "idx_status" });
db.conflicts.createIndex({ "source": 1 }, { name: "idx_source" });
db.conflicts.createIndex({ "created_at": -1 }, { name: "idx_created" });

// ─── Scrape Jobs Collection ────────────────────────
// Track scraper runs for auditing
db.createCollection("scrape_jobs");
db.scrape_jobs.createIndex({ "year": 1, "source": 1 }, { name: "idx_year_source" });
db.scrape_jobs.createIndex({ "status": 1 }, { name: "idx_status" });

print("✓ Database 'motel_owners' initialized with collections and indexes");
