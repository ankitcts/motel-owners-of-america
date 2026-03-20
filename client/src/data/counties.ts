import type { CountySummary } from "@/types";

// Florida counties as pilot data — other states will follow same pattern
export const FLORIDA_COUNTIES: CountySummary[] = [
  { fips: "12086", name: "Miami-Dade", stateAbbr: "FL", slug: "miami-dade", propertyCount: 487, hotelCount: 312, motelCount: 175, ownerCount: 342 },
  { fips: "12011", name: "Broward", stateAbbr: "FL", slug: "broward", propertyCount: 356, hotelCount: 218, motelCount: 138, ownerCount: 248 },
  { fips: "12099", name: "Palm Beach", stateAbbr: "FL", slug: "palm-beach", propertyCount: 298, hotelCount: 189, motelCount: 109, ownerCount: 208 },
  { fips: "12095", name: "Orange", stateAbbr: "FL", slug: "orange", propertyCount: 534, hotelCount: 389, motelCount: 145, ownerCount: 378 },
  { fips: "12057", name: "Hillsborough", stateAbbr: "FL", slug: "hillsborough", propertyCount: 234, hotelCount: 156, motelCount: 78, ownerCount: 167 },
  { fips: "12103", name: "Pinellas", stateAbbr: "FL", slug: "pinellas", propertyCount: 198, hotelCount: 134, motelCount: 64, ownerCount: 142 },
  { fips: "12031", name: "Duval", stateAbbr: "FL", slug: "duval", propertyCount: 178, hotelCount: 112, motelCount: 66, ownerCount: 128 },
  { fips: "12117", name: "Seminole", stateAbbr: "FL", slug: "seminole", propertyCount: 98, hotelCount: 67, motelCount: 31, ownerCount: 72 },
  { fips: "12097", name: "Osceola", stateAbbr: "FL", slug: "osceola", propertyCount: 267, hotelCount: 198, motelCount: 69, ownerCount: 189 },
  { fips: "12071", name: "Lee", stateAbbr: "FL", slug: "lee", propertyCount: 156, hotelCount: 98, motelCount: 58, ownerCount: 112 },
  { fips: "12021", name: "Collier", stateAbbr: "FL", slug: "collier", propertyCount: 134, hotelCount: 89, motelCount: 45, ownerCount: 98 },
  { fips: "12115", name: "Sarasota", stateAbbr: "FL", slug: "sarasota", propertyCount: 112, hotelCount: 72, motelCount: 40, ownerCount: 82 },
  { fips: "12105", name: "Polk", stateAbbr: "FL", slug: "polk", propertyCount: 89, hotelCount: 52, motelCount: 37, ownerCount: 64 },
  { fips: "12009", name: "Brevard", stateAbbr: "FL", slug: "brevard", propertyCount: 112, hotelCount: 67, motelCount: 45, ownerCount: 82 },
  { fips: "12127", name: "Volusia", stateAbbr: "FL", slug: "volusia", propertyCount: 145, hotelCount: 87, motelCount: 58, ownerCount: 102 },
  { fips: "12081", name: "Manatee", stateAbbr: "FL", slug: "manatee", propertyCount: 78, hotelCount: 48, motelCount: 30, ownerCount: 56 },
  { fips: "12069", name: "Lake", stateAbbr: "FL", slug: "lake", propertyCount: 67, hotelCount: 42, motelCount: 25, ownerCount: 48 },
  { fips: "12101", name: "Pasco", stateAbbr: "FL", slug: "pasco", propertyCount: 56, hotelCount: 34, motelCount: 22, ownerCount: 42 },
  { fips: "12001", name: "Alachua", stateAbbr: "FL", slug: "alachua", propertyCount: 67, hotelCount: 42, motelCount: 25, ownerCount: 48 },
  { fips: "12073", name: "Leon", stateAbbr: "FL", slug: "leon", propertyCount: 78, hotelCount: 48, motelCount: 30, ownerCount: 56 },
  { fips: "12033", name: "Escambia", stateAbbr: "FL", slug: "escambia", propertyCount: 89, hotelCount: 52, motelCount: 37, ownerCount: 64 },
  { fips: "12109", name: "St. Johns", stateAbbr: "FL", slug: "st-johns", propertyCount: 56, hotelCount: 36, motelCount: 20, ownerCount: 42 },
  { fips: "12083", name: "Marion", stateAbbr: "FL", slug: "marion", propertyCount: 45, hotelCount: 28, motelCount: 17, ownerCount: 34 },
  { fips: "12091", name: "Okaloosa", stateAbbr: "FL", slug: "okaloosa", propertyCount: 78, hotelCount: 48, motelCount: 30, ownerCount: 56 },
  { fips: "12113", name: "Santa Rosa", stateAbbr: "FL", slug: "santa-rosa", propertyCount: 45, hotelCount: 28, motelCount: 17, ownerCount: 34 },
];

