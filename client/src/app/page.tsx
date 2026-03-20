"use client";

import { Container, Box, Typography, Grid, Chip, CircularProgress } from "@mui/material";
import { Hotel, MapsHomeWork, Person, LocationCity } from "@mui/icons-material";
import USMap from "@/components/map/USMap";
import StatCard from "@/components/common/StatCard";
import StateList from "@/components/detail/StateList";
import { useStatesData, useTotalStats } from "@/api/hooks/useAppData";

export default function HomePage() {
  const { states, loading, error, source, year } = useStatesData();
  const stats = useTotalStats(states);

  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>
      <Box sx={{ mb: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1 }}>
          <Typography variant="h4" fontWeight={700}>
            Hotel & Motel Ownership Across America
          </Typography>
          <Chip
            label={source === "live" ? `Live (${year})` : "Mock Data"}
            size="small"
            sx={{
              bgcolor: source === "live" ? "rgba(52,211,153,0.15)" : "rgba(251,191,36,0.15)",
              color: source === "live" ? "#34D399" : "#FBBF24",
              fontWeight: 600,
              fontSize: "0.7rem",
            }}
          />
        </Box>
        <Typography variant="body1" color="text.secondary">
          {source === "live"
            ? `Real Census data: ${stats.totalProperties.toLocaleString()} accommodation establishments from ${year}.`
            : "Explore public ownership data for hotels and motels across all 50 states. Click a state to drill down."}
        </Typography>
      </Box>

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", py: 8 }}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Box sx={{ py: 4, textAlign: "center" }}>
          <Typography color="error">Failed to load live data: {error}</Typography>
        </Box>
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
              <Box
                sx={{
                  height: { xs: 400, sm: 500, md: 600 },
                  borderRadius: 3,
                  overflow: "hidden",
                  border: "1px solid",
                  borderColor: "divider",
                }}
              >
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
