import { Box, CircularProgress, Container, Skeleton } from "@mui/material";

export default function Loading() {
  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>
      <Skeleton variant="text" width={250} height={24} sx={{ mb: 1 }} />
      <Skeleton variant="text" width={350} height={40} sx={{ mb: 3 }} />
      <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} variant="rounded" width="25%" height={80} sx={{ borderRadius: 3 }} />
        ))}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", py: 8 }}>
        <CircularProgress size={36} />
      </Box>
    </Container>
  );
}
