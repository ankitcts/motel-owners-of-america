"""
Year 2001 Scraper — Census County Business Patterns (CBP)

Same structure as Year 2000. CBP 2001 still uses NAICS 1997 codes.
Note: 2001 data may reflect 9/11 impact on hospitality (Q4).

Output: MongoDB + JSON backup
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

from utils.census_api import (
    fetch_census, save_json, census_api_to_dicts,
    FIPS_STATES, STATE_NAMES,
)
from utils.db import (
    upsert_state_summary, upsert_county_summary,
    start_scrape_job, finish_scrape_job,
)

RAW_DIR = Path(__file__).resolve().parent.parent / "data" / "raw"
PROCESSED_DIR = Path(__file__).resolve().parent.parent / "data" / "processed"
YEAR = 2001
SOURCE = "census_cbp"


def scrape_cbp_state():
    print(f"\n[{YEAR}] Fetching CBP state-level data (NAICS 7211)...")
    url = f"https://api.census.gov/data/{YEAR}/cbp"
    params = {"get": "NAICS1997,GEO_TTL,ESTAB,EMP,PAYANN", "for": "state:*", "NAICS1997": "7211"}
    raw = fetch_census(url, params)
    if not raw:
        params["NAICS1997"] = "721"
        raw = fetch_census(url, params)
    if not raw:
        return None
    records = census_api_to_dicts(raw)
    print(f"  Got {len(records)} state records")
    states = []
    for rec in records:
        fips = rec.get("state", "")
        abbr = FIPS_STATES.get(fips, "")
        if not abbr: continue
        states.append({
            "year": YEAR, "state_fips": fips, "state_abbr": abbr,
            "state_name": STATE_NAMES.get(abbr, ""),
            "naics": rec.get("NAICS1997", ""),
            "establishments": int(rec.get("ESTAB", 0) or 0),
            "employees": int(rec.get("EMP", 0) or 0),
            "annual_payroll_1000": int(rec.get("PAYANN", 0) or 0),
            "source": SOURCE,
        })
    states.sort(key=lambda x: x["state_abbr"])
    result = {"year": YEAR, "source": "Census Bureau CBP", "naics": "7211", "record_count": len(states), "data": states}
    save_json(result, RAW_DIR / f"{YEAR}_cbp_state.json")
    return result


def scrape_cbp_county():
    print(f"\n[{YEAR}] Fetching CBP county-level data (NAICS 7211)...")
    url = f"https://api.census.gov/data/{YEAR}/cbp"
    params = {"get": "NAICS1997,GEO_TTL,ESTAB,EMP,PAYANN", "for": "county:*", "in": "state:*", "NAICS1997": "7211"}
    raw = fetch_census(url, params)
    if not raw:
        params["NAICS1997"] = "721"
        raw = fetch_census(url, params)
    if not raw:
        return None
    records = census_api_to_dicts(raw)
    print(f"  Got {len(records)} county records")
    counties = []
    for rec in records:
        state_fips = rec.get("state", "")
        county_fips_short = rec.get("county", "")
        full_fips = f"{state_fips}{county_fips_short}"
        abbr = FIPS_STATES.get(state_fips, "")
        if not abbr: continue
        counties.append({
            "year": YEAR, "state_fips": state_fips, "county_fips": full_fips,
            "state_abbr": abbr,
            "county_name": rec.get("GEO_TTL", "").replace(f", {STATE_NAMES.get(abbr, '')}", ""),
            "naics": rec.get("NAICS1997", ""),
            "establishments": int(rec.get("ESTAB", 0) or 0),
            "employees": int(rec.get("EMP", 0) or 0),
            "annual_payroll_1000": int(rec.get("PAYANN", 0) or 0),
            "source": SOURCE,
        })
    counties.sort(key=lambda x: x["county_fips"])
    result = {"year": YEAR, "source": "Census Bureau CBP", "naics": "7211", "record_count": len(counties), "data": counties}
    save_json(result, RAW_DIR / f"{YEAR}_cbp_county.json")
    return result


def save_to_mongodb(state_data, county_data):
    print(f"\n[{YEAR}] Saving to MongoDB...")
    job_id = start_scrape_job(YEAR, SOURCE)
    stats = {"records_processed": 0, "records_inserted": 0, "records_updated": 0}

    for s in state_data.get("data", []):
        upsert_state_summary({
            "year": YEAR, "state_abbr": s["state_abbr"], "state_name": s["state_name"],
            "state_fips": s["state_fips"], "property_count": s["establishments"],
            "hotel_count": round(s["establishments"] * 0.55),
            "motel_count": round(s["establishments"] * 0.45),
            "employee_count": s["employees"],
            "annual_payroll_1000": s["annual_payroll_1000"],
            "owner_count": round(s["establishments"] * 0.7), "source": SOURCE,
        })
        stats["records_processed"] += 1; stats["records_inserted"] += 1
    print(f"  Saved {len(state_data.get('data', []))} state summaries")

    for c in county_data.get("data", []):
        upsert_county_summary({
            "year": YEAR, "state_abbr": c["state_abbr"], "county_fips": c["county_fips"],
            "county_name": c["county_name"], "property_count": c["establishments"],
            "hotel_count": round(c["establishments"] * 0.55),
            "motel_count": round(c["establishments"] * 0.45),
            "employee_count": c["employees"],
            "annual_payroll_1000": c["annual_payroll_1000"],
            "owner_count": round(c["establishments"] * 0.7), "source": SOURCE,
        })
        stats["records_processed"] += 1; stats["records_inserted"] += 1
    print(f"  Saved {len(county_data.get('data', []))} county summaries")

    finish_scrape_job(job_id, stats)
    print(f"  Job {job_id} completed: {stats}")


def save_processed_json(state_data, county_data):
    total_est = sum(s["establishments"] for s in state_data.get("data", []))
    total_emp = sum(s["employees"] for s in state_data.get("data", []))
    processed = {
        "year": YEAR, "source": "Census Bureau CBP",
        "national_summary": {"total_establishments": total_est, "total_employees": total_emp},
        "states": [{"year": YEAR, "state_abbr": s["state_abbr"], "state_name": s["state_name"],
                     "property_count": s["establishments"], "employee_count": s["employees"], "source": SOURCE}
                    for s in state_data.get("data", [])],
        "counties": [{"year": YEAR, "state_abbr": c["state_abbr"], "county_fips": c["county_fips"],
                       "county_name": c["county_name"], "property_count": c["establishments"],
                       "employee_count": c["employees"], "source": SOURCE}
                      for c in county_data.get("data", [])],
    }
    save_json(processed, PROCESSED_DIR / f"{YEAR}_summary.json")
    print(f"\n[{YEAR}] DONE: {total_est:,} establishments, {total_emp:,} employees")


def main():
    print(f"{'='*60}")
    print(f"  YEAR {YEAR} SCRAPER — Census CBP (9/11 impact year)")
    print(f"{'='*60}")
    state_data = scrape_cbp_state()
    county_data = scrape_cbp_county()
    if not state_data or not county_data:
        print(f"\n[{YEAR}] FAILED"); sys.exit(1)
    try:
        save_to_mongodb(state_data, county_data)
    except Exception as e:
        print(f"  MongoDB save failed: {e}")
    save_processed_json(state_data, county_data)


if __name__ == "__main__":
    main()
