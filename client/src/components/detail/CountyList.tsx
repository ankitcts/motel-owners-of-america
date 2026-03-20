"use client";

import { useState, useMemo } from "react";
import {
  Card, CardContent, Typography, Box, TextField, InputAdornment,
  List, ListItemButton, ListItemText, Chip,
} from "@mui/material";
import { Search, TrendingUp } from "@mui/icons-material";
import Link from "next/link";
import type { CountySummary } from "@/types";
import { formatNumber } from "@/utils/format";

interface CountyListProps {
  counties: CountySummary[];
  stateSlug: string;
}

export default function CountyList({ counties, stateSlug }: CountyListProps) {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<"name" | "count">("count");

  const filtered = useMemo(() => {
    let result = counties;
    if (search) {
      const q = search.toLowerCase();
      result = result.filter((c) => c.name.toLowerCase().includes(q));
    }
    return [...result].sort((a, b) =>
      sortBy === "count"
        ? b.propertyCount - a.propertyCount
        : a.name.localeCompare(b.name)
    );
  }, [counties, search, sortBy]);

  if (counties.length === 0) {
    return (
      <Card sx={{ height: { xs: "auto", lg: 550 }, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <CardContent>
          <Typography color="text.secondary" textAlign="center">
            County-level data coming soon.
          </Typography>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card sx={{ height: { xs: "auto", lg: 550 }, display: "flex", flexDirection: "column" }}>
      <CardContent sx={{ pb: 1 }}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1.5 }}>
          <Typography variant="h6" fontWeight={600}>
            Counties ({counties.length})
          </Typography>
          <Box sx={{ display: "flex", gap: 0.5 }}>
            <Chip label="By Count" size="small" variant={sortBy === "count" ? "filled" : "outlined"} onClick={() => setSortBy("count")} icon={<TrendingUp />} sx={{ fontSize: "0.7rem" }} />
            <Chip label="A-Z" size="small" variant={sortBy === "name" ? "filled" : "outlined"} onClick={() => setSortBy("name")} sx={{ fontSize: "0.7rem" }} />
          </Box>
        </Box>
        <TextField
          fullWidth
          size="small"
          placeholder="Filter counties..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <Search fontSize="small" sx={{ color: "text.secondary" }} />
                </InputAdornment>
              ),
            },
          }}
        />
      </CardContent>
      <List sx={{ flex: 1, overflow: "auto", px: 1, pb: 1 }}>
        {filtered.map((county) => (
          <ListItemButton
            key={county.fips}
            component={Link}
            href={`/states/${stateSlug}/counties/${county.slug}`}
            sx={{ borderRadius: 2, mb: 0.5, "&:hover": { bgcolor: "rgba(92, 158, 255, 0.08)" } }}
          >
            <ListItemText
              primary={county.name}
              secondary={`${county.hotelCount} hotels, ${county.motelCount} motels`}
              primaryTypographyProps={{ fontWeight: 500, fontSize: "0.9rem" }}
              secondaryTypographyProps={{ fontSize: "0.75rem" }}
            />
            <Box sx={{ textAlign: "right" }}>
              <Typography variant="body2" fontWeight={600} color="primary.main">
                {formatNumber(county.propertyCount)}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                properties
              </Typography>
            </Box>
          </ListItemButton>
        ))}
      </List>
    </Card>
  );
}
