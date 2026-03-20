"use client";

import { Box, Container, Typography, Link as MuiLink, Divider } from "@mui/material";
import Link from "next/link";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: "1px solid",
        borderColor: "divider",
        bgcolor: "background.paper",
        py: 4,
        mt: "auto",
      }}
    >
      <Container maxWidth="xl">
        {/* Top row: brand + nav */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { sm: "center" },
            gap: 2,
            mb: 3,
          }}
        >
          <Typography variant="body2" color="text.secondary" fontWeight={500}>
            Motel Owners of America — Public ownership data for US hotels & motels
          </Typography>
          <Box sx={{ display: "flex", gap: 3 }}>
            <MuiLink component={Link} href="/about" variant="body2" color="text.secondary" underline="hover">About</MuiLink>
            <MuiLink component={Link} href="/owners" variant="body2" color="text.secondary" underline="hover">Owners</MuiLink>
            <MuiLink component={Link} href="/analytics" variant="body2" color="text.secondary" underline="hover">Analytics</MuiLink>
            <MuiLink component={Link} href="/search" variant="body2" color="text.secondary" underline="hover">Search</MuiLink>
          </Box>
        </Box>

        <Divider sx={{ mb: 3 }} />

        {/* Data sources */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="caption" color="text.secondary" fontWeight={600} sx={{ display: "block", mb: 1, textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Data Sources
          </Typography>
          <Typography variant="caption" color="text.secondary" component="div" sx={{ lineHeight: 1.8 }}>
            <Box component="span" sx={{ display: "block" }}>
              U.S. Census Bureau — County Business Patterns (CBP) &amp; Statistics of US Businesses (SUSB).
              Public domain data per{" "}
              <MuiLink href="https://www.census.gov/about/policies/citation.html" target="_blank" rel="noopener noreferrer" color="primary.main" underline="hover">
                Census Bureau policy
              </MuiLink>.
            </Box>
            <Box component="span" sx={{ display: "block" }}>
              U.S. Census Bureau — Economic Census (NAICS 7211: Hotels &amp; Motels).
            </Box>
            <Box component="span" sx={{ display: "block" }}>
              U.S. Census Bureau — TIGER/Line Shapefiles for geographic boundaries.
            </Box>
            <Box component="span" sx={{ display: "block" }}>
              Data.gov — Federal open data portal, hotel &amp; lodging datasets.
            </Box>
            <Box component="span" sx={{ display: "block" }}>
              OpenStreetMap contributors — Geographic location data, licensed under{" "}
              <MuiLink href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer" color="primary.main" underline="hover">
                ODbL
              </MuiLink>.
            </Box>
            <Box component="span" sx={{ display: "block" }}>
              State Secretary of State offices — Public business entity registrations (LLC, Corporation filings).
            </Box>
            <Box component="span" sx={{ display: "block" }}>
              State hospitality licensing databases — Public lodging license records.
            </Box>
            <Box component="span" sx={{ display: "block" }}>
              Mapbox — Map tiles &amp; geocoding, used under{" "}
              <MuiLink href="https://www.mapbox.com/legal/tos" target="_blank" rel="noopener noreferrer" color="primary.main" underline="hover">
                Mapbox Terms of Service
              </MuiLink>.
            </Box>
          </Typography>
        </Box>

        {/* Disclaimer */}
        <Box sx={{ mb: 3, bgcolor: "rgba(255,255,255,0.02)", borderRadius: 2, p: 2, border: "1px solid", borderColor: "divider" }}>
          <Typography variant="caption" color="text.secondary" fontWeight={600} sx={{ display: "block", mb: 0.5, textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Disclaimer
          </Typography>
          <Typography variant="caption" color="text.secondary" sx={{ lineHeight: 1.7, display: "block" }}>
            This website aggregates publicly available information from government databases, public records,
            and open data sources. All data presented is sourced from public domain or openly licensed materials.
            We do not claim ownership of the underlying government data. Census Bureau data is in the public domain
            and is not subject to copyright protection in the United States (17 U.S.C. &sect; 105).
          </Typography>
          <Typography variant="caption" color="text.secondary" sx={{ lineHeight: 1.7, display: "block", mt: 1 }}>
            The information on this site is provided &quot;as is&quot; without warranty of any kind, express or implied.
            We make no representations or warranties regarding the accuracy, completeness, or timeliness of any
            information on this site. Property ownership records, business registrations, and establishment counts
            may contain errors, may be outdated, or may not reflect current ownership status.
          </Typography>
          <Typography variant="caption" color="text.secondary" sx={{ lineHeight: 1.7, display: "block", mt: 1 }}>
            This site is not affiliated with, endorsed by, or sponsored by any government agency, including the
            U.S. Census Bureau, any State Secretary of State office, or any other government entity. The use of
            government data does not imply government endorsement.
          </Typography>
          <Typography variant="caption" color="text.secondary" sx={{ lineHeight: 1.7, display: "block", mt: 1 }}>
            Ownership classification by citizenship, ethnicity, or community group is based on publicly available
            aggregate statistical data and industry reports. Individual property ownership records are sourced from
            public filings. We do not independently verify the citizenship or ethnicity of any individual property owner.
            Any categorization is approximate and intended for general informational purposes only.
          </Typography>
          <Typography variant="caption" color="text.secondary" sx={{ lineHeight: 1.7, display: "block", mt: 1 }}>
            If you believe any information on this site is inaccurate or should be removed, please contact us.
            We respect the privacy of individuals and will promptly address any legitimate concerns.
          </Typography>
        </Box>

        {/* Copyright */}
        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "space-between", alignItems: { sm: "center" }, gap: 1 }}>
          <Typography variant="caption" color="text.secondary">
            &copy; {new Date().getFullYear()} Motel Owners of America. All rights reserved.
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <MuiLink component={Link} href="/about" variant="caption" color="text.secondary" underline="hover">Privacy Policy</MuiLink>
            <MuiLink component={Link} href="/about" variant="caption" color="text.secondary" underline="hover">Terms of Use</MuiLink>
            <MuiLink href="mailto:contact@motelownersofamerica.com" variant="caption" color="text.secondary" underline="hover">Contact</MuiLink>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
