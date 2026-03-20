import { notFound } from "next/navigation";
import { Container, Box, Typography, Grid, Card, CardContent, Chip } from "@mui/material";
import { Hotel, MapsHomeWork, Person, OpenInNew } from "@mui/icons-material";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import StatCard from "@/components/common/StatCard";
import PropertyTable from "@/components/detail/PropertyTable";
import { getStateBySlug, STATE_SLUG_TO_ABBR } from "@/data/states";
import { getCountyBySlug } from "@/data/counties";
import { getPropertiesByCounty } from "@/data/mockProperties";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ stateSlug: string; countySlug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { stateSlug, countySlug } = await params;
  const state = getStateBySlug(stateSlug);
  const stateAbbr = STATE_SLUG_TO_ABBR[stateSlug];
  const county = stateAbbr ? getCountyBySlug(stateAbbr, countySlug) : undefined;
  if (!state || !county) return { title: "County Not Found" };
  return {
    title: `Hotels & Motels in ${county.name} County, ${state.stateAbbr}`,
    description: `${county.propertyCount} hotels and motels in ${county.name} County, ${state.stateName}. View property details, ownership data, and LLC information.`,
  };
}

export default async function CountyPage({ params }: PageProps) {
  const { stateSlug, countySlug } = await params;
  const state = getStateBySlug(stateSlug);
  if (!state) notFound();

  const county = getCountyBySlug(state.stateAbbr, countySlug);
  if (!county) notFound();

  const properties = getPropertiesByCounty(county.fips);

  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: state.stateName, href: `/states/${state.slug}` },
          { label: `${county.name} County` },
        ]}
      />

      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          {county.name} County, {state.stateAbbr}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {properties.length > 0
            ? `Showing ${properties.length} of ${county.propertyCount} properties tracked in ${county.name} County.`
            : `${county.propertyCount} properties tracked. Detailed data coming soon.`}
        </Typography>
      </Box>

      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid size={{ xs: 6, sm: 3 }}>
          <StatCard title="Properties" value={county.propertyCount} icon={Hotel} color="#5C9EFF" />
        </Grid>
        <Grid size={{ xs: 6, sm: 3 }}>
          <StatCard title="Hotels" value={county.hotelCount} icon={Hotel} color="#34D399" />
        </Grid>
        <Grid size={{ xs: 6, sm: 3 }}>
          <StatCard title="Motels" value={county.motelCount} icon={MapsHomeWork} color="#FF8A65" />
        </Grid>
        <Grid size={{ xs: 6, sm: 3 }}>
          <StatCard title="Owners" value={county.ownerCount} icon={Person} color="#A78BFA" />
        </Grid>
      </Grid>

      {properties.length > 0 ? (
        <PropertyTable properties={properties} stateSlug={stateSlug} />
      ) : (
        <Card>
          <CardContent sx={{ textAlign: "center", py: 6 }}>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              Property Details Coming Soon
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We are actively collecting data for {county.name} County.
              Check back soon for individual property listings.
            </Typography>
          </CardContent>
        </Card>
      )}
    </Container>
  );
}
