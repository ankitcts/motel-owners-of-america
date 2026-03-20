import type { CountySummary } from "@/types";

// AL counties (top 15 by property count)
const AL_COUNTIES: CountySummary[] = [
  { fips: "01073", name: "Jefferson County, AL", stateAbbr: "AL", slug: "jefferson-county-al", propertyCount: 96, hotelCount: 53, motelCount: 43, ownerCount: 67 },
  { fips: "01097", name: "Mobile County, AL", stateAbbr: "AL", slug: "mobile-county-al", propertyCount: 60, hotelCount: 33, motelCount: 27, ownerCount: 42 },
  { fips: "01101", name: "Montgomery County, AL", stateAbbr: "AL", slug: "montgomery-county-al", propertyCount: 46, hotelCount: 25, motelCount: 21, ownerCount: 32 },
  { fips: "01089", name: "Madison County, AL", stateAbbr: "AL", slug: "madison-county-al", propertyCount: 43, hotelCount: 24, motelCount: 19, ownerCount: 30 },
  { fips: "01003", name: "Baldwin County, AL", stateAbbr: "AL", slug: "baldwin-county-al", propertyCount: 33, hotelCount: 18, motelCount: 15, ownerCount: 23 },
  { fips: "01069", name: "Houston County, AL", stateAbbr: "AL", slug: "houston-county-al", propertyCount: 28, hotelCount: 15, motelCount: 13, ownerCount: 20 },
  { fips: "01125", name: "Tuscaloosa County, AL", stateAbbr: "AL", slug: "tuscaloosa-county-al", propertyCount: 24, hotelCount: 13, motelCount: 11, ownerCount: 17 },
  { fips: "01015", name: "Calhoun County, AL", stateAbbr: "AL", slug: "calhoun-county-al", propertyCount: 22, hotelCount: 12, motelCount: 10, ownerCount: 15 },
  { fips: "01117", name: "Shelby County, AL", stateAbbr: "AL", slug: "shelby-county-al", propertyCount: 20, hotelCount: 11, motelCount: 9, ownerCount: 14 },
  { fips: "01081", name: "Lee County, AL", stateAbbr: "AL", slug: "lee-county-al", propertyCount: 19, hotelCount: 10, motelCount: 9, ownerCount: 13 },
  { fips: "01103", name: "Morgan County, AL", stateAbbr: "AL", slug: "morgan-county-al", propertyCount: 19, hotelCount: 10, motelCount: 9, ownerCount: 13 },
  { fips: "01121", name: "Talladega County, AL", stateAbbr: "AL", slug: "talladega-county-al", propertyCount: 15, hotelCount: 8, motelCount: 7, ownerCount: 11 },
  { fips: "01005", name: "Barbour County, AL", stateAbbr: "AL", slug: "barbour-county-al", propertyCount: 13, hotelCount: 7, motelCount: 6, ownerCount: 9 },
  { fips: "01033", name: "Colbert County, AL", stateAbbr: "AL", slug: "colbert-county-al", propertyCount: 11, hotelCount: 6, motelCount: 5, ownerCount: 8 },
  { fips: "01055", name: "Etowah County, AL", stateAbbr: "AL", slug: "etowah-county-al", propertyCount: 11, hotelCount: 6, motelCount: 5, ownerCount: 8 },
];

// AK counties (top 15 by property count)
const AK_COUNTIES: CountySummary[] = [
  { fips: "02020", name: "Anchorage Municipality, AK", stateAbbr: "AK", slug: "anchorage-municipality-ak", propertyCount: 67, hotelCount: 37, motelCount: 30, ownerCount: 47 },
  { fips: "02122", name: "Kenai Peninsula Borough, AK", stateAbbr: "AK", slug: "kenai-peninsula-borough-ak", propertyCount: 52, hotelCount: 29, motelCount: 23, ownerCount: 36 },
  { fips: "02090", name: "Fairbanks North Star Borough, AK", stateAbbr: "AK", slug: "fairbanks-north-star-borough-ak", propertyCount: 29, hotelCount: 16, motelCount: 13, ownerCount: 20 },
  { fips: "02261", name: "Valdez-Cordova Census Area, AK", stateAbbr: "AK", slug: "valdez-cordova-census-area-ak", propertyCount: 17, hotelCount: 9, motelCount: 8, ownerCount: 12 },
  { fips: "02170", name: "Matanuska-Susitna Borough, AK", stateAbbr: "AK", slug: "matanuska-susitna-borough-ak", propertyCount: 16, hotelCount: 9, motelCount: 7, ownerCount: 11 },
  { fips: "02110", name: "Juneau City and Borough, AK", stateAbbr: "AK", slug: "juneau-city-and-borough-ak", propertyCount: 14, hotelCount: 8, motelCount: 6, ownerCount: 10 },
  { fips: "02130", name: "Ketchikan Gateway Borough, AK", stateAbbr: "AK", slug: "ketchikan-gateway-borough-ak", propertyCount: 14, hotelCount: 8, motelCount: 6, ownerCount: 10 },
  { fips: "02068", name: "Denali Borough, AK", stateAbbr: "AK", slug: "denali-borough-ak", propertyCount: 12, hotelCount: 7, motelCount: 5, ownerCount: 8 },
  { fips: "02232", name: "Skagway-Hoonah-Angoon Census Area, AK", stateAbbr: "AK", slug: "skagway-hoonah-angoon-census-area-ak", propertyCount: 10, hotelCount: 6, motelCount: 4, ownerCount: 7 },
  { fips: "02220", name: "Sitka City and Borough, AK", stateAbbr: "AK", slug: "sitka-city-and-borough-ak", propertyCount: 9, hotelCount: 5, motelCount: 4, ownerCount: 6 },
  { fips: "02100", name: "Haines Borough, AK", stateAbbr: "AK", slug: "haines-borough-ak", propertyCount: 7, hotelCount: 4, motelCount: 3, ownerCount: 5 },
  { fips: "02150", name: "Kodiak Island Borough, AK", stateAbbr: "AK", slug: "kodiak-island-borough-ak", propertyCount: 7, hotelCount: 4, motelCount: 3, ownerCount: 5 },
  { fips: "02060", name: "Bristol Bay Borough, AK", stateAbbr: "AK", slug: "bristol-bay-borough-ak", propertyCount: 6, hotelCount: 3, motelCount: 3, ownerCount: 4 },
  { fips: "02185", name: "North Slope Borough, AK", stateAbbr: "AK", slug: "north-slope-borough-ak", propertyCount: 6, hotelCount: 3, motelCount: 3, ownerCount: 4 },
  { fips: "02240", name: "Southeast Fairbanks Census Area, AK", stateAbbr: "AK", slug: "southeast-fairbanks-census-area-ak", propertyCount: 6, hotelCount: 3, motelCount: 3, ownerCount: 4 },
];

// AZ counties (top 15 by property count)
const AZ_COUNTIES: CountySummary[] = [
  { fips: "04013", name: "Maricopa County, AZ", stateAbbr: "AZ", slug: "maricopa-county-az", propertyCount: 383, hotelCount: 211, motelCount: 172, ownerCount: 268 },
  { fips: "04005", name: "Coconino County, AZ", stateAbbr: "AZ", slug: "coconino-county-az", propertyCount: 146, hotelCount: 80, motelCount: 66, ownerCount: 102 },
  { fips: "04019", name: "Pima County, AZ", stateAbbr: "AZ", slug: "pima-county-az", propertyCount: 135, hotelCount: 74, motelCount: 61, ownerCount: 95 },
  { fips: "04025", name: "Yavapai County, AZ", stateAbbr: "AZ", slug: "yavapai-county-az", propertyCount: 75, hotelCount: 41, motelCount: 34, ownerCount: 53 },
  { fips: "04015", name: "Mohave County, AZ", stateAbbr: "AZ", slug: "mohave-county-az", propertyCount: 65, hotelCount: 36, motelCount: 29, ownerCount: 46 },
  { fips: "04017", name: "Navajo County, AZ", stateAbbr: "AZ", slug: "navajo-county-az", propertyCount: 61, hotelCount: 34, motelCount: 27, ownerCount: 43 },
  { fips: "04003", name: "Cochise County, AZ", stateAbbr: "AZ", slug: "cochise-county-az", propertyCount: 42, hotelCount: 23, motelCount: 19, ownerCount: 29 },
  { fips: "04027", name: "Yuma County, AZ", stateAbbr: "AZ", slug: "yuma-county-az", propertyCount: 28, hotelCount: 15, motelCount: 13, ownerCount: 20 },
  { fips: "04007", name: "Gila County, AZ", stateAbbr: "AZ", slug: "gila-county-az", propertyCount: 22, hotelCount: 12, motelCount: 10, ownerCount: 15 },
  { fips: "04001", name: "Apache County, AZ", stateAbbr: "AZ", slug: "apache-county-az", propertyCount: 18, hotelCount: 10, motelCount: 8, ownerCount: 13 },
  { fips: "04021", name: "Pinal County, AZ", stateAbbr: "AZ", slug: "pinal-county-az", propertyCount: 18, hotelCount: 10, motelCount: 8, ownerCount: 13 },
  { fips: "04012", name: "La Paz County, AZ", stateAbbr: "AZ", slug: "la-paz-county-az", propertyCount: 11, hotelCount: 6, motelCount: 5, ownerCount: 8 },
  { fips: "04023", name: "Santa Cruz County, AZ", stateAbbr: "AZ", slug: "santa-cruz-county-az", propertyCount: 10, hotelCount: 6, motelCount: 4, ownerCount: 7 },
  { fips: "04009", name: "Graham County, AZ", stateAbbr: "AZ", slug: "graham-county-az", propertyCount: 7, hotelCount: 4, motelCount: 3, ownerCount: 5 },
  { fips: "04999", name: "Statewide, AZ", stateAbbr: "AZ", slug: "statewide-az", propertyCount: 1, hotelCount: 1, motelCount: 0, ownerCount: 1 },
];

// AR counties (top 15 by property count)
const AR_COUNTIES: CountySummary[] = [
  { fips: "05119", name: "Pulaski County, AR", stateAbbr: "AR", slug: "pulaski-county-ar", propertyCount: 74, hotelCount: 41, motelCount: 33, ownerCount: 52 },
  { fips: "05015", name: "Carroll County, AR", stateAbbr: "AR", slug: "carroll-county-ar", propertyCount: 69, hotelCount: 38, motelCount: 31, ownerCount: 48 },
  { fips: "05051", name: "Garland County, AR", stateAbbr: "AR", slug: "garland-county-ar", propertyCount: 40, hotelCount: 22, motelCount: 18, ownerCount: 28 },
  { fips: "05143", name: "Washington County, AR", stateAbbr: "AR", slug: "washington-county-ar", propertyCount: 35, hotelCount: 19, motelCount: 16, ownerCount: 25 },
  { fips: "05007", name: "Benton County, AR", stateAbbr: "AR", slug: "benton-county-ar", propertyCount: 25, hotelCount: 14, motelCount: 11, ownerCount: 18 },
  { fips: "05035", name: "Crittenden County, AR", stateAbbr: "AR", slug: "crittenden-county-ar", propertyCount: 24, hotelCount: 13, motelCount: 11, ownerCount: 17 },
  { fips: "05131", name: "Sebastian County, AR", stateAbbr: "AR", slug: "sebastian-county-ar", propertyCount: 23, hotelCount: 13, motelCount: 10, ownerCount: 16 },
  { fips: "05069", name: "Jefferson County, AR", stateAbbr: "AR", slug: "jefferson-county-ar", propertyCount: 16, hotelCount: 9, motelCount: 7, ownerCount: 11 },
  { fips: "05005", name: "Baxter County, AR", stateAbbr: "AR", slug: "baxter-county-ar", propertyCount: 13, hotelCount: 7, motelCount: 6, ownerCount: 9 },
  { fips: "05031", name: "Craighead County, AR", stateAbbr: "AR", slug: "craighead-county-ar", propertyCount: 13, hotelCount: 7, motelCount: 6, ownerCount: 9 },
  { fips: "05123", name: "St. Francis County, AR", stateAbbr: "AR", slug: "st-francis-county-ar", propertyCount: 13, hotelCount: 7, motelCount: 6, ownerCount: 9 },
  { fips: "05091", name: "Miller County, AR", stateAbbr: "AR", slug: "miller-county-ar", propertyCount: 12, hotelCount: 7, motelCount: 5, ownerCount: 8 },
  { fips: "05093", name: "Mississippi County, AR", stateAbbr: "AR", slug: "mississippi-county-ar", propertyCount: 12, hotelCount: 7, motelCount: 5, ownerCount: 8 },
  { fips: "05115", name: "Pope County, AR", stateAbbr: "AR", slug: "pope-county-ar", propertyCount: 11, hotelCount: 6, motelCount: 5, ownerCount: 8 },
  { fips: "05033", name: "Crawford County, AR", stateAbbr: "AR", slug: "crawford-county-ar", propertyCount: 10, hotelCount: 6, motelCount: 4, ownerCount: 7 },
];

// CA counties (top 15 by property count)
const CA_COUNTIES: CountySummary[] = [
  { fips: "06037", name: "Los Angeles County, CA", stateAbbr: "CA", slug: "los-angeles-county-ca", propertyCount: 1023, hotelCount: 563, motelCount: 460, ownerCount: 716 },
  { fips: "06073", name: "San Diego County, CA", stateAbbr: "CA", slug: "san-diego-county-ca", propertyCount: 451, hotelCount: 248, motelCount: 203, ownerCount: 316 },
  { fips: "06059", name: "Orange County, CA", stateAbbr: "CA", slug: "orange-county-ca", propertyCount: 421, hotelCount: 232, motelCount: 189, ownerCount: 295 },
  { fips: "06075", name: "San Francisco County, CA", stateAbbr: "CA", slug: "san-francisco-county-ca", propertyCount: 321, hotelCount: 177, motelCount: 144, ownerCount: 225 },
  { fips: "06085", name: "Santa Clara County, CA", stateAbbr: "CA", slug: "santa-clara-county-ca", propertyCount: 235, hotelCount: 129, motelCount: 106, ownerCount: 165 },
  { fips: "06065", name: "Riverside County, CA", stateAbbr: "CA", slug: "riverside-county-ca", propertyCount: 213, hotelCount: 117, motelCount: 96, ownerCount: 149 },
  { fips: "06053", name: "Monterey County, CA", stateAbbr: "CA", slug: "monterey-county-ca", propertyCount: 185, hotelCount: 102, motelCount: 83, ownerCount: 130 },
  { fips: "06071", name: "San Bernardino County, CA", stateAbbr: "CA", slug: "san-bernardino-county-ca", propertyCount: 184, hotelCount: 101, motelCount: 83, ownerCount: 129 },
  { fips: "06001", name: "Alameda County, CA", stateAbbr: "CA", slug: "alameda-county-ca", propertyCount: 165, hotelCount: 91, motelCount: 74, ownerCount: 115 },
  { fips: "06081", name: "San Mateo County, CA", stateAbbr: "CA", slug: "san-mateo-county-ca", propertyCount: 151, hotelCount: 83, motelCount: 68, ownerCount: 106 },
  { fips: "06079", name: "San Luis Obispo County, CA", stateAbbr: "CA", slug: "san-luis-obispo-county-ca", propertyCount: 145, hotelCount: 80, motelCount: 65, ownerCount: 102 },
  { fips: "06083", name: "Santa Barbara County, CA", stateAbbr: "CA", slug: "santa-barbara-county-ca", propertyCount: 139, hotelCount: 76, motelCount: 63, ownerCount: 97 },
  { fips: "06097", name: "Sonoma County, CA", stateAbbr: "CA", slug: "sonoma-county-ca", propertyCount: 124, hotelCount: 68, motelCount: 56, ownerCount: 87 },
  { fips: "06045", name: "Mendocino County, CA", stateAbbr: "CA", slug: "mendocino-county-ca", propertyCount: 98, hotelCount: 54, motelCount: 44, ownerCount: 69 },
  { fips: "06067", name: "Sacramento County, CA", stateAbbr: "CA", slug: "sacramento-county-ca", propertyCount: 94, hotelCount: 52, motelCount: 42, ownerCount: 66 },
];

// CO counties (top 15 by property count)
const CO_COUNTIES: CountySummary[] = [
  { fips: "08031", name: "Denver County, CO", stateAbbr: "CO", slug: "denver-county-co", propertyCount: 120, hotelCount: 66, motelCount: 54, ownerCount: 84 },
  { fips: "08041", name: "El Paso County, CO", stateAbbr: "CO", slug: "el-paso-county-co", propertyCount: 119, hotelCount: 65, motelCount: 54, ownerCount: 83 },
  { fips: "08069", name: "Larimer County, CO", stateAbbr: "CO", slug: "larimer-county-co", propertyCount: 101, hotelCount: 56, motelCount: 45, ownerCount: 71 },
  { fips: "08005", name: "Arapahoe County, CO", stateAbbr: "CO", slug: "arapahoe-county-co", propertyCount: 74, hotelCount: 41, motelCount: 33, ownerCount: 52 },
  { fips: "08013", name: "Boulder County, CO", stateAbbr: "CO", slug: "boulder-county-co", propertyCount: 59, hotelCount: 32, motelCount: 27, ownerCount: 41 },
  { fips: "08059", name: "Jefferson County, CO", stateAbbr: "CO", slug: "jefferson-county-co", propertyCount: 59, hotelCount: 32, motelCount: 27, ownerCount: 41 },
  { fips: "08067", name: "La Plata County, CO", stateAbbr: "CO", slug: "la-plata-county-co", propertyCount: 47, hotelCount: 26, motelCount: 21, ownerCount: 33 },
  { fips: "08037", name: "Eagle County, CO", stateAbbr: "CO", slug: "eagle-county-co", propertyCount: 44, hotelCount: 24, motelCount: 20, ownerCount: 31 },
  { fips: "08097", name: "Pitkin County, CO", stateAbbr: "CO", slug: "pitkin-county-co", propertyCount: 44, hotelCount: 24, motelCount: 20, ownerCount: 31 },
  { fips: "08049", name: "Grand County, CO", stateAbbr: "CO", slug: "grand-county-co", propertyCount: 42, hotelCount: 23, motelCount: 19, ownerCount: 29 },
  { fips: "08117", name: "Summit County, CO", stateAbbr: "CO", slug: "summit-county-co", propertyCount: 41, hotelCount: 23, motelCount: 18, ownerCount: 29 },
  { fips: "08107", name: "Routt County, CO", stateAbbr: "CO", slug: "routt-county-co", propertyCount: 32, hotelCount: 18, motelCount: 14, ownerCount: 22 },
  { fips: "08077", name: "Mesa County, CO", stateAbbr: "CO", slug: "mesa-county-co", propertyCount: 30, hotelCount: 17, motelCount: 13, ownerCount: 21 },
  { fips: "08045", name: "Garfield County, CO", stateAbbr: "CO", slug: "garfield-county-co", propertyCount: 29, hotelCount: 16, motelCount: 13, ownerCount: 20 },
  { fips: "08051", name: "Gunnison County, CO", stateAbbr: "CO", slug: "gunnison-county-co", propertyCount: 29, hotelCount: 16, motelCount: 13, ownerCount: 20 },
];

