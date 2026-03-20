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
  { id: "o9", name: "Bhatt & Sons Lodging LLC", ownerType: "llc", registrationState: "TX", registrationNumber: "L20000112233", propertyCount: 22, statesPresent: ["TX", "OK", "AR", "LA"], slug: "bhatt-sons-lodging-llc" },
  { id: "o10", name: "Heartland Hospitality Corp", ownerType: "corporation", registrationState: "IL", registrationNumber: "C20000223344", propertyCount: 31, statesPresent: ["IL", "IN", "OH", "MI", "WI"], slug: "heartland-hospitality-corp" },
  { id: "o11", name: "Mehta Family Investments LLC", ownerType: "llc", registrationState: "CA", registrationNumber: "L19000334455", propertyCount: 14, statesPresent: ["CA", "NV", "AZ"], slug: "mehta-family-investments-llc" },
  { id: "o12", name: "James W. Cooper", ownerType: "individual", propertyCount: 4, statesPresent: ["NC", "SC"], slug: "james-w-cooper" },
  { id: "o13", name: "Lone Star Lodging Group LLC", ownerType: "llc", registrationState: "TX", registrationNumber: "L21000445566", propertyCount: 27, statesPresent: ["TX", "NM", "CO"], slug: "lone-star-lodging-group-llc" },
  { id: "o14", name: "Golden State Hotels Inc", ownerType: "corporation", registrationState: "CA", registrationNumber: "C18000556677", propertyCount: 45, statesPresent: ["CA", "OR", "WA", "NV", "AZ", "HI"], slug: "golden-state-hotels-inc" },
  { id: "o15", name: "Arun & Priya Joshi", ownerType: "individual", propertyCount: 7, statesPresent: ["NJ", "NY", "PA"], slug: "arun-priya-joshi" },
  { id: "o16", name: "Southern Comfort Hospitality LLC", ownerType: "llc", registrationState: "GA", registrationNumber: "L22000667788", propertyCount: 11, statesPresent: ["GA", "AL", "TN"], slug: "southern-comfort-hospitality-llc" },
  { id: "o17", name: "Pacific Coast Lodging Trust", ownerType: "trust", registrationState: "CA", propertyCount: 19, statesPresent: ["CA", "OR", "WA"], slug: "pacific-coast-lodging-trust" },
  { id: "o18", name: "Reddy Enterprises Corp", ownerType: "corporation", registrationState: "NJ", registrationNumber: "C21000778899", propertyCount: 16, statesPresent: ["NJ", "NY", "CT", "PA"], slug: "reddy-enterprises-corp" },
  { id: "o19", name: "Mountainview Hotels LLC", ownerType: "llc", registrationState: "CO", registrationNumber: "L20000889900", propertyCount: 8, statesPresent: ["CO", "UT", "WY"], slug: "mountainview-hotels-llc" },
  { id: "o20", name: "Anand K. Patel", ownerType: "individual", propertyCount: 5, statesPresent: ["GA", "SC"], slug: "anand-k-patel" },
  { id: "o21", name: "Dixie Hospitality Partners LLC", ownerType: "llc", registrationState: "TN", registrationNumber: "L19000990011", propertyCount: 13, statesPresent: ["TN", "KY", "MS", "AL"], slug: "dixie-hospitality-partners-llc" },
  { id: "o22", name: "Empire State Lodging Corp", ownerType: "corporation", registrationState: "NY", registrationNumber: "C20001001122", propertyCount: 38, statesPresent: ["NY", "NJ", "CT", "MA", "PA"], slug: "empire-state-lodging-corp" },
  { id: "o23", name: "Sanjay & Reena Gupta", ownerType: "individual", propertyCount: 6, statesPresent: ["TX", "LA"], slug: "sanjay-reena-gupta" },
  { id: "o24", name: "Evergreen Hospitality Trust", ownerType: "trust", registrationState: "WA", propertyCount: 10, statesPresent: ["WA", "OR", "ID"], slug: "evergreen-hospitality-trust" },
  { id: "o25", name: "Bayou Lodging LLC", ownerType: "llc", registrationState: "LA", registrationNumber: "L21001112233", propertyCount: 7, statesPresent: ["LA", "MS"], slug: "bayou-lodging-llc" },
  { id: "o26", name: "Great Lakes Hotel Group Inc", ownerType: "corporation", registrationState: "MI", registrationNumber: "C19001223344", propertyCount: 24, statesPresent: ["MI", "OH", "IN", "WI", "MN"], slug: "great-lakes-hotel-group-inc" },
  { id: "o27", name: "Naik Properties LLC", ownerType: "llc", registrationState: "NV", registrationNumber: "L20001334455", propertyCount: 9, statesPresent: ["NV", "CA", "AZ"], slug: "naik-properties-llc" },
  { id: "o28", name: "Linda M. Nguyen", ownerType: "individual", propertyCount: 3, statesPresent: ["CA"], slug: "linda-m-nguyen" },
  { id: "o29", name: "Rocky Mountain Inns LLC", ownerType: "llc", registrationState: "MT", registrationNumber: "L22001445566", propertyCount: 5, statesPresent: ["MT", "WY", "ID"], slug: "rocky-mountain-inns-llc" },
  { id: "o30", name: "Cornerstone Hospitality Corp", ownerType: "corporation", registrationState: "PA", registrationNumber: "C21001556677", propertyCount: 21, statesPresent: ["PA", "NJ", "DE", "MD"], slug: "cornerstone-hospitality-corp" },
  { id: "o31", name: "Amin Brothers Lodging LLC", ownerType: "llc", registrationState: "VA", registrationNumber: "L18001667788", propertyCount: 11, statesPresent: ["VA", "MD", "DC", "WV"], slug: "amin-brothers-lodging-llc" },
  { id: "o32", name: "Horizon Hotels & Resorts Inc", ownerType: "corporation", registrationState: "FL", registrationNumber: "C22001778899", propertyCount: 42, statesPresent: ["FL", "GA", "SC", "NC", "VA", "TX", "CA"], slug: "horizon-hotels-resorts-inc" },
  { id: "o33", name: "Deepak S. Sharma", ownerType: "individual", propertyCount: 8, statesPresent: ["IL", "IN", "WI"], slug: "deepak-s-sharma" },
  { id: "o34", name: "Palmetto Lodging Trust", ownerType: "trust", registrationState: "SC", propertyCount: 7, statesPresent: ["SC", "NC"], slug: "palmetto-lodging-trust" },
  { id: "o35", name: "Midwest Motor Hotels LLC", ownerType: "llc", registrationState: "MO", registrationNumber: "L21001889900", propertyCount: 16, statesPresent: ["MO", "KS", "NE", "IA"], slug: "midwest-motor-hotels-llc" },
  { id: "o36", name: "Chen & Li Hospitality Group Inc", ownerType: "corporation", registrationState: "CA", registrationNumber: "C20001990011", propertyCount: 13, statesPresent: ["CA", "NV"], slug: "chen-li-hospitality-group-inc" },
  { id: "o37", name: "Magnolia Hotels Partnership", ownerType: "partnership", registrationState: "MS", registrationNumber: "P19002001122", propertyCount: 5, statesPresent: ["MS", "AL", "LA"], slug: "magnolia-hotels-partnership" },
  { id: "o38", name: "Robert T. Anderson", ownerType: "individual", propertyCount: 2, statesPresent: ["OR"], slug: "robert-t-anderson" },
  { id: "o39", name: "Capital Region Lodging LLC", ownerType: "llc", registrationState: "NY", registrationNumber: "L22002112233", propertyCount: 9, statesPresent: ["NY", "CT", "MA"], slug: "capital-region-lodging-llc" },
  { id: "o40", name: "Sunshine State Hospitality Trust", ownerType: "trust", registrationState: "FL", propertyCount: 15, statesPresent: ["FL"], slug: "sunshine-state-hospitality-trust" },
  { id: "o41", name: "Prairie Wind Hotels LLC", ownerType: "llc", registrationState: "OK", registrationNumber: "L20002223344", propertyCount: 6, statesPresent: ["OK", "KS", "TX"], slug: "prairie-wind-hotels-llc" },
  { id: "o42", name: "Kim & Park Lodging Corp", ownerType: "corporation", registrationState: "VA", registrationNumber: "C21002334455", propertyCount: 10, statesPresent: ["VA", "MD", "NC"], slug: "kim-park-lodging-corp" },
  { id: "o43", name: "Pankaj R. Modi", ownerType: "individual", propertyCount: 4, statesPresent: ["NJ", "PA"], slug: "pankaj-r-modi" },
  { id: "o44", name: "Desert Sun Hospitality LLC", ownerType: "llc", registrationState: "AZ", registrationNumber: "L19002445566", propertyCount: 11, statesPresent: ["AZ", "NM", "NV"], slug: "desert-sun-hospitality-llc" },
  { id: "o45", name: "Tidewater Hotels Inc", ownerType: "corporation", registrationState: "VA", registrationNumber: "C20002556677", propertyCount: 8, statesPresent: ["VA", "NC", "SC"], slug: "tidewater-hotels-inc" },
  { id: "o46", name: "Nguyen Family Trust", ownerType: "trust", registrationState: "TX", propertyCount: 12, statesPresent: ["TX", "LA", "OK"], slug: "nguyen-family-trust" },
  { id: "o47", name: "Cascade Lodging Partners LLC", ownerType: "llc", registrationState: "OR", registrationNumber: "L21002667788", propertyCount: 7, statesPresent: ["OR", "WA"], slug: "cascade-lodging-partners-llc" },
  { id: "o48", name: "Susan M. Williams", ownerType: "individual", propertyCount: 3, statesPresent: ["TN", "KY"], slug: "susan-m-williams" },
  { id: "o49", name: "Garden State Motor Hotels LLC", ownerType: "llc", registrationState: "NJ", registrationNumber: "L22002778899", propertyCount: 14, statesPresent: ["NJ", "NY", "PA", "DE"], slug: "garden-state-motor-hotels-llc" },
  { id: "o50", name: "Crossroads Hospitality Corp", ownerType: "corporation", registrationState: "IN", registrationNumber: "C19002889900", propertyCount: 20, statesPresent: ["IN", "IL", "OH", "KY"], slug: "crossroads-hospitality-corp" },
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
