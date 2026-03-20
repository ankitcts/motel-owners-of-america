import type { Property, Owner } from "@/types";

export const MOCK_OWNERS: Owner[] = [
  { id: "o1", name: "Patel Hospitality LLC", ownerType: "llc", registrationState: "FL", registrationNumber: "L21000123456", propertyCount: 12, statesPresent: ["FL", "GA", "SC"], slug: "patel-hospitality-llc" },
  { id: "o2", name: "Sunshine Hotels Inc", ownerType: "corporation", registrationState: "FL", registrationNumber: "P21000234567", propertyCount: 8, statesPresent: ["FL"], slug: "sunshine-hotels-inc" },
  { id: "o3", name: "Rajesh K. Shah", ownerType: "individual", propertyCount: 3, statesPresent: ["FL"], slug: "rajesh-k-shah" },
  { id: "o4", name: "Atlantic Lodging Partners LLC", ownerType: "llc", registrationState: "FL", registrationNumber: "L22000345678", propertyCount: 15, statesPresent: ["FL", "GA", "NC", "VA"], slug: "atlantic-lodging-partners-llc" },
  { id: "o5", name: "Desai Family Trust", ownerType: "trust", registrationState: "FL", propertyCount: 6, statesPresent: ["FL", "TX"], slug: "desai-family-trust" },
  { id: "o6", name: "Gulf Coast Hospitality Group LLC", ownerType: "llc", registrationState: "FL", registrationNumber: "L20000456789", propertyCount: 9, statesPresent: ["FL", "AL", "MS"], slug: "gulf-coast-hospitality-group-llc" },
  { id: "o7", name: "Maria L. Rodriguez", ownerType: "individual", propertyCount: 2, statesPresent: ["FL"], slug: "maria-l-rodriguez" },
  { id: "o8", name: "Trivedi Holdings Corp", ownerType: "corporation", registrationState: "GA", registrationNumber: "C19000567890", propertyCount: 18, statesPresent: ["FL", "GA", "TN", "SC", "NC"], slug: "trivedi-holdings-corp" },
];