// CT counties (top 8 by property count)
const CT_COUNTIES: CountySummary[] = [
  { fips: "09003", name: "Hartford County, CT", stateAbbr: "CT", slug: "hartford-county-ct", propertyCount: 84, hotelCount: 46, motelCount: 38, ownerCount: 59 },
  { fips: "09009", name: "New Haven County, CT", stateAbbr: "CT", slug: "new-haven-county-ct", propertyCount: 68, hotelCount: 37, motelCount: 31, ownerCount: 48 },
  { fips: "09001", name: "Fairfield County, CT", stateAbbr: "CT", slug: "fairfield-county-ct", propertyCount: 65, hotelCount: 36, motelCount: 29, ownerCount: 46 },
  { fips: "09011", name: "New London County, CT", stateAbbr: "CT", slug: "new-london-county-ct", propertyCount: 56, hotelCount: 31, motelCount: 25, ownerCount: 39 },
  { fips: "09005", name: "Litchfield County, CT", stateAbbr: "CT", slug: "litchfield-county-ct", propertyCount: 22, hotelCount: 12, motelCount: 10, ownerCount: 15 },
  { fips: "09007", name: "Middlesex County, CT", stateAbbr: "CT", slug: "middlesex-county-ct", propertyCount: 20, hotelCount: 11, motelCount: 9, ownerCount: 14 },
  { fips: "09015", name: "Windham County, CT", stateAbbr: "CT", slug: "windham-county-ct", propertyCount: 11, hotelCount: 6, motelCount: 5, ownerCount: 8 },
  { fips: "09013", name: "Tolland County, CT", stateAbbr: "CT", slug: "tolland-county-ct", propertyCount: 9, hotelCount: 5, motelCount: 4, ownerCount: 6 },
];

// DE counties (top 3 by property count)
const DE_COUNTIES: CountySummary[] = [
  { fips: "10005", name: "Sussex County, DE", stateAbbr: "DE", slug: "sussex-county-de", propertyCount: 65, hotelCount: 36, motelCount: 29, ownerCount: 46 },
  { fips: "10003", name: "New Castle County, DE", stateAbbr: "DE", slug: "new-castle-county-de", propertyCount: 57, hotelCount: 31, motelCount: 26, ownerCount: 40 },
  { fips: "10001", name: "Kent County, DE", stateAbbr: "DE", slug: "kent-county-de", propertyCount: 20, hotelCount: 11, motelCount: 9, ownerCount: 14 },
];

// DC counties (top 1 by property count)
const DC_COUNTIES: CountySummary[] = [
  { fips: "11999", name: "Statewide, DC", stateAbbr: "DC", slug: "statewide-dc", propertyCount: 109, hotelCount: 60, motelCount: 49, ownerCount: 76 },
];

// FL counties (top 15 by property count)
const FL_COUNTIES: CountySummary[] = [
  { fips: "12025", name: "Dade County, FL", stateAbbr: "FL", slug: "dade-county-fl", propertyCount: 386, hotelCount: 212, motelCount: 174, ownerCount: 270 },
  { fips: "12011", name: "Broward County, FL", stateAbbr: "FL", slug: "broward-county-fl", propertyCount: 328, hotelCount: 180, motelCount: 148, ownerCount: 230 },
  { fips: "12103", name: "Pinellas County, FL", stateAbbr: "FL", slug: "pinellas-county-fl", propertyCount: 257, hotelCount: 141, motelCount: 116, ownerCount: 180 },
  { fips: "12095", name: "Orange County, FL", stateAbbr: "FL", slug: "orange-county-fl", propertyCount: 253, hotelCount: 139, motelCount: 114, ownerCount: 177 },
  { fips: "12127", name: "Volusia County, FL", stateAbbr: "FL", slug: "volusia-county-fl", propertyCount: 195, hotelCount: 107, motelCount: 88, ownerCount: 137 },
  { fips: "12087", name: "Monroe County, FL", stateAbbr: "FL", slug: "monroe-county-fl", propertyCount: 181, hotelCount: 100, motelCount: 81, ownerCount: 127 },
  { fips: "12099", name: "Palm Beach County, FL", stateAbbr: "FL", slug: "palm-beach-county-fl", propertyCount: 144, hotelCount: 79, motelCount: 65, ownerCount: 101 },
  { fips: "12057", name: "Hillsborough County, FL", stateAbbr: "FL", slug: "hillsborough-county-fl", propertyCount: 128, hotelCount: 70, motelCount: 58, ownerCount: 90 },
  { fips: "12071", name: "Lee County, FL", stateAbbr: "FL", slug: "lee-county-fl", propertyCount: 116, hotelCount: 64, motelCount: 52, ownerCount: 81 },
  { fips: "12031", name: "Duval County, FL", stateAbbr: "FL", slug: "duval-county-fl", propertyCount: 107, hotelCount: 59, motelCount: 48, ownerCount: 75 },
  { fips: "12005", name: "Bay County, FL", stateAbbr: "FL", slug: "bay-county-fl", propertyCount: 105, hotelCount: 58, motelCount: 47, ownerCount: 74 },
  { fips: "12097", name: "Osceola County, FL", stateAbbr: "FL", slug: "osceola-county-fl", propertyCount: 104, hotelCount: 57, motelCount: 47, ownerCount: 73 },
  { fips: "12009", name: "Brevard County, FL", stateAbbr: "FL", slug: "brevard-county-fl", propertyCount: 80, hotelCount: 44, motelCount: 36, ownerCount: 56 },
  { fips: "12115", name: "Sarasota County, FL", stateAbbr: "FL", slug: "sarasota-county-fl", propertyCount: 75, hotelCount: 41, motelCount: 34, ownerCount: 53 },
  { fips: "12109", name: "St. Johns County, FL", stateAbbr: "FL", slug: "st-johns-county-fl", propertyCount: 73, hotelCount: 40, motelCount: 33, ownerCount: 51 },
];

// GA counties (top 15 by property count)
const GA_COUNTIES: CountySummary[] = [
  { fips: "13121", name: "Fulton County, GA", stateAbbr: "GA", slug: "fulton-county-ga", propertyCount: 206, hotelCount: 113, motelCount: 93, ownerCount: 144 },
  { fips: "13067", name: "Cobb County, GA", stateAbbr: "GA", slug: "cobb-county-ga", propertyCount: 138, hotelCount: 76, motelCount: 62, ownerCount: 97 },
  { fips: "13051", name: "Chatham County, GA", stateAbbr: "GA", slug: "chatham-county-ga", propertyCount: 103, hotelCount: 57, motelCount: 46, ownerCount: 72 },
  { fips: "13089", name: "DeKalb County, GA", stateAbbr: "GA", slug: "dekalb-county-ga", propertyCount: 97, hotelCount: 53, motelCount: 44, ownerCount: 68 },
  { fips: "13135", name: "Gwinnett County, GA", stateAbbr: "GA", slug: "gwinnett-county-ga", propertyCount: 86, hotelCount: 47, motelCount: 39, ownerCount: 60 },
  { fips: "13063", name: "Clayton County, GA", stateAbbr: "GA", slug: "clayton-county-ga", propertyCount: 50, hotelCount: 28, motelCount: 22, ownerCount: 35 },
  { fips: "13245", name: "Richmond County, GA", stateAbbr: "GA", slug: "richmond-county-ga", propertyCount: 48, hotelCount: 26, motelCount: 22, ownerCount: 34 },
  { fips: "13021", name: "Bibb County, GA", stateAbbr: "GA", slug: "bibb-county-ga", propertyCount: 47, hotelCount: 26, motelCount: 21, ownerCount: 33 },
  { fips: "13127", name: "Glynn County, GA", stateAbbr: "GA", slug: "glynn-county-ga", propertyCount: 44, hotelCount: 24, motelCount: 20, ownerCount: 31 },
  { fips: "13153", name: "Houston County, GA", stateAbbr: "GA", slug: "houston-county-ga", propertyCount: 35, hotelCount: 19, motelCount: 16, ownerCount: 25 },
  { fips: "13185", name: "Lowndes County, GA", stateAbbr: "GA", slug: "lowndes-county-ga", propertyCount: 32, hotelCount: 18, motelCount: 14, ownerCount: 22 },
  { fips: "13151", name: "Henry County, GA", stateAbbr: "GA", slug: "henry-county-ga", propertyCount: 28, hotelCount: 15, motelCount: 13, ownerCount: 20 },
  { fips: "13215", name: "Muscogee County, GA", stateAbbr: "GA", slug: "muscogee-county-ga", propertyCount: 28, hotelCount: 15, motelCount: 13, ownerCount: 20 },
  { fips: "13313", name: "Whitfield County, GA", stateAbbr: "GA", slug: "whitfield-county-ga", propertyCount: 26, hotelCount: 14, motelCount: 12, ownerCount: 18 },
  { fips: "13139", name: "Hall County, GA", stateAbbr: "GA", slug: "hall-county-ga", propertyCount: 25, hotelCount: 14, motelCount: 11, ownerCount: 18 },
];

// HI counties (top 4 by property count)
const HI_COUNTIES: CountySummary[] = [
  { fips: "15003", name: "Honolulu County, HI", stateAbbr: "HI", slug: "honolulu-county-hi", propertyCount: 120, hotelCount: 66, motelCount: 54, ownerCount: 84 },
  { fips: "15009", name: "Maui County, HI", stateAbbr: "HI", slug: "maui-county-hi", propertyCount: 61, hotelCount: 34, motelCount: 27, ownerCount: 43 },
  { fips: "15001", name: "Hawaii County, HI", stateAbbr: "HI", slug: "hawaii-county-hi", propertyCount: 50, hotelCount: 28, motelCount: 22, ownerCount: 35 },
  { fips: "15007", name: "Kauai County, HI", stateAbbr: "HI", slug: "kauai-county-hi", propertyCount: 34, hotelCount: 19, motelCount: 15, ownerCount: 24 },
];

// ID counties (top 15 by property count)
const ID_COUNTIES: CountySummary[] = [
  { fips: "16001", name: "Ada County, ID", stateAbbr: "ID", slug: "ada-county-id", propertyCount: 50, hotelCount: 28, motelCount: 22, ownerCount: 35 },
  { fips: "16055", name: "Kootenai County, ID", stateAbbr: "ID", slug: "kootenai-county-id", propertyCount: 29, hotelCount: 16, motelCount: 13, ownerCount: 20 },
  { fips: "16017", name: "Bonner County, ID", stateAbbr: "ID", slug: "bonner-county-id", propertyCount: 20, hotelCount: 11, motelCount: 9, ownerCount: 14 },
  { fips: "16083", name: "Twin Falls County, ID", stateAbbr: "ID", slug: "twin-falls-county-id", propertyCount: 19, hotelCount: 10, motelCount: 9, ownerCount: 13 },
  { fips: "16005", name: "Bannock County, ID", stateAbbr: "ID", slug: "bannock-county-id", propertyCount: 18, hotelCount: 10, motelCount: 8, ownerCount: 13 },
  { fips: "16019", name: "Bonneville County, ID", stateAbbr: "ID", slug: "bonneville-county-id", propertyCount: 18, hotelCount: 10, motelCount: 8, ownerCount: 13 },
  { fips: "16049", name: "Idaho County, ID", stateAbbr: "ID", slug: "idaho-county-id", propertyCount: 18, hotelCount: 10, motelCount: 8, ownerCount: 13 },
  { fips: "16013", name: "Blaine County, ID", stateAbbr: "ID", slug: "blaine-county-id", propertyCount: 15, hotelCount: 8, motelCount: 7, ownerCount: 11 },
  { fips: "16085", name: "Valley County, ID", stateAbbr: "ID", slug: "valley-county-id", propertyCount: 15, hotelCount: 8, motelCount: 7, ownerCount: 11 },
  { fips: "16037", name: "Custer County, ID", stateAbbr: "ID", slug: "custer-county-id", propertyCount: 10, hotelCount: 6, motelCount: 4, ownerCount: 7 },
  { fips: "16039", name: "Elmore County, ID", stateAbbr: "ID", slug: "elmore-county-id", propertyCount: 9, hotelCount: 5, motelCount: 4, ownerCount: 6 },
  { fips: "16043", name: "Fremont County, ID", stateAbbr: "ID", slug: "fremont-county-id", propertyCount: 9, hotelCount: 5, motelCount: 4, ownerCount: 6 },
  { fips: "16027", name: "Canyon County, ID", stateAbbr: "ID", slug: "canyon-county-id", propertyCount: 8, hotelCount: 4, motelCount: 4, ownerCount: 6 },
  { fips: "16069", name: "Nez Perce County, ID", stateAbbr: "ID", slug: "nez-perce-county-id", propertyCount: 8, hotelCount: 4, motelCount: 4, ownerCount: 6 },
  { fips: "16059", name: "Lemhi County, ID", stateAbbr: "ID", slug: "lemhi-county-id", propertyCount: 7, hotelCount: 4, motelCount: 3, ownerCount: 5 },
];

// IL counties (top 15 by property count)
const IL_COUNTIES: CountySummary[] = [
  { fips: "17031", name: "Cook County, IL", stateAbbr: "IL", slug: "cook-county-il", propertyCount: 437, hotelCount: 240, motelCount: 197, ownerCount: 306 },
  { fips: "17043", name: "DuPage County, IL", stateAbbr: "IL", slug: "dupage-county-il", propertyCount: 121, hotelCount: 67, motelCount: 54, ownerCount: 85 },
  { fips: "17097", name: "Lake County, IL", stateAbbr: "IL", slug: "lake-county-il", propertyCount: 72, hotelCount: 40, motelCount: 32, ownerCount: 50 },
  { fips: "17197", name: "Will County, IL", stateAbbr: "IL", slug: "will-county-il", propertyCount: 49, hotelCount: 27, motelCount: 22, ownerCount: 34 },
  { fips: "17119", name: "Madison County, IL", stateAbbr: "IL", slug: "madison-county-il", propertyCount: 36, hotelCount: 20, motelCount: 16, ownerCount: 25 },
  { fips: "17163", name: "St. Clair County, IL", stateAbbr: "IL", slug: "st-clair-county-il", propertyCount: 36, hotelCount: 20, motelCount: 16, ownerCount: 25 },
  { fips: "17167", name: "Sangamon County, IL", stateAbbr: "IL", slug: "sangamon-county-il", propertyCount: 34, hotelCount: 19, motelCount: 15, ownerCount: 24 },
  { fips: "17019", name: "Champaign County, IL", stateAbbr: "IL", slug: "champaign-county-il", propertyCount: 33, hotelCount: 18, motelCount: 15, ownerCount: 23 },
  { fips: "17113", name: "McLean County, IL", stateAbbr: "IL", slug: "mclean-county-il", propertyCount: 28, hotelCount: 15, motelCount: 13, ownerCount: 20 },
  { fips: "17201", name: "Winnebago County, IL", stateAbbr: "IL", slug: "winnebago-county-il", propertyCount: 28, hotelCount: 15, motelCount: 13, ownerCount: 20 },
  { fips: "17099", name: "LaSalle County, IL", stateAbbr: "IL", slug: "lasalle-county-il", propertyCount: 26, hotelCount: 14, motelCount: 12, ownerCount: 18 },
  { fips: "17143", name: "Peoria County, IL", stateAbbr: "IL", slug: "peoria-county-il", propertyCount: 25, hotelCount: 14, motelCount: 11, ownerCount: 18 },
  { fips: "17049", name: "Effingham County, IL", stateAbbr: "IL", slug: "effingham-county-il", propertyCount: 24, hotelCount: 13, motelCount: 11, ownerCount: 17 },
  { fips: "17115", name: "Macon County, IL", stateAbbr: "IL", slug: "macon-county-il", propertyCount: 23, hotelCount: 13, motelCount: 10, ownerCount: 16 },
  { fips: "17089", name: "Kane County, IL", stateAbbr: "IL", slug: "kane-county-il", propertyCount: 22, hotelCount: 12, motelCount: 10, ownerCount: 15 },
];

// IN counties (top 15 by property count)
const IN_COUNTIES: CountySummary[] = [
  { fips: "18097", name: "Marion County, IN", stateAbbr: "IN", slug: "marion-county-in", propertyCount: 162, hotelCount: 89, motelCount: 73, ownerCount: 113 },
  { fips: "18089", name: "Lake County, IN", stateAbbr: "IN", slug: "lake-county-in", propertyCount: 49, hotelCount: 27, motelCount: 22, ownerCount: 34 },
  { fips: "18141", name: "St. Joseph County, IN", stateAbbr: "IN", slug: "st-joseph-county-in", propertyCount: 44, hotelCount: 24, motelCount: 20, ownerCount: 31 },
  { fips: "18003", name: "Allen County, IN", stateAbbr: "IN", slug: "allen-county-in", propertyCount: 40, hotelCount: 22, motelCount: 18, ownerCount: 28 },
  { fips: "18163", name: "Vanderburgh County, IN", stateAbbr: "IN", slug: "vanderburgh-county-in", propertyCount: 31, hotelCount: 17, motelCount: 14, ownerCount: 22 },
  { fips: "18039", name: "Elkhart County, IN", stateAbbr: "IN", slug: "elkhart-county-in", propertyCount: 26, hotelCount: 14, motelCount: 12, ownerCount: 18 },
  { fips: "18127", name: "Porter County, IN", stateAbbr: "IN", slug: "porter-county-in", propertyCount: 25, hotelCount: 14, motelCount: 11, ownerCount: 18 },
  { fips: "18019", name: "Clark County, IN", stateAbbr: "IN", slug: "clark-county-in", propertyCount: 22, hotelCount: 12, motelCount: 10, ownerCount: 15 },
  { fips: "18105", name: "Monroe County, IN", stateAbbr: "IN", slug: "monroe-county-in", propertyCount: 21, hotelCount: 12, motelCount: 9, ownerCount: 15 },
  { fips: "18157", name: "Tippecanoe County, IN", stateAbbr: "IN", slug: "tippecanoe-county-in", propertyCount: 21, hotelCount: 12, motelCount: 9, ownerCount: 15 },
  { fips: "18057", name: "Hamilton County, IN", stateAbbr: "IN", slug: "hamilton-county-in", propertyCount: 19, hotelCount: 10, motelCount: 9, ownerCount: 13 },
  { fips: "18091", name: "LaPorte County, IN", stateAbbr: "IN", slug: "laporte-county-in", propertyCount: 18, hotelCount: 10, motelCount: 8, ownerCount: 13 },
  { fips: "18095", name: "Madison County, IN", stateAbbr: "IN", slug: "madison-county-in", propertyCount: 16, hotelCount: 9, motelCount: 7, ownerCount: 11 },
  { fips: "18177", name: "Wayne County, IN", stateAbbr: "IN", slug: "wayne-county-in", propertyCount: 15, hotelCount: 8, motelCount: 7, ownerCount: 11 },
  { fips: "18167", name: "Vigo County, IN", stateAbbr: "IN", slug: "vigo-county-in", propertyCount: 14, hotelCount: 8, motelCount: 6, ownerCount: 10 },
];