// Texas counties (top 15)
export const TEXAS_COUNTIES: CountySummary[] = [
  { fips: "48201", name: "Harris", stateAbbr: "TX", slug: "harris", propertyCount: 534, hotelCount: 345, motelCount: 189, ownerCount: 378 },
  { fips: "48113", name: "Dallas", stateAbbr: "TX", slug: "dallas", propertyCount: 456, hotelCount: 289, motelCount: 167, ownerCount: 312 },
  { fips: "48029", name: "Bexar", stateAbbr: "TX", slug: "bexar", propertyCount: 312, hotelCount: 198, motelCount: 114, ownerCount: 218 },
  { fips: "48439", name: "Tarrant", stateAbbr: "TX", slug: "tarrant", propertyCount: 287, hotelCount: 178, motelCount: 109, ownerCount: 198 },
  { fips: "48453", name: "Travis", stateAbbr: "TX", slug: "travis", propertyCount: 267, hotelCount: 189, motelCount: 78, ownerCount: 187 },
  { fips: "48085", name: "Collin", stateAbbr: "TX", slug: "collin", propertyCount: 145, hotelCount: 98, motelCount: 47, ownerCount: 102 },
  { fips: "48121", name: "Denton", stateAbbr: "TX", slug: "denton", propertyCount: 112, hotelCount: 72, motelCount: 40, ownerCount: 82 },
  { fips: "48141", name: "El Paso", stateAbbr: "TX", slug: "el-paso", propertyCount: 178, hotelCount: 112, motelCount: 66, ownerCount: 128 },
  { fips: "48215", name: "Hidalgo", stateAbbr: "TX", slug: "hidalgo", propertyCount: 134, hotelCount: 78, motelCount: 56, ownerCount: 98 },
  { fips: "48157", name: "Fort Bend", stateAbbr: "TX", slug: "fort-bend", propertyCount: 89, hotelCount: 62, motelCount: 27, ownerCount: 64 },
  { fips: "48167", name: "Galveston", stateAbbr: "TX", slug: "galveston", propertyCount: 156, hotelCount: 98, motelCount: 58, ownerCount: 112 },
  { fips: "48355", name: "Nueces", stateAbbr: "TX", slug: "nueces", propertyCount: 98, hotelCount: 62, motelCount: 36, ownerCount: 72 },
  { fips: "48491", name: "Williamson", stateAbbr: "TX", slug: "williamson", propertyCount: 78, hotelCount: 52, motelCount: 26, ownerCount: 56 },
  { fips: "48339", name: "Montgomery", stateAbbr: "TX", slug: "montgomery", propertyCount: 67, hotelCount: 42, motelCount: 25, ownerCount: 48 },
  { fips: "48303", name: "Lubbock", stateAbbr: "TX", slug: "lubbock", propertyCount: 78, hotelCount: 48, motelCount: 30, ownerCount: 56 },
];

