"use client";

import { Box, Container, Typography, Link as MuiLink } from "@mui/material";
import Link from "next/link";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: "1px solid",
        borderColor: "divider",
        bgcolor: "background.paper",
        py: 3,
        mt: "auto",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            Motel Owners of America — Public ownership data for US hotels & motels
          </Typography>
          <Box sx={{ display: "flex", gap: 3 }}>
            <MuiLink component={Link} href="/about" variant="body2" color="text.secondary" underline="hover">
              About
            </MuiLink>
            <MuiLink component={Link} href="/search" variant="body2" color="text.secondary" underline="hover">
              Search
            </MuiLink>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