// IA counties (top 15 by property count)
const IA_COUNTIES: CountySummary[] = [
  { fips: "19153", name: "Polk County, IA", stateAbbr: "IA", slug: "polk-county-ia", propertyCount: 73, hotelCount: 40, motelCount: 33, ownerCount: 51 },
  { fips: "19163", name: "Scott County, IA", stateAbbr: "IA", slug: "scott-county-ia", propertyCount: 32, hotelCount: 18, motelCount: 14, ownerCount: 22 },
  { fips: "19113", name: "Linn County, IA", stateAbbr: "IA", slug: "linn-county-ia", propertyCount: 30, hotelCount: 17, motelCount: 13, ownerCount: 21 },
  { fips: "19061", name: "Dubuque County, IA", stateAbbr: "IA", slug: "dubuque-county-ia", propertyCount: 27, hotelCount: 15, motelCount: 12, ownerCount: 19 },
  { fips: "19013", name: "Black Hawk County, IA", stateAbbr: "IA", slug: "black-hawk-county-ia", propertyCount: 26, hotelCount: 14, motelCount: 12, ownerCount: 18 },
  { fips: "19155", name: "Pottawattamie County, IA", stateAbbr: "IA", slug: "pottawattamie-county-ia", propertyCount: 23, hotelCount: 13, motelCount: 10, ownerCount: 16 },
  { fips: "19033", name: "Cerro Gordo County, IA", stateAbbr: "IA", slug: "cerro-gordo-county-ia", propertyCount: 22, hotelCount: 12, motelCount: 10, ownerCount: 15 },
  { fips: "19103", name: "Johnson County, IA", stateAbbr: "IA", slug: "johnson-county-ia", propertyCount: 17, hotelCount: 9, motelCount: 8, ownerCount: 12 },
  { fips: "19193", name: "Woodbury County, IA", stateAbbr: "IA", slug: "woodbury-county-ia", propertyCount: 17, hotelCount: 9, motelCount: 8, ownerCount: 12 },
  { fips: "19059", name: "Dickinson County, IA", stateAbbr: "IA", slug: "dickinson-county-ia", propertyCount: 15, hotelCount: 8, motelCount: 7, ownerCount: 11 },
  { fips: "19057", name: "Des Moines County, IA", stateAbbr: "IA", slug: "des-moines-county-ia", propertyCount: 13, hotelCount: 7, motelCount: 6, ownerCount: 9 },
  { fips: "19169", name: "Story County, IA", stateAbbr: "IA", slug: "story-county-ia", propertyCount: 13, hotelCount: 7, motelCount: 6, ownerCount: 9 },
  { fips: "19045", name: "Clinton County, IA", stateAbbr: "IA", slug: "clinton-county-ia", propertyCount: 10, hotelCount: 6, motelCount: 4, ownerCount: 7 },
  { fips: "19099", name: "Jasper County, IA", stateAbbr: "IA", slug: "jasper-county-ia", propertyCount: 10, hotelCount: 6, motelCount: 4, ownerCount: 7 },
  { fips: "19111", name: "Lee County, IA", stateAbbr: "IA", slug: "lee-county-ia", propertyCount: 10, hotelCount: 6, motelCount: 4, ownerCount: 7 },
];

// KS counties (top 15 by property count)
const KS_COUNTIES: CountySummary[] = [
  { fips: "20173", name: "Sedgwick County, KS", stateAbbr: "KS", slug: "sedgwick-county-ks", propertyCount: 76, hotelCount: 42, motelCount: 34, ownerCount: 53 },
  { fips: "20091", name: "Johnson County, KS", stateAbbr: "KS", slug: "johnson-county-ks", propertyCount: 64, hotelCount: 35, motelCount: 29, ownerCount: 45 },
  { fips: "20177", name: "Shawnee County, KS", stateAbbr: "KS", slug: "shawnee-county-ks", propertyCount: 33, hotelCount: 18, motelCount: 15, ownerCount: 23 },
  { fips: "20169", name: "Saline County, KS", stateAbbr: "KS", slug: "saline-county-ks", propertyCount: 17, hotelCount: 9, motelCount: 8, ownerCount: 12 },
  { fips: "20045", name: "Douglas County, KS", stateAbbr: "KS", slug: "douglas-county-ks", propertyCount: 16, hotelCount: 9, motelCount: 7, ownerCount: 11 },
  { fips: "20051", name: "Ellis County, KS", stateAbbr: "KS", slug: "ellis-county-ks", propertyCount: 11, hotelCount: 6, motelCount: 5, ownerCount: 8 },
  { fips: "20209", name: "Wyandotte County, KS", stateAbbr: "KS", slug: "wyandotte-county-ks", propertyCount: 11, hotelCount: 6, motelCount: 5, ownerCount: 8 },
  { fips: "20061", name: "Geary County, KS", stateAbbr: "KS", slug: "geary-county-ks", propertyCount: 10, hotelCount: 6, motelCount: 4, ownerCount: 7 },
  { fips: "20155", name: "Reno County, KS", stateAbbr: "KS", slug: "reno-county-ks", propertyCount: 10, hotelCount: 6, motelCount: 4, ownerCount: 7 },
  { fips: "20175", name: "Seward County, KS", stateAbbr: "KS", slug: "seward-county-ks", propertyCount: 10, hotelCount: 6, motelCount: 4, ownerCount: 7 },
  { fips: "20009", name: "Barton County, KS", stateAbbr: "KS", slug: "barton-county-ks", propertyCount: 9, hotelCount: 5, motelCount: 4, ownerCount: 6 },
  { fips: "20057", name: "Ford County, KS", stateAbbr: "KS", slug: "ford-county-ks", propertyCount: 9, hotelCount: 5, motelCount: 4, ownerCount: 6 },
  { fips: "20113", name: "McPherson County, KS", stateAbbr: "KS", slug: "mcpherson-county-ks", propertyCount: 9, hotelCount: 5, motelCount: 4, ownerCount: 6 },
  { fips: "20015", name: "Butler County, KS", stateAbbr: "KS", slug: "butler-county-ks", propertyCount: 8, hotelCount: 4, motelCount: 4, ownerCount: 6 },
  { fips: "20055", name: "Finney County, KS", stateAbbr: "KS", slug: "finney-county-ks", propertyCount: 8, hotelCount: 4, motelCount: 4, ownerCount: 6 },
];

// KY counties (top 15 by property count)
const KY_COUNTIES: CountySummary[] = [
  { fips: "21111", name: "Jefferson County, KY", stateAbbr: "KY", slug: "jefferson-county-ky", propertyCount: 85, hotelCount: 47, motelCount: 38, ownerCount: 59 },
  { fips: "21067", name: "Fayette County, KY", stateAbbr: "KY", slug: "fayette-county-ky", propertyCount: 69, hotelCount: 38, motelCount: 31, ownerCount: 48 },
  { fips: "21015", name: "Boone County, KY", stateAbbr: "KY", slug: "boone-county-ky", propertyCount: 26, hotelCount: 14, motelCount: 12, ownerCount: 18 },
  { fips: "21117", name: "Kenton County, KY", stateAbbr: "KY", slug: "kenton-county-ky", propertyCount: 26, hotelCount: 14, motelCount: 12, ownerCount: 18 },
  { fips: "21145", name: "McCracken County, KY", stateAbbr: "KY", slug: "mccracken-county-ky", propertyCount: 25, hotelCount: 14, motelCount: 11, ownerCount: 18 },
  { fips: "21151", name: "Madison County, KY", stateAbbr: "KY", slug: "madison-county-ky", propertyCount: 23, hotelCount: 13, motelCount: 10, ownerCount: 16 },
  { fips: "21157", name: "Marshall County, KY", stateAbbr: "KY", slug: "marshall-county-ky", propertyCount: 22, hotelCount: 12, motelCount: 10, ownerCount: 15 },
  { fips: "21227", name: "Warren County, KY", stateAbbr: "KY", slug: "warren-county-ky", propertyCount: 19, hotelCount: 10, motelCount: 9, ownerCount: 13 },
  { fips: "21059", name: "Daviess County, KY", stateAbbr: "KY", slug: "daviess-county-ky", propertyCount: 18, hotelCount: 10, motelCount: 8, ownerCount: 13 },
  { fips: "21093", name: "Hardin County, KY", stateAbbr: "KY", slug: "hardin-county-ky", propertyCount: 18, hotelCount: 10, motelCount: 8, ownerCount: 13 },
  { fips: "21235", name: "Whitley County, KY", stateAbbr: "KY", slug: "whitley-county-ky", propertyCount: 16, hotelCount: 9, motelCount: 7, ownerCount: 11 },
  { fips: "21009", name: "Barren County, KY", stateAbbr: "KY", slug: "barren-county-ky", propertyCount: 14, hotelCount: 8, motelCount: 6, ownerCount: 10 },
  { fips: "21019", name: "Boyd County, KY", stateAbbr: "KY", slug: "boyd-county-ky", propertyCount: 14, hotelCount: 8, motelCount: 6, ownerCount: 10 },
  { fips: "21125", name: "Laurel County, KY", stateAbbr: "KY", slug: "laurel-county-ky", propertyCount: 14, hotelCount: 8, motelCount: 6, ownerCount: 10 },
  { fips: "21199", name: "Pulaski County, KY", stateAbbr: "KY", slug: "pulaski-county-ky", propertyCount: 11, hotelCount: 6, motelCount: 5, ownerCount: 8 },
];

// LA counties (top 15 by property count)
const LA_COUNTIES: CountySummary[] = [
  { fips: "22071", name: "Orleans Parish, LA", stateAbbr: "LA", slug: "orleans-parish-la", propertyCount: 163, hotelCount: 90, motelCount: 73, ownerCount: 114 },
  { fips: "22051", name: "Jefferson Parish, LA", stateAbbr: "LA", slug: "jefferson-parish-la", propertyCount: 71, hotelCount: 39, motelCount: 32, ownerCount: 50 },
  { fips: "22033", name: "East Baton Rouge Parish, LA", stateAbbr: "LA", slug: "east-baton-rouge-parish-la", propertyCount: 49, hotelCount: 27, motelCount: 22, ownerCount: 34 },
  { fips: "22073", name: "Ouachita Parish, LA", stateAbbr: "LA", slug: "ouachita-parish-la", propertyCount: 36, hotelCount: 20, motelCount: 16, ownerCount: 25 },
  { fips: "22103", name: "St. Tammany Parish, LA", stateAbbr: "LA", slug: "st-tammany-parish-la", propertyCount: 35, hotelCount: 19, motelCount: 16, ownerCount: 25 },
  { fips: "22017", name: "Caddo Parish, LA", stateAbbr: "LA", slug: "caddo-parish-la", propertyCount: 32, hotelCount: 18, motelCount: 14, ownerCount: 22 },
  { fips: "22015", name: "Bossier Parish, LA", stateAbbr: "LA", slug: "bossier-parish-la", propertyCount: 29, hotelCount: 16, motelCount: 13, ownerCount: 20 },
  { fips: "22019", name: "Calcasieu Parish, LA", stateAbbr: "LA", slug: "calcasieu-parish-la", propertyCount: 29, hotelCount: 16, motelCount: 13, ownerCount: 20 },
  { fips: "22055", name: "Lafayette Parish, LA", stateAbbr: "LA", slug: "lafayette-parish-la", propertyCount: 29, hotelCount: 16, motelCount: 13, ownerCount: 20 },
  { fips: "22069", name: "Natchitoches Parish, LA", stateAbbr: "LA", slug: "natchitoches-parish-la", propertyCount: 23, hotelCount: 13, motelCount: 10, ownerCount: 16 },
  { fips: "22079", name: "Rapides Parish, LA", stateAbbr: "LA", slug: "rapides-parish-la", propertyCount: 23, hotelCount: 13, motelCount: 10, ownerCount: 16 },
  { fips: "22105", name: "Tangipahoa Parish, LA", stateAbbr: "LA", slug: "tangipahoa-parish-la", propertyCount: 16, hotelCount: 9, motelCount: 7, ownerCount: 11 },
  { fips: "22057", name: "Lafourche Parish, LA", stateAbbr: "LA", slug: "lafourche-parish-la", propertyCount: 15, hotelCount: 8, motelCount: 7, ownerCount: 11 },
  { fips: "22061", name: "Lincoln Parish, LA", stateAbbr: "LA", slug: "lincoln-parish-la", propertyCount: 13, hotelCount: 7, motelCount: 6, ownerCount: 9 },
  { fips: "22005", name: "Ascension Parish, LA", stateAbbr: "LA", slug: "ascension-parish-la", propertyCount: 11, hotelCount: 6, motelCount: 5, ownerCount: 8 },
];

// ME counties (top 15 by property count)
const ME_COUNTIES: CountySummary[] = [
  { fips: "23031", name: "York County, ME", stateAbbr: "ME", slug: "york-county-me", propertyCount: 220, hotelCount: 121, motelCount: 99, ownerCount: 154 },
  { fips: "23009", name: "Hancock County, ME", stateAbbr: "ME", slug: "hancock-county-me", propertyCount: 114, hotelCount: 63, motelCount: 51, ownerCount: 80 },
  { fips: "23005", name: "Cumberland County, ME", stateAbbr: "ME", slug: "cumberland-county-me", propertyCount: 94, hotelCount: 52, motelCount: 42, ownerCount: 66 },
  { fips: "23015", name: "Lincoln County, ME", stateAbbr: "ME", slug: "lincoln-county-me", propertyCount: 56, hotelCount: 31, motelCount: 25, ownerCount: 39 },
  { fips: "23019", name: "Penobscot County, ME", stateAbbr: "ME", slug: "penobscot-county-me", propertyCount: 45, hotelCount: 25, motelCount: 20, ownerCount: 31 },
  { fips: "23013", name: "Knox County, ME", stateAbbr: "ME", slug: "knox-county-me", propertyCount: 39, hotelCount: 21, motelCount: 18, ownerCount: 27 },
  { fips: "23017", name: "Oxford County, ME", stateAbbr: "ME", slug: "oxford-county-me", propertyCount: 29, hotelCount: 16, motelCount: 13, ownerCount: 20 },
  { fips: "23003", name: "Aroostook County, ME", stateAbbr: "ME", slug: "aroostook-county-me", propertyCount: 23, hotelCount: 13, motelCount: 10, ownerCount: 16 },
  { fips: "23025", name: "Somerset County, ME", stateAbbr: "ME", slug: "somerset-county-me", propertyCount: 20, hotelCount: 11, motelCount: 9, ownerCount: 14 },
  { fips: "23027", name: "Waldo County, ME", stateAbbr: "ME", slug: "waldo-county-me", propertyCount: 20, hotelCount: 11, motelCount: 9, ownerCount: 14 },
  { fips: "23029", name: "Washington County, ME", stateAbbr: "ME", slug: "washington-county-me", propertyCount: 17, hotelCount: 9, motelCount: 8, ownerCount: 12 },
  { fips: "23011", name: "Kennebec County, ME", stateAbbr: "ME", slug: "kennebec-county-me", propertyCount: 16, hotelCount: 9, motelCount: 7, ownerCount: 11 },
  { fips: "23021", name: "Piscataquis County, ME", stateAbbr: "ME", slug: "piscataquis-county-me", propertyCount: 13, hotelCount: 7, motelCount: 6, ownerCount: 9 },
  { fips: "23007", name: "Franklin County, ME", stateAbbr: "ME", slug: "franklin-county-me", propertyCount: 12, hotelCount: 7, motelCount: 5, ownerCount: 8 },
  { fips: "23001", name: "Androscoggin County, ME", stateAbbr: "ME", slug: "androscoggin-county-me", propertyCount: 11, hotelCount: 6, motelCount: 5, ownerCount: 8 },
];

// MD counties (top 15 by property count)
const MD_COUNTIES: CountySummary[] = [
  { fips: "24047", name: "Worcester County, MD", stateAbbr: "MD", slug: "worcester-county-md", propertyCount: 102, hotelCount: 56, motelCount: 46, ownerCount: 71 },
  { fips: "24031", name: "Montgomery County, MD", stateAbbr: "MD", slug: "montgomery-county-md", propertyCount: 78, hotelCount: 43, motelCount: 35, ownerCount: 55 },
  { fips: "24033", name: "Prince George's County, MD", stateAbbr: "MD", slug: "prince-george-s-county-md", propertyCount: 58, hotelCount: 32, motelCount: 26, ownerCount: 41 },
  { fips: "24003", name: "Anne Arundel County, MD", stateAbbr: "MD", slug: "anne-arundel-county-md", propertyCount: 56, hotelCount: 31, motelCount: 25, ownerCount: 39 },
  { fips: "24005", name: "Baltimore County, MD", stateAbbr: "MD", slug: "baltimore-county-md", propertyCount: 52, hotelCount: 29, motelCount: 23, ownerCount: 36 },
  { fips: "24510", name: "Baltimore city, MD", stateAbbr: "MD", slug: "baltimore-city-md", propertyCount: 37, hotelCount: 20, motelCount: 17, ownerCount: 26 },
  { fips: "24027", name: "Howard County, MD", stateAbbr: "MD", slug: "howard-county-md", propertyCount: 35, hotelCount: 19, motelCount: 16, ownerCount: 25 },
  { fips: "24025", name: "Harford County, MD", stateAbbr: "MD", slug: "harford-county-md", propertyCount: 25, hotelCount: 14, motelCount: 11, ownerCount: 18 },
  { fips: "24041", name: "Talbot County, MD", stateAbbr: "MD", slug: "talbot-county-md", propertyCount: 22, hotelCount: 12, motelCount: 10, ownerCount: 15 },
  { fips: "24015", name: "Cecil County, MD", stateAbbr: "MD", slug: "cecil-county-md", propertyCount: 20, hotelCount: 11, motelCount: 9, ownerCount: 14 },
  { fips: "24021", name: "Frederick County, MD", stateAbbr: "MD", slug: "frederick-county-md", propertyCount: 19, hotelCount: 10, motelCount: 9, ownerCount: 13 },
  { fips: "24023", name: "Garrett County, MD", stateAbbr: "MD", slug: "garrett-county-md", propertyCount: 19, hotelCount: 10, motelCount: 9, ownerCount: 13 },
  { fips: "24043", name: "Washington County, MD", stateAbbr: "MD", slug: "washington-county-md", propertyCount: 18, hotelCount: 10, motelCount: 8, ownerCount: 13 },
  { fips: "24001", name: "Allegany County, MD", stateAbbr: "MD", slug: "allegany-county-md", propertyCount: 16, hotelCount: 9, motelCount: 7, ownerCount: 11 },
  { fips: "24017", name: "Charles County, MD", stateAbbr: "MD", slug: "charles-county-md", propertyCount: 16, hotelCount: 9, motelCount: 7, ownerCount: 11 },
];