// California counties (top 15)
export const CALIFORNIA_COUNTIES: CountySummary[] = [
  { fips: "06037", name: "Los Angeles", stateAbbr: "CA", slug: "los-angeles", propertyCount: 876, hotelCount: 567, motelCount: 309, ownerCount: 598 },
  { fips: "06073", name: "San Diego", stateAbbr: "CA", slug: "san-diego", propertyCount: 456, hotelCount: 298, motelCount: 158, ownerCount: 312 },
  { fips: "06059", name: "Orange", stateAbbr: "CA", slug: "orange", propertyCount: 389, hotelCount: 256, motelCount: 133, ownerCount: 267 },
  { fips: "06075", name: "San Francisco", stateAbbr: "CA", slug: "san-francisco", propertyCount: 312, hotelCount: 234, motelCount: 78, ownerCount: 218 },
  { fips: "06065", name: "Riverside", stateAbbr: "CA", slug: "riverside", propertyCount: 234, hotelCount: 145, motelCount: 89, ownerCount: 167 },
  { fips: "06071", name: "San Bernardino", stateAbbr: "CA", slug: "san-bernardino", propertyCount: 198, hotelCount: 118, motelCount: 80, ownerCount: 142 },
  { fips: "06085", name: "Santa Clara", stateAbbr: "CA", slug: "santa-clara", propertyCount: 267, hotelCount: 189, motelCount: 78, ownerCount: 187 },
  { fips: "06001", name: "Alameda", stateAbbr: "CA", slug: "alameda", propertyCount: 178, hotelCount: 118, motelCount: 60, ownerCount: 128 },
  { fips: "06067", name: "Sacramento", stateAbbr: "CA", slug: "sacramento", propertyCount: 198, hotelCount: 128, motelCount: 70, ownerCount: 142 },
  { fips: "06081", name: "San Mateo", stateAbbr: "CA", slug: "san-mateo", propertyCount: 134, hotelCount: 98, motelCount: 36, ownerCount: 98 },
  { fips: "06029", name: "Kern", stateAbbr: "CA", slug: "kern", propertyCount: 89, hotelCount: 52, motelCount: 37, ownerCount: 64 },
  { fips: "06019", name: "Fresno", stateAbbr: "CA", slug: "fresno", propertyCount: 112, hotelCount: 67, motelCount: 45, ownerCount: 82 },
  { fips: "06111", name: "Ventura", stateAbbr: "CA", slug: "ventura", propertyCount: 98, hotelCount: 62, motelCount: 36, ownerCount: 72 },
  { fips: "06083", name: "Santa Barbara", stateAbbr: "CA", slug: "santa-barbara", propertyCount: 134, hotelCount: 89, motelCount: 45, ownerCount: 98 },
  { fips: "06053", name: "Monterey", stateAbbr: "CA", slug: "monterey", propertyCount: 112, hotelCount: 78, motelCount: 34, ownerCount: 82 },
];

// New York counties (top 12)
export const NEW_YORK_COUNTIES: CountySummary[] = [
  { fips: "36061", name: "New York", stateAbbr: "NY", slug: "new-york", propertyCount: 567, hotelCount: 423, motelCount: 144, ownerCount: 389 },
  { fips: "36047", name: "Kings", stateAbbr: "NY", slug: "kings", propertyCount: 234, hotelCount: 167, motelCount: 67, ownerCount: 167 },
  { fips: "36081", name: "Queens", stateAbbr: "NY", slug: "queens", propertyCount: 198, hotelCount: 134, motelCount: 64, ownerCount: 142 },
  { fips: "36103", name: "Suffolk", stateAbbr: "NY", slug: "suffolk", propertyCount: 156, hotelCount: 98, motelCount: 58, ownerCount: 112 },
  { fips: "36059", name: "Nassau", stateAbbr: "NY", slug: "nassau", propertyCount: 134, hotelCount: 89, motelCount: 45, ownerCount: 98 },
  { fips: "36119", name: "Westchester", stateAbbr: "NY", slug: "westchester", propertyCount: 112, hotelCount: 78, motelCount: 34, ownerCount: 82 },
  { fips: "36029", name: "Erie", stateAbbr: "NY", slug: "erie", propertyCount: 98, hotelCount: 62, motelCount: 36, ownerCount: 72 },
  { fips: "36055", name: "Monroe", stateAbbr: "NY", slug: "monroe", propertyCount: 89, hotelCount: 56, motelCount: 33, ownerCount: 64 },
  { fips: "36067", name: "Onondaga", stateAbbr: "NY", slug: "onondaga", propertyCount: 78, hotelCount: 48, motelCount: 30, ownerCount: 56 },
  { fips: "36001", name: "Albany", stateAbbr: "NY", slug: "albany", propertyCount: 89, hotelCount: 56, motelCount: 33, ownerCount: 64 },
  { fips: "36005", name: "Bronx", stateAbbr: "NY", slug: "bronx", propertyCount: 112, hotelCount: 87, motelCount: 25, ownerCount: 82 },
  { fips: "36085", name: "Richmond", stateAbbr: "NY", slug: "richmond", propertyCount: 45, hotelCount: 32, motelCount: 13, ownerCount: 34 },
];

