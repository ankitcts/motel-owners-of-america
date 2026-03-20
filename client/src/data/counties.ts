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

export const COUNTIES_BY_STATE: Record<string, CountySummary[]> = {
  FL: FLORIDA_COUNTIES,
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
