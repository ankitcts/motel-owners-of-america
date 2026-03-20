import { scaleQuantize } from "d3-scale";
import { schemeBlues } from "d3-scale-chromatic";

export function createChoroplethScale(maxValue: number) {
  return scaleQuantize<string>()
    .domain([0, maxValue])
    .range(schemeBlues[7] as unknown as string[]);
}

export const PROPERTY_TYPE_COLORS: Record<string, string> = {
  hotel: "#34D399",
  motel: "#FF8A65",
  inn: "#5C9EFF",
  resort: "#A78BFA",
  extended_stay: "#FBBF24",
};

export const HOVER_COLOR = "#FFD700";
export const BORDER_COLOR = "rgba(255, 255, 255, 0.3)";
export const BORDER_HOVER_COLOR = "#FFD700";