// MA counties (top 14 by property count)
const MA_COUNTIES: CountySummary[] = [
  { fips: "25001", name: "Barnstable County, MA", stateAbbr: "MA", slug: "barnstable-county-ma", propertyCount: 286, hotelCount: 157, motelCount: 129, ownerCount: 200 },
  { fips: "25017", name: "Middlesex County, MA", stateAbbr: "MA", slug: "middlesex-county-ma", propertyCount: 119, hotelCount: 65, motelCount: 54, ownerCount: 83 },
  { fips: "25009", name: "Essex County, MA", stateAbbr: "MA", slug: "essex-county-ma", propertyCount: 91, hotelCount: 50, motelCount: 41, ownerCount: 64 },
  { fips: "25003", name: "Berkshire County, MA", stateAbbr: "MA", slug: "berkshire-county-ma", propertyCount: 79, hotelCount: 43, motelCount: 36, ownerCount: 55 },
  { fips: "25025", name: "Suffolk County, MA", stateAbbr: "MA", slug: "suffolk-county-ma", propertyCount: 70, hotelCount: 39, motelCount: 31, ownerCount: 49 },
  { fips: "25027", name: "Worcester County, MA", stateAbbr: "MA", slug: "worcester-county-ma", propertyCount: 64, hotelCount: 35, motelCount: 29, ownerCount: 45 },
  { fips: "25021", name: "Norfolk County, MA", stateAbbr: "MA", slug: "norfolk-county-ma", propertyCount: 43, hotelCount: 24, motelCount: 19, ownerCount: 30 },
  { fips: "25013", name: "Hampden County, MA", stateAbbr: "MA", slug: "hampden-county-ma", propertyCount: 35, hotelCount: 19, motelCount: 16, ownerCount: 25 },
  { fips: "25023", name: "Plymouth County, MA", stateAbbr: "MA", slug: "plymouth-county-ma", propertyCount: 34, hotelCount: 19, motelCount: 15, ownerCount: 24 },
  { fips: "25007", name: "Dukes County, MA", stateAbbr: "MA", slug: "dukes-county-ma", propertyCount: 33, hotelCount: 18, motelCount: 15, ownerCount: 23 },
  { fips: "25005", name: "Bristol County, MA", stateAbbr: "MA", slug: "bristol-county-ma", propertyCount: 30, hotelCount: 17, motelCount: 13, ownerCount: 21 },
  { fips: "25019", name: "Nantucket County, MA", stateAbbr: "MA", slug: "nantucket-county-ma", propertyCount: 30, hotelCount: 17, motelCount: 13, ownerCount: 21 },
  { fips: "25015", name: "Hampshire County, MA", stateAbbr: "MA", slug: "hampshire-county-ma", propertyCount: 20, hotelCount: 11, motelCount: 9, ownerCount: 14 },
  { fips: "25011", name: "Franklin County, MA", stateAbbr: "MA", slug: "franklin-county-ma", propertyCount: 6, hotelCount: 3, motelCount: 3, ownerCount: 4 },
];

// MI counties (top 15 by property count)
const MI_COUNTIES: CountySummary[] = [
  { fips: "26163", name: "Wayne County, MI", stateAbbr: "MI", slug: "wayne-county-mi", propertyCount: 168, hotelCount: 92, motelCount: 76, ownerCount: 118 },
  { fips: "26125", name: "Oakland County, MI", stateAbbr: "MI", slug: "oakland-county-mi", propertyCount: 135, hotelCount: 74, motelCount: 61, ownerCount: 95 },
  { fips: "26081", name: "Kent County, MI", stateAbbr: "MI", slug: "kent-county-mi", propertyCount: 52, hotelCount: 29, motelCount: 23, ownerCount: 36 },
  { fips: "26097", name: "Mackinac County, MI", stateAbbr: "MI", slug: "mackinac-county-mi", propertyCount: 52, hotelCount: 29, motelCount: 23, ownerCount: 36 },
  { fips: "26099", name: "Macomb County, MI", stateAbbr: "MI", slug: "macomb-county-mi", propertyCount: 49, hotelCount: 27, motelCount: 22, ownerCount: 34 },
  { fips: "26055", name: "Grand Traverse County, MI", stateAbbr: "MI", slug: "grand-traverse-county-mi", propertyCount: 47, hotelCount: 26, motelCount: 21, ownerCount: 33 },
  { fips: "26047", name: "Emmet County, MI", stateAbbr: "MI", slug: "emmet-county-mi", propertyCount: 46, hotelCount: 25, motelCount: 21, ownerCount: 32 },
  { fips: "26021", name: "Berrien County, MI", stateAbbr: "MI", slug: "berrien-county-mi", propertyCount: 43, hotelCount: 24, motelCount: 19, ownerCount: 30 },
  { fips: "26049", name: "Genesee County, MI", stateAbbr: "MI", slug: "genesee-county-mi", propertyCount: 40, hotelCount: 22, motelCount: 18, ownerCount: 28 },
  { fips: "26033", name: "Chippewa County, MI", stateAbbr: "MI", slug: "chippewa-county-mi", propertyCount: 36, hotelCount: 20, motelCount: 16, ownerCount: 25 },
  { fips: "26161", name: "Washtenaw County, MI", stateAbbr: "MI", slug: "washtenaw-county-mi", propertyCount: 36, hotelCount: 20, motelCount: 16, ownerCount: 25 },
  { fips: "26145", name: "Saginaw County, MI", stateAbbr: "MI", slug: "saginaw-county-mi", propertyCount: 31, hotelCount: 17, motelCount: 14, ownerCount: 22 },
  { fips: "26031", name: "Cheboygan County, MI", stateAbbr: "MI", slug: "cheboygan-county-mi", propertyCount: 30, hotelCount: 17, motelCount: 13, ownerCount: 21 },
  { fips: "26065", name: "Ingham County, MI", stateAbbr: "MI", slug: "ingham-county-mi", propertyCount: 30, hotelCount: 17, motelCount: 13, ownerCount: 21 },
  { fips: "26005", name: "Allegan County, MI", stateAbbr: "MI", slug: "allegan-county-mi", propertyCount: 23, hotelCount: 13, motelCount: 10, ownerCount: 16 },
];

// MN counties (top 15 by property count)
const MN_COUNTIES: CountySummary[] = [
  { fips: "27053", name: "Hennepin County, MN", stateAbbr: "MN", slug: "hennepin-county-mn", propertyCount: 135, hotelCount: 74, motelCount: 61, ownerCount: 95 },
  { fips: "27137", name: "St. Louis County, MN", stateAbbr: "MN", slug: "st-louis-county-mn", propertyCount: 98, hotelCount: 54, motelCount: 44, ownerCount: 69 },
  { fips: "27109", name: "Olmsted County, MN", stateAbbr: "MN", slug: "olmsted-county-mn", propertyCount: 51, hotelCount: 28, motelCount: 23, ownerCount: 36 },
  { fips: "27035", name: "Crow Wing County, MN", stateAbbr: "MN", slug: "crow-wing-county-mn", propertyCount: 42, hotelCount: 23, motelCount: 19, ownerCount: 29 },
  { fips: "27021", name: "Cass County, MN", stateAbbr: "MN", slug: "cass-county-mn", propertyCount: 41, hotelCount: 23, motelCount: 18, ownerCount: 29 },
  { fips: "27123", name: "Ramsey County, MN", stateAbbr: "MN", slug: "ramsey-county-mn", propertyCount: 38, hotelCount: 21, motelCount: 17, ownerCount: 27 },
  { fips: "27145", name: "Stearns County, MN", stateAbbr: "MN", slug: "stearns-county-mn", propertyCount: 36, hotelCount: 20, motelCount: 16, ownerCount: 25 },
  { fips: "27031", name: "Cook County, MN", stateAbbr: "MN", slug: "cook-county-mn", propertyCount: 35, hotelCount: 19, motelCount: 16, ownerCount: 25 },
  { fips: "27037", name: "Dakota County, MN", stateAbbr: "MN", slug: "dakota-county-mn", propertyCount: 35, hotelCount: 19, motelCount: 16, ownerCount: 25 },
  { fips: "27111", name: "Otter Tail County, MN", stateAbbr: "MN", slug: "otter-tail-county-mn", propertyCount: 28, hotelCount: 15, motelCount: 13, ownerCount: 20 },
  { fips: "27163", name: "Washington County, MN", stateAbbr: "MN", slug: "washington-county-mn", propertyCount: 28, hotelCount: 15, motelCount: 13, ownerCount: 20 },
  { fips: "27003", name: "Anoka County, MN", stateAbbr: "MN", slug: "anoka-county-mn", propertyCount: 25, hotelCount: 14, motelCount: 11, ownerCount: 18 },
  { fips: "27041", name: "Douglas County, MN", stateAbbr: "MN", slug: "douglas-county-mn", propertyCount: 24, hotelCount: 13, motelCount: 11, ownerCount: 17 },
  { fips: "27005", name: "Becker County, MN", stateAbbr: "MN", slug: "becker-county-mn", propertyCount: 23, hotelCount: 13, motelCount: 10, ownerCount: 16 },
  { fips: "27067", name: "Kandiyohi County, MN", stateAbbr: "MN", slug: "kandiyohi-county-mn", propertyCount: 23, hotelCount: 13, motelCount: 10, ownerCount: 16 },
];

// MS counties (top 15 by property count)
const MS_COUNTIES: CountySummary[] = [
  { fips: "28047", name: "Harrison County, MS", stateAbbr: "MS", slug: "harrison-county-ms", propertyCount: 78, hotelCount: 43, motelCount: 35, ownerCount: 55 },
  { fips: "28049", name: "Hinds County, MS", stateAbbr: "MS", slug: "hinds-county-ms", propertyCount: 62, hotelCount: 34, motelCount: 28, ownerCount: 43 },
  { fips: "28059", name: "Jackson County, MS", stateAbbr: "MS", slug: "jackson-county-ms", propertyCount: 31, hotelCount: 17, motelCount: 14, ownerCount: 22 },
  { fips: "28089", name: "Madison County, MS", stateAbbr: "MS", slug: "madison-county-ms", propertyCount: 25, hotelCount: 14, motelCount: 11, ownerCount: 18 },
  { fips: "28149", name: "Warren County, MS", stateAbbr: "MS", slug: "warren-county-ms", propertyCount: 25, hotelCount: 14, motelCount: 11, ownerCount: 18 },
  { fips: "28075", name: "Lauderdale County, MS", stateAbbr: "MS", slug: "lauderdale-county-ms", propertyCount: 24, hotelCount: 13, motelCount: 11, ownerCount: 17 },
  { fips: "28081", name: "Lee County, MS", stateAbbr: "MS", slug: "lee-county-ms", propertyCount: 22, hotelCount: 12, motelCount: 10, ownerCount: 15 },
  { fips: "28121", name: "Rankin County, MS", stateAbbr: "MS", slug: "rankin-county-ms", propertyCount: 21, hotelCount: 12, motelCount: 9, ownerCount: 15 },
  { fips: "28033", name: "DeSoto County, MS", stateAbbr: "MS", slug: "desoto-county-ms", propertyCount: 19, hotelCount: 10, motelCount: 9, ownerCount: 13 },
  { fips: "28001", name: "Adams County, MS", stateAbbr: "MS", slug: "adams-county-ms", propertyCount: 18, hotelCount: 10, motelCount: 8, ownerCount: 13 },
  { fips: "28035", name: "Forrest County, MS", stateAbbr: "MS", slug: "forrest-county-ms", propertyCount: 17, hotelCount: 9, motelCount: 8, ownerCount: 12 },
  { fips: "28087", name: "Lowndes County, MS", stateAbbr: "MS", slug: "lowndes-county-ms", propertyCount: 17, hotelCount: 9, motelCount: 8, ownerCount: 12 },
  { fips: "28151", name: "Washington County, MS", stateAbbr: "MS", slug: "washington-county-ms", propertyCount: 16, hotelCount: 9, motelCount: 7, ownerCount: 11 },
  { fips: "28067", name: "Jones County, MS", stateAbbr: "MS", slug: "jones-county-ms", propertyCount: 12, hotelCount: 7, motelCount: 5, ownerCount: 8 },
  { fips: "28143", name: "Tunica County, MS", stateAbbr: "MS", slug: "tunica-county-ms", propertyCount: 12, hotelCount: 7, motelCount: 5, ownerCount: 8 },
];

// MO counties (top 15 by property count)
const MO_COUNTIES: CountySummary[] = [
  { fips: "29213", name: "Taney County, MO", stateAbbr: "MO", slug: "taney-county-mo", propertyCount: 152, hotelCount: 84, motelCount: 68, ownerCount: 106 },
  { fips: "29189", name: "St. Louis County, MO", stateAbbr: "MO", slug: "st-louis-county-mo", propertyCount: 115, hotelCount: 63, motelCount: 52, ownerCount: 81 },
  { fips: "29095", name: "Jackson County, MO", stateAbbr: "MO", slug: "jackson-county-mo", propertyCount: 79, hotelCount: 43, motelCount: 36, ownerCount: 55 },
  { fips: "29077", name: "Greene County, MO", stateAbbr: "MO", slug: "greene-county-mo", propertyCount: 61, hotelCount: 34, motelCount: 27, ownerCount: 43 },
  { fips: "29029", name: "Camden County, MO", stateAbbr: "MO", slug: "camden-county-mo", propertyCount: 54, hotelCount: 30, motelCount: 24, ownerCount: 38 },
  { fips: "29510", name: "St. Louis city, MO", stateAbbr: "MO", slug: "st-louis-city-mo", propertyCount: 39, hotelCount: 21, motelCount: 18, ownerCount: 27 },
  { fips: "29047", name: "Clay County, MO", stateAbbr: "MO", slug: "clay-county-mo", propertyCount: 29, hotelCount: 16, motelCount: 13, ownerCount: 20 },
  { fips: "29019", name: "Boone County, MO", stateAbbr: "MO", slug: "boone-county-mo", propertyCount: 28, hotelCount: 15, motelCount: 13, ownerCount: 20 },
  { fips: "29165", name: "Platte County, MO", stateAbbr: "MO", slug: "platte-county-mo", propertyCount: 28, hotelCount: 15, motelCount: 13, ownerCount: 20 },
  { fips: "29183", name: "St. Charles County, MO", stateAbbr: "MO", slug: "st-charles-county-mo", propertyCount: 25, hotelCount: 14, motelCount: 11, ownerCount: 18 },
  { fips: "29209", name: "Stone County, MO", stateAbbr: "MO", slug: "stone-county-mo", propertyCount: 23, hotelCount: 13, motelCount: 10, ownerCount: 16 },
  { fips: "29051", name: "Cole County, MO", stateAbbr: "MO", slug: "cole-county-mo", propertyCount: 20, hotelCount: 11, motelCount: 9, ownerCount: 14 },
  { fips: "29097", name: "Jasper County, MO", stateAbbr: "MO", slug: "jasper-county-mo", propertyCount: 16, hotelCount: 9, motelCount: 7, ownerCount: 11 },
  { fips: "29161", name: "Phelps County, MO", stateAbbr: "MO", slug: "phelps-county-mo", propertyCount: 16, hotelCount: 9, motelCount: 7, ownerCount: 11 },
  { fips: "29105", name: "Laclede County, MO", stateAbbr: "MO", slug: "laclede-county-mo", propertyCount: 15, hotelCount: 8, motelCount: 7, ownerCount: 11 },
];

// MT counties (top 15 by property count)
const MT_COUNTIES: CountySummary[] = [
  { fips: "30031", name: "Gallatin County, MT", stateAbbr: "MT", slug: "gallatin-county-mt", propertyCount: 66, hotelCount: 36, motelCount: 30, ownerCount: 46 },
  { fips: "30029", name: "Flathead County, MT", stateAbbr: "MT", slug: "flathead-county-mt", propertyCount: 65, hotelCount: 36, motelCount: 29, ownerCount: 46 },
  { fips: "30111", name: "Yellowstone County, MT", stateAbbr: "MT", slug: "yellowstone-county-mt", propertyCount: 46, hotelCount: 25, motelCount: 21, ownerCount: 32 },
  { fips: "30063", name: "Missoula County, MT", stateAbbr: "MT", slug: "missoula-county-mt", propertyCount: 43, hotelCount: 24, motelCount: 19, ownerCount: 30 },
  { fips: "30067", name: "Park County, MT", stateAbbr: "MT", slug: "park-county-mt", propertyCount: 34, hotelCount: 19, motelCount: 15, ownerCount: 24 },
  { fips: "30013", name: "Cascade County, MT", stateAbbr: "MT", slug: "cascade-county-mt", propertyCount: 28, hotelCount: 15, motelCount: 13, ownerCount: 20 },
  { fips: "30049", name: "Lewis and Clark County, MT", stateAbbr: "MT", slug: "lewis-and-clark-county-mt", propertyCount: 27, hotelCount: 15, motelCount: 12, ownerCount: 19 },
  { fips: "30057", name: "Madison County, MT", stateAbbr: "MT", slug: "madison-county-mt", propertyCount: 17, hotelCount: 9, motelCount: 8, ownerCount: 12 },
  { fips: "30035", name: "Glacier County, MT", stateAbbr: "MT", slug: "glacier-county-mt", propertyCount: 16, hotelCount: 9, motelCount: 7, ownerCount: 11 },
  { fips: "30093", name: "Silver Bow County, MT", stateAbbr: "MT", slug: "silver-bow-county-mt", propertyCount: 14, hotelCount: 8, motelCount: 6, ownerCount: 10 },
  { fips: "30047", name: "Lake County, MT", stateAbbr: "MT", slug: "lake-county-mt", propertyCount: 11, hotelCount: 6, motelCount: 5, ownerCount: 8 },
  { fips: "30017", name: "Custer County, MT", stateAbbr: "MT", slug: "custer-county-mt", propertyCount: 10, hotelCount: 6, motelCount: 4, ownerCount: 7 },
  { fips: "30081", name: "Ravalli County, MT", stateAbbr: "MT", slug: "ravalli-county-mt", propertyCount: 10, hotelCount: 6, motelCount: 4, ownerCount: 7 },
  { fips: "30009", name: "Carbon County, MT", stateAbbr: "MT", slug: "carbon-county-mt", propertyCount: 8, hotelCount: 4, motelCount: 4, ownerCount: 6 },
  { fips: "30021", name: "Dawson County, MT", stateAbbr: "MT", slug: "dawson-county-mt", propertyCount: 8, hotelCount: 4, motelCount: 4, ownerCount: 6 },
];

