"""
Census Bureau API utilities.
Fetches data from:
- Census Bureau SUSB (Statistics of US Businesses)
- County Business Patterns (CBP)
- Economic Census

NAICS 72111 = Hotels (except Casino Hotels) and Motels
NAICS 721 = Accommodation (parent category)

API docs: https://www.census.gov/data/developers/data-sets.html
No API key required for basic access. Get a key at: https://api.census.gov/data/key_signup.html
"""

import httpx
import json
import time
from pathlib import Path
from typing import Optional

BASE_URL = "https://api.census.gov/data"

# FIPS state codes
FIPS_STATES = {
    "01": "AL", "02": "AK", "04": "AZ", "05": "AR", "06": "CA",
    "08": "CO", "09": "CT", "10": "DE", "11": "DC", "12": "FL",
    "13": "GA", "15": "HI", "16": "ID", "17": "IL", "18": "IN",
    "19": "IA", "20": "KS", "21": "KY", "22": "LA", "23": "ME",
    "24": "MD", "25": "MA", "26": "MI", "27": "MN", "28": "MS",
    "29": "MO", "30": "MT", "31": "NE", "32": "NV", "33": "NH",
    "34": "NJ", "35": "NM", "36": "NY", "37": "NC", "38": "ND",
    "39": "OH", "40": "OK", "41": "OR", "42": "PA", "44": "RI",
    "45": "SC", "46": "SD", "47": "TN", "48": "TX", "49": "UT",
    "50": "VT", "51": "VA", "53": "WA", "54": "WV", "55": "WI",
    "56": "WY",
}

STATE_NAMES = {
    "AL": "Alabama", "AK": "Alaska", "AZ": "Arizona", "AR": "Arkansas",
    "CA": "California", "CO": "Colorado", "CT": "Connecticut", "DE": "Delaware",
    "DC": "District of Columbia", "FL": "Florida", "GA": "Georgia", "HI": "Hawaii",
    "ID": "Idaho", "IL": "Illinois", "IN": "Indiana", "IA": "Iowa",
    "KS": "Kansas", "KY": "Kentucky", "LA": "Louisiana", "ME": "Maine",
    "MD": "Maryland", "MA": "Massachusetts", "MI": "Michigan", "MN": "Minnesota",
    "MS": "Mississippi", "MO": "Missouri", "MT": "Montana", "NE": "Nebraska",
    "NV": "Nevada", "NH": "New Hampshire", "NJ": "New Jersey", "NM": "New Mexico",
    "NY": "New York", "NC": "North Carolina", "ND": "North Dakota", "OH": "Ohio",
    "OK": "Oklahoma", "OR": "Oregon", "PA": "Pennsylvania", "RI": "Rhode Island",
    "SC": "South Carolina", "SD": "South Dakota", "TN": "Tennessee", "TX": "Texas",
    "UT": "Utah", "VT": "Vermont", "VA": "Virginia", "WA": "Washington",
    "WV": "West Virginia", "WI": "Wisconsin", "WY": "Wyoming",
}


def fetch_census(url: str, params: dict, retries: int = 3) -> Optional[list]:
    """Fetch data from Census API with retry logic."""
    for attempt in range(retries):
        try:
            resp = httpx.get(url, params=params, timeout=30.0)
            if resp.status_code == 200:
                return resp.json()
            elif resp.status_code == 204:
                print(f"  No data returned (204)")
                return None
            else:
                print(f"  HTTP {resp.status_code}: {resp.text[:200]}")
        except Exception as e:
            print(f"  Attempt {attempt + 1} failed: {e}")
        time.sleep(2 * (attempt + 1))
    return None


def save_json(data: dict, path: Path):
    """Save data as formatted JSON."""
    path.parent.mkdir(parents=True, exist_ok=True)
    with open(path, "w") as f:
        json.dump(data, f, indent=2)
    print(f"  Saved: {path} ({path.stat().st_size:,} bytes)")


def census_api_to_dicts(raw: list) -> list[dict]:
    """Convert Census API response (header row + data rows) to list of dicts."""
    if not raw or len(raw) < 2:
        return []
    headers = raw[0]
    return [dict(zip(headers, row)) for row in raw[1:]]
