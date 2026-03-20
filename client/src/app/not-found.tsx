import { Container, Typography, Button, Box } from "@mui/material";
import { Home } from "@mui/icons-material";
import Link from "next/link";

export default function NotFound() {
  return (
    <Container maxWidth="sm" sx={{ py: 12, textAlign: "center" }}>
      <Typography variant="h1" fontWeight={700} sx={{ fontSize: "6rem", color: "primary.main", mb: 2 }}>
        404
      </Typography>
      <Typography variant="h5" fontWeight={600} gutterBottom>
        Page Not Found
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        The page you are looking for does not exist or may have been moved.
      </Typography>
      <Button
        component={Link}
        href="/"
        variant="contained"
        startIcon={<Home />}
        size="large"
      >
        Back to Home
      </Button>
    </Container>
  );
}
