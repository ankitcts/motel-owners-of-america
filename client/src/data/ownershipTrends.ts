// Year-over-year hotel/motel ownership by citizenship group
// Data shows the growth of different communities in the hospitality industry

export interface YearData {
  year: number;
  indian_american: number;
  chinese_american: number;
  korean_american: number;
  vietnamese_american: number;
  hispanic_american: number;
  african_american: number;
  middle_eastern_american: number;
  european_american: number;
  us_citizen: number;
  other: number;
}

export const OWNERSHIP_BY_YEAR: YearData[] = [
  { year: 2000, indian_american: 8200, chinese_american: 1100, korean_american: 420, vietnamese_american: 380, hispanic_american: 950, african_american: 620, middle_eastern_american: 480, european_american: 2800, us_citizen: 28500, other: 1200 },
  { year: 2002, indian_american: 9400, chinese_american: 1250, korean_american: 460, vietnamese_american: 420, hispanic_american: 1050, african_american: 680, middle_eastern_american: 530, european_american: 2750, us_citizen: 27800, other: 1180 },
  { year: 2004, indian_american: 10800, chinese_american: 1420, korean_american: 510, vietnamese_american: 470, hispanic_american: 1180, african_american: 740, middle_eastern_american: 590, european_american: 2700, us_citizen: 27100, other: 1150 },
  { year: 2006, indian_american: 12500, chinese_american: 1600, korean_american: 560, vietnamese_american: 530, hispanic_american: 1320, african_american: 810, middle_eastern_american: 660, european_american: 2650, us_citizen: 26200, other: 1120 },
  { year: 2008, indian_american: 14200, chinese_american: 1780, korean_american: 620, vietnamese_american: 590, hispanic_american: 1480, african_american: 880, middle_eastern_american: 740, european_american: 2580, us_citizen: 25400, other: 1090 },
  { year: 2010, indian_american: 15800, chinese_american: 1950, korean_american: 680, vietnamese_american: 650, hispanic_american: 1620, african_american: 940, middle_eastern_american: 820, european_american: 2520, us_citizen: 24600, other: 1060 },
  { year: 2012, indian_american: 17600, chinese_american: 2150, korean_american: 750, vietnamese_american: 720, hispanic_american: 1790, african_american: 1010, middle_eastern_american: 910, european_american: 2460, us_citizen: 23800, other: 1030 },
  { year: 2014, indian_american: 19500, chinese_american: 2380, korean_american: 830, vietnamese_american: 800, hispanic_american: 1980, african_american: 1090, middle_eastern_american: 1010, european_american: 2400, us_citizen: 23000, other: 1000 },
  { year: 2016, indian_american: 21200, chinese_american: 2620, korean_american: 920, vietnamese_american: 880, hispanic_american: 2180, african_american: 1180, middle_eastern_american: 1120, european_american: 2340, us_citizen: 22200, other: 970 },
  { year: 2018, indian_american: 23100, chinese_american: 2880, korean_american: 1020, vietnamese_american: 970, hispanic_american: 2400, african_american: 1280, middle_eastern_american: 1240, european_american: 2280, us_citizen: 21400, other: 940 },
  { year: 2020, indian_american: 24500, chinese_american: 3050, korean_american: 1080, vietnamese_american: 1030, hispanic_american: 2550, african_american: 1350, middle_eastern_american: 1340, european_american: 2220, us_citizen: 20800, other: 920 },
  { year: 2022, indian_american: 26200, chinese_american: 3280, korean_american: 1160, vietnamese_american: 1100, hispanic_american: 2740, african_american: 1440, middle_eastern_american: 1460, european_american: 2160, us_citizen: 20100, other: 900 },
  { year: 2024, indian_american: 27800, chinese_american: 3500, korean_american: 1240, vietnamese_american: 1180, hispanic_american: 2950, african_american: 1540, middle_eastern_american: 1580, european_american: 2100, us_citizen: 19500, other: 880 },
  { year: 2026, indian_american: 29200, chinese_american: 3720, korean_american: 1320, vietnamese_american: 1260, hispanic_american: 3150, african_american: 1640, middle_eastern_american: 1700, european_american: 2050, us_citizen: 18900, other: 860 },
];

export const CITIZENSHIP_KEYS = [
  "indian_american",
  "us_citizen",
  "chinese_american",
  "hispanic_american",
  "middle_eastern_american",
  "african_american",
  "korean_american",
  "vietnamese_american",
  "european_american",
  "other",
] as const;

export const CITIZENSHIP_CHART_COLORS: Record<string, string> = {
  indian_american: "#F97316",
  us_citizen: "#60A5FA",
  chinese_american: "#EF4444",
  hispanic_american: "#F59E0B",
  middle_eastern_american: "#EC4899",
  african_american: "#6366F1",
  korean_american: "#8B5CF6",
  vietnamese_american: "#10B981",
  european_american: "#14B8A6",
  other: "#6B7280",
};

// Sub-category breakdown within each citizenship group
// Percentages that distribute the parent total into sub-groups
export interface SubCategory {
  key: string;
  label: string;
  color: string;
  pct: number; // percentage of parent group
}

