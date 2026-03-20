import { Container, Typography, Box, Card, CardContent, Grid } from "@mui/material";
import { DataObject, Public, Search, Map as MapIcon } from "@mui/icons-material";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Motel Owners of America — a public database of hotel and motel ownership across the United States.",
};

export default function AboutPage() {
  const features = [
    {
      icon: MapIcon,
      title: "Interactive Maps",
      description: "Explore hotel and motel ownership on interactive maps. Drill down from national to state to county level.",
      color: "#5C9EFF",
    },
    {
      icon: Search,
      title: "Owner Search",
      description: "Search for hotel owners, LLCs, and corporations. See all their properties across the country.",
      color: "#34D399",
    },
    {
      icon: DataObject,
      title: "Public Data",
      description: "All data is sourced from public records — state registrations, property records, and government databases.",
      color: "#FF8A65",
    },
    {
      icon: Public,
      title: "Nationwide Coverage",
      description: "Growing coverage across all 50 states. Starting with pilot states and expanding continuously.",
      color: "#A78BFA",
    },
  ];

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h3" fontWeight={700} gutterBottom>
        About Motel Owners of America
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 600 }}>
        We aggregate publicly available data about hotel and motel ownership across
        the United States, making it easy to explore ownership patterns, LLC structures,
        and property portfolios on interactive maps.
      </Typography>

      <Grid container spacing={3} sx={{ mb: 6 }}>
        {features.map((f) => (
          <Grid key={f.title} size={{ xs: 12, sm: 6 }}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: `${f.color}15`,
                    mb: 2,
                  }}
                >
                  <f.icon sx={{ color: f.color, fontSize: 26 }} />
                </Box>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  {f.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {f.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h5" fontWeight={600} gutterBottom>
        Data Sources
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        Our data is collected from publicly available sources including:
      </Typography>
      <Box component="ul" sx={{ color: "text.secondary", pl: 3 }}>
        <li>State Secretary of State business registrations</li>
        <li>State hospitality licensing databases</li>
        <li>County property tax assessor records</li>
        <li>OpenStreetMap geographic data</li>
        <li>US Census Bureau geographic boundaries</li>
        <li>Federal datasets from data.gov</li>
      </Box>
    </Container>
  );
}
