import type { CountySummary } from "@/types";

// Florida counties — only counties with actual property data
export const FLORIDA_COUNTIES: CountySummary[] = [
  { fips: "12086", name: "Miami-Dade", stateAbbr: "FL", slug: "miami-dade", propertyCount: 5, hotelCount: 3, motelCount: 2, ownerCount: 4 },
  { fips: "12095", name: "Orange", stateAbbr: "FL", slug: "orange", propertyCount: 3, hotelCount: 2, motelCount: 1, ownerCount: 3 },
  { fips: "12011", name: "Broward", stateAbbr: "FL", slug: "broward", propertyCount: 2, hotelCount: 1, motelCount: 1, ownerCount: 2 },
  { fips: "12057", name: "Hillsborough", stateAbbr: "FL", slug: "hillsborough", propertyCount: 2, hotelCount: 1, motelCount: 1, ownerCount: 2 },
];

// Texas counties — only counties with actual property data
export const TEXAS_COUNTIES: CountySummary[] = [
  { fips: "48201", name: "Harris", stateAbbr: "TX", slug: "harris", propertyCount: 5, hotelCount: 3, motelCount: 2, ownerCount: 3 },
  { fips: "48113", name: "Dallas", stateAbbr: "TX", slug: "dallas", propertyCount: 3, hotelCount: 2, motelCount: 1, ownerCount: 3 },
  { fips: "48029", name: "Bexar", stateAbbr: "TX", slug: "bexar", propertyCount: 2, hotelCount: 1, motelCount: 1, ownerCount: 2 },
  { fips: "48453", name: "Travis", stateAbbr: "TX", slug: "travis", propertyCount: 2, hotelCount: 1, motelCount: 1, ownerCount: 2 },
  { fips: "48439", name: "Tarrant", stateAbbr: "TX", slug: "tarrant", propertyCount: 2, hotelCount: 1, motelCount: 1, ownerCount: 2 },
  { fips: "48141", name: "El Paso", stateAbbr: "TX", slug: "el-paso", propertyCount: 1, hotelCount: 1, motelCount: 0, ownerCount: 1 },
  { fips: "48167", name: "Galveston", stateAbbr: "TX", slug: "galveston", propertyCount: 1, hotelCount: 0, motelCount: 1, ownerCount: 1 },
];

// California counties — only counties with actual property data
export const CALIFORNIA_COUNTIES: CountySummary[] = [
  { fips: "06037", name: "Los Angeles", stateAbbr: "CA", slug: "los-angeles", propertyCount: 3, hotelCount: 2, motelCount: 1, ownerCount: 3 },
  { fips: "06073", name: "San Diego", stateAbbr: "CA", slug: "san-diego", propertyCount: 2, hotelCount: 1, motelCount: 1, ownerCount: 2 },
  { fips: "06075", name: "San Francisco", stateAbbr: "CA", slug: "san-francisco", propertyCount: 1, hotelCount: 1, motelCount: 0, ownerCount: 1 },
  { fips: "06059", name: "Orange", stateAbbr: "CA", slug: "orange", propertyCount: 1, hotelCount: 0, motelCount: 1, ownerCount: 1 },
];

// New York counties — only counties with actual property data
export const NEW_YORK_COUNTIES: CountySummary[] = [
  { fips: "36061", name: "New York", stateAbbr: "NY", slug: "new-york", propertyCount: 3, hotelCount: 2, motelCount: 1, ownerCount: 2 },
  { fips: "36081", name: "Queens", stateAbbr: "NY", slug: "queens", propertyCount: 1, hotelCount: 1, motelCount: 0, ownerCount: 1 },
];

// Georgia counties — only counties with actual property data
export const GEORGIA_COUNTIES: CountySummary[] = [
  { fips: "13121", name: "Fulton", stateAbbr: "GA", slug: "fulton", propertyCount: 2, hotelCount: 1, motelCount: 1, ownerCount: 2 },
  { fips: "13051", name: "Chatham", stateAbbr: "GA", slug: "chatham", propertyCount: 1, hotelCount: 1, motelCount: 0, ownerCount: 1 },
];

// Nevada counties — only counties with actual property data
export const NEVADA_COUNTIES: CountySummary[] = [
  { fips: "32003", name: "Clark", stateAbbr: "NV", slug: "clark", propertyCount: 3, hotelCount: 2, motelCount: 1, ownerCount: 2 },
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