// NE counties (top 15 by property count)
const NE_COUNTIES: CountySummary[] = [
  { fips: "31055", name: "Douglas County, NE", stateAbbr: "NE", slug: "douglas-county-ne", propertyCount: 51, hotelCount: 28, motelCount: 23, ownerCount: 36 },
  { fips: "31109", name: "Lancaster County, NE", stateAbbr: "NE", slug: "lancaster-county-ne", propertyCount: 40, hotelCount: 22, motelCount: 18, ownerCount: 28 },
  { fips: "31019", name: "Buffalo County, NE", stateAbbr: "NE", slug: "buffalo-county-ne", propertyCount: 22, hotelCount: 12, motelCount: 10, ownerCount: 15 },
  { fips: "31111", name: "Lincoln County, NE", stateAbbr: "NE", slug: "lincoln-county-ne", propertyCount: 20, hotelCount: 11, motelCount: 9, ownerCount: 14 },
  { fips: "31079", name: "Hall County, NE", stateAbbr: "NE", slug: "hall-county-ne", propertyCount: 19, hotelCount: 10, motelCount: 9, ownerCount: 13 },
  { fips: "31101", name: "Keith County, NE", stateAbbr: "NE", slug: "keith-county-ne", propertyCount: 17, hotelCount: 9, motelCount: 8, ownerCount: 12 },
  { fips: "31157", name: "Scotts Bluff County, NE", stateAbbr: "NE", slug: "scotts-bluff-county-ne", propertyCount: 14, hotelCount: 8, motelCount: 6, ownerCount: 10 },
  { fips: "31045", name: "Dawes County, NE", stateAbbr: "NE", slug: "dawes-county-ne", propertyCount: 13, hotelCount: 7, motelCount: 6, ownerCount: 9 },
  { fips: "31153", name: "Sarpy County, NE", stateAbbr: "NE", slug: "sarpy-county-ne", propertyCount: 11, hotelCount: 6, motelCount: 5, ownerCount: 8 },
  { fips: "31031", name: "Cherry County, NE", stateAbbr: "NE", slug: "cherry-county-ne", propertyCount: 9, hotelCount: 5, motelCount: 4, ownerCount: 6 },
  { fips: "31141", name: "Platte County, NE", stateAbbr: "NE", slug: "platte-county-ne", propertyCount: 9, hotelCount: 5, motelCount: 4, ownerCount: 6 },
  { fips: "31185", name: "York County, NE", stateAbbr: "NE", slug: "york-county-ne", propertyCount: 8, hotelCount: 4, motelCount: 4, ownerCount: 6 },
  { fips: "31033", name: "Cheyenne County, NE", stateAbbr: "NE", slug: "cheyenne-county-ne", propertyCount: 7, hotelCount: 4, motelCount: 3, ownerCount: 5 },
  { fips: "31043", name: "Dakota County, NE", stateAbbr: "NE", slug: "dakota-county-ne", propertyCount: 7, hotelCount: 4, motelCount: 3, ownerCount: 5 },
  { fips: "31119", name: "Madison County, NE", stateAbbr: "NE", slug: "madison-county-ne", propertyCount: 7, hotelCount: 4, motelCount: 3, ownerCount: 5 },
];

// NV counties (top 15 by property count)
const NV_COUNTIES: CountySummary[] = [
  { fips: "32003", name: "Clark County, NV", stateAbbr: "NV", slug: "clark-county-nv", propertyCount: 285, hotelCount: 157, motelCount: 128, ownerCount: 200 },
  { fips: "32031", name: "Washoe County, NV", stateAbbr: "NV", slug: "washoe-county-nv", propertyCount: 113, hotelCount: 62, motelCount: 51, ownerCount: 79 },
  { fips: "32007", name: "Elko County, NV", stateAbbr: "NV", slug: "elko-county-nv", propertyCount: 34, hotelCount: 19, motelCount: 15, ownerCount: 24 },
  { fips: "32013", name: "Humboldt County, NV", stateAbbr: "NV", slug: "humboldt-county-nv", propertyCount: 22, hotelCount: 12, motelCount: 10, ownerCount: 15 },
  { fips: "32510", name: "Carson City, NV", stateAbbr: "NV", slug: "carson-city-nv", propertyCount: 21, hotelCount: 12, motelCount: 9, ownerCount: 15 },
  { fips: "32023", name: "Nye County, NV", stateAbbr: "NV", slug: "nye-county-nv", propertyCount: 18, hotelCount: 10, motelCount: 8, ownerCount: 13 },
  { fips: "32005", name: "Douglas County, NV", stateAbbr: "NV", slug: "douglas-county-nv", propertyCount: 17, hotelCount: 9, motelCount: 8, ownerCount: 12 },
  { fips: "32033", name: "White Pine County, NV", stateAbbr: "NV", slug: "white-pine-county-nv", propertyCount: 13, hotelCount: 7, motelCount: 6, ownerCount: 9 },
  { fips: "32001", name: "Churchill County, NV", stateAbbr: "NV", slug: "churchill-county-nv", propertyCount: 12, hotelCount: 7, motelCount: 5, ownerCount: 8 },
  { fips: "32019", name: "Lyon County, NV", stateAbbr: "NV", slug: "lyon-county-nv", propertyCount: 6, hotelCount: 3, motelCount: 3, ownerCount: 4 },
  { fips: "32027", name: "Pershing County, NV", stateAbbr: "NV", slug: "pershing-county-nv", propertyCount: 6, hotelCount: 3, motelCount: 3, ownerCount: 4 },
  { fips: "32015", name: "Lander County, NV", stateAbbr: "NV", slug: "lander-county-nv", propertyCount: 5, hotelCount: 3, motelCount: 2, ownerCount: 4 },
  { fips: "32021", name: "Mineral County, NV", stateAbbr: "NV", slug: "mineral-county-nv", propertyCount: 4, hotelCount: 2, motelCount: 2, ownerCount: 3 },
  { fips: "32017", name: "Lincoln County, NV", stateAbbr: "NV", slug: "lincoln-county-nv", propertyCount: 3, hotelCount: 2, motelCount: 1, ownerCount: 2 },
  { fips: "32011", name: "Eureka County, NV", stateAbbr: "NV", slug: "eureka-county-nv", propertyCount: 2, hotelCount: 1, motelCount: 1, ownerCount: 1 },
];

// NH counties (top 10 by property count)
const NH_COUNTIES: CountySummary[] = [
  { fips: "33015", name: "Rockingham County, NH", stateAbbr: "NH", slug: "rockingham-county-nh", propertyCount: 93, hotelCount: 51, motelCount: 42, ownerCount: 65 },
  { fips: "33009", name: "Grafton County, NH", stateAbbr: "NH", slug: "grafton-county-nh", propertyCount: 91, hotelCount: 50, motelCount: 41, ownerCount: 64 },
  { fips: "33003", name: "Carroll County, NH", stateAbbr: "NH", slug: "carroll-county-nh", propertyCount: 72, hotelCount: 40, motelCount: 32, ownerCount: 50 },
  { fips: "33011", name: "Hillsborough County, NH", stateAbbr: "NH", slug: "hillsborough-county-nh", propertyCount: 42, hotelCount: 23, motelCount: 19, ownerCount: 29 },
  { fips: "33007", name: "Coos County, NH", stateAbbr: "NH", slug: "coos-county-nh", propertyCount: 37, hotelCount: 20, motelCount: 17, ownerCount: 26 },
  { fips: "33001", name: "Belknap County, NH", stateAbbr: "NH", slug: "belknap-county-nh", propertyCount: 31, hotelCount: 17, motelCount: 14, ownerCount: 22 },
  { fips: "33013", name: "Merrimack County, NH", stateAbbr: "NH", slug: "merrimack-county-nh", propertyCount: 26, hotelCount: 14, motelCount: 12, ownerCount: 18 },
  { fips: "33005", name: "Cheshire County, NH", stateAbbr: "NH", slug: "cheshire-county-nh", propertyCount: 15, hotelCount: 8, motelCount: 7, ownerCount: 11 },
  { fips: "33019", name: "Sullivan County, NH", stateAbbr: "NH", slug: "sullivan-county-nh", propertyCount: 11, hotelCount: 6, motelCount: 5, ownerCount: 8 },
  { fips: "33017", name: "Strafford County, NH", stateAbbr: "NH", slug: "strafford-county-nh", propertyCount: 10, hotelCount: 6, motelCount: 4, ownerCount: 7 },
];

// NJ counties (top 15 by property count)
const NJ_COUNTIES: CountySummary[] = [
  { fips: "34009", name: "Cape May County, NJ", stateAbbr: "NJ", slug: "cape-may-county-nj", propertyCount: 333, hotelCount: 183, motelCount: 150, ownerCount: 233 },
  { fips: "34001", name: "Atlantic County, NJ", stateAbbr: "NJ", slug: "atlantic-county-nj", propertyCount: 127, hotelCount: 70, motelCount: 57, ownerCount: 89 },
  { fips: "34029", name: "Ocean County, NJ", stateAbbr: "NJ", slug: "ocean-county-nj", propertyCount: 94, hotelCount: 52, motelCount: 42, ownerCount: 66 },
  { fips: "34025", name: "Monmouth County, NJ", stateAbbr: "NJ", slug: "monmouth-county-nj", propertyCount: 88, hotelCount: 48, motelCount: 40, ownerCount: 62 },
  { fips: "34023", name: "Middlesex County, NJ", stateAbbr: "NJ", slug: "middlesex-county-nj", propertyCount: 78, hotelCount: 43, motelCount: 35, ownerCount: 55 },
  { fips: "34005", name: "Burlington County, NJ", stateAbbr: "NJ", slug: "burlington-county-nj", propertyCount: 77, hotelCount: 42, motelCount: 35, ownerCount: 54 },
  { fips: "34003", name: "Bergen County, NJ", stateAbbr: "NJ", slug: "bergen-county-nj", propertyCount: 62, hotelCount: 34, motelCount: 28, ownerCount: 43 },
  { fips: "34027", name: "Morris County, NJ", stateAbbr: "NJ", slug: "morris-county-nj", propertyCount: 47, hotelCount: 26, motelCount: 21, ownerCount: 33 },
  { fips: "34017", name: "Hudson County, NJ", stateAbbr: "NJ", slug: "hudson-county-nj", propertyCount: 41, hotelCount: 23, motelCount: 18, ownerCount: 29 },
  { fips: "34039", name: "Union County, NJ", stateAbbr: "NJ", slug: "union-county-nj", propertyCount: 40, hotelCount: 22, motelCount: 18, ownerCount: 28 },
  { fips: "34007", name: "Camden County, NJ", stateAbbr: "NJ", slug: "camden-county-nj", propertyCount: 35, hotelCount: 19, motelCount: 16, ownerCount: 25 },
  { fips: "34013", name: "Essex County, NJ", stateAbbr: "NJ", slug: "essex-county-nj", propertyCount: 34, hotelCount: 19, motelCount: 15, ownerCount: 24 },
  { fips: "34021", name: "Mercer County, NJ", stateAbbr: "NJ", slug: "mercer-county-nj", propertyCount: 33, hotelCount: 18, motelCount: 15, ownerCount: 23 },
  { fips: "34035", name: "Somerset County, NJ", stateAbbr: "NJ", slug: "somerset-county-nj", propertyCount: 28, hotelCount: 15, motelCount: 13, ownerCount: 20 },
  { fips: "34037", name: "Sussex County, NJ", stateAbbr: "NJ", slug: "sussex-county-nj", propertyCount: 17, hotelCount: 9, motelCount: 8, ownerCount: 12 },
];

// NM counties (top 15 by property count)
const NM_COUNTIES: CountySummary[] = [
  { fips: "35001", name: "Bernalillo County, NM", stateAbbr: "NM", slug: "bernalillo-county-nm", propertyCount: 143, hotelCount: 79, motelCount: 64, ownerCount: 100 },
  { fips: "35049", name: "Santa Fe County, NM", stateAbbr: "NM", slug: "santa-fe-county-nm", propertyCount: 68, hotelCount: 37, motelCount: 31, ownerCount: 48 },
  { fips: "35055", name: "Taos County, NM", stateAbbr: "NM", slug: "taos-county-nm", propertyCount: 64, hotelCount: 35, motelCount: 29, ownerCount: 45 },
  { fips: "35031", name: "McKinley County, NM", stateAbbr: "NM", slug: "mckinley-county-nm", propertyCount: 35, hotelCount: 19, motelCount: 16, ownerCount: 25 },
  { fips: "35027", name: "Lincoln County, NM", stateAbbr: "NM", slug: "lincoln-county-nm", propertyCount: 31, hotelCount: 17, motelCount: 14, ownerCount: 22 },
  { fips: "35045", name: "San Juan County, NM", stateAbbr: "NM", slug: "san-juan-county-nm", propertyCount: 26, hotelCount: 14, motelCount: 12, ownerCount: 18 },
  { fips: "35039", name: "Rio Arriba County, NM", stateAbbr: "NM", slug: "rio-arriba-county-nm", propertyCount: 25, hotelCount: 14, motelCount: 11, ownerCount: 18 },
  { fips: "35013", name: "Dona Ana County, NM", stateAbbr: "NM", slug: "dona-ana-county-nm", propertyCount: 24, hotelCount: 13, motelCount: 11, ownerCount: 17 },
  { fips: "35007", name: "Colfax County, NM", stateAbbr: "NM", slug: "colfax-county-nm", propertyCount: 23, hotelCount: 13, motelCount: 10, ownerCount: 16 },
  { fips: "35005", name: "Chaves County, NM", stateAbbr: "NM", slug: "chaves-county-nm", propertyCount: 19, hotelCount: 10, motelCount: 9, ownerCount: 13 },
  { fips: "35015", name: "Eddy County, NM", stateAbbr: "NM", slug: "eddy-county-nm", propertyCount: 18, hotelCount: 10, motelCount: 8, ownerCount: 13 },
  { fips: "35037", name: "Quay County, NM", stateAbbr: "NM", slug: "quay-county-nm", propertyCount: 17, hotelCount: 9, motelCount: 8, ownerCount: 12 },
  { fips: "35035", name: "Otero County, NM", stateAbbr: "NM", slug: "otero-county-nm", propertyCount: 16, hotelCount: 9, motelCount: 7, ownerCount: 11 },
  { fips: "35019", name: "Guadalupe County, NM", stateAbbr: "NM", slug: "guadalupe-county-nm", propertyCount: 15, hotelCount: 8, motelCount: 7, ownerCount: 11 },
  { fips: "35043", name: "Sandoval County, NM", stateAbbr: "NM", slug: "sandoval-county-nm", propertyCount: 15, hotelCount: 8, motelCount: 7, ownerCount: 11 },
];

// NY counties (top 15 by property count)
const NY_COUNTIES: CountySummary[] = [
  { fips: "36061", name: "New York County, NY", stateAbbr: "NY", slug: "new-york-county-ny", propertyCount: 308, hotelCount: 169, motelCount: 139, ownerCount: 216 },
  { fips: "36103", name: "Suffolk County, NY", stateAbbr: "NY", slug: "suffolk-county-ny", propertyCount: 129, hotelCount: 71, motelCount: 58, ownerCount: 90 },
  { fips: "36113", name: "Warren County, NY", stateAbbr: "NY", slug: "warren-county-ny", propertyCount: 118, hotelCount: 65, motelCount: 53, ownerCount: 83 },
  { fips: "36029", name: "Erie County, NY", stateAbbr: "NY", slug: "erie-county-ny", propertyCount: 70, hotelCount: 39, motelCount: 31, ownerCount: 49 },
  { fips: "36031", name: "Essex County, NY", stateAbbr: "NY", slug: "essex-county-ny", propertyCount: 65, hotelCount: 36, motelCount: 29, ownerCount: 46 },
  { fips: "36059", name: "Nassau County, NY", stateAbbr: "NY", slug: "nassau-county-ny", propertyCount: 59, hotelCount: 32, motelCount: 27, ownerCount: 41 },
  { fips: "36067", name: "Onondaga County, NY", stateAbbr: "NY", slug: "onondaga-county-ny", propertyCount: 58, hotelCount: 32, motelCount: 26, ownerCount: 41 },
  { fips: "36055", name: "Monroe County, NY", stateAbbr: "NY", slug: "monroe-county-ny", propertyCount: 55, hotelCount: 30, motelCount: 25, ownerCount: 39 },
  { fips: "36001", name: "Albany County, NY", stateAbbr: "NY", slug: "albany-county-ny", propertyCount: 54, hotelCount: 30, motelCount: 24, ownerCount: 38 },
  { fips: "36027", name: "Dutchess County, NY", stateAbbr: "NY", slug: "dutchess-county-ny", propertyCount: 54, hotelCount: 30, motelCount: 24, ownerCount: 38 },
  { fips: "36039", name: "Greene County, NY", stateAbbr: "NY", slug: "greene-county-ny", propertyCount: 54, hotelCount: 30, motelCount: 24, ownerCount: 38 },
  { fips: "36081", name: "Queens County, NY", stateAbbr: "NY", slug: "queens-county-ny", propertyCount: 54, hotelCount: 30, motelCount: 24, ownerCount: 38 },
  { fips: "36119", name: "Westchester County, NY", stateAbbr: "NY", slug: "westchester-county-ny", propertyCount: 49, hotelCount: 27, motelCount: 22, ownerCount: 34 },
  { fips: "36063", name: "Niagara County, NY", stateAbbr: "NY", slug: "niagara-county-ny", propertyCount: 47, hotelCount: 26, motelCount: 21, ownerCount: 33 },
  { fips: "36111", name: "Ulster County, NY", stateAbbr: "NY", slug: "ulster-county-ny", propertyCount: 42, hotelCount: 23, motelCount: 19, ownerCount: 29 },
];