// Georgia counties (top 10)
export const GEORGIA_COUNTIES: CountySummary[] = [
  { fips: "13121", name: "Fulton", stateAbbr: "GA", slug: "fulton", propertyCount: 234, hotelCount: 156, motelCount: 78, ownerCount: 167 },
  { fips: "13089", name: "DeKalb", stateAbbr: "GA", slug: "dekalb", propertyCount: 145, hotelCount: 89, motelCount: 56, ownerCount: 102 },
  { fips: "13067", name: "Cobb", stateAbbr: "GA", slug: "cobb", propertyCount: 134, hotelCount: 87, motelCount: 47, ownerCount: 98 },
  { fips: "13135", name: "Gwinnett", stateAbbr: "GA", slug: "gwinnett", propertyCount: 112, hotelCount: 72, motelCount: 40, ownerCount: 82 },
  { fips: "13051", name: "Chatham", stateAbbr: "GA", slug: "chatham", propertyCount: 98, hotelCount: 62, motelCount: 36, ownerCount: 72 },
  { fips: "13245", name: "Richmond", stateAbbr: "GA", slug: "richmond", propertyCount: 67, hotelCount: 42, motelCount: 25, ownerCount: 48 },
  { fips: "13063", name: "Clayton", stateAbbr: "GA", slug: "clayton", propertyCount: 56, hotelCount: 34, motelCount: 22, ownerCount: 42 },
  { fips: "13215", name: "Muscogee", stateAbbr: "GA", slug: "muscogee", propertyCount: 56, hotelCount: 34, motelCount: 22, ownerCount: 42 },
  { fips: "13021", name: "Bibb", stateAbbr: "GA", slug: "bibb", propertyCount: 45, hotelCount: 28, motelCount: 17, ownerCount: 34 },
  { fips: "13151", name: "Henry", stateAbbr: "GA", slug: "henry", propertyCount: 34, hotelCount: 22, motelCount: 12, ownerCount: 26 },
];

// Nevada counties
export const NEVADA_COUNTIES: CountySummary[] = [
  { fips: "32003", name: "Clark", stateAbbr: "NV", slug: "clark", propertyCount: 678, hotelCount: 423, motelCount: 255, ownerCount: 467 },
  { fips: "32031", name: "Washoe", stateAbbr: "NV", slug: "washoe", propertyCount: 112, hotelCount: 67, motelCount: 45, ownerCount: 82 },
  { fips: "32007", name: "Elko", stateAbbr: "NV", slug: "elko", propertyCount: 34, hotelCount: 18, motelCount: 16, ownerCount: 26 },
  { fips: "32019", name: "Lyon", stateAbbr: "NV", slug: "lyon", propertyCount: 18, hotelCount: 10, motelCount: 8, ownerCount: 14 },
  { fips: "32013", name: "Humboldt", stateAbbr: "NV", slug: "humboldt", propertyCount: 12, hotelCount: 6, motelCount: 6, ownerCount: 10 },
];

export const COUNTIES_BY_STATE: Record<string, CountySummary[]> = {
  FL: FLORIDA_COUNTIES,
  TX: TEXAS_COUNTIES,
  CA: CALIFORNIA_COUNTIES,
  NY: NEW_YORK_COUNTIES,
  GA: GEORGIA_COUNTIES,
  NV: NEVADA_COUNTIES,
};

export function getCountiesByState(stateAbbr: string): CountySummary[] {
  return COUNTIES_BY_STATE[stateAbbr] || [];
}

export function getCountyBySlug(
  stateAbbr: string,
  countySlug: string
): CountySummary | undefined {
  const counties = COUNTIES_BY_STATE[stateAbbr];
  return counties?.find((c) => c.slug === countySlug);
}
