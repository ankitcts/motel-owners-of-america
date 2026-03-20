import { notFound } from "next/navigation";
import { Container, Box, Typography, Grid, Card, CardContent, Chip, Divider } from "@mui/material";
import { Hotel, LocationOn, Person, CalendarMonth, MeetingRoom } from "@mui/icons-material";
import Link from "next/link";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { getPropertyBySlug, getOwnerById } from "@/data/mockProperties";
import { getStateBySlug, STATE_ABBR_TO_NAME } from "@/data/states";
import { propertyTypeLabel, ownerTypeLabel } from "@/utils/format";
import { PROPERTY_TYPE_COLORS } from "@/utils/colors";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) return { title: "Property Not Found" };
  return {
    title: `${property.name} — ${property.city}, ${property.stateAbbr}`,
    description: `${property.name} is a ${property.propertyType} located at ${property.address}, ${property.city}, ${property.stateAbbr} ${property.zip}. View ownership and LLC details.`,
  };
}

export default async function PropertyPage({ params }: PageProps) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) notFound();

  const owners = property.ownerIds.map(getOwnerById).filter(Boolean);
  const stateSlug = property.stateName.toLowerCase().replace(/\s+/g, "-");

  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: property.stateName, href: `/states/${stateSlug}` },
          { label: property.name },
        ]}
      />

      <Box sx={{ mb: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
          <Typography variant="h4" fontWeight={700}>
            {property.name}
          </Typography>
          <Chip
            label={propertyTypeLabel(property.propertyType)}
            sx={{
              bgcolor: `${PROPERTY_TYPE_COLORS[property.propertyType]}20`,
              color: PROPERTY_TYPE_COLORS[property.propertyType],
              fontWeight: 600,
            }}
          />
        </Box>
        <Typography variant="body1" color="text.secondary" sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <LocationOn fontSize="small" />
          {property.address}, {property.city}, {property.stateAbbr} {property.zip}
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 8 }}>
          {/* Property Details */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Property Details
              </Typography>
              <Grid container spacing={2}>
                <Grid size={{ xs: 6, sm: 4 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Hotel sx={{ color: "primary.main" }} />
                    <Box>
                      <Typography variant="caption" color="text.secondary">Type</Typography>
                      <Typography variant="body2" fontWeight={500}>
                        {propertyTypeLabel(property.propertyType)}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                {property.roomsCount && (
                  <Grid size={{ xs: 6, sm: 4 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <MeetingRoom sx={{ color: "#34D399" }} />
                      <Box>
                        <Typography variant="caption" color="text.secondary">Rooms</Typography>
                        <Typography variant="body2" fontWeight={500}>{property.roomsCount}</Typography>
                      </Box>
                    </Box>
                  </Grid>
                )}
                {property.yearBuilt && (
                  <Grid size={{ xs: 6, sm: 4 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <CalendarMonth sx={{ color: "#FBBF24" }} />
                      <Box>
                        <Typography variant="caption" color="text.secondary">Year Built</Typography>
                        <Typography variant="body2" fontWeight={500}>{property.yearBuilt}</Typography>
                      </Box>
                    </Box>
                  </Grid>
                )}
              </Grid>
            </CardContent>
          </Card>

          {/* Ownership */}
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Ownership
              </Typography>
              {owners.length > 0 ? (
                owners.map((owner) =>
                  owner ? (
                    <Box key={owner.id} sx={{ mb: 2, "&:last-child": { mb: 0 } }}>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1 }}>
                        <Person sx={{ color: "#A78BFA" }} />
                        <Box>
                          <Link href={`/owners/${owner.slug}`}>
                            <Typography
                              variant="body1"
                              fontWeight={600}
                              sx={{ color: "primary.main", "&:hover": { textDecoration: "underline" } }}
                            >
                              {owner.name}
                            </Typography>
                          </Link>
                          <Typography variant="caption" color="text.secondary">
                            {ownerTypeLabel(owner.ownerType)}
                            {owner.registrationState && ` — Registered in ${STATE_ABBR_TO_NAME[owner.registrationState] || owner.registrationState}`}
                          </Typography>
                        </Box>
                      </Box>
                      {owner.registrationNumber && (
                        <Typography variant="body2" color="text.secondary" sx={{ ml: 5 }}>
                          Filing #: {owner.registrationNumber}
                        </Typography>
                      )}
                      <Typography variant="body2" color="text.secondary" sx={{ ml: 5 }}>
                        {owner.propertyCount} total properties across {owner.statesPresent.join(", ")}
                      </Typography>
                    </Box>
                  ) : null
                )
              ) : (
                <Typography color="text.secondary">
                  Ownership data not yet available for this property.
                </Typography>
              )}
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Location
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {property.countyName} County, {property.stateName}
              </Typography>
              <Divider sx={{ my: 1.5 }} />
              <Typography variant="body2" color="text.secondary">
                Lat: {property.location.coordinates[1].toFixed(4)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lng: {property.location.coordinates[0].toFixed(4)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
