"use client";

import { use } from "react";
import { notFound, useParams } from "next/navigation";
import { Container, Box, Typography, Grid, Chip } from "@mui/material";
import { Hotel, MapsHomeWork, Person } from "@mui/icons-material";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import StatCard from "@/components/common/StatCard";
import CountyList from "@/components/detail/CountyList";
import StateMapView from "@/components/map/StateMapView";
import { getStateBySlug, STATES_DATA } from "@/data/states";
import { useStatesData, useCountiesData } from "@/api/hooks/useAppData";

export default function StatePage() {
  const params = useParams<{ stateSlug: string }>();
  const stateSlug = params.stateSlug;

  const { states, source } = useStatesData();
  const mockState = getStateBySlug(stateSlug);

  // Find state from either live or mock data
  const state = states.find((s) => s.slug === stateSlug) || mockState;
  if (!state) notFound();

  const { counties, source: countySource } = useCountiesData(state.stateAbbr);

  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: state.stateName },
        ]}
      />

      <Box sx={{ mb: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1 }}>
          <Typography variant="h4" fontWeight={700}>
            {state.stateName}
          </Typography>
          <Chip
            label={source === "live" ? "Live" : "Mock"}
            size="small"
            sx={{
              bgcolor: source === "live" ? "rgba(52,211,153,0.15)" : "rgba(251,191,36,0.15)",
              color: source === "live" ? "#34D399" : "#FBBF24",
              fontWeight: 600,
              fontSize: "0.65rem",
            }}
          />
        </Box>
        <Typography variant="body1" color="text.secondary">
          {counties.length > 0
            ? `Explore ${state.propertyCount.toLocaleString()} hotels and motels across ${counties.length} counties.`
            : `${state.propertyCount.toLocaleString()} hotels and motels tracked. County-level data coming soon.`}
        </Typography>
      </Box>

      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid size={{ xs: 6, sm: 3 }}>
          <StatCard title="Properties" value={state.propertyCount} icon={Hotel} color="#5C9EFF" />
        </Grid>
        <Grid size={{ xs: 6, sm: 3 }}>
          <StatCard title="Hotels" value={state.hotelCount} icon={Hotel} color="#34D399" />
        </Grid>
        <Grid size={{ xs: 6, sm: 3 }}>
          <StatCard title="Motels" value={state.motelCount} icon={MapsHomeWork} color="#FF8A65" />
        </Grid>
        <Grid size={{ xs: 6, sm: 3 }}>
          <StatCard title="Owners" value={state.ownerCount} icon={Person} color="#A78BFA" />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, lg: 8 }}>
          <Box
            sx={{
              height: { xs: 400, sm: 500, md: 550 },
              borderRadius: 3,
              overflow: "hidden",
              border: "1px solid",
              borderColor: "divider",
            }}
          >
            <StateMapView state={state} counties={counties} />
          </Box>
        </Grid>
        <Grid size={{ xs: 12, lg: 4 }}>
          <CountyList counties={counties} stateSlug={state.slug} />
        </Grid>
      </Grid>
    </Container>
  );
}