// NC counties (top 15 by property count)
const NC_COUNTIES: CountySummary[] = [
  { fips: "37119", name: "Mecklenburg County, NC", stateAbbr: "NC", slug: "mecklenburg-county-nc", propertyCount: 187, hotelCount: 103, motelCount: 84, ownerCount: 131 },
  { fips: "37183", name: "Wake County, NC", stateAbbr: "NC", slug: "wake-county-nc", propertyCount: 107, hotelCount: 59, motelCount: 48, ownerCount: 75 },
  { fips: "37021", name: "Buncombe County, NC", stateAbbr: "NC", slug: "buncombe-county-nc", propertyCount: 90, hotelCount: 50, motelCount: 40, ownerCount: 63 },
  { fips: "37081", name: "Guilford County, NC", stateAbbr: "NC", slug: "guilford-county-nc", propertyCount: 76, hotelCount: 42, motelCount: 34, ownerCount: 53 },
  { fips: "37055", name: "Dare County, NC", stateAbbr: "NC", slug: "dare-county-nc", propertyCount: 74, hotelCount: 41, motelCount: 33, ownerCount: 52 },
  { fips: "37129", name: "New Hanover County, NC", stateAbbr: "NC", slug: "new-hanover-county-nc", propertyCount: 63, hotelCount: 35, motelCount: 28, ownerCount: 44 },
  { fips: "37063", name: "Durham County, NC", stateAbbr: "NC", slug: "durham-county-nc", propertyCount: 52, hotelCount: 29, motelCount: 23, ownerCount: 36 },
  { fips: "37067", name: "Forsyth County, NC", stateAbbr: "NC", slug: "forsyth-county-nc", propertyCount: 50, hotelCount: 28, motelCount: 22, ownerCount: 35 },
  { fips: "37087", name: "Haywood County, NC", stateAbbr: "NC", slug: "haywood-county-nc", propertyCount: 49, hotelCount: 27, motelCount: 22, ownerCount: 34 },
  { fips: "37051", name: "Cumberland County, NC", stateAbbr: "NC", slug: "cumberland-county-nc", propertyCount: 46, hotelCount: 25, motelCount: 21, ownerCount: 32 },
  { fips: "37189", name: "Watauga County, NC", stateAbbr: "NC", slug: "watauga-county-nc", propertyCount: 42, hotelCount: 23, motelCount: 19, ownerCount: 29 },
  { fips: "37173", name: "Swain County, NC", stateAbbr: "NC", slug: "swain-county-nc", propertyCount: 37, hotelCount: 20, motelCount: 17, ownerCount: 26 },
  { fips: "37031", name: "Carteret County, NC", stateAbbr: "NC", slug: "carteret-county-nc", propertyCount: 33, hotelCount: 18, motelCount: 15, ownerCount: 23 },
  { fips: "37113", name: "Macon County, NC", stateAbbr: "NC", slug: "macon-county-nc", propertyCount: 26, hotelCount: 14, motelCount: 12, ownerCount: 18 },
  { fips: "37127", name: "Nash County, NC", stateAbbr: "NC", slug: "nash-county-nc", propertyCount: 26, hotelCount: 14, motelCount: 12, ownerCount: 18 },
];

// ND counties (top 15 by property count)
const ND_COUNTIES: CountySummary[] = [
  { fips: "38017", name: "Cass County, ND", stateAbbr: "ND", slug: "cass-county-nd", propertyCount: 45, hotelCount: 25, motelCount: 20, ownerCount: 31 },
  { fips: "38035", name: "Grand Forks County, ND", stateAbbr: "ND", slug: "grand-forks-county-nd", propertyCount: 27, hotelCount: 15, motelCount: 12, ownerCount: 19 },
  { fips: "38101", name: "Ward County, ND", stateAbbr: "ND", slug: "ward-county-nd", propertyCount: 21, hotelCount: 12, motelCount: 9, ownerCount: 15 },
  { fips: "38015", name: "Burleigh County, ND", stateAbbr: "ND", slug: "burleigh-county-nd", propertyCount: 17, hotelCount: 9, motelCount: 8, ownerCount: 12 },
  { fips: "38089", name: "Stark County, ND", stateAbbr: "ND", slug: "stark-county-nd", propertyCount: 12, hotelCount: 7, motelCount: 5, ownerCount: 8 },
  { fips: "38071", name: "Ramsey County, ND", stateAbbr: "ND", slug: "ramsey-county-nd", propertyCount: 10, hotelCount: 6, motelCount: 4, ownerCount: 7 },
  { fips: "38077", name: "Richland County, ND", stateAbbr: "ND", slug: "richland-county-nd", propertyCount: 8, hotelCount: 4, motelCount: 4, ownerCount: 6 },
  { fips: "38059", name: "Morton County, ND", stateAbbr: "ND", slug: "morton-county-nd", propertyCount: 7, hotelCount: 4, motelCount: 3, ownerCount: 5 },
  { fips: "38073", name: "Ransom County, ND", stateAbbr: "ND", slug: "ransom-county-nd", propertyCount: 7, hotelCount: 4, motelCount: 3, ownerCount: 5 },
  { fips: "38105", name: "Williams County, ND", stateAbbr: "ND", slug: "williams-county-nd", propertyCount: 7, hotelCount: 4, motelCount: 3, ownerCount: 5 },
  { fips: "38003", name: "Barnes County, ND", stateAbbr: "ND", slug: "barnes-county-nd", propertyCount: 6, hotelCount: 3, motelCount: 3, ownerCount: 4 },
  { fips: "38057", name: "Mercer County, ND", stateAbbr: "ND", slug: "mercer-county-nd", propertyCount: 6, hotelCount: 3, motelCount: 3, ownerCount: 4 },
  { fips: "38093", name: "Stutsman County, ND", stateAbbr: "ND", slug: "stutsman-county-nd", propertyCount: 6, hotelCount: 3, motelCount: 3, ownerCount: 4 },
  { fips: "38061", name: "Mountrail County, ND", stateAbbr: "ND", slug: "mountrail-county-nd", propertyCount: 5, hotelCount: 3, motelCount: 2, ownerCount: 4 },
  { fips: "38079", name: "Rolette County, ND", stateAbbr: "ND", slug: "rolette-county-nd", propertyCount: 4, hotelCount: 2, motelCount: 2, ownerCount: 3 },
];

// OH counties (top 15 by property count)
const OH_COUNTIES: CountySummary[] = [
  { fips: "39049", name: "Franklin County, OH", stateAbbr: "OH", slug: "franklin-county-oh", propertyCount: 168, hotelCount: 92, motelCount: 76, ownerCount: 118 },
  { fips: "39035", name: "Cuyahoga County, OH", stateAbbr: "OH", slug: "cuyahoga-county-oh", propertyCount: 130, hotelCount: 72, motelCount: 58, ownerCount: 91 },
  { fips: "39061", name: "Hamilton County, OH", stateAbbr: "OH", slug: "hamilton-county-oh", propertyCount: 111, hotelCount: 61, motelCount: 50, ownerCount: 78 },
  { fips: "39113", name: "Montgomery County, OH", stateAbbr: "OH", slug: "montgomery-county-oh", propertyCount: 64, hotelCount: 35, motelCount: 29, ownerCount: 45 },
  { fips: "39153", name: "Summit County, OH", stateAbbr: "OH", slug: "summit-county-oh", propertyCount: 50, hotelCount: 28, motelCount: 22, ownerCount: 35 },
  { fips: "39043", name: "Erie County, OH", stateAbbr: "OH", slug: "erie-county-oh", propertyCount: 49, hotelCount: 27, motelCount: 22, ownerCount: 34 },
  { fips: "39095", name: "Lucas County, OH", stateAbbr: "OH", slug: "lucas-county-oh", propertyCount: 47, hotelCount: 26, motelCount: 21, ownerCount: 33 },
  { fips: "39017", name: "Butler County, OH", stateAbbr: "OH", slug: "butler-county-oh", propertyCount: 36, hotelCount: 20, motelCount: 16, ownerCount: 25 },
  { fips: "39151", name: "Stark County, OH", stateAbbr: "OH", slug: "stark-county-oh", propertyCount: 36, hotelCount: 20, motelCount: 16, ownerCount: 25 },
  { fips: "39165", name: "Warren County, OH", stateAbbr: "OH", slug: "warren-county-oh", propertyCount: 32, hotelCount: 18, motelCount: 14, ownerCount: 22 },
  { fips: "39099", name: "Mahoning County, OH", stateAbbr: "OH", slug: "mahoning-county-oh", propertyCount: 31, hotelCount: 17, motelCount: 14, ownerCount: 22 },
  { fips: "39123", name: "Ottawa County, OH", stateAbbr: "OH", slug: "ottawa-county-oh", propertyCount: 29, hotelCount: 16, motelCount: 13, ownerCount: 20 },
  { fips: "39057", name: "Greene County, OH", stateAbbr: "OH", slug: "greene-county-oh", propertyCount: 23, hotelCount: 13, motelCount: 10, ownerCount: 16 },
  { fips: "39085", name: "Lake County, OH", stateAbbr: "OH", slug: "lake-county-oh", propertyCount: 21, hotelCount: 12, motelCount: 9, ownerCount: 15 },
  { fips: "39155", name: "Trumbull County, OH", stateAbbr: "OH", slug: "trumbull-county-oh", propertyCount: 21, hotelCount: 12, motelCount: 9, ownerCount: 15 },
];

// OK counties (top 15 by property count)
const OK_COUNTIES: CountySummary[] = [
  { fips: "40109", name: "Oklahoma County, OK", stateAbbr: "OK", slug: "oklahoma-county-ok", propertyCount: 120, hotelCount: 66, motelCount: 54, ownerCount: 84 },
  { fips: "40143", name: "Tulsa County, OK", stateAbbr: "OK", slug: "tulsa-county-ok", propertyCount: 97, hotelCount: 53, motelCount: 44, ownerCount: 68 },
  { fips: "40027", name: "Cleveland County, OK", stateAbbr: "OK", slug: "cleveland-county-ok", propertyCount: 25, hotelCount: 14, motelCount: 11, ownerCount: 18 },
  { fips: "40009", name: "Beckham County, OK", stateAbbr: "OK", slug: "beckham-county-ok", propertyCount: 17, hotelCount: 9, motelCount: 8, ownerCount: 12 },
  { fips: "40047", name: "Garfield County, OK", stateAbbr: "OK", slug: "garfield-county-ok", propertyCount: 15, hotelCount: 8, motelCount: 7, ownerCount: 11 },
  { fips: "40017", name: "Canadian County, OK", stateAbbr: "OK", slug: "canadian-county-ok", propertyCount: 14, hotelCount: 8, motelCount: 6, ownerCount: 10 },
  { fips: "40039", name: "Custer County, OK", stateAbbr: "OK", slug: "custer-county-ok", propertyCount: 13, hotelCount: 7, motelCount: 6, ownerCount: 9 },
  { fips: "40101", name: "Muskogee County, OK", stateAbbr: "OK", slug: "muskogee-county-ok", propertyCount: 13, hotelCount: 7, motelCount: 6, ownerCount: 9 },
  { fips: "40135", name: "Sequoyah County, OK", stateAbbr: "OK", slug: "sequoyah-county-ok", propertyCount: 12, hotelCount: 7, motelCount: 5, ownerCount: 8 },
  { fips: "40071", name: "Kay County, OK", stateAbbr: "OK", slug: "kay-county-ok", propertyCount: 11, hotelCount: 6, motelCount: 5, ownerCount: 8 },
  { fips: "40121", name: "Pittsburg County, OK", stateAbbr: "OK", slug: "pittsburg-county-ok", propertyCount: 11, hotelCount: 6, motelCount: 5, ownerCount: 8 },
  { fips: "40031", name: "Comanche County, OK", stateAbbr: "OK", slug: "comanche-county-ok", propertyCount: 10, hotelCount: 6, motelCount: 4, ownerCount: 7 },
  { fips: "40019", name: "Carter County, OK", stateAbbr: "OK", slug: "carter-county-ok", propertyCount: 9, hotelCount: 5, motelCount: 4, ownerCount: 6 },
  { fips: "40089", name: "McCurtain County, OK", stateAbbr: "OK", slug: "mccurtain-county-ok", propertyCount: 9, hotelCount: 5, motelCount: 4, ownerCount: 6 },
  { fips: "40117", name: "Pawnee County, OK", stateAbbr: "OK", slug: "pawnee-county-ok", propertyCount: 9, hotelCount: 5, motelCount: 4, ownerCount: 6 },
];

// OR counties (top 15 by property count)
const OR_COUNTIES: CountySummary[] = [
  { fips: "41051", name: "Multnomah County, OR", stateAbbr: "OR", slug: "multnomah-county-or", propertyCount: 141, hotelCount: 78, motelCount: 63, ownerCount: 99 },
  { fips: "41041", name: "Lincoln County, OR", stateAbbr: "OR", slug: "lincoln-county-or", propertyCount: 86, hotelCount: 47, motelCount: 39, ownerCount: 60 },
  { fips: "41029", name: "Jackson County, OR", stateAbbr: "OR", slug: "jackson-county-or", propertyCount: 74, hotelCount: 41, motelCount: 33, ownerCount: 52 },
  { fips: "41039", name: "Lane County, OR", stateAbbr: "OR", slug: "lane-county-or", propertyCount: 66, hotelCount: 36, motelCount: 30, ownerCount: 46 },
  { fips: "41067", name: "Washington County, OR", stateAbbr: "OR", slug: "washington-county-or", propertyCount: 54, hotelCount: 30, motelCount: 24, ownerCount: 38 },
  { fips: "41007", name: "Clatsop County, OR", stateAbbr: "OR", slug: "clatsop-county-or", propertyCount: 52, hotelCount: 29, motelCount: 23, ownerCount: 36 },
  { fips: "41017", name: "Deschutes County, OR", stateAbbr: "OR", slug: "deschutes-county-or", propertyCount: 49, hotelCount: 27, motelCount: 22, ownerCount: 34 },
  { fips: "41005", name: "Clackamas County, OR", stateAbbr: "OR", slug: "clackamas-county-or", propertyCount: 42, hotelCount: 23, motelCount: 19, ownerCount: 29 },
  { fips: "41019", name: "Douglas County, OR", stateAbbr: "OR", slug: "douglas-county-or", propertyCount: 38, hotelCount: 21, motelCount: 17, ownerCount: 27 },
  { fips: "41047", name: "Marion County, OR", stateAbbr: "OR", slug: "marion-county-or", propertyCount: 34, hotelCount: 19, motelCount: 15, ownerCount: 24 },
  { fips: "41057", name: "Tillamook County, OR", stateAbbr: "OR", slug: "tillamook-county-or", propertyCount: 30, hotelCount: 17, motelCount: 13, ownerCount: 21 },
  { fips: "41011", name: "Coos County, OR", stateAbbr: "OR", slug: "coos-county-or", propertyCount: 28, hotelCount: 15, motelCount: 13, ownerCount: 20 },
  { fips: "41015", name: "Curry County, OR", stateAbbr: "OR", slug: "curry-county-or", propertyCount: 22, hotelCount: 12, motelCount: 10, ownerCount: 15 },
  { fips: "41033", name: "Josephine County, OR", stateAbbr: "OR", slug: "josephine-county-or", propertyCount: 22, hotelCount: 12, motelCount: 10, ownerCount: 15 },
  { fips: "41035", name: "Klamath County, OR", stateAbbr: "OR", slug: "klamath-county-or", propertyCount: 22, hotelCount: 12, motelCount: 10, ownerCount: 15 },
];

// PA counties (top 15 by property count)
const PA_COUNTIES: CountySummary[] = [
  { fips: "42003", name: "Allegheny County, PA", stateAbbr: "PA", slug: "allegheny-county-pa", propertyCount: 110, hotelCount: 61, motelCount: 49, ownerCount: 77 },
  { fips: "42071", name: "Lancaster County, PA", stateAbbr: "PA", slug: "lancaster-county-pa", propertyCount: 110, hotelCount: 61, motelCount: 49, ownerCount: 77 },
  { fips: "42101", name: "Philadelphia County, PA", stateAbbr: "PA", slug: "philadelphia-county-pa", propertyCount: 67, hotelCount: 37, motelCount: 30, ownerCount: 47 },
  { fips: "42043", name: "Dauphin County, PA", stateAbbr: "PA", slug: "dauphin-county-pa", propertyCount: 59, hotelCount: 32, motelCount: 27, ownerCount: 41 },
  { fips: "42017", name: "Bucks County, PA", stateAbbr: "PA", slug: "bucks-county-pa", propertyCount: 58, hotelCount: 32, motelCount: 26, ownerCount: 41 },
  { fips: "42089", name: "Monroe County, PA", stateAbbr: "PA", slug: "monroe-county-pa", propertyCount: 54, hotelCount: 30, motelCount: 24, ownerCount: 38 },
  { fips: "42091", name: "Montgomery County, PA", stateAbbr: "PA", slug: "montgomery-county-pa", propertyCount: 48, hotelCount: 26, motelCount: 22, ownerCount: 34 },
  { fips: "42077", name: "Lehigh County, PA", stateAbbr: "PA", slug: "lehigh-county-pa", propertyCount: 46, hotelCount: 25, motelCount: 21, ownerCount: 32 },
  { fips: "42049", name: "Erie County, PA", stateAbbr: "PA", slug: "erie-county-pa", propertyCount: 44, hotelCount: 24, motelCount: 20, ownerCount: 31 },
  { fips: "42129", name: "Westmoreland County, PA", stateAbbr: "PA", slug: "westmoreland-county-pa", propertyCount: 39, hotelCount: 21, motelCount: 18, ownerCount: 27 },
  { fips: "42041", name: "Cumberland County, PA", stateAbbr: "PA", slug: "cumberland-county-pa", propertyCount: 38, hotelCount: 21, motelCount: 17, ownerCount: 27 },
  { fips: "42001", name: "Adams County, PA", stateAbbr: "PA", slug: "adams-county-pa", propertyCount: 37, hotelCount: 20, motelCount: 17, ownerCount: 26 },
  { fips: "42029", name: "Chester County, PA", stateAbbr: "PA", slug: "chester-county-pa", propertyCount: 33, hotelCount: 18, motelCount: 15, ownerCount: 23 },
  { fips: "42133", name: "York County, PA", stateAbbr: "PA", slug: "york-county-pa", propertyCount: 33, hotelCount: 18, motelCount: 15, ownerCount: 23 },
  { fips: "42011", name: "Berks County, PA", stateAbbr: "PA", slug: "berks-county-pa", propertyCount: 32, hotelCount: 18, motelCount: 14, ownerCount: 22 },
];

