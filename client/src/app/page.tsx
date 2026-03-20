import { Container, Box, Typography, Grid } from "@mui/material";
import { Hotel, MapsHomeWork, Person, LocationCity } from "@mui/icons-material";
import USMap from "@/components/map/USMap";
import StatCard from "@/components/common/StatCard";
import StateList from "@/components/detail/StateList";
import { STATES_DATA, getTotalStats } from "@/data/states";

export default function HomePage() {
  const stats = getTotalStats();

  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Hotel & Motel Ownership Across America
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Explore public ownership data for hotels and motels across all 50 states.
          Click a state to drill down into county-level details.
        </Typography>
      </Box>

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
            <USMap states={STATES_DATA} />
          </Box>
        </Grid>
        <Grid size={{ xs: 12, lg: 4 }}>
          <StateList states={STATES_DATA} />
        </Grid>
      </Grid>
    </Container>
  );
}
