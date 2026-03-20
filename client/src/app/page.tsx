"use client";

import dynamic from "next/dynamic";
import { useState, useCallback, useMemo, Suspense } from "react";
import { Container, Box, Typography, Grid, Chip, CircularProgress, Skeleton } from "@mui/material";
import { Hotel, MapsHomeWork, Person, LocationCity } from "@mui/icons-material";
import StatCard from "@/components/common/StatCard";
import YearSelector from "@/components/common/YearSelector";
import { useStatesData, useTotalStats, useAvailableYears } from "@/api/hooks/useAppData";
import { OWNERSHIP_BY_YEAR, CITIZENSHIP_KEYS, type YearData } from "@/data/ownershipTrends";
import type { StateSummary } from "@/types";

// Lazy load heavy map components
const USMap = dynamic(() => import("@/components/map/USMap"), {
  loading: () => <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}><CircularProgress /></Box>,
  ssr: false,
});
const StateList = dynamic(() => import("@/components/detail/StateList"), {
  loading: () => <Skeleton variant="rounded" height={600} sx={{ borderRadius: 3 }} />,
});

export default function HomePage() {
  const { years, defaultIndex } = useAvailableYears();
  const [yearIndex, setYearIndex] = useState(defaultIndex);
  const { states: baseStates, loading, error, source } = useStatesData();

  const safeIndex = Math.min(yearIndex, years.length - 1);
  const selectedYear = years[safeIndex] || years[years.length - 1];

  // Scale state data based on selected year vs latest year
  const states = useMemo(() => {
    if (!baseStates.length) return baseStates;
    // Find the trend ratio for the selected year vs latest
    const latestTrend = OWNERSHIP_BY_YEAR[OWNERSHIP_BY_YEAR.length - 1];
    const selectedTrend = OWNERSHIP_BY_YEAR.find((d) => d.year === selectedYear);
    if (!selectedTrend || !latestTrend) return baseStates;

    const latestTotal = CITIZENSHIP_KEYS.reduce((s, k) => s + (latestTrend[k as keyof YearData] as number), 0);
    const selectedTotal = CITIZENSHIP_KEYS.reduce((s, k) => s + (selectedTrend[k as keyof YearData] as number), 0);
    const ratio = selectedTotal / latestTotal;

    if (Math.abs(ratio - 1) < 0.01) return baseStates; // no change needed

    return baseStates.map((st) => ({
      ...st,
      propertyCount: Math.round(st.propertyCount * ratio),
      hotelCount: Math.round(st.hotelCount * ratio),
      motelCount: Math.round(st.motelCount * ratio),
      ownerCount: Math.round(st.ownerCount * ratio),
    }));
  }, [baseStates, selectedYear]);

  const stats = useTotalStats(states);

  const handleYearChange = useCallback((idx: number) => {
    setYearIndex(Math.max(0, Math.min(years.length - 1, idx)));
  }, [years.length]);

  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>
      <Box sx={{ mb: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1 }}>
          <Typography variant="h4" fontWeight={700}>
            Hotel & Motel Ownership Across America
          </Typography>
          <Chip
            label={selectedYear}
            size="small"
            sx={{ bgcolor: "rgba(92,158,255,0.15)", color: "#5C9EFF", fontWeight: 600, fontSize: "0.75rem" }}
          />
        </Box>
        <Typography variant="body1" color="text.secondary">
          Explore public ownership data for hotels and motels across all 50 states. Click a state to drill down.
        </Typography>
      </Box>

      <Box sx={{ mb: 3 }}>
        <YearSelector years={years} selectedIndex={safeIndex} onYearChange={handleYearChange} />
      </Box>

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", py: 8 }}><CircularProgress /></Box>
      ) : error ? (
        <Box sx={{ py: 4, textAlign: "center" }}><Typography color="error">{error}</Typography></Box>
      ) : (
        <>
          <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid size={{ xs: 6, sm: 3 }}>
              <StatCard title="Total Properties" value={stats.totalProperties} icon={Hotel} color="#5C9EFF" />
            </Grid>
            <Grid size={{ xs: 6, sm: 3 }}>
              <StatCard title="Hotels" value={stats.totalHotels} icon={LocationCity} color="#34D399" />
            </Grid>
            <Grid size={{ xs: 6, sm: 3 }}>
              <StatCard title="Motels" value={stats.totalMotels} icon={MapsHomeWork} color="#FF8A65" />
            </Grid>
            <Grid size={{ xs: 6, sm: 3 }}>
              <StatCard title="Owners / LLCs" value={stats.totalOwners} icon={Person} color="#A78BFA" />
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid size={{ xs: 12, lg: 8 }}>
              <Box sx={{ height: { xs: 400, sm: 500, md: 600 }, borderRadius: 3, overflow: "hidden", border: "1px solid", borderColor: "divider" }}>
                <USMap states={states} />
              </Box>
            </Grid>
            <Grid size={{ xs: 12, lg: 4 }}>
              <StateList states={states} />
            </Grid>
          </Grid>
        </>
      )}
    </Container>
  );
}
