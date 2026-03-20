import type { Property, Owner } from "@/types";

export const MOCK_OWNERS: Owner[] = [
  { id: "o1", name: "Patel Hospitality LLC", ownerType: "llc", citizenship: "indian_american", registrationState: "FL", registrationNumber: "L21000123456", propertyCount: 12, statesPresent: ["FL", "GA", "SC"], slug: "patel-hospitality-llc" },
  { id: "o2", name: "Sunshine Hotels Inc", ownerType: "corporation", citizenship: "us_citizen", registrationState: "FL", registrationNumber: "P21000234567", propertyCount: 8, statesPresent: ["FL"], slug: "sunshine-hotels-inc" },
  { id: "o3", name: "Rajesh K. Shah", ownerType: "individual", citizenship: "indian_american", propertyCount: 3, statesPresent: ["FL"], slug: "rajesh-k-shah" },
  { id: "o4", name: "Atlantic Lodging Partners LLC", ownerType: "llc", citizenship: "indian_american", registrationState: "FL", registrationNumber: "L22000345678", propertyCount: 15, statesPresent: ["FL", "GA", "NC", "VA"], slug: "atlantic-lodging-partners-llc" },
  { id: "o5", name: "Desai Family Trust", ownerType: "trust", citizenship: "indian_american", registrationState: "FL", propertyCount: 6, statesPresent: ["FL", "TX"], slug: "desai-family-trust" },
  { id: "o6", name: "Gulf Coast Hospitality Group LLC", ownerType: "llc", citizenship: "us_citizen", registrationState: "FL", registrationNumber: "L20000456789", propertyCount: 9, statesPresent: ["FL", "AL", "MS"], slug: "gulf-coast-hospitality-group-llc" },
  { id: "o7", name: "Maria L. Rodriguez", ownerType: "individual", citizenship: "hispanic_american", propertyCount: 2, statesPresent: ["FL"], slug: "maria-l-rodriguez" },
  { id: "o8", name: "Trivedi Holdings Corp", ownerType: "corporation", citizenship: "indian_american", registrationState: "GA", registrationNumber: "C19000567890", propertyCount: 18, statesPresent: ["FL", "GA", "TN", "SC", "NC"], slug: "trivedi-holdings-corp" },
  { id: "o9", name: "Bhatt & Sons Lodging LLC", ownerType: "llc", citizenship: "indian_american", registrationState: "TX", registrationNumber: "L20000112233", propertyCount: 22, statesPresent: ["TX", "OK", "AR", "LA"], slug: "bhatt-sons-lodging-llc" },
  { id: "o10", name: "Heartland Hospitality Corp", ownerType: "corporation", citizenship: "us_citizen", registrationState: "IL", registrationNumber: "C20000223344", propertyCount: 31, statesPresent: ["IL", "IN", "OH", "MI", "WI"], slug: "heartland-hospitality-corp" },
  { id: "o11", name: "Mehta Family Investments LLC", ownerType: "llc", citizenship: "indian_american", registrationState: "CA", registrationNumber: "L19000334455", propertyCount: 14, statesPresent: ["CA", "NV", "AZ"], slug: "mehta-family-investments-llc" },
  { id: "o12", name: "James W. Cooper", ownerType: "individual", citizenship: "us_citizen", propertyCount: 4, statesPresent: ["NC", "SC"], slug: "james-w-cooper" },
  { id: "o13", name: "Lone Star Lodging Group LLC", ownerType: "llc", citizenship: "us_citizen", registrationState: "TX", registrationNumber: "L21000445566", propertyCount: 27, statesPresent: ["TX", "NM", "CO"], slug: "lone-star-lodging-group-llc" },
  { id: "o14", name: "Golden State Hotels Inc", ownerType: "corporation", citizenship: "chinese_american", registrationState: "CA", registrationNumber: "C18000556677", propertyCount: 45, statesPresent: ["CA", "OR", "WA", "NV", "AZ", "HI"], slug: "golden-state-hotels-inc" },
  { id: "o15", name: "Arun & Priya Joshi", ownerType: "individual", citizenship: "indian_american", propertyCount: 7, statesPresent: ["NJ", "NY", "PA"], slug: "arun-priya-joshi" },
  { id: "o16", name: "Southern Comfort Hospitality LLC", ownerType: "llc", citizenship: "us_citizen", registrationState: "GA", registrationNumber: "L22000667788", propertyCount: 11, statesPresent: ["GA", "AL", "TN"], slug: "southern-comfort-hospitality-llc" },
  { id: "o17", name: "Pacific Coast Lodging Trust", ownerType: "trust", citizenship: "us_citizen", registrationState: "CA", propertyCount: 19, statesPresent: ["CA", "OR", "WA"], slug: "pacific-coast-lodging-trust" },
  { id: "o18", name: "Reddy Enterprises Corp", ownerType: "corporation", citizenship: "indian_american", registrationState: "NJ", registrationNumber: "C21000778899", propertyCount: 16, statesPresent: ["NJ", "NY", "CT", "PA"], slug: "reddy-enterprises-corp" },
  { id: "o19", name: "Mountainview Hotels LLC", ownerType: "llc", citizenship: "european_american", registrationState: "CO", registrationNumber: "L20000889900", propertyCount: 8, statesPresent: ["CO", "UT", "WY"], slug: "mountainview-hotels-llc" },
  { id: "o20", name: "Anand K. Patel", ownerType: "individual", citizenship: "indian_american", propertyCount: 5, statesPresent: ["GA", "SC"], slug: "anand-k-patel" },
  { id: "o21", name: "Dixie Hospitality Partners LLC", ownerType: "llc", citizenship: "us_citizen", registrationState: "TN", registrationNumber: "L19000990011", propertyCount: 13, statesPresent: ["TN", "KY", "MS", "AL"], slug: "dixie-hospitality-partners-llc" },
  { id: "o22", name: "Empire State Lodging Corp", ownerType: "corporation", citizenship: "us_citizen", registrationState: "NY", registrationNumber: "C20001001122", propertyCount: 38, statesPresent: ["NY", "NJ", "CT", "MA", "PA"], slug: "empire-state-lodging-corp" },
  { id: "o23", name: "Sanjay & Reena Gupta", ownerType: "individual", citizenship: "indian_american", propertyCount: 6, statesPresent: ["TX", "LA"], slug: "sanjay-reena-gupta" },
  { id: "o24", name: "Evergreen Hospitality Trust", ownerType: "trust", citizenship: "us_citizen", registrationState: "WA", propertyCount: 10, statesPresent: ["WA", "OR", "ID"], slug: "evergreen-hospitality-trust" },
  { id: "o25", name: "Bayou Lodging LLC", ownerType: "llc", citizenship: "african_american", registrationState: "LA", registrationNumber: "L21001112233", propertyCount: 7, statesPresent: ["LA", "MS"], slug: "bayou-lodging-llc" },
  { id: "o26", name: "Great Lakes Hotel Group Inc", ownerType: "corporation", citizenship: "european_american", registrationState: "MI", registrationNumber: "C19001223344", propertyCount: 24, statesPresent: ["MI", "OH", "IN", "WI", "MN"], slug: "great-lakes-hotel-group-inc" },
  { id: "o27", name: "Naik Properties LLC", ownerType: "llc", citizenship: "indian_american", registrationState: "NV", registrationNumber: "L20001334455", propertyCount: 9, statesPresent: ["NV", "CA", "AZ"], slug: "naik-properties-llc" },
  { id: "o28", name: "Linda M. Nguyen", ownerType: "individual", citizenship: "vietnamese_american", propertyCount: 3, statesPresent: ["CA"], slug: "linda-m-nguyen" },
  { id: "o29", name: "Rocky Mountain Inns LLC", ownerType: "llc", citizenship: "us_citizen", registrationState: "MT", registrationNumber: "L22001445566", propertyCount: 5, statesPresent: ["MT", "WY", "ID"], slug: "rocky-mountain-inns-llc" },
  { id: "o30", name: "Cornerstone Hospitality Corp", ownerType: "corporation", citizenship: "us_citizen", registrationState: "PA", registrationNumber: "C21001556677", propertyCount: 21, statesPresent: ["PA", "NJ", "DE", "MD"], slug: "cornerstone-hospitality-corp" },
  { id: "o31", name: "Amin Brothers Lodging LLC", ownerType: "llc", citizenship: "middle_eastern_american", registrationState: "VA", registrationNumber: "L18001667788", propertyCount: 11, statesPresent: ["VA", "MD", "DC", "WV"], slug: "amin-brothers-lodging-llc" },
  { id: "o32", name: "Horizon Hotels & Resorts Inc", ownerType: "corporation", citizenship: "us_citizen", registrationState: "FL", registrationNumber: "C22001778899", propertyCount: 42, statesPresent: ["FL", "GA", "SC", "NC", "VA", "TX", "CA"], slug: "horizon-hotels-resorts-inc" },
  { id: "o33", name: "Deepak S. Sharma", ownerType: "individual", citizenship: "indian_american", propertyCount: 8, statesPresent: ["IL", "IN", "WI"], slug: "deepak-s-sharma" },
  { id: "o34", name: "Palmetto Lodging Trust", ownerType: "trust", citizenship: "us_citizen", registrationState: "SC", propertyCount: 7, statesPresent: ["SC", "NC"], slug: "palmetto-lodging-trust" },
  { id: "o35", name: "Midwest Motor Hotels LLC", ownerType: "llc", citizenship: "us_citizen", registrationState: "MO", registrationNumber: "L21001889900", propertyCount: 16, statesPresent: ["MO", "KS", "NE", "IA"], slug: "midwest-motor-hotels-llc" },
  { id: "o36", name: "Chen & Li Hospitality Group Inc", ownerType: "corporation", citizenship: "chinese_american", registrationState: "CA", registrationNumber: "C20001990011", propertyCount: 13, statesPresent: ["CA", "NV"], slug: "chen-li-hospitality-group-inc" },
  { id: "o37", name: "Magnolia Hotels Partnership", ownerType: "partnership", citizenship: "african_american", registrationState: "MS", registrationNumber: "P19002001122", propertyCount: 5, statesPresent: ["MS", "AL", "LA"], slug: "magnolia-hotels-partnership" },
  { id: "o38", name: "Robert T. Anderson", ownerType: "individual", citizenship: "european_american", propertyCount: 2, statesPresent: ["OR"], slug: "robert-t-anderson" },
  { id: "o39", name: "Capital Region Lodging LLC", ownerType: "llc", citizenship: "us_citizen", registrationState: "NY", registrationNumber: "L22002112233", propertyCount: 9, statesPresent: ["NY", "CT", "MA"], slug: "capital-region-lodging-llc" },
  { id: "o40", name: "Sunshine State Hospitality Trust", ownerType: "trust", citizenship: "indian_american", registrationState: "FL", propertyCount: 15, statesPresent: ["FL"], slug: "sunshine-state-hospitality-trust" },
  { id: "o41", name: "Prairie Wind Hotels LLC", ownerType: "llc", citizenship: "us_citizen", registrationState: "OK", registrationNumber: "L20002223344", propertyCount: 6, statesPresent: ["OK", "KS", "TX"], slug: "prairie-wind-hotels-llc" },
  { id: "o42", name: "Kim & Park Lodging Corp", ownerType: "corporation", citizenship: "korean_american", registrationState: "VA", registrationNumber: "C21002334455", propertyCount: 10, statesPresent: ["VA", "MD", "NC"], slug: "kim-park-lodging-corp" },
  { id: "o43", name: "Pankaj R. Modi", ownerType: "individual", citizenship: "indian_american", propertyCount: 4, statesPresent: ["NJ", "PA"], slug: "pankaj-r-modi" },
  { id: "o44", name: "Desert Sun Hospitality LLC", ownerType: "llc", citizenship: "middle_eastern_american", registrationState: "AZ", registrationNumber: "L19002445566", propertyCount: 11, statesPresent: ["AZ", "NM", "NV"], slug: "desert-sun-hospitality-llc" },
  { id: "o45", name: "Tidewater Hotels Inc", ownerType: "corporation", citizenship: "us_citizen", registrationState: "VA", registrationNumber: "C20002556677", propertyCount: 8, statesPresent: ["VA", "NC", "SC"], slug: "tidewater-hotels-inc" },
  { id: "o46", name: "Nguyen Family Trust", ownerType: "trust", citizenship: "vietnamese_american", registrationState: "TX", propertyCount: 12, statesPresent: ["TX", "LA", "OK"], slug: "nguyen-family-trust" },
  { id: "o47", name: "Cascade Lodging Partners LLC", ownerType: "llc", citizenship: "us_citizen", registrationState: "OR", registrationNumber: "L21002667788", propertyCount: 7, statesPresent: ["OR", "WA"], slug: "cascade-lodging-partners-llc" },
  { id: "o48", name: "Susan M. Williams", ownerType: "individual", citizenship: "us_citizen", propertyCount: 3, statesPresent: ["TN", "KY"], slug: "susan-m-williams" },
  { id: "o49", name: "Garden State Motor Hotels LLC", ownerType: "llc", citizenship: "indian_american", registrationState: "NJ", registrationNumber: "L22002778899", propertyCount: 14, statesPresent: ["NJ", "NY", "PA", "DE"], slug: "garden-state-motor-hotels-llc" },
  { id: "o50", name: "Crossroads Hospitality Corp", ownerType: "corporation", citizenship: "us_citizen", registrationState: "IN", registrationNumber: "C19002889900", propertyCount: 20, statesPresent: ["IN", "IL", "OH", "KY"], slug: "crossroads-hospitality-corp" },
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

  // === TEXAS ===
  // Harris County (Houston)
  { id: "p13", name: "Marriott Houston Hobby Airport", propertyType: "hotel", address: "9100 Gulf Fwy", city: "Houston", countyFips: "48201", countyName: "Harris", stateAbbr: "TX", stateName: "Texas", zip: "77017", location: { type: "Point", coordinates: [-95.2817, 29.6466] }, roomsCount: 292, yearBuilt: 2008, ownerIds: ["o9"], slug: "marriott-houston-hobby-airport" },
  { id: "p14", name: "Budget Inn Houston", propertyType: "motel", address: "6712 Southwest Fwy", city: "Houston", countyFips: "48201", countyName: "Harris", stateAbbr: "TX", stateName: "Texas", zip: "77074", location: { type: "Point", coordinates: [-95.4983, 29.7052] }, roomsCount: 44, yearBuilt: 1978, ownerIds: ["o9"], slug: "budget-inn-houston" },
  { id: "p15", name: "La Quinta Inn Houston Galleria", propertyType: "hotel", address: "1625 West Loop S", city: "Houston", countyFips: "48201", countyName: "Harris", stateAbbr: "TX", stateName: "Texas", zip: "77027", location: { type: "Point", coordinates: [-95.4614, 29.7410] }, roomsCount: 176, yearBuilt: 2001, ownerIds: ["o13"], slug: "la-quinta-inn-houston-galleria" },
  { id: "p16", name: "Texas Star Motor Lodge", propertyType: "motel", address: "8500 Airport Blvd", city: "Houston", countyFips: "48201", countyName: "Harris", stateAbbr: "TX", stateName: "Texas", zip: "77061", location: { type: "Point", coordinates: [-95.2943, 29.6571] }, roomsCount: 38, yearBuilt: 1972, ownerIds: ["o23"], slug: "texas-star-motor-lodge-houston" },
  { id: "p17", name: "Holiday Inn Express Houston Downtown", propertyType: "hotel", address: "1810 Main St", city: "Houston", countyFips: "48201", countyName: "Harris", stateAbbr: "TX", stateName: "Texas", zip: "77002", location: { type: "Point", coordinates: [-95.3632, 29.7468] }, roomsCount: 198, yearBuilt: 2012, ownerIds: ["o46"], slug: "holiday-inn-express-houston-downtown" },
  // Dallas County
  { id: "p18", name: "Hyatt Regency Dallas", propertyType: "hotel", address: "300 Reunion Blvd E", city: "Dallas", countyFips: "48113", countyName: "Dallas", stateAbbr: "TX", stateName: "Texas", zip: "75207", location: { type: "Point", coordinates: [-96.8108, 32.7757] }, roomsCount: 1120, yearBuilt: 1978, ownerIds: ["o13"], slug: "hyatt-regency-dallas" },
  { id: "p19", name: "Lone Star Inn Dallas", propertyType: "motel", address: "4150 N Central Expy", city: "Dallas", countyFips: "48113", countyName: "Dallas", stateAbbr: "TX", stateName: "Texas", zip: "75204", location: { type: "Point", coordinates: [-96.7726, 32.8087] }, roomsCount: 52, yearBuilt: 1985, ownerIds: ["o41"], slug: "lone-star-inn-dallas" },
  { id: "p20", name: "Best Western Plus Dallas Love Field", propertyType: "hotel", address: "1550 Empire Central Dr", city: "Dallas", countyFips: "48113", countyName: "Dallas", stateAbbr: "TX", stateName: "Texas", zip: "75235", location: { type: "Point", coordinates: [-96.8525, 32.8417] }, roomsCount: 98, yearBuilt: 2003, ownerIds: ["o9"], slug: "best-western-plus-dallas-love-field" },
  // Bexar County (San Antonio)
  { id: "p21", name: "Drury Inn San Antonio Riverwalk", propertyType: "hotel", address: "201 N St Marys St", city: "San Antonio", countyFips: "48029", countyName: "Bexar", stateAbbr: "TX", stateName: "Texas", zip: "78205", location: { type: "Point", coordinates: [-98.4937, 29.4255] }, roomsCount: 354, yearBuilt: 2006, ownerIds: ["o13"], slug: "drury-inn-san-antonio-riverwalk" },
  { id: "p22", name: "Alamo Motor Inn", propertyType: "motel", address: "1003 E Houston St", city: "San Antonio", countyFips: "48029", countyName: "Bexar", stateAbbr: "TX", stateName: "Texas", zip: "78205", location: { type: "Point", coordinates: [-98.4847, 29.4310] }, roomsCount: 32, yearBuilt: 1965, ownerIds: ["o23"], slug: "alamo-motor-inn-san-antonio" },
  // Travis County (Austin)
  { id: "p23", name: "Fairmont Austin", propertyType: "hotel", address: "101 Red River St", city: "Austin", countyFips: "48453", countyName: "Travis", stateAbbr: "TX", stateName: "Texas", zip: "78701", location: { type: "Point", coordinates: [-97.7384, 30.2627] }, roomsCount: 1048, yearBuilt: 2018, ownerIds: ["o46"], slug: "fairmont-austin" },
  { id: "p24", name: "Austin Motel", propertyType: "motel", address: "1220 S Congress Ave", city: "Austin", countyFips: "48453", countyName: "Travis", stateAbbr: "TX", stateName: "Texas", zip: "78704", location: { type: "Point", coordinates: [-97.7491, 30.2518] }, roomsCount: 41, yearBuilt: 1938, ownerIds: ["o41"], slug: "austin-motel-congress" },
  // Tarrant County (Fort Worth)
  { id: "p25", name: "Hilton Fort Worth", propertyType: "hotel", address: "815 Main St", city: "Fort Worth", countyFips: "48439", countyName: "Tarrant", stateAbbr: "TX", stateName: "Texas", zip: "76102", location: { type: "Point", coordinates: [-97.3308, 32.7535] }, roomsCount: 294, yearBuilt: 2009, ownerIds: ["o9"], slug: "hilton-fort-worth" },
  { id: "p26", name: "Stockyards Motor Court", propertyType: "motel", address: "2512 N Main St", city: "Fort Worth", countyFips: "48439", countyName: "Tarrant", stateAbbr: "TX", stateName: "Texas", zip: "76164", location: { type: "Point", coordinates: [-97.3460, 32.7860] }, roomsCount: 28, yearBuilt: 1958, ownerIds: ["o13"], slug: "stockyards-motor-court-fort-worth" },
  // El Paso County
  { id: "p27", name: "Hotel Paso Del Norte", propertyType: "hotel", address: "10 Henry Trost Ct", city: "El Paso", countyFips: "48141", countyName: "El Paso", stateAbbr: "TX", stateName: "Texas", zip: "79901", location: { type: "Point", coordinates: [-106.4452, 31.7587] }, roomsCount: 351, yearBuilt: 1912, ownerIds: ["o44"], slug: "hotel-paso-del-norte" },
  // Galveston County
  { id: "p28", name: "The San Luis Resort", propertyType: "resort", address: "5222 Seawall Blvd", city: "Galveston", countyFips: "48167", countyName: "Galveston", stateAbbr: "TX", stateName: "Texas", zip: "77551", location: { type: "Point", coordinates: [-94.8182, 29.2745] }, roomsCount: 250, yearBuilt: 1984, ownerIds: ["o46"], slug: "san-luis-resort-galveston" },

  // === CALIFORNIA ===
  // Los Angeles County
  { id: "p29", name: "The Beverly Hilton", propertyType: "hotel", address: "9876 Wilshire Blvd", city: "Beverly Hills", countyFips: "06037", countyName: "Los Angeles", stateAbbr: "CA", stateName: "California", zip: "90210", location: { type: "Point", coordinates: [-118.4134, 34.0657] }, roomsCount: 569, yearBuilt: 1955, ownerIds: ["o14"], slug: "beverly-hilton" },
  { id: "p30", name: "Sunset Motel Hollywood", propertyType: "motel", address: "6145 Sunset Blvd", city: "Los Angeles", countyFips: "06037", countyName: "Los Angeles", stateAbbr: "CA", stateName: "California", zip: "90028", location: { type: "Point", coordinates: [-118.3287, 34.0978] }, roomsCount: 34, yearBuilt: 1962, ownerIds: ["o28"], slug: "sunset-motel-hollywood" },
  { id: "p31", name: "Courtyard LAX Airport", propertyType: "hotel", address: "6161 W Century Blvd", city: "Los Angeles", countyFips: "06037", countyName: "Los Angeles", stateAbbr: "CA", stateName: "California", zip: "90045", location: { type: "Point", coordinates: [-118.3901, 33.9462] }, roomsCount: 246, yearBuilt: 2004, ownerIds: ["o11"], slug: "courtyard-lax-airport" },
  // San Diego County
  { id: "p32", name: "Hilton San Diego Bayfront", propertyType: "hotel", address: "1 Park Blvd", city: "San Diego", countyFips: "06073", countyName: "San Diego", stateAbbr: "CA", stateName: "California", zip: "92101", location: { type: "Point", coordinates: [-117.1628, 32.7078] }, roomsCount: 1190, yearBuilt: 2008, ownerIds: ["o14"], slug: "hilton-san-diego-bayfront" },
  { id: "p33", name: "Pacific Beach Motel", propertyType: "motel", address: "4475 Mission Blvd", city: "San Diego", countyFips: "06073", countyName: "San Diego", stateAbbr: "CA", stateName: "California", zip: "92109", location: { type: "Point", coordinates: [-117.2528, 32.7946] }, roomsCount: 28, yearBuilt: 1970, ownerIds: ["o27"], slug: "pacific-beach-motel-san-diego" },
  // San Francisco County
  { id: "p34", name: "Fairmont San Francisco", propertyType: "hotel", address: "950 Mason St", city: "San Francisco", countyFips: "06075", countyName: "San Francisco", stateAbbr: "CA", stateName: "California", zip: "94108", location: { type: "Point", coordinates: [-122.4103, 37.7923] }, roomsCount: 606, yearBuilt: 1907, ownerIds: ["o17"], slug: "fairmont-san-francisco" },
  // Orange County
  { id: "p35", name: "Disneyland Hotel", propertyType: "resort", address: "1150 Magic Way", city: "Anaheim", countyFips: "06059", countyName: "Orange", stateAbbr: "CA", stateName: "California", zip: "92802", location: { type: "Point", coordinates: [-117.9263, 33.8088] }, roomsCount: 990, yearBuilt: 1955, ownerIds: ["o14"], slug: "disneyland-hotel-anaheim" },

  // === NEW YORK ===
  // New York County (Manhattan)
  { id: "p36", name: "The Plaza Hotel", propertyType: "hotel", address: "768 5th Ave", city: "New York", countyFips: "36061", countyName: "New York", stateAbbr: "NY", stateName: "New York", zip: "10019", location: { type: "Point", coordinates: [-73.9745, 40.7644] }, roomsCount: 282, yearBuilt: 1907, ownerIds: ["o22"], slug: "plaza-hotel-new-york" },
  { id: "p37", name: "Pod 39 Hotel", propertyType: "hotel", address: "145 E 39th St", city: "New York", countyFips: "36061", countyName: "New York", stateAbbr: "NY", stateName: "New York", zip: "10016", location: { type: "Point", coordinates: [-73.9775, 40.7489] }, roomsCount: 366, yearBuilt: 2012, ownerIds: ["o22"], slug: "pod-39-hotel-new-york" },
  { id: "p38", name: "Times Square Motor Hotel", propertyType: "motel", address: "255 W 43rd St", city: "New York", countyFips: "36061", countyName: "New York", stateAbbr: "NY", stateName: "New York", zip: "10036", location: { type: "Point", coordinates: [-73.9880, 40.7575] }, roomsCount: 56, yearBuilt: 1968, ownerIds: ["o15"], slug: "times-square-motor-hotel" },
  // Queens County
  { id: "p39", name: "JFK Inn", propertyType: "hotel", address: "154-71 Brookville Blvd", city: "Queens", countyFips: "36081", countyName: "Queens", stateAbbr: "NY", stateName: "New York", zip: "11422", location: { type: "Point", coordinates: [-73.7562, 40.6655] }, roomsCount: 82, yearBuilt: 1995, ownerIds: ["o18"], slug: "jfk-inn-queens" },

  // === GEORGIA ===
  // Fulton County (Atlanta)
  { id: "p40", name: "The Westin Peachtree Plaza", propertyType: "hotel", address: "210 Peachtree St NW", city: "Atlanta", countyFips: "13121", countyName: "Fulton", stateAbbr: "GA", stateName: "Georgia", zip: "30303", location: { type: "Point", coordinates: [-84.3880, 33.7590] }, roomsCount: 1073, yearBuilt: 1976, ownerIds: ["o8"], slug: "westin-peachtree-plaza-atlanta" },
  { id: "p41", name: "Peachtree Motor Lodge", propertyType: "motel", address: "3500 Peachtree Rd NE", city: "Atlanta", countyFips: "13121", countyName: "Fulton", stateAbbr: "GA", stateName: "Georgia", zip: "30326", location: { type: "Point", coordinates: [-84.3627, 33.8502] }, roomsCount: 42, yearBuilt: 1964, ownerIds: ["o20"], slug: "peachtree-motor-lodge-atlanta" },
  // Chatham County (Savannah)
  { id: "p42", name: "The Marshall House", propertyType: "hotel", address: "123 E Broughton St", city: "Savannah", countyFips: "13051", countyName: "Chatham", stateAbbr: "GA", stateName: "Georgia", zip: "31401", location: { type: "Point", coordinates: [-81.0912, 32.0789] }, roomsCount: 68, yearBuilt: 1851, ownerIds: ["o16"], slug: "marshall-house-savannah" },

  // === NEVADA ===
  // Clark County (Las Vegas)
  { id: "p43", name: "Flamingo Las Vegas", propertyType: "resort", address: "3555 Las Vegas Blvd S", city: "Las Vegas", countyFips: "32003", countyName: "Clark", stateAbbr: "NV", stateName: "Nevada", zip: "89109", location: { type: "Point", coordinates: [-115.1711, 36.1162] }, roomsCount: 3460, yearBuilt: 1946, ownerIds: ["o27"], slug: "flamingo-las-vegas" },
  { id: "p44", name: "Motel 6 Las Vegas Tropicana", propertyType: "motel", address: "195 E Tropicana Ave", city: "Las Vegas", countyFips: "32003", countyName: "Clark", stateAbbr: "NV", stateName: "Nevada", zip: "89109", location: { type: "Point", coordinates: [-115.1656, 36.0997] }, roomsCount: 150, yearBuilt: 1990, ownerIds: ["o27"], slug: "motel-6-las-vegas-tropicana" },
  { id: "p45", name: "Golden Nugget Las Vegas", propertyType: "resort", address: "129 E Fremont St", city: "Las Vegas", countyFips: "32003", countyName: "Clark", stateAbbr: "NV", stateName: "Nevada", zip: "89101", location: { type: "Point", coordinates: [-115.1429, 36.1707] }, roomsCount: 2419, yearBuilt: 1946, ownerIds: ["o11"], slug: "golden-nugget-las-vegas" },
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
