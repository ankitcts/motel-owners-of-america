export function formatNumber(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return n.toLocaleString();
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function stateAbbrToSlug(abbr: string, statesMap: Record<string, string>): string {
  return slugify(statesMap[abbr] || abbr);
}

export function ownerTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    individual: "Individual",
    llc: "LLC",
    corporation: "Corporation",
    trust: "Trust",
    partnership: "Partnership",
  };
  return labels[type] || type;
}

export function citizenshipLabel(type: string): string {
  const labels: Record<string, string> = {
    us_citizen: "US Citizen",
    indian_american: "Indian American",
    chinese_american: "Chinese American",
    korean_american: "Korean American",
    vietnamese_american: "Vietnamese American",
    hispanic_american: "Hispanic American",
    african_american: "African American",
    middle_eastern_american: "Middle Eastern American",
    european_american: "European American",
    other: "Other",
  };
  return labels[type] || type;
}

export function propertyTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    hotel: "Hotel",
    motel: "Motel",
    inn: "Inn",
    resort: "Resort",
    extended_stay: "Extended Stay",
  };
  return labels[type] || type;
}
