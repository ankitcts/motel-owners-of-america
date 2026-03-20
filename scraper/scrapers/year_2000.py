"""
Year 2000 Scraper — Census County Business Patterns (CBP) + SUSB

Data sources:
- CBP 2000: https://api.census.gov/data/2000/cbp
  - Establishment counts by NAICS code at state and county level
  - Variables: ESTAB (establishments), EMP (employment), PAYANN (annual payroll)
  - NAICS 7211 = Traveler accommodation (closest to hotels/motels in 2000 NAICS)

- SUSB 1998 (closest to 2000):
  - https://api.census.gov/data/1998/susb
  - Business counts by enterprise size and NAICS

Note: Year 2000 uses NAICS 1997 codes. 7211 = Traveler accommodation.
The more specific 72111 (Hotels/Motels) wasn't available until NAICS 2002.

Output: scraper/data/raw/2000_cbp_state.json, 2000_cbp_county.json
"""

import sys
from pathlib import Path

# Add parent dir to path so we can import utils
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

from utils.census_api import (
    fetch_census, save_json, census_api_to_dicts,
    FIPS_STATES, STATE_NAMES,
)

RAW_DIR = Path(__file__).resolve().parent.parent / "data" / "raw"
PROCESSED_DIR = Path(__file__).resolve().parent.parent / "data" / "processed"
YEAR = 2000


def scrape_cbp_state():
    """
    Fetch CBP 2000 state-level data for NAICS 7211 (Traveler Accommodation).
    Returns establishment counts per state.
    """
    print(f"\n[{YEAR}] Fetching CBP state-level data (NAICS 7211)...")

    url = f"https://api.census.gov/data/{YEAR}/cbp"
    params = {
        "get": "NAICS1997,GEO_TTL,ESTAB,EMP,PAYANN",
        "for": "state:*",
        "NAICS1997": "7211",
    }

    raw = fetch_census(url, params)
    if not raw:
        # Fallback: try NAICS 721 (broader accommodation)
        print("  NAICS 7211 not found, trying 721 (Accommodation)...")
        params["NAICS1997"] = "721"
        raw = fetch_census(url, params)

    if not raw:
        print(f"  ERROR: No CBP state data for {YEAR}")
        return None

    records = census_api_to_dicts(raw)
    print(f"  Got {len(records)} state records")

    # Transform to our format
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
    """
    Fetch CBP 2000 county-level data for NAICS 7211.
    Returns establishment counts per county.
    """
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
    """
    Process raw CBP data into the format our frontend needs.
    Output: processed/2000_summary.json
    """
    print(f"\n[{YEAR}] Processing data...")

    # State summaries
    state_summaries = []
    for s in state_data.get("data", []):
        state_summaries.append({
            "year": YEAR,
            "state_abbr": s["state_abbr"],
            "state_name": s["state_name"],
            "property_count": s["establishments"],
            "employee_count": s["employees"],
            "source": "census_cbp",
        })

    # County summaries
    county_summaries = []
    for c in county_data.get("data", []):
        county_summaries.append({
            "year": YEAR,
            "state_abbr": c["state_abbr"],
            "county_fips": c["county_fips"],
            "county_name": c["county_name"],
            "property_count": c["establishments"],
            "employee_count": c["employees"],
            "source": "census_cbp",
        })

    # National total
    total_establishments = sum(s["establishments"] for s in state_data.get("data", []))
    total_employees = sum(s["employees"] for s in state_data.get("data", []))

    processed = {
        "year": YEAR,
        "source": "Census Bureau CBP",
        "national_summary": {
            "total_establishments": total_establishments,
            "total_employees": total_employees,
        },
        "states": state_summaries,
        "counties": county_summaries,
    }

    save_json(processed, PROCESSED_DIR / f"{YEAR}_summary.json")

    print(f"\n[{YEAR}] DONE:")
    print(f"  Total establishments: {total_establishments:,}")
    print(f"  Total employees: {total_employees:,}")
    print(f"  States with data: {len(state_summaries)}")
    print(f"  Counties with data: {len(county_summaries)}")

    return processed


def main():
    print(f"{'='*60}")
    print(f"  YEAR {YEAR} SCRAPER — Census County Business Patterns")
    print(f"{'='*60}")

    state_data = scrape_cbp_state()
    county_data = scrape_cbp_county()

    if state_data and county_data:
        process_data(state_data, county_data)
    else:
        print(f"\n[{YEAR}] FAILED: Could not fetch required data")
        sys.exit(1)


if __name__ == "__main__":
    main()
