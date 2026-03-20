import { notFound } from "next/navigation";
import { Container, Box, Typography, Grid, Card, CardContent, Chip } from "@mui/material";
import { Person, Hotel, LocationOn, Business } from "@mui/icons-material";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import StatCard from "@/components/common/StatCard";
import PropertyTable from "@/components/detail/PropertyTable";
import PropertyMapView from "@/components/map/PropertyMapView";
import { getOwnerBySlug, getOwnerProperties } from "@/data/mockProperties";
import { STATE_ABBR_TO_NAME } from "@/data/states";
import { ownerTypeLabel } from "@/utils/format";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const owner = getOwnerBySlug(slug);
  if (!owner) return { title: "Owner Not Found" };
  return {
    title: `${owner.name} — Hotel & Motel Owner`,
    description: `${owner.name} owns ${owner.propertyCount} hotels and motels across ${owner.statesPresent.join(", ")}. View all properties and registration details.`,
  };
}

export default async function OwnerPage({ params }: PageProps) {
  const { slug } = await params;
  const owner = getOwnerBySlug(slug);
  if (!owner) notFound();

  const properties = getOwnerProperties(owner.id);

  const ownerTypeColors: Record<string, string> = {
    individual: "#34D399",
    llc: "#5C9EFF",
    corporation: "#A78BFA",
    trust: "#FBBF24",
    partnership: "#FF8A65",
  };

  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Owners", href: "/owners" },
          { label: owner.name },
        ]}
      />

      <Box sx={{ mb: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1, flexWrap: "wrap" }}>
          <Typography variant="h4" fontWeight={700}>
            {owner.name}
          </Typography>
          <Chip
            label={ownerTypeLabel(owner.ownerType)}
            sx={{
              bgcolor: `${ownerTypeColors[owner.ownerType] || "#5C9EFF"}20`,
              color: ownerTypeColors[owner.ownerType] || "#5C9EFF",
              fontWeight: 600,
            }}
          />
        </Box>
      </Box>

      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid size={{ xs: 6, sm: 3 }}>
          <StatCard title="Properties" value={owner.propertyCount} icon={Hotel} color="#5C9EFF" />
        </Grid>
        <Grid size={{ xs: 6, sm: 3 }}>
          <StatCard title="States" value={owner.statesPresent.length} icon={LocationOn} color="#34D399" />
        </Grid>
      </Grid>

      {/* Map showing all properties for this owner */}
      {properties.length > 0 && (
        <Box
          sx={{
            height: { xs: 300, sm: 400 },
            borderRadius: 3,
            overflow: "hidden",
            border: "1px solid",
            borderColor: "divider",
            mb: 3,
          }}
        >
          <PropertyMapView properties={properties} />
        </Box>
      )}

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Registration Details
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                <Box>
                  <Typography variant="caption" color="text.secondary">Entity Type</Typography>
                  <Typography variant="body2" fontWeight={500}>{ownerTypeLabel(owner.ownerType)}</Typography>
                </Box>
                {owner.registrationState && (
                  <Box>
                    <Typography variant="caption" color="text.secondary">Registration State</Typography>
                    <Typography variant="body2" fontWeight={500}>
                      {STATE_ABBR_TO_NAME[owner.registrationState] || owner.registrationState}
                    </Typography>
                  </Box>
                )}
                {owner.registrationNumber && (
                  <Box>
                    <Typography variant="caption" color="text.secondary">Filing Number</Typography>
                    <Typography variant="body2" fontWeight={500}>{owner.registrationNumber}</Typography>
                  </Box>
                )}
                <Box>
                  <Typography variant="caption" color="text.secondary">States Present</Typography>
                  <Box sx={{ display: "flex", gap: 0.5, flexWrap: "wrap", mt: 0.5 }}>
                    {owner.statesPresent.map((s) => (
                      <Chip key={s} label={s} size="small" variant="outlined" />
                    ))}
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 8 }}>
          <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
            Properties ({properties.length})
          </Typography>
          {properties.length > 0 ? (
            <PropertyTable properties={properties} />
          ) : (
            <Card>
              <CardContent sx={{ textAlign: "center", py: 4 }}>
                <Typography color="text.secondary">
                  Property listings for this owner are being compiled.
                </Typography>
              </CardContent>
            </Card>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}
