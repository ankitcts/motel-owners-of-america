"""
Address and name normalization for deduplication.

Normalizes:
- Street abbreviations (St → Street, Ave → Avenue, etc.)
- Directional prefixes (N → North, etc.)
- Unit/suite variations (Ste → Suite, Apt → Apartment, etc.)
- Case, whitespace, punctuation
"""

import re
from typing import Optional

# Street suffix standardization (USPS standard → normalized)
STREET_SUFFIXES = {
    "st": "street", "str": "street",
    "ave": "avenue", "av": "avenue",
    "blvd": "boulevard", "boul": "boulevard",
    "dr": "drive", "drv": "drive",
    "rd": "road",
    "ln": "lane",
    "ct": "court",
    "cir": "circle", "crcl": "circle",
    "pl": "place",
    "ter": "terrace", "terr": "terrace",
    "pkwy": "parkway", "pky": "parkway",
    "hwy": "highway",
    "fwy": "freeway",
    "expy": "expressway", "exp": "expressway",
    "trl": "trail",
    "way": "way",
    "sq": "square",
    "pt": "point",
    "mt": "mount",
    "aly": "alley",
    "brg": "bridge",
    "crk": "creek",
    "xing": "crossing",
    "est": "estate",
    "ext": "extension",
    "ft": "fort",
    "grn": "green",
    "hts": "heights",
    "jct": "junction",
    "lk": "lake",
    "mdw": "meadow",
    "ml": "mill",
    "mnr": "manor",
    "pass": "pass",
    "plz": "plaza",
    "rte": "route",
    "spg": "spring",
    "sta": "station",
    "vlg": "village",
    "vw": "view",
}

# Directional standardization
DIRECTIONS = {
    "n": "north", "no": "north",
    "s": "south", "so": "south",
    "e": "east",
    "w": "west",
    "ne": "northeast",
    "nw": "northwest",
    "se": "southeast",
    "sw": "southwest",
}

# Unit type standardization
UNIT_TYPES = {
    "ste": "suite",
    "apt": "apartment",
    "rm": "room",
    "fl": "floor",
    "bldg": "building",
    "dept": "department",
    "ofc": "office",
    "ph": "penthouse",
    "unit": "unit",
    "lot": "lot",
    "spc": "space",
}


def normalize_address(address: str) -> str:
    """
    Normalize a street address for dedup comparison.
    '123 N Main St, Ste 200' → '123 north main street suite 200'
    """
    if not address:
        return ""

    # Lowercase and strip
    addr = address.lower().strip()

    # Remove common punctuation
    addr = addr.replace(",", " ").replace(".", " ").replace("#", " ")

    # Split into tokens
    tokens = addr.split()
    normalized = []

    for token in tokens:
        # Check directional
        if token in DIRECTIONS:
            normalized.append(DIRECTIONS[token])
        # Check street suffix
        elif token in STREET_SUFFIXES:
            normalized.append(STREET_SUFFIXES[token])
        # Check unit type
        elif token in UNIT_TYPES:
            normalized.append(UNIT_TYPES[token])
        else:
            normalized.append(token)

    # Rejoin and collapse whitespace
    result = " ".join(normalized)
    result = re.sub(r"\s+", " ", result).strip()

    return result


def normalize_city(city: str) -> str:
    """
    Normalize a city name.
    'St. Petersburg' → 'saint petersburg'
    'Ft. Lauderdale' → 'fort lauderdale'
    """
    if not city:
        return ""

    c = city.lower().strip()
    c = c.replace(".", "").replace(",", "")

    # Common city abbreviations
    replacements = {
        "st ": "saint ",
        "ft ": "fort ",
        "mt ": "mount ",
    }
    for old, new in replacements.items():
        if c.startswith(old):
            c = new + c[len(old):]

    return re.sub(r"\s+", " ", c).strip()


def normalize_name(name: str) -> str:
    """
    Normalize a business or person name for comparison.
    'PATEL HOSPITALITY, LLC' → 'patel hospitality llc'
    """
    if not name:
        return ""

    n = name.lower().strip()

    # Remove common suffixes/punctuation
    n = n.replace(",", " ").replace(".", " ").replace("'", "").replace('"', "")

    # Remove common business suffixes for comparison
    removals = ["inc", "incorporated", "corp", "corporation", "co", "company"]
    tokens = n.split()
    # Don't remove if it's the only word
    if len(tokens) > 1:
        tokens = [t for t in tokens if t not in removals]

    return re.sub(r"\s+", " ", " ".join(tokens)).strip()


def generate_slug(text: str) -> str:
    """Generate URL-safe slug from text."""
    slug = text.lower().strip()
    slug = re.sub(r"[^a-z0-9]+", "-", slug)
    slug = re.sub(r"-+", "-", slug)
    return slug.strip("-")


def make_address_key(address: str, city: str, state: str) -> str:
    """Create a unique key from address components for quick lookup."""
    return f"{normalize_address(address)}|{normalize_city(city)}|{state.upper()}"
