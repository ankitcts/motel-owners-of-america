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

  const properties = getPropertiesByCounty(county.fips, county.name);

  // Use actual property data if available, otherwise fall back to Census summary
  const hasProperties = properties.length > 0;
  const displayStats = {
    propertyCount: hasProperties ? properties.length : county.propertyCount,
    hotelCount: hasProperties ? properties.filter((p) => p.propertyType === "hotel").length : county.hotelCount,
    motelCount: hasProperties ? properties.filter((p) => p.propertyType !== "hotel").length : county.motelCount,
    ownerCount: hasProperties ? new Set(properties.flatMap((p) => p.ownerIds)).size : county.ownerCount,
  };

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
          {hasProperties
            ? `${properties.length} properties with details in ${county.name} County. Census records ${county.propertyCount} total establishments.`
            : `${county.propertyCount} establishments tracked in ${county.name} County (Census data). Individual property details coming soon.`}
        </Typography>
      </Box>

      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid size={{ xs: 6, sm: 3 }}>
          <StatCard title="Properties" value={displayStats.propertyCount} icon={Hotel} color="#5C9EFF" />
        </Grid>
        <Grid size={{ xs: 6, sm: 3 }}>
          <StatCard title="Hotels" value={displayStats.hotelCount} icon={Hotel} color="#34D399" />
        </Grid>
        <Grid size={{ xs: 6, sm: 3 }}>
          <StatCard title="Motels" value={displayStats.motelCount} icon={MapsHomeWork} color="#FF8A65" />
        </Grid>
        <Grid size={{ xs: 6, sm: 3 }}>
          <StatCard title="Owners" value={displayStats.ownerCount} icon={Person} color="#A78BFA" />
        </Grid>
      </Grid>

      {properties.length > 0 ? (
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, lg: 7 }}>
            <Box
              sx={{
                height: { xs: 350, sm: 450 },
                borderRadius: 3,
                overflow: "visible",
                border: "1px solid",
                borderColor: "divider",
                position: "relative",
                "& .mapboxgl-popup": {
                  zIndex: 20,
                },
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