// RI counties (top 5 by property count)
const RI_COUNTIES: CountySummary[] = [
  { fips: "44009", name: "Washington County, RI", stateAbbr: "RI", slug: "washington-county-ri", propertyCount: 56, hotelCount: 31, motelCount: 25, ownerCount: 39 },
  { fips: "44005", name: "Newport County, RI", stateAbbr: "RI", slug: "newport-county-ri", propertyCount: 49, hotelCount: 27, motelCount: 22, ownerCount: 34 },
  { fips: "44007", name: "Providence County, RI", stateAbbr: "RI", slug: "providence-county-ri", propertyCount: 22, hotelCount: 12, motelCount: 10, ownerCount: 15 },
  { fips: "44003", name: "Kent County, RI", stateAbbr: "RI", slug: "kent-county-ri", propertyCount: 15, hotelCount: 8, motelCount: 7, ownerCount: 11 },
  { fips: "44001", name: "Bristol County, RI", stateAbbr: "RI", slug: "bristol-county-ri", propertyCount: 4, hotelCount: 2, motelCount: 2, ownerCount: 3 },
];

// SC counties (top 15 by property count)
const SC_COUNTIES: CountySummary[] = [
  { fips: "45051", name: "Horry County, SC", stateAbbr: "SC", slug: "horry-county-sc", propertyCount: 256, hotelCount: 141, motelCount: 115, ownerCount: 179 },
  { fips: "45019", name: "Charleston County, SC", stateAbbr: "SC", slug: "charleston-county-sc", propertyCount: 124, hotelCount: 68, motelCount: 56, ownerCount: 87 },
  { fips: "45079", name: "Richland County, SC", stateAbbr: "SC", slug: "richland-county-sc", propertyCount: 89, hotelCount: 49, motelCount: 40, ownerCount: 62 },
  { fips: "45045", name: "Greenville County, SC", stateAbbr: "SC", slug: "greenville-county-sc", propertyCount: 71, hotelCount: 39, motelCount: 32, ownerCount: 50 },
  { fips: "45013", name: "Beaufort County, SC", stateAbbr: "SC", slug: "beaufort-county-sc", propertyCount: 50, hotelCount: 28, motelCount: 22, ownerCount: 35 },
  { fips: "45041", name: "Florence County, SC", stateAbbr: "SC", slug: "florence-county-sc", propertyCount: 37, hotelCount: 20, motelCount: 17, ownerCount: 26 },
  { fips: "45083", name: "Spartanburg County, SC", stateAbbr: "SC", slug: "spartanburg-county-sc", propertyCount: 35, hotelCount: 19, motelCount: 16, ownerCount: 25 },
  { fips: "45075", name: "Orangeburg County, SC", stateAbbr: "SC", slug: "orangeburg-county-sc", propertyCount: 34, hotelCount: 19, motelCount: 15, ownerCount: 24 },
  { fips: "45063", name: "Lexington County, SC", stateAbbr: "SC", slug: "lexington-county-sc", propertyCount: 30, hotelCount: 17, motelCount: 13, ownerCount: 21 },
  { fips: "45007", name: "Anderson County, SC", stateAbbr: "SC", slug: "anderson-county-sc", propertyCount: 27, hotelCount: 15, motelCount: 12, ownerCount: 19 },
  { fips: "45091", name: "York County, SC", stateAbbr: "SC", slug: "york-county-sc", propertyCount: 24, hotelCount: 13, motelCount: 11, ownerCount: 17 },
  { fips: "45003", name: "Aiken County, SC", stateAbbr: "SC", slug: "aiken-county-sc", propertyCount: 22, hotelCount: 12, motelCount: 10, ownerCount: 15 },
  { fips: "45035", name: "Dorchester County, SC", stateAbbr: "SC", slug: "dorchester-county-sc", propertyCount: 16, hotelCount: 9, motelCount: 7, ownerCount: 11 },
  { fips: "45029", name: "Colleton County, SC", stateAbbr: "SC", slug: "colleton-county-sc", propertyCount: 15, hotelCount: 8, motelCount: 7, ownerCount: 11 },
  { fips: "45043", name: "Georgetown County, SC", stateAbbr: "SC", slug: "georgetown-county-sc", propertyCount: 15, hotelCount: 8, motelCount: 7, ownerCount: 11 },
];

// SD counties (top 15 by property count)
const SD_COUNTIES: CountySummary[] = [
  { fips: "46103", name: "Pennington County, SD", stateAbbr: "SD", slug: "pennington-county-sd", propertyCount: 108, hotelCount: 59, motelCount: 49, ownerCount: 76 },
  { fips: "46099", name: "Minnehaha County, SD", stateAbbr: "SD", slug: "minnehaha-county-sd", propertyCount: 54, hotelCount: 30, motelCount: 24, ownerCount: 38 },
  { fips: "46013", name: "Brown County, SD", stateAbbr: "SD", slug: "brown-county-sd", propertyCount: 46, hotelCount: 25, motelCount: 21, ownerCount: 32 },
  { fips: "46081", name: "Lawrence County, SD", stateAbbr: "SD", slug: "lawrence-county-sd", propertyCount: 44, hotelCount: 24, motelCount: 20, ownerCount: 31 },
  { fips: "46035", name: "Davison County, SD", stateAbbr: "SD", slug: "davison-county-sd", propertyCount: 21, hotelCount: 12, motelCount: 9, ownerCount: 15 },
  { fips: "46033", name: "Custer County, SD", stateAbbr: "SD", slug: "custer-county-sd", propertyCount: 16, hotelCount: 9, motelCount: 7, ownerCount: 11 },
  { fips: "46065", name: "Hughes County, SD", stateAbbr: "SD", slug: "hughes-county-sd", propertyCount: 15, hotelCount: 8, motelCount: 7, ownerCount: 11 },
  { fips: "46029", name: "Codington County, SD", stateAbbr: "SD", slug: "codington-county-sd", propertyCount: 13, hotelCount: 7, motelCount: 6, ownerCount: 9 },
  { fips: "46083", name: "Lincoln County, SD", stateAbbr: "SD", slug: "lincoln-county-sd", propertyCount: 9, hotelCount: 5, motelCount: 4, ownerCount: 6 },
  { fips: "46135", name: "Yankton County, SD", stateAbbr: "SD", slug: "yankton-county-sd", propertyCount: 9, hotelCount: 5, motelCount: 4, ownerCount: 6 },
  { fips: "46015", name: "Brule County, SD", stateAbbr: "SD", slug: "brule-county-sd", propertyCount: 8, hotelCount: 4, motelCount: 4, ownerCount: 6 },
  { fips: "46093", name: "Meade County, SD", stateAbbr: "SD", slug: "meade-county-sd", propertyCount: 8, hotelCount: 4, motelCount: 4, ownerCount: 6 },
  { fips: "46005", name: "Beadle County, SD", stateAbbr: "SD", slug: "beadle-county-sd", propertyCount: 7, hotelCount: 4, motelCount: 3, ownerCount: 5 },
  { fips: "46011", name: "Brookings County, SD", stateAbbr: "SD", slug: "brookings-county-sd", propertyCount: 7, hotelCount: 4, motelCount: 3, ownerCount: 5 },
  { fips: "46027", name: "Clay County, SD", stateAbbr: "SD", slug: "clay-county-sd", propertyCount: 7, hotelCount: 4, motelCount: 3, ownerCount: 5 },
];

// TN counties (top 15 by property count)
const TN_COUNTIES: CountySummary[] = [
  { fips: "47155", name: "Sevier County, TN", stateAbbr: "TN", slug: "sevier-county-tn", propertyCount: 207, hotelCount: 114, motelCount: 93, ownerCount: 145 },
  { fips: "47157", name: "Shelby County, TN", stateAbbr: "TN", slug: "shelby-county-tn", propertyCount: 188, hotelCount: 103, motelCount: 85, ownerCount: 132 },
  { fips: "47037", name: "Davidson County, TN", stateAbbr: "TN", slug: "davidson-county-tn", propertyCount: 150, hotelCount: 83, motelCount: 67, ownerCount: 105 },
  { fips: "47093", name: "Knox County, TN", stateAbbr: "TN", slug: "knox-county-tn", propertyCount: 82, hotelCount: 45, motelCount: 37, ownerCount: 57 },
  { fips: "47065", name: "Hamilton County, TN", stateAbbr: "TN", slug: "hamilton-county-tn", propertyCount: 68, hotelCount: 37, motelCount: 31, ownerCount: 48 },
  { fips: "47125", name: "Montgomery County, TN", stateAbbr: "TN", slug: "montgomery-county-tn", propertyCount: 32, hotelCount: 18, motelCount: 14, ownerCount: 22 },
  { fips: "47187", name: "Williamson County, TN", stateAbbr: "TN", slug: "williamson-county-tn", propertyCount: 30, hotelCount: 17, motelCount: 13, ownerCount: 21 },
  { fips: "47149", name: "Rutherford County, TN", stateAbbr: "TN", slug: "rutherford-county-tn", propertyCount: 28, hotelCount: 15, motelCount: 13, ownerCount: 20 },
  { fips: "47113", name: "Madison County, TN", stateAbbr: "TN", slug: "madison-county-tn", propertyCount: 27, hotelCount: 15, motelCount: 12, ownerCount: 19 },
  { fips: "47009", name: "Blount County, TN", stateAbbr: "TN", slug: "blount-county-tn", propertyCount: 25, hotelCount: 14, motelCount: 11, ownerCount: 18 },
  { fips: "47011", name: "Bradley County, TN", stateAbbr: "TN", slug: "bradley-county-tn", propertyCount: 24, hotelCount: 13, motelCount: 11, ownerCount: 17 },
  { fips: "47163", name: "Sullivan County, TN", stateAbbr: "TN", slug: "sullivan-county-tn", propertyCount: 20, hotelCount: 11, motelCount: 9, ownerCount: 14 },
  { fips: "47179", name: "Washington County, TN", stateAbbr: "TN", slug: "washington-county-tn", propertyCount: 19, hotelCount: 10, motelCount: 9, ownerCount: 13 },
  { fips: "47141", name: "Putnam County, TN", stateAbbr: "TN", slug: "putnam-county-tn", propertyCount: 18, hotelCount: 10, motelCount: 8, ownerCount: 13 },
  { fips: "47001", name: "Anderson County, TN", stateAbbr: "TN", slug: "anderson-county-tn", propertyCount: 17, hotelCount: 9, motelCount: 8, ownerCount: 12 },
];

// TX counties (top 15 by property count)
const TX_COUNTIES: CountySummary[] = [
  { fips: "48201", name: "Harris County, TX", stateAbbr: "TX", slug: "harris-county-tx", propertyCount: 443, hotelCount: 244, motelCount: 199, ownerCount: 310 },
  { fips: "48113", name: "Dallas County, TX", stateAbbr: "TX", slug: "dallas-county-tx", propertyCount: 420, hotelCount: 231, motelCount: 189, ownerCount: 294 },
  { fips: "48029", name: "Bexar County, TX", stateAbbr: "TX", slug: "bexar-county-tx", propertyCount: 232, hotelCount: 128, motelCount: 104, ownerCount: 162 },
  { fips: "48439", name: "Tarrant County, TX", stateAbbr: "TX", slug: "tarrant-county-tx", propertyCount: 203, hotelCount: 112, motelCount: 91, ownerCount: 142 },
  { fips: "48453", name: "Travis County, TX", stateAbbr: "TX", slug: "travis-county-tx", propertyCount: 134, hotelCount: 74, motelCount: 60, ownerCount: 94 },
  { fips: "48061", name: "Cameron County, TX", stateAbbr: "TX", slug: "cameron-county-tx", propertyCount: 71, hotelCount: 39, motelCount: 32, ownerCount: 50 },
  { fips: "48355", name: "Nueces County, TX", stateAbbr: "TX", slug: "nueces-county-tx", propertyCount: 69, hotelCount: 38, motelCount: 31, ownerCount: 48 },
  { fips: "48141", name: "El Paso County, TX", stateAbbr: "TX", slug: "el-paso-county-tx", propertyCount: 67, hotelCount: 37, motelCount: 30, ownerCount: 47 },
  { fips: "48215", name: "Hidalgo County, TX", stateAbbr: "TX", slug: "hidalgo-county-tx", propertyCount: 64, hotelCount: 35, motelCount: 29, ownerCount: 45 },
  { fips: "48027", name: "Bell County, TX", stateAbbr: "TX", slug: "bell-county-tx", propertyCount: 51, hotelCount: 28, motelCount: 23, ownerCount: 36 },
  { fips: "48121", name: "Denton County, TX", stateAbbr: "TX", slug: "denton-county-tx", propertyCount: 49, hotelCount: 27, motelCount: 22, ownerCount: 34 },
  { fips: "48167", name: "Galveston County, TX", stateAbbr: "TX", slug: "galveston-county-tx", propertyCount: 43, hotelCount: 24, motelCount: 19, ownerCount: 30 },
  { fips: "48085", name: "Collin County, TX", stateAbbr: "TX", slug: "collin-county-tx", propertyCount: 42, hotelCount: 23, motelCount: 19, ownerCount: 29 },
  { fips: "48303", name: "Lubbock County, TX", stateAbbr: "TX", slug: "lubbock-county-tx", propertyCount: 41, hotelCount: 23, motelCount: 18, ownerCount: 29 },
  { fips: "48157", name: "Fort Bend County, TX", stateAbbr: "TX", slug: "fort-bend-county-tx", propertyCount: 37, hotelCount: 20, motelCount: 17, ownerCount: 26 },
];

// UT counties (top 15 by property count)
const UT_COUNTIES: CountySummary[] = [
  { fips: "49035", name: "Salt Lake County, UT", stateAbbr: "UT", slug: "salt-lake-county-ut", propertyCount: 129, hotelCount: 71, motelCount: 58, ownerCount: 90 },
  { fips: "49053", name: "Washington County, UT", stateAbbr: "UT", slug: "washington-county-ut", propertyCount: 52, hotelCount: 29, motelCount: 23, ownerCount: 36 },
  { fips: "49049", name: "Utah County, UT", stateAbbr: "UT", slug: "utah-county-ut", propertyCount: 36, hotelCount: 20, motelCount: 16, ownerCount: 25 },
  { fips: "49017", name: "Garfield County, UT", stateAbbr: "UT", slug: "garfield-county-ut", propertyCount: 27, hotelCount: 15, motelCount: 12, ownerCount: 19 },
  { fips: "49019", name: "Grand County, UT", stateAbbr: "UT", slug: "grand-county-ut", propertyCount: 27, hotelCount: 15, motelCount: 12, ownerCount: 19 },
  { fips: "49043", name: "Summit County, UT", stateAbbr: "UT", slug: "summit-county-ut", propertyCount: 22, hotelCount: 12, motelCount: 10, ownerCount: 15 },
  { fips: "49021", name: "Iron County, UT", stateAbbr: "UT", slug: "iron-county-ut", propertyCount: 20, hotelCount: 11, motelCount: 9, ownerCount: 14 },
  { fips: "49057", name: "Weber County, UT", stateAbbr: "UT", slug: "weber-county-ut", propertyCount: 18, hotelCount: 10, motelCount: 8, ownerCount: 13 },
  { fips: "49005", name: "Cache County, UT", stateAbbr: "UT", slug: "cache-county-ut", propertyCount: 15, hotelCount: 8, motelCount: 7, ownerCount: 11 },
  { fips: "49011", name: "Davis County, UT", stateAbbr: "UT", slug: "davis-county-ut", propertyCount: 15, hotelCount: 8, motelCount: 7, ownerCount: 11 },
  { fips: "49037", name: "San Juan County, UT", stateAbbr: "UT", slug: "san-juan-county-ut", propertyCount: 15, hotelCount: 8, motelCount: 7, ownerCount: 11 },
  { fips: "49025", name: "Kane County, UT", stateAbbr: "UT", slug: "kane-county-ut", propertyCount: 12, hotelCount: 7, motelCount: 5, ownerCount: 8 },
  { fips: "49047", name: "Uintah County, UT", stateAbbr: "UT", slug: "uintah-county-ut", propertyCount: 11, hotelCount: 6, motelCount: 5, ownerCount: 8 },
  { fips: "49051", name: "Wasatch County, UT", stateAbbr: "UT", slug: "wasatch-county-ut", propertyCount: 11, hotelCount: 6, motelCount: 5, ownerCount: 8 },
  { fips: "49001", name: "Beaver County, UT", stateAbbr: "UT", slug: "beaver-county-ut", propertyCount: 10, hotelCount: 6, motelCount: 4, ownerCount: 7 },
];

// VT counties (top 14 by property count)
const VT_COUNTIES: CountySummary[] = [
  { fips: "50025", name: "Windham County, VT", stateAbbr: "VT", slug: "windham-county-vt", propertyCount: 68, hotelCount: 37, motelCount: 31, ownerCount: 48 },
  { fips: "50003", name: "Bennington County, VT", stateAbbr: "VT", slug: "bennington-county-vt", propertyCount: 65, hotelCount: 36, motelCount: 29, ownerCount: 46 },
  { fips: "50021", name: "Rutland County, VT", stateAbbr: "VT", slug: "rutland-county-vt", propertyCount: 61, hotelCount: 34, motelCount: 27, ownerCount: 43 },
  { fips: "50027", name: "Windsor County, VT", stateAbbr: "VT", slug: "windsor-county-vt", propertyCount: 57, hotelCount: 31, motelCount: 26, ownerCount: 40 },
  { fips: "50007", name: "Chittenden County, VT", stateAbbr: "VT", slug: "chittenden-county-vt", propertyCount: 44, hotelCount: 24, motelCount: 20, ownerCount: 31 },
  { fips: "50023", name: "Washington County, VT", stateAbbr: "VT", slug: "washington-county-vt", propertyCount: 37, hotelCount: 20, motelCount: 17, ownerCount: 26 },
  { fips: "50015", name: "Lamoille County, VT", stateAbbr: "VT", slug: "lamoille-county-vt", propertyCount: 36, hotelCount: 20, motelCount: 16, ownerCount: 25 },
  { fips: "50001", name: "Addison County, VT", stateAbbr: "VT", slug: "addison-county-vt", propertyCount: 17, hotelCount: 9, motelCount: 8, ownerCount: 12 },
  { fips: "50019", name: "Orleans County, VT", stateAbbr: "VT", slug: "orleans-county-vt", propertyCount: 16, hotelCount: 9, motelCount: 7, ownerCount: 11 },
  { fips: "50005", name: "Caledonia County, VT", stateAbbr: "VT", slug: "caledonia-county-vt", propertyCount: 12, hotelCount: 7, motelCount: 5, ownerCount: 8 },
  { fips: "50011", name: "Franklin County, VT", stateAbbr: "VT", slug: "franklin-county-vt", propertyCount: 10, hotelCount: 6, motelCount: 4, ownerCount: 7 },
  { fips: "50017", name: "Orange County, VT", stateAbbr: "VT", slug: "orange-county-vt", propertyCount: 9, hotelCount: 5, motelCount: 4, ownerCount: 6 },
  { fips: "50013", name: "Grand Isle County, VT", stateAbbr: "VT", slug: "grand-isle-county-vt", propertyCount: 6, hotelCount: 3, motelCount: 3, ownerCount: 4 },
  { fips: "50009", name: "Essex County, VT", stateAbbr: "VT", slug: "essex-county-vt", propertyCount: 2, hotelCount: 1, motelCount: 1, ownerCount: 1 },
];

