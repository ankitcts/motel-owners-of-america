#!/usr/bin/env python3
"""
Scraper runner — execute per-year scrapers sequentially.

Usage:
  python run.py 2000          # Run single year
  python run.py 2000 2001     # Run specific years
  python run.py --all          # Run all available years
"""

import sys
import importlib
from pathlib import Path

SCRAPERS_DIR = Path(__file__).parent / "scrapers"

# Available year scrapers (add new years here as they're created)
AVAILABLE_YEARS = [2000, 2001]


def run_year(year: int):
    """Import and run a year-specific scraper."""
    module_name = f"scrapers.year_{year}"
    try:
        mod = importlib.import_module(module_name)
        mod.main()
    except ModuleNotFoundError:
        print(f"ERROR: No scraper found for year {year}")
        print(f"  Expected: scrapers/year_{year}.py")
        return False
    except Exception as e:
        print(f"ERROR running year {year}: {e}")
        return False
    return True


def main():
    if len(sys.argv) < 2:
        print("Usage: python run.py <year> [year2] ... | --all")
        print(f"Available years: {AVAILABLE_YEARS}")
        sys.exit(1)

    if sys.argv[1] == "--all":
        years = AVAILABLE_YEARS
    else:
        years = [int(y) for y in sys.argv[1:]]

    print(f"\nRunning scrapers for years: {years}\n")

    results = {}
    for year in years:
        success = run_year(year)
        results[year] = "OK" if success else "FAILED"
        print()

    print("\n" + "=" * 60)
    print("  SUMMARY")
    print("=" * 60)
    for year, status in results.items():
        icon = "✓" if status == "OK" else "✗"
        print(f"  {icon} {year}: {status}")


if __name__ == "__main__":
    main()
