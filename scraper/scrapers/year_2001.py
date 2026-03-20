"""
Year 2001 Scraper — Census County Business Patterns (CBP)

Same structure as Year 2000. CBP 2001 still uses NAICS 1997 codes.
NAICS 7211 = Traveler Accommodation.

Note: 2001 data may show impact of 9/11 on hospitality industry
(data is for the full year, so Q4 impact would be reflected).

Output: scraper/data/raw/2001_cbp_state.json, 2001_cbp_county.json
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

from utils.census_api import (
    fetch_census, save_json, census_api_to_dicts,
    FIPS_STATES, STATE_NAMES,
)

RAW_DIR = Path(__file__).resolve().parent.parent / "data" / "raw"
PROCESSED_DIR = Path(__file__).resolve().parent.parent / "data" / "processed"
YEAR = 2001


def scrape_cbp_state():
    """Fetch CBP 2001 state-level data for NAICS 7211."""
    print(f"\n[{YEAR}] Fetching CBP state-level data (NAICS 7211)...")

    url = f"https://api.census.gov/data/{YEAR}/cbp"
    params = {
        "get": "NAICS1997,GEO_TTL,ESTAB,EMP,PAYANN",
        "for": "state:*",
        "NAICS1997": "7211",
    }

    raw = fetch_census(url, params)
    if not raw:
        print("  NAICS 7211 not found, trying 721...")
        params["NAICS1997"] = "721"
        raw = fetch_census(url, params)

    if not raw:
        print(f"  ERROR: No CBP state data for {YEAR}")
        return None

    records = census_api_to_dicts(raw)
    print(f"  Got {len(records)} state records")

    states = []
    for rec in records:
        fips = rec.get("state", "")
        abbr = FIPS_STATES.get(fips, "")
        if not abbr:
            continue
        states.append({
            "year": YEAR,
            "state_fips": fips,
            "state_abbr": abbr,
            "state_name": STATE_NAMES.get(abbr, ""),
            "naics": rec.get("NAICS1997", ""),
            "establishments": int(rec.get("ESTAB", 0) or 0),
            "employees": int(rec.get("EMP", 0) or 0),
            "annual_payroll_1000": int(rec.get("PAYANN", 0) or 0),
            "source": "census_cbp",
        })

    states.sort(key=lambda x: x["state_abbr"])

    result = {
        "year": YEAR,
        "source": "Census Bureau CBP",
        "naics": "7211",
        "description": "Traveler Accommodation establishments by state",
        "record_count": len(states),
        "data": states,
    }

    save_json(result, RAW_DIR / f"{YEAR}_cbp_state.json")
    return result


def scrape_cbp_county():
    """Fetch CBP 2001 county-level data for NAICS 7211."""
    print(f"\n[{YEAR}] Fetching CBP county-level data (NAICS 7211)...")

    url = f"https://api.census.gov/data/{YEAR}/cbp"
    params = {
        "get": "NAICS1997,GEO_TTL,ESTAB,EMP,PAYANN",
        "for": "county:*",
        "in": "state:*",
        "NAICS1997": "7211",
    }

    raw = fetch_census(url, params)
    if not raw:
        print("  NAICS 7211 not found, trying 721...")
        params["NAICS1997"] = "721"
        raw = fetch_census(url, params)

    if not raw:
        print(f"  ERROR: No CBP county data for {YEAR}")
        return None

    records = census_api_to_dicts(raw)
    print(f"  Got {len(records)} county records")

    counties = []
    for rec in records:
        state_fips = rec.get("state", "")
        county_fips = rec.get("county", "")
        full_fips = f"{state_fips}{county_fips}"
        abbr = FIPS_STATES.get(state_fips, "")
        if not abbr:
            continue
        counties.append({
            "year": YEAR,
            "state_fips": state_fips,
            "county_fips": full_fips,
            "state_abbr": abbr,
            "county_name": rec.get("GEO_TTL", "").replace(f", {STATE_NAMES.get(abbr, '')}", ""),
            "naics": rec.get("NAICS1997", ""),
            "establishments": int(rec.get("ESTAB", 0) or 0),
            "employees": int(rec.get("EMP", 0) or 0),
            "annual_payroll_1000": int(rec.get("PAYANN", 0) or 0),
            "source": "census_cbp",
        })

    counties.sort(key=lambda x: x["county_fips"])

    result = {
        "year": YEAR,
        "source": "Census Bureau CBP",
        "naics": "7211",
        "description": "Traveler Accommodation establishments by county",
        "record_count": len(counties),
        "data": counties,
    }

    save_json(result, RAW_DIR / f"{YEAR}_cbp_county.json")
    return result


def process_data(state_data: dict, county_data: dict):
    """Process raw CBP data into frontend-ready format."""
    print(f"\n[{YEAR}] Processing data...")

    state_summaries = [
        {
            "year": YEAR,
            "state_abbr": s["state_abbr"],
            "state_name": s["state_name"],
            "property_count": s["establishments"],
            "employee_count": s["employees"],
            "source": "census_cbp",
        }
        for s in state_data.get("data", [])
    ]

    county_summaries = [
        {
            "year": YEAR,
            "state_abbr": c["state_abbr"],
            "county_fips": c["county_fips"],
            "county_name": c["county_name"],
            "property_count": c["establishments"],
            "employee_count": c["employees"],
            "source": "census_cbp",
        }
        for c in county_data.get("data", [])
    ]

    total_est = sum(s["establishments"] for s in state_data.get("data", []))
    total_emp = sum(s["employees"] for s in state_data.get("data", []))

    processed = {
        "year": YEAR,
        "source": "Census Bureau CBP",
        "national_summary": {
            "total_establishments": total_est,
            "total_employees": total_emp,
        },
        "states": state_summaries,
        "counties": county_summaries,
    }

    save_json(processed, PROCESSED_DIR / f"{YEAR}_summary.json")

    print(f"\n[{YEAR}] DONE:")
    print(f"  Total establishments: {total_est:,}")
    print(f"  Total employees: {total_emp:,}")
    print(f"  States: {len(state_summaries)}, Counties: {len(county_summaries)}")

    return processed


def main():
    print(f"{'='*60}")
    print(f"  YEAR {YEAR} SCRAPER — Census County Business Patterns")
    print(f"  NOTE: May reflect 9/11 impact on hospitality industry")
    print(f"{'='*60}")

    state_data = scrape_cbp_state()
    county_data = scrape_cbp_county()

    if state_data and county_data:
        process_data(state_data, county_data)
    else:
        print(f"\n[{YEAR}] FAILED")
        sys.exit(1)


if __name__ == "__main__":
    main()
