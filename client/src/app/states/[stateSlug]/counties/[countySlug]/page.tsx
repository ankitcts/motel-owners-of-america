import { notFound } from "next/navigation";
import { Container, Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { Hotel, MapsHomeWork, Person } from "@mui/icons-material";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import StatCard from "@/components/common/StatCard";
import PropertyTable from "@/components/detail/PropertyTable";
import PropertyMapView from "@/components/map/PropertyMapView";
import { getStateBySlug, STATE_SLUG_TO_ABBR } from "@/data/states";
import { getCountyBySlug } from "@/data/counties";
import { getPropertiesByCounty, getOwnerById } from "@/data/mockProperties";
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
    description: `Hotels and motels in ${county.name} County, ${state.stateName}. View property details, ownership data, and LLC information.`,
  };
}

export default async function CountyPage({ params }: PageProps) {
  const { stateSlug, countySlug } = await params;
  const state = getStateBySlug(stateSlug);
  if (!state) notFound();

  const county = getCountyBySlug(state.stateAbbr, countySlug);
  if (!county) notFound();

  const properties = getPropertiesByCounty(county.fips);

  // Derive stats from actual property data
  const hotelCount = properties.filter((p) => p.propertyType === "hotel").length;
  const motelCount = properties.filter((p) => p.propertyType === "motel").length;
  const otherCount = properties.length - hotelCount - motelCount;
  const uniqueOwnerIds = new Set(properties.flatMap((p) => p.ownerIds));

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
            ? `${properties.length} properties listed in ${county.name} County.`
            : `Property data for ${county.name} County coming soon.`}
        </Typography>
      </Box>

      {properties.length > 0 && (
        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid size={{ xs: 6, sm: 3 }}>
            <StatCard title="Properties" value={properties.length} icon={Hotel} color="#5C9EFF" />
          </Grid>
          <Grid size={{ xs: 6, sm: 3 }}>
            <StatCard title="Hotels" value={hotelCount} icon={Hotel} color="#34D399" />
          </Grid>
          <Grid size={{ xs: 6, sm: 3 }}>
            <StatCard title="Motels" value={motelCount + otherCount} icon={MapsHomeWork} color="#FF8A65" />
          </Grid>
          <Grid size={{ xs: 6, sm: 3 }}>
            <StatCard title="Owners" value={uniqueOwnerIds.size} icon={Person} color="#A78BFA" />
          </Grid>
        </Grid>
      )}

      {properties.length > 0 ? (
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, lg: 7 }}>
            <Box
              sx={{
                height: { xs: 350, sm: 450 },
                borderRadius: 3,
                overflow: "hidden",
                border: "1px solid",
                borderColor: "divider",
              }}
            >
              <PropertyMapView properties={properties} />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, lg: 5 }}>
            <PropertyTable properties={properties} stateSlug={stateSlug} />
          </Grid>
        </Grid>
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
