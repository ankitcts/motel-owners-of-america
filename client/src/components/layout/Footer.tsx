"use client";

import { Box, Container, Typography, Link as MuiLink, Divider } from "@mui/material";
import { Info } from "@mui/icons-material";
import Link from "next/link";

export default function Footer() {
  return (
    <Box component="footer" sx={{ mt: "auto" }}>
      {/* Compact footer — always visible */}
      <Box
        sx={{
          borderTop: "1px solid",
          borderColor: "divider",
          bgcolor: "background.paper",
          py: 2,
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "space-between", alignItems: { sm: "center" }, gap: 1 }}>
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

          {/* Copyright + links */}
          <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "space-between", alignItems: { sm: "center" }, gap: 1, mt: 1.5 }}>
            <Typography variant="caption" color="text.secondary">
              &copy; {new Date().getFullYear()} Motel Owners of America. All rights reserved.
            </Typography>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <MuiLink component={Link} href="/about" variant="caption" color="text.secondary" underline="hover">Privacy Policy</MuiLink>
              <MuiLink component={Link} href="/about" variant="caption" color="text.secondary" underline="hover">Terms of Use</MuiLink>
              <MuiLink href="mailto:contact@motelownersofamerica.com" variant="caption" color="text.secondary" underline="hover">Contact</MuiLink>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Expandable disclaimer panel — slides up on hover */}
      <Box
        sx={{
          position: "relative",
          bgcolor: "#0a0e14",
          borderTop: "1px solid",
          borderColor: "divider",
          maxHeight: 36,
          overflow: "hidden",
          transition: "max-height 0.4s ease-in-out",
          cursor: "pointer",
          "&:hover": {
            maxHeight: 400,
          },
          "&:hover .disclaimer-hint": {
            opacity: 0,
          },
          "&:hover .disclaimer-content": {
            opacity: 1,
          },
        }}
      >
        {/* Collapsed hint bar */}
        <Box
          className="disclaimer-hint"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            py: 1,
            transition: "opacity 0.3s",
          }}
        >
          <Info sx={{ fontSize: 14, color: "text.secondary" }} />
          <Typography variant="caption" color="text.secondary" sx={{ fontSize: "0.65rem" }}>
            Data Sources & Legal Disclaimer — Hover to expand
          </Typography>
        </Box>

        {/* Expanded content */}
        <Box
          className="disclaimer-content"
          sx={{
            opacity: 0,
            transition: "opacity 0.3s ease 0.1s",
            px: 3,
            pb: 3,
            pt: 1,
            maxHeight: 380,
            overflowY: "auto",
            "&::-webkit-scrollbar": { width: 6 },
            "&::-webkit-scrollbar-thumb": { bgcolor: "rgba(255,255,255,0.1)", borderRadius: 3 },
          }}
        >
          <Container maxWidth="xl" disableGutters>
            {/* Data sources */}
            <Typography variant="caption" color="text.secondary" fontWeight={600} sx={{ display: "block", mb: 1, textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Data Sources
            </Typography>
            <Typography variant="caption" color="text.secondary" component="div" sx={{ lineHeight: 1.8, mb: 2 }}>
              {[
                <>U.S. Census Bureau — County Business Patterns (CBP) &amp; Statistics of US Businesses (SUSB). Public domain data per <MuiLink href="https://www.census.gov/about/policies/citation.html" target="_blank" rel="noopener noreferrer" color="primary.main" underline="hover">Census Bureau policy</MuiLink>.</>,
                "U.S. Census Bureau — Economic Census (NAICS 7211: Hotels & Motels).",
                "U.S. Census Bureau — TIGER/Line Shapefiles for geographic boundaries.",
                "Data.gov — Federal open data portal, hotel & lodging datasets.",
                <>OpenStreetMap contributors — Geographic location data, licensed under <MuiLink href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer" color="primary.main" underline="hover">ODbL</MuiLink>.</>,
                "State Secretary of State offices — Public business entity registrations (LLC, Corporation filings).",
                "State hospitality licensing databases — Public lodging license records.",
                <>Mapbox — Map tiles &amp; geocoding, used under <MuiLink href="https://www.mapbox.com/legal/tos" target="_blank" rel="noopener noreferrer" color="primary.main" underline="hover">Mapbox Terms of Service</MuiLink>.</>,
              ].map((item, i) => (
                <Box key={i} component="span" sx={{ display: "block" }}>{item}</Box>
              ))}
            </Typography>

            <Divider sx={{ mb: 2, borderColor: "rgba(255,255,255,0.06)" }} />

            {/* Disclaimer */}
            <Typography variant="caption" color="text.secondary" fontWeight={600} sx={{ display: "block", mb: 1, textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Disclaimer
            </Typography>
            {[
              'This website aggregates publicly available information from government databases, public records, and open data sources. All data presented is sourced from public domain or openly licensed materials. We do not claim ownership of the underlying government data. Census Bureau data is in the public domain and is not subject to copyright protection in the United States (17 U.S.C. \u00A7 105).',
              'The information on this site is provided "as is" without warranty of any kind, express or implied. We make no representations or warranties regarding the accuracy, completeness, or timeliness of any information on this site. Property ownership records, business registrations, and establishment counts may contain errors, may be outdated, or may not reflect current ownership status.',
              "This site is not affiliated with, endorsed by, or sponsored by any government agency, including the U.S. Census Bureau, any State Secretary of State office, or any other government entity. The use of government data does not imply government endorsement.",
              "Ownership classification by citizenship, ethnicity, or community group is based on publicly available aggregate statistical data and industry reports. Individual property ownership records are sourced from public filings. We do not independently verify the citizenship or ethnicity of any individual property owner. Any categorization is approximate and intended for general informational purposes only.",
              "If you believe any information on this site is inaccurate or should be removed, please contact us. We respect the privacy of individuals and will promptly address any legitimate concerns.",
            ].map((text, i) => (
              <Typography key={i} variant="caption" color="text.secondary" sx={{ lineHeight: 1.7, display: "block", mb: 1 }}>
                {text}
              </Typography>
            ))}
          </Container>
        </Box>
      </Box>
    </Box>
  );
}
