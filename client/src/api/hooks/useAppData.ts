"use client";

import { useQuery } from "@tanstack/react-query";
import { useDevStore } from "@/stores/devStore";
import { STATES_DATA, getTotalStats } from "@/data/states";
import type { StateSummary } from "@/types";

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

// Latest scraped year available
const LATEST_LIVE_YEAR = 2001;

async function fetchLiveStates(): Promise<StateSummary[]> {
  const res = await fetch(`/data/live/${LATEST_LIVE_YEAR}_summary.json`);
  if (!res.ok) throw new Error("Failed to load live data");
  const data: LiveYearSummary = await res.json();

  return data.states.map((s) => {
    const stateCounties = data.counties.filter((c) => c.state_abbr === s.state_abbr);
    return {
      stateAbbr: s.state_abbr,
      stateName: s.state_name,
      slug: s.state_name.toLowerCase().replace(/\s+/g, "-"),
      propertyCount: s.property_count,
      hotelCount: Math.round(s.property_count * 0.55), // estimate split
      motelCount: Math.round(s.property_count * 0.45),
      ownerCount: Math.round(s.property_count * 0.7), // estimate
      countyCount: stateCounties.length,
    };
  });
}

export function useStatesData() {
  const dataSource = useDevStore((s) => s.dataSource);

  const liveQuery = useQuery({
    queryKey: ["live-states", LATEST_LIVE_YEAR],
    queryFn: fetchLiveStates,
    enabled: dataSource === "live",
    staleTime: Infinity,
  });

  if (dataSource === "live") {
    return {
      states: liveQuery.data || [],
      loading: liveQuery.isLoading,
      error: liveQuery.error?.message || null,
      source: "live" as const,
      year: LATEST_LIVE_YEAR,
    };
  }

  return {
    states: STATES_DATA,
    loading: false,
    error: null,
    source: "mock" as const,
    year: null,
  };
}

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
