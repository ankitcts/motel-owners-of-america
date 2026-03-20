import { notFound } from "next/navigation";
import { Container, Box, Typography, Grid } from "@mui/material";
import { Hotel, MapsHomeWork, Person, Map as MapIcon } from "@mui/icons-material";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import StatCard from "@/components/common/StatCard";
import CountyList from "@/components/detail/CountyList";
import StateMapView from "@/components/map/StateMapView";
import { getStateBySlug, STATES_DATA } from "@/data/states";
import { getCountiesByState } from "@/data/counties";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ stateSlug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { stateSlug } = await params;
  const state = getStateBySlug(stateSlug);
  if (!state) return { title: "State Not Found" };
  return {
    title: `Hotel & Motel Owners in ${state.stateName}`,
    description: `Explore ${state.propertyCount} hotels and motels across ${state.countyCount} counties in ${state.stateName}. View ownership data and property details.`,
  };
}

export function generateStaticParams() {
  return STATES_DATA.map((s) => ({ stateSlug: s.slug }));
}

export default async function StatePage({ params }: PageProps) {
  const { stateSlug } = await params;
  const state = getStateBySlug(stateSlug);
  if (!state) notFound();

  const counties = getCountiesByState(state.stateAbbr);

  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: state.stateName },
        ]}
      />

      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          {state.stateName}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {counties.length > 0
            ? `Explore ${state.propertyCount} hotels and motels across ${counties.length} counties.`
            : `${state.propertyCount} hotels and motels tracked. County-level data coming soon.`}
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