export const MOCK_PROPERTIES: Property[] = [
  // Miami-Dade County
  { id: "p1", name: "Comfort Inn Miami Airport", propertyType: "hotel", address: "3901 NW 22nd St", city: "Miami", countyFips: "12086", countyName: "Miami-Dade", stateAbbr: "FL", stateName: "Florida", zip: "33142", location: { type: "Point", coordinates: [-80.2478, 25.7982] }, roomsCount: 124, yearBuilt: 1998, ownerIds: ["o1"], slug: "comfort-inn-miami-airport" },
  { id: "p2", name: "Ocean View Motel", propertyType: "motel", address: "7400 Ocean Terrace", city: "Miami Beach", countyFips: "12086", countyName: "Miami-Dade", stateAbbr: "FL", stateName: "Florida", zip: "33141", location: { type: "Point", coordinates: [-80.1248, 25.8527] }, roomsCount: 42, yearBuilt: 1975, ownerIds: ["o3"], slug: "ocean-view-motel-miami-beach" },
  { id: "p3", name: "Holiday Inn Express Miami", propertyType: "hotel", address: "1550 Brickell Ave", city: "Miami", countyFips: "12086", countyName: "Miami-Dade", stateAbbr: "FL", stateName: "Florida", zip: "33129", location: { type: "Point", coordinates: [-80.1917, 25.7575] }, roomsCount: 186, yearBuilt: 2005, ownerIds: ["o4"], slug: "holiday-inn-express-miami" },
  { id: "p4", name: "Palm Court Motor Lodge", propertyType: "motel", address: "8100 Biscayne Blvd", city: "Miami", countyFips: "12086", countyName: "Miami-Dade", stateAbbr: "FL", stateName: "Florida", zip: "33138", location: { type: "Point", coordinates: [-80.1862, 25.8465] }, roomsCount: 36, yearBuilt: 1968, ownerIds: ["o7"], slug: "palm-court-motor-lodge-miami" },
  { id: "p5", name: "Best Western Plus Miami Intl", propertyType: "hotel", address: "2601 NW Le Jeune Rd", city: "Miami", countyFips: "12086", countyName: "Miami-Dade", stateAbbr: "FL", stateName: "Florida", zip: "33142", location: { type: "Point", coordinates: [-80.2311, 25.7925] }, roomsCount: 98, yearBuilt: 2001, ownerIds: ["o2"], slug: "best-western-plus-miami-intl" },
  // Orange County (Orlando)
  { id: "p6", name: "Quality Inn International Drive", propertyType: "hotel", address: "7600 International Dr", city: "Orlando", countyFips: "12095", countyName: "Orange", stateAbbr: "FL", stateName: "Florida", zip: "32819", location: { type: "Point", coordinates: [-81.4701, 28.4504] }, roomsCount: 210, yearBuilt: 2002, ownerIds: ["o1"], slug: "quality-inn-international-drive" },
  { id: "p7", name: "Budget Lodge Orlando", propertyType: "motel", address: "2323 McCoy Rd", city: "Orlando", countyFips: "12095", countyName: "Orange", stateAbbr: "FL", stateName: "Florida", zip: "32809", location: { type: "Point", coordinates: [-81.3209, 28.4293] }, roomsCount: 48, yearBuilt: 1985, ownerIds: ["o5"], slug: "budget-lodge-orlando" },
  { id: "p8", name: "Rosen Inn at Pointe Orlando", propertyType: "hotel", address: "9000 International Dr", city: "Orlando", countyFips: "12095", countyName: "Orange", stateAbbr: "FL", stateName: "Florida", zip: "32819", location: { type: "Point", coordinates: [-81.4693, 28.4365] }, roomsCount: 315, yearBuilt: 1998, ownerIds: ["o8"], slug: "rosen-inn-pointe-orlando" },
  // Broward County
  { id: "p9", name: "Hampton Inn Ft Lauderdale Airport", propertyType: "hotel", address: "2301 SW 12th Ave", city: "Fort Lauderdale", countyFips: "12011", countyName: "Broward", stateAbbr: "FL", stateName: "Florida", zip: "33315", location: { type: "Point", coordinates: [-80.1589, 26.0905] }, roomsCount: 148, yearBuilt: 2006, ownerIds: ["o4"], slug: "hampton-inn-ft-lauderdale-airport" },
  { id: "p10", name: "Sea Club Resort Motel", propertyType: "motel", address: "619 N Fort Lauderdale Beach Blvd", city: "Fort Lauderdale", countyFips: "12011", countyName: "Broward", stateAbbr: "FL", stateName: "Florida", zip: "33304", location: { type: "Point", coordinates: [-80.1036, 26.1265] }, roomsCount: 56, yearBuilt: 1972, ownerIds: ["o6"], slug: "sea-club-resort-motel-ft-lauderdale" },
  // Hillsborough County (Tampa)
  { id: "p11", name: "La Quinta Inn Tampa Bay", propertyType: "hotel", address: "4811 Memorial Hwy", city: "Tampa", countyFips: "12057", countyName: "Hillsborough", stateAbbr: "FL", stateName: "Florida", zip: "33634", location: { type: "Point", coordinates: [-82.5328, 28.0002] }, roomsCount: 132, yearBuilt: 1999, ownerIds: ["o2"], slug: "la-quinta-inn-tampa-bay" },
  { id: "p12", name: "Ybor City Motor Inn", propertyType: "motel", address: "1515 E 7th Ave", city: "Tampa", countyFips: "12057", countyName: "Hillsborough", stateAbbr: "FL", stateName: "Florida", zip: "33605", location: { type: "Point", coordinates: [-82.4372, 27.9617] }, roomsCount: 28, yearBuilt: 1962, ownerIds: ["o3"], slug: "ybor-city-motor-inn-tampa" },
];

export function getPropertiesByCounty(countyFips: string): Property[] {
  return MOCK_PROPERTIES.filter((p) => p.countyFips === countyFips);
}

export function getPropertiesByState(stateAbbr: string): Property[] {
  return MOCK_PROPERTIES.filter((p) => p.stateAbbr === stateAbbr);
}

export function getPropertyBySlug(slug: string): Property | undefined {
  return MOCK_PROPERTIES.find((p) => p.slug === slug);
}

export function getOwnerById(id: string): Owner | undefined {
  return MOCK_OWNERS.find((o) => o.id === id);
}

export function getOwnerBySlug(slug: string): Owner | undefined {
  return MOCK_OWNERS.find((o) => o.slug === slug);
}

export function getOwnerProperties(ownerId: string): Property[] {
  return MOCK_PROPERTIES.filter((p) => p.ownerIds.includes(ownerId));
}

export function searchOwners(query: string): Owner[] {
  const q = query.toLowerCase();
  return MOCK_OWNERS.filter((o) => o.name.toLowerCase().includes(q));
}
