"use client";

import { useState, useMemo } from "react";
import {
  Container, Box, Typography, TextField, InputAdornment, Grid,
  Card, CardContent, Chip, List, ListItemButton, ListItemText,
} from "@mui/material";
import { Search, Person, Hotel, LocationOn } from "@mui/icons-material";
import Link from "next/link";
import { MOCK_OWNERS } from "@/data/mockProperties";
import { ownerTypeLabel, formatNumber } from "@/utils/format";
import type { Owner } from "@/types";

const ownerTypeColors: Record<string, string> = {
  individual: "#34D399",
  llc: "#5C9EFF",
  corporation: "#A78BFA",
  trust: "#FBBF24",
  partnership: "#FF8A65",
};

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const results: Owner[] = useMemo(() => {
    if (!query || query.length < 2) return MOCK_OWNERS;
    const q = query.toLowerCase();
    return MOCK_OWNERS.filter(
      (o) =>
        o.name.toLowerCase().includes(q) ||
        o.ownerType.toLowerCase().includes(q) ||
        o.statesPresent.some((s) => s.toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Search Owners & LLCs
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Find hotel and motel owners by name, LLC, corporation, or state.
        </Typography>
        <TextField
          fullWidth
          placeholder="Search by owner name, LLC, or corporation..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <Search sx={{ color: "text.secondary" }} />
                </InputAdornment>
              ),
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              fontSize: "1.1rem",
            },
          }}
        />
      </Box>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        {results.length} result{results.length !== 1 ? "s" : ""}
        {query.length >= 2 ? ` for "${query}"` : ""}
      </Typography>

      <Grid container spacing={2}>
        {results.map((owner) => (
          <Grid key={owner.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <Card
              component={Link}
              href={`/owners/${owner.slug}`}
              sx={{
                display: "block",
                textDecoration: "none",
                height: "100%",
                "&:hover": {
                  borderColor: "primary.main",
                  transform: "translateY(-2px)",
                  transition: "all 0.2s ease",
                },
              }}
            >
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", mb: 1.5 }}>
                  <Typography variant="subtitle1" fontWeight={600} sx={{ flex: 1 }}>
                    {owner.name}
                  </Typography>
                  <Chip
                    label={ownerTypeLabel(owner.ownerType)}
                    size="small"
                    sx={{
                      bgcolor: `${ownerTypeColors[owner.ownerType]}20`,
                      color: ownerTypeColors[owner.ownerType],
                      fontWeight: 500,
                      fontSize: "0.7rem",
                      ml: 1,
                    }}
                  />
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                    <Hotel fontSize="small" sx={{ color: "text.secondary" }} />
                    <Typography variant="body2" color="text.secondary">
                      {formatNumber(owner.propertyCount)} properties
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                    <LocationOn fontSize="small" sx={{ color: "text.secondary" }} />
                    <Typography variant="body2" color="text.secondary">
                      {owner.statesPresent.join(", ")}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