// VA counties (top 15 by property count)
const VA_COUNTIES: CountySummary[] = [
  { fips: "51810", name: "Virginia Beach city, VA", stateAbbr: "VA", slug: "virginia-beach-city-va", propertyCount: 97, hotelCount: 53, motelCount: 44, ownerCount: 68 },
  { fips: "51059", name: "Fairfax County, VA", stateAbbr: "VA", slug: "fairfax-county-va", propertyCount: 91, hotelCount: 50, motelCount: 41, ownerCount: 64 },
  { fips: "51830", name: "Williamsburg city, VA", stateAbbr: "VA", slug: "williamsburg-city-va", propertyCount: 55, hotelCount: 30, motelCount: 25, ownerCount: 39 },
  { fips: "51087", name: "Henrico County, VA", stateAbbr: "VA", slug: "henrico-county-va", propertyCount: 46, hotelCount: 25, motelCount: 21, ownerCount: 32 },
  { fips: "51710", name: "Norfolk city, VA", stateAbbr: "VA", slug: "norfolk-city-va", propertyCount: 42, hotelCount: 23, motelCount: 19, ownerCount: 29 },
  { fips: "51041", name: "Chesterfield County, VA", stateAbbr: "VA", slug: "chesterfield-county-va", propertyCount: 38, hotelCount: 21, motelCount: 17, ownerCount: 27 },
  { fips: "51700", name: "Newport News city, VA", stateAbbr: "VA", slug: "newport-news-city-va", propertyCount: 38, hotelCount: 21, motelCount: 17, ownerCount: 27 },
  { fips: "51013", name: "Arlington County, VA", stateAbbr: "VA", slug: "arlington-county-va", propertyCount: 37, hotelCount: 20, motelCount: 17, ownerCount: 26 },
  { fips: "51760", name: "Richmond city, VA", stateAbbr: "VA", slug: "richmond-city-va", propertyCount: 34, hotelCount: 19, motelCount: 15, ownerCount: 24 },
  { fips: "51770", name: "Roanoke city, VA", stateAbbr: "VA", slug: "roanoke-city-va", propertyCount: 32, hotelCount: 18, motelCount: 14, ownerCount: 22 },
  { fips: "51550", name: "Chesapeake city, VA", stateAbbr: "VA", slug: "chesapeake-city-va", propertyCount: 28, hotelCount: 15, motelCount: 13, ownerCount: 20 },
  { fips: "51001", name: "Accomack County, VA", stateAbbr: "VA", slug: "accomack-county-va", propertyCount: 27, hotelCount: 15, motelCount: 12, ownerCount: 19 },
  { fips: "51650", name: "Hampton city, VA", stateAbbr: "VA", slug: "hampton-city-va", propertyCount: 25, hotelCount: 14, motelCount: 11, ownerCount: 18 },
  { fips: "51121", name: "Montgomery County, VA", stateAbbr: "VA", slug: "montgomery-county-va", propertyCount: 20, hotelCount: 11, motelCount: 9, ownerCount: 14 },
  { fips: "51179", name: "Stafford County, VA", stateAbbr: "VA", slug: "stafford-county-va", propertyCount: 20, hotelCount: 11, motelCount: 9, ownerCount: 14 },
];

// WA counties (top 15 by property count)
const WA_COUNTIES: CountySummary[] = [
  { fips: "53033", name: "King County, WA", stateAbbr: "WA", slug: "king-county-wa", propertyCount: 296, hotelCount: 163, motelCount: 133, ownerCount: 207 },
  { fips: "53053", name: "Pierce County, WA", stateAbbr: "WA", slug: "pierce-county-wa", propertyCount: 80, hotelCount: 44, motelCount: 36, ownerCount: 56 },
  { fips: "53063", name: "Spokane County, WA", stateAbbr: "WA", slug: "spokane-county-wa", propertyCount: 79, hotelCount: 43, motelCount: 36, ownerCount: 55 },
  { fips: "53061", name: "Snohomish County, WA", stateAbbr: "WA", slug: "snohomish-county-wa", propertyCount: 63, hotelCount: 35, motelCount: 28, ownerCount: 44 },
  { fips: "53007", name: "Chelan County, WA", stateAbbr: "WA", slug: "chelan-county-wa", propertyCount: 47, hotelCount: 26, motelCount: 21, ownerCount: 33 },
  { fips: "53027", name: "Grays Harbor County, WA", stateAbbr: "WA", slug: "grays-harbor-county-wa", propertyCount: 46, hotelCount: 25, motelCount: 21, ownerCount: 32 },
  { fips: "53009", name: "Clallam County, WA", stateAbbr: "WA", slug: "clallam-county-wa", propertyCount: 42, hotelCount: 23, motelCount: 19, ownerCount: 29 },
  { fips: "53073", name: "Whatcom County, WA", stateAbbr: "WA", slug: "whatcom-county-wa", propertyCount: 34, hotelCount: 19, motelCount: 15, ownerCount: 24 },
  { fips: "53047", name: "Okanogan County, WA", stateAbbr: "WA", slug: "okanogan-county-wa", propertyCount: 31, hotelCount: 17, motelCount: 14, ownerCount: 22 },
  { fips: "53055", name: "San Juan County, WA", stateAbbr: "WA", slug: "san-juan-county-wa", propertyCount: 31, hotelCount: 17, motelCount: 14, ownerCount: 22 },
  { fips: "53077", name: "Yakima County, WA", stateAbbr: "WA", slug: "yakima-county-wa", propertyCount: 30, hotelCount: 17, motelCount: 13, ownerCount: 21 },
  { fips: "53011", name: "Clark County, WA", stateAbbr: "WA", slug: "clark-county-wa", propertyCount: 29, hotelCount: 16, motelCount: 13, ownerCount: 20 },
  { fips: "53005", name: "Benton County, WA", stateAbbr: "WA", slug: "benton-county-wa", propertyCount: 27, hotelCount: 15, motelCount: 12, ownerCount: 19 },
  { fips: "53025", name: "Grant County, WA", stateAbbr: "WA", slug: "grant-county-wa", propertyCount: 27, hotelCount: 15, motelCount: 12, ownerCount: 19 },
  { fips: "53067", name: "Thurston County, WA", stateAbbr: "WA", slug: "thurston-county-wa", propertyCount: 25, hotelCount: 14, motelCount: 11, ownerCount: 18 },
];

// WV counties (top 15 by property count)
const WV_COUNTIES: CountySummary[] = [
  { fips: "54039", name: "Kanawha County, WV", stateAbbr: "WV", slug: "kanawha-county-wv", propertyCount: 30, hotelCount: 17, motelCount: 13, ownerCount: 21 },
  { fips: "54107", name: "Wood County, WV", stateAbbr: "WV", slug: "wood-county-wv", propertyCount: 19, hotelCount: 10, motelCount: 9, ownerCount: 13 },
  { fips: "54037", name: "Jefferson County, WV", stateAbbr: "WV", slug: "jefferson-county-wv", propertyCount: 18, hotelCount: 10, motelCount: 8, ownerCount: 13 },
  { fips: "54025", name: "Greenbrier County, WV", stateAbbr: "WV", slug: "greenbrier-county-wv", propertyCount: 17, hotelCount: 9, motelCount: 8, ownerCount: 12 },
  { fips: "54081", name: "Raleigh County, WV", stateAbbr: "WV", slug: "raleigh-county-wv", propertyCount: 17, hotelCount: 9, motelCount: 8, ownerCount: 12 },
  { fips: "54061", name: "Monongalia County, WV", stateAbbr: "WV", slug: "monongalia-county-wv", propertyCount: 16, hotelCount: 9, motelCount: 7, ownerCount: 11 },
  { fips: "54003", name: "Berkeley County, WV", stateAbbr: "WV", slug: "berkeley-county-wv", propertyCount: 15, hotelCount: 8, motelCount: 7, ownerCount: 11 },
  { fips: "54055", name: "Mercer County, WV", stateAbbr: "WV", slug: "mercer-county-wv", propertyCount: 15, hotelCount: 8, motelCount: 7, ownerCount: 11 },
  { fips: "54083", name: "Randolph County, WV", stateAbbr: "WV", slug: "randolph-county-wv", propertyCount: 14, hotelCount: 8, motelCount: 6, ownerCount: 10 },
  { fips: "54011", name: "Cabell County, WV", stateAbbr: "WV", slug: "cabell-county-wv", propertyCount: 13, hotelCount: 7, motelCount: 6, ownerCount: 9 },
  { fips: "54049", name: "Marion County, WV", stateAbbr: "WV", slug: "marion-county-wv", propertyCount: 11, hotelCount: 6, motelCount: 5, ownerCount: 8 },
  { fips: "54033", name: "Harrison County, WV", stateAbbr: "WV", slug: "harrison-county-wv", propertyCount: 10, hotelCount: 6, motelCount: 4, ownerCount: 7 },
  { fips: "54067", name: "Nicholas County, WV", stateAbbr: "WV", slug: "nicholas-county-wv", propertyCount: 8, hotelCount: 4, motelCount: 4, ownerCount: 6 },
  { fips: "54075", name: "Pocahontas County, WV", stateAbbr: "WV", slug: "pocahontas-county-wv", propertyCount: 8, hotelCount: 4, motelCount: 4, ownerCount: 6 },
  { fips: "54019", name: "Fayette County, WV", stateAbbr: "WV", slug: "fayette-county-wv", propertyCount: 6, hotelCount: 3, motelCount: 3, ownerCount: 4 },
];

// WI counties (top 15 by property count)
const WI_COUNTIES: CountySummary[] = [
  { fips: "55029", name: "Door County, WI", stateAbbr: "WI", slug: "door-county-wi", propertyCount: 88, hotelCount: 48, motelCount: 40, ownerCount: 62 },
  { fips: "55025", name: "Dane County, WI", stateAbbr: "WI", slug: "dane-county-wi", propertyCount: 68, hotelCount: 37, motelCount: 31, ownerCount: 48 },
  { fips: "55079", name: "Milwaukee County, WI", stateAbbr: "WI", slug: "milwaukee-county-wi", propertyCount: 61, hotelCount: 34, motelCount: 27, ownerCount: 43 },
  { fips: "55125", name: "Vilas County, WI", stateAbbr: "WI", slug: "vilas-county-wi", propertyCount: 48, hotelCount: 26, motelCount: 22, ownerCount: 34 },
  { fips: "55133", name: "Waukesha County, WI", stateAbbr: "WI", slug: "waukesha-county-wi", propertyCount: 41, hotelCount: 23, motelCount: 18, ownerCount: 29 },
  { fips: "55009", name: "Brown County, WI", stateAbbr: "WI", slug: "brown-county-wi", propertyCount: 40, hotelCount: 22, motelCount: 18, ownerCount: 28 },
  { fips: "55085", name: "Oneida County, WI", stateAbbr: "WI", slug: "oneida-county-wi", propertyCount: 38, hotelCount: 21, motelCount: 17, ownerCount: 27 },
  { fips: "55111", name: "Sauk County, WI", stateAbbr: "WI", slug: "sauk-county-wi", propertyCount: 37, hotelCount: 20, motelCount: 17, ownerCount: 26 },
  { fips: "55021", name: "Columbia County, WI", stateAbbr: "WI", slug: "columbia-county-wi", propertyCount: 33, hotelCount: 18, motelCount: 15, ownerCount: 23 },
  { fips: "55035", name: "Eau Claire County, WI", stateAbbr: "WI", slug: "eau-claire-county-wi", propertyCount: 28, hotelCount: 15, motelCount: 13, ownerCount: 20 },
  { fips: "55127", name: "Walworth County, WI", stateAbbr: "WI", slug: "walworth-county-wi", propertyCount: 28, hotelCount: 15, motelCount: 13, ownerCount: 20 },
  { fips: "55113", name: "Sawyer County, WI", stateAbbr: "WI", slug: "sawyer-county-wi", propertyCount: 26, hotelCount: 14, motelCount: 12, ownerCount: 18 },
  { fips: "55007", name: "Bayfield County, WI", stateAbbr: "WI", slug: "bayfield-county-wi", propertyCount: 24, hotelCount: 13, motelCount: 11, ownerCount: 17 },
  { fips: "55031", name: "Douglas County, WI", stateAbbr: "WI", slug: "douglas-county-wi", propertyCount: 23, hotelCount: 13, motelCount: 10, ownerCount: 16 },
  { fips: "55139", name: "Winnebago County, WI", stateAbbr: "WI", slug: "winnebago-county-wi", propertyCount: 22, hotelCount: 12, motelCount: 10, ownerCount: 15 },
];

// WY counties (top 15 by property count)
const WY_COUNTIES: CountySummary[] = [
  { fips: "56039", name: "Teton County, WY", stateAbbr: "WY", slug: "teton-county-wy", propertyCount: 70, hotelCount: 39, motelCount: 31, ownerCount: 49 },
  { fips: "56029", name: "Park County, WY", stateAbbr: "WY", slug: "park-county-wy", propertyCount: 47, hotelCount: 26, motelCount: 21, ownerCount: 33 },
  { fips: "56013", name: "Fremont County, WY", stateAbbr: "WY", slug: "fremont-county-wy", propertyCount: 33, hotelCount: 18, motelCount: 15, ownerCount: 23 },
  { fips: "56007", name: "Carbon County, WY", stateAbbr: "WY", slug: "carbon-county-wy", propertyCount: 29, hotelCount: 16, motelCount: 13, ownerCount: 20 },
  { fips: "56021", name: "Laramie County, WY", stateAbbr: "WY", slug: "laramie-county-wy", propertyCount: 23, hotelCount: 13, motelCount: 10, ownerCount: 16 },
  { fips: "56033", name: "Sheridan County, WY", stateAbbr: "WY", slug: "sheridan-county-wy", propertyCount: 22, hotelCount: 12, motelCount: 10, ownerCount: 15 },
  { fips: "56023", name: "Lincoln County, WY", stateAbbr: "WY", slug: "lincoln-county-wy", propertyCount: 19, hotelCount: 10, motelCount: 9, ownerCount: 13 },
  { fips: "56001", name: "Albany County, WY", stateAbbr: "WY", slug: "albany-county-wy", propertyCount: 18, hotelCount: 10, motelCount: 8, ownerCount: 13 },
  { fips: "56037", name: "Sweetwater County, WY", stateAbbr: "WY", slug: "sweetwater-county-wy", propertyCount: 16, hotelCount: 9, motelCount: 7, ownerCount: 11 },
  { fips: "56025", name: "Natrona County, WY", stateAbbr: "WY", slug: "natrona-county-wy", propertyCount: 15, hotelCount: 8, motelCount: 7, ownerCount: 11 },
  { fips: "56041", name: "Uinta County, WY", stateAbbr: "WY", slug: "uinta-county-wy", propertyCount: 13, hotelCount: 7, motelCount: 6, ownerCount: 9 },
  { fips: "56005", name: "Campbell County, WY", stateAbbr: "WY", slug: "campbell-county-wy", propertyCount: 12, hotelCount: 7, motelCount: 5, ownerCount: 8 },
  { fips: "56019", name: "Johnson County, WY", stateAbbr: "WY", slug: "johnson-county-wy", propertyCount: 12, hotelCount: 7, motelCount: 5, ownerCount: 8 },
  { fips: "56035", name: "Sublette County, WY", stateAbbr: "WY", slug: "sublette-county-wy", propertyCount: 10, hotelCount: 6, motelCount: 4, ownerCount: 7 },
  { fips: "56003", name: "Big Horn County, WY", stateAbbr: "WY", slug: "big-horn-county-wy", propertyCount: 9, hotelCount: 5, motelCount: 4, ownerCount: 6 },
];

export const COUNTIES_BY_STATE: Record<string, CountySummary[]> = {
  AL: AL_COUNTIES,
  AK: AK_COUNTIES,
  AZ: AZ_COUNTIES,
  AR: AR_COUNTIES,
  CA: CA_COUNTIES,
  CO: CO_COUNTIES,
  CT: CT_COUNTIES,
  DE: DE_COUNTIES,
  DC: DC_COUNTIES,
  FL: FL_COUNTIES,
  GA: GA_COUNTIES,
  HI: HI_COUNTIES,
  ID: ID_COUNTIES,
  IL: IL_COUNTIES,
  IN: IN_COUNTIES,
  IA: IA_COUNTIES,
  KS: KS_COUNTIES,
  KY: KY_COUNTIES,
  LA: LA_COUNTIES,
  ME: ME_COUNTIES,
  MD: MD_COUNTIES,
  MA: MA_COUNTIES,
  MI: MI_COUNTIES,
  MN: MN_COUNTIES,
  MS: MS_COUNTIES,
  MO: MO_COUNTIES,
  MT: MT_COUNTIES,
  NE: NE_COUNTIES,
  NV: NV_COUNTIES,
  NH: NH_COUNTIES,
  NJ: NJ_COUNTIES,
  NM: NM_COUNTIES,
  NY: NY_COUNTIES,
  NC: NC_COUNTIES,
  ND: ND_COUNTIES,
  OH: OH_COUNTIES,
  OK: OK_COUNTIES,
  OR: OR_COUNTIES,
  PA: PA_COUNTIES,
  RI: RI_COUNTIES,
  SC: SC_COUNTIES,
  SD: SD_COUNTIES,
  TN: TN_COUNTIES,
  TX: TX_COUNTIES,
  UT: UT_COUNTIES,
  VT: VT_COUNTIES,
  VA: VA_COUNTIES,
  WA: WA_COUNTIES,
  WV: WV_COUNTIES,
  WI: WI_COUNTIES,
  WY: WY_COUNTIES,
};

export function getCountiesByState(stateAbbr: string): CountySummary[] {
  return COUNTIES_BY_STATE[stateAbbr] || [];
}

export function getCountyBySlug(stateAbbr: string, countySlug: string): CountySummary | undefined {
  const counties = COUNTIES_BY_STATE[stateAbbr];
  return counties?.find((c) => c.slug === countySlug);
}
