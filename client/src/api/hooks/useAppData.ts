"use client";

import { useQuery } from "@tanstack/react-query";
import { useDevStore } from "@/stores/devStore";
import { STATES_DATA } from "@/data/states";
import { getCountiesByState } from "@/data/counties";
import { MOCK_OWNERS, MOCK_PROPERTIES, getOwnerProperties } from "@/data/mockProperties";
import { OWNERSHIP_BY_YEAR, CITIZENSHIP_KEYS, type YearData } from "@/data/ownershipTrends";
import type { StateSummary, CountySummary, Owner, Property } from "@/types";

interface LiveYearSummary {
  year: number;
  national_summary: { total_establishments: number; total_employees: number };
  states: Array<{
    state_abbr: string;
    state_name: string;
    property_count: number;
    employee_count: number;
  }>;
  counties: Array<{
    state_abbr: string;
    county_fips: string;
    county_name: string;
    property_count: number;
    employee_count: number;
  }>;
}

const LATEST_LIVE_YEAR = 2001;

// Cached live data
let _liveCache: LiveYearSummary | null = null;

async function fetchLiveSummary(): Promise<LiveYearSummary> {
  if (_liveCache) return _liveCache;
  const res = await fetch(`/data/live/${LATEST_LIVE_YEAR}_summary.json`);
  if (!res.ok) throw new Error("Failed to load live data");
  _liveCache = await res.json();
  return _liveCache!;
}

function liveStateToSummary(s: LiveYearSummary["states"][0], countyCount: number): StateSummary {
  return {
    stateAbbr: s.state_abbr,
    stateName: s.state_name,
    slug: s.state_name.toLowerCase().replace(/\s+/g, "-"),
    propertyCount: s.property_count,
    hotelCount: Math.round(s.property_count * 0.55),
    motelCount: Math.round(s.property_count * 0.45),
    ownerCount: Math.round(s.property_count * 0.7),
    countyCount,
  };
}

// ─── useDataSource ──────────────────────────────────
export function useDataSource() {
  return useDevStore((s) => s.dataSource);
}

// ─── useStatesData ──────────────────────────────────
export function useStatesData() {
  const dataSource = useDataSource();

  const liveQuery = useQuery({
    queryKey: ["live-summary", LATEST_LIVE_YEAR],
    queryFn: fetchLiveSummary,
    enabled: dataSource === "live",
    staleTime: Infinity,
  });

  if (dataSource === "live" && liveQuery.data) {
    const data = liveQuery.data;
    const states = data.states.map((s) => {
      const countyCount = data.counties.filter((c) => c.state_abbr === s.state_abbr).length;
      return liveStateToSummary(s, countyCount);
    });
    return { states, loading: false, error: null, source: "live" as const, year: LATEST_LIVE_YEAR };
  }

  if (dataSource === "live" && liveQuery.isLoading) {
    return { states: [] as StateSummary[], loading: true, error: null, source: "live" as const, year: LATEST_LIVE_YEAR };
  }

  if (dataSource === "live" && liveQuery.error) {
    return { states: [] as StateSummary[], loading: false, error: (liveQuery.error as Error).message, source: "live" as const, year: LATEST_LIVE_YEAR };
  }

  return { states: STATES_DATA, loading: false, error: null, source: "mock" as const, year: null };
}

// ─── useCountiesData ────────────────────────────────
export function useCountiesData(stateAbbr: string) {
  const dataSource = useDataSource();

  const liveQuery = useQuery({
    queryKey: ["live-summary", LATEST_LIVE_YEAR],
    queryFn: fetchLiveSummary,
    enabled: dataSource === "live",
    staleTime: Infinity,
  });

  if (dataSource === "live" && liveQuery.data) {
    const counties: CountySummary[] = liveQuery.data.counties
      .filter((c) => c.state_abbr === stateAbbr)
      .map((c) => ({
        fips: c.county_fips,
        name: c.county_name,
        stateAbbr: c.state_abbr,
        slug: c.county_name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
        propertyCount: c.property_count,
        hotelCount: Math.round(c.property_count * 0.55),
        motelCount: Math.round(c.property_count * 0.45),
        ownerCount: Math.round(c.property_count * 0.7),
      }))
      .sort((a, b) => b.propertyCount - a.propertyCount);
    return { counties, loading: false, source: "live" as const };
  }

  return { counties: getCountiesByState(stateAbbr), loading: liveQuery.isLoading, source: dataSource };
}

// ─── useOwnersData ──────────────────────────────────
export function useOwnersData() {
  const dataSource = useDataSource();
  // Owners have no live data yet — always return mock but mark source
  return {
    owners: MOCK_OWNERS,
    source: dataSource,
    liveAvailable: false,
  };
}

// ─── usePropertiesData ──────────────────────────────
export function usePropertiesData(countyFips?: string, stateAbbr?: string) {
  const dataSource = useDataSource();
  let properties = MOCK_PROPERTIES;
  if (countyFips) properties = properties.filter((p) => p.countyFips === countyFips);
  else if (stateAbbr) properties = properties.filter((p) => p.stateAbbr === stateAbbr);
  return { properties, source: dataSource, liveAvailable: false };
}

// ─── useAnalyticsData ───────────────────────────────
export function useAnalyticsData() {
  const dataSource = useDataSource();

  const liveQuery = useQuery({
    queryKey: ["live-summary", LATEST_LIVE_YEAR],
    queryFn: fetchLiveSummary,
    enabled: dataSource === "live",
    staleTime: Infinity,
  });

  // For live mode, overlay real establishment count for matching years
  if (dataSource === "live" && liveQuery.data) {
    const liveTotal = liveQuery.data.national_summary.total_establishments;
    // Update the year entries that match our scraped years
    const adjusted = OWNERSHIP_BY_YEAR.map((yd) => {
      if (yd.year === 2000 || yd.year === 2002) {
        // Scale all citizenship groups proportionally to match real total
        const mockTotal = CITIZENSHIP_KEYS.reduce((sum, k) => sum + (yd[k as keyof YearData] as number), 0);
        const ratio = liveTotal / mockTotal;
        const scaled = { ...yd };
        for (const k of CITIZENSHIP_KEYS) {
          (scaled as Record<string, number>)[k] = Math.round((yd[k as keyof YearData] as number) * ratio);
        }
        return scaled;
      }
      return yd;
    });
    return { data: adjusted, source: "live" as const, liveTotal };
  }

  return { data: OWNERSHIP_BY_YEAR, source: dataSource, liveTotal: null };
}

// ─── useTotalStats ──────────────────────────────────
export function useTotalStats(states: StateSummary[]) {
  return states.reduce(
    (acc, s) => ({
      totalProperties: acc.totalProperties + s.propertyCount,
      totalHotels: acc.totalHotels + s.hotelCount,
      totalMotels: acc.totalMotels + s.motelCount,
      totalOwners: acc.totalOwners + s.ownerCount,
    }),
    { totalProperties: 0, totalHotels: 0, totalMotels: 0, totalOwners: 0 }
  );
}