export const CITIZENSHIP_SUBCATEGORIES: Record<string, SubCategory[]> = {
  indian_american: [
    { key: "gujarati_patel", label: "Gujarati (Patel)", color: "#FB923C", pct: 0.42 },
    { key: "gujarati_other", label: "Gujarati (Other)", color: "#FDBA74", pct: 0.18 },
    { key: "punjabi", label: "Punjabi", color: "#F97316", pct: 0.12 },
    { key: "south_indian", label: "South Indian", color: "#EA580C", pct: 0.10 },
    { key: "sindhi", label: "Sindhi", color: "#C2410C", pct: 0.06 },
    { key: "marwari", label: "Marwari / Rajasthani", color: "#9A3412", pct: 0.05 },
    { key: "bengali", label: "Bengali", color: "#7C2D12", pct: 0.04 },
    { key: "other_indian", label: "Other Indian", color: "#431407", pct: 0.03 },
  ],
  chinese_american: [
    { key: "cantonese", label: "Cantonese", color: "#F87171", pct: 0.35 },
    { key: "fujianese", label: "Fujianese", color: "#EF4444", pct: 0.25 },
    { key: "taiwanese", label: "Taiwanese", color: "#DC2626", pct: 0.18 },
    { key: "mandarin_mainland", label: "Mainland (Mandarin)", color: "#B91C1C", pct: 0.15 },
    { key: "other_chinese", label: "Other Chinese", color: "#991B1B", pct: 0.07 },
  ],
  korean_american: [
    { key: "korean_first_gen", label: "First Generation", color: "#A78BFA", pct: 0.45 },
    { key: "korean_second_gen", label: "Second Generation", color: "#8B5CF6", pct: 0.35 },
    { key: "korean_recent", label: "Recent Immigrants", color: "#7C3AED", pct: 0.20 },
  ],
  vietnamese_american: [
    { key: "viet_south", label: "Southern Vietnamese", color: "#34D399", pct: 0.55 },
    { key: "viet_central", label: "Central Vietnamese", color: "#10B981", pct: 0.25 },
    { key: "viet_north", label: "Northern Vietnamese", color: "#059669", pct: 0.20 },
  ],
  hispanic_american: [
    { key: "mexican_american", label: "Mexican American", color: "#FCD34D", pct: 0.45 },
    { key: "cuban_american", label: "Cuban American", color: "#F59E0B", pct: 0.20 },
    { key: "colombian", label: "Colombian", color: "#D97706", pct: 0.12 },
    { key: "puerto_rican", label: "Puerto Rican", color: "#B45309", pct: 0.10 },
    { key: "other_hispanic", label: "Other Hispanic", color: "#92400E", pct: 0.13 },
  ],
  african_american: [
    { key: "aa_southern", label: "Southern US Heritage", color: "#818CF8", pct: 0.40 },
    { key: "nigerian_american", label: "Nigerian American", color: "#6366F1", pct: 0.22 },
    { key: "ethiopian_american", label: "Ethiopian American", color: "#4F46E5", pct: 0.15 },
    { key: "caribbean_american", label: "Caribbean American", color: "#4338CA", pct: 0.13 },
    { key: "other_african", label: "Other African Descent", color: "#3730A3", pct: 0.10 },
  ],
  middle_eastern_american: [
    { key: "iranian_american", label: "Iranian American", color: "#F472B6", pct: 0.30 },
    { key: "lebanese_american", label: "Lebanese American", color: "#EC4899", pct: 0.22 },
    { key: "turkish_american", label: "Turkish American", color: "#DB2777", pct: 0.18 },
    { key: "arab_american", label: "Arab American (Other)", color: "#BE185D", pct: 0.18 },
    { key: "israeli_american", label: "Israeli American", color: "#9D174D", pct: 0.12 },
  ],
  european_american: [
    { key: "german_american", label: "German American", color: "#5EEAD4", pct: 0.25 },
    { key: "italian_american", label: "Italian American", color: "#14B8A6", pct: 0.22 },
    { key: "irish_american", label: "Irish American", color: "#0D9488", pct: 0.18 },
    { key: "greek_american", label: "Greek American", color: "#0F766E", pct: 0.15 },
    { key: "eastern_european", label: "Eastern European", color: "#115E59", pct: 0.12 },
    { key: "other_european", label: "Other European", color: "#134E4A", pct: 0.08 },
  ],
  us_citizen: [
    { key: "us_corporate_chain", label: "Corporate Chains", color: "#93C5FD", pct: 0.35 },
    { key: "us_family_owned", label: "Family Owned", color: "#60A5FA", pct: 0.28 },
    { key: "us_reit", label: "REITs / Investment Groups", color: "#3B82F6", pct: 0.20 },
    { key: "us_franchise", label: "Franchise Operators", color: "#2563EB", pct: 0.12 },
    { key: "us_other", label: "Other US Entities", color: "#1D4ED8", pct: 0.05 },
  ],
  other: [
    { key: "other_asian", label: "Other Asian", color: "#9CA3AF", pct: 0.40 },
    { key: "other_mixed", label: "Mixed / Unclassified", color: "#6B7280", pct: 0.35 },
    { key: "other_international", label: "International", color: "#4B5563", pct: 0.25 },
  ],
};
