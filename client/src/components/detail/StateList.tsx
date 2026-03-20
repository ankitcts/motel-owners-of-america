"use client";

import { useState, useMemo } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  TextField,
  InputAdornment,
  List,
  ListItemButton,
  ListItemText,
  Chip,
} from "@mui/material";
import { Search, TrendingUp } from "@mui/icons-material";
import Link from "next/link";
import type { StateSummary } from "@/types";
import { formatNumber } from "@/utils/format";

interface StateListProps {
  states: StateSummary[];
}

export default function StateList({ states }: StateListProps) {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<"name" | "count">("count");

  const filtered = useMemo(() => {
    let result = states;
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (s) =>
          s.stateName.toLowerCase().includes(q) ||
          s.stateAbbr.toLowerCase().includes(q)
      );
    }
    return [...result].sort((a, b) =>
      sortBy === "count"
        ? b.propertyCount - a.propertyCount
        : a.stateName.localeCompare(b.stateName)
    );
  }, [states, search, sortBy]);

  return (
    <Card sx={{ height: { xs: "auto", lg: 600 }, display: "flex", flexDirection: "column" }}>
      <CardContent sx={{ pb: 1 }}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1.5 }}>
          <Typography variant="h6" fontWeight={600}>
            States
          </Typography>
          <Box sx={{ display: "flex", gap: 0.5 }}>
            <Chip
              label="By Count"
              size="small"
              variant={sortBy === "count" ? "filled" : "outlined"}
              onClick={() => setSortBy("count")}
              icon={<TrendingUp />}
              sx={{ fontSize: "0.7rem" }}
            />
            <Chip
              label="A-Z"
              size="small"
              variant={sortBy === "name" ? "filled" : "outlined"}
              onClick={() => setSortBy("name")}
              sx={{ fontSize: "0.7rem" }}
            />
          </Box>
        </Box>
        <TextField
          fullWidth
          size="small"
          placeholder="Filter states..."
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
      <List
        sx={{
          flex: 1,
          overflow: "auto",
          px: 1,
          pb: 1,
        }}
      >
        {filtered.map((state) => (
          <ListItemButton
            key={state.stateAbbr}
            component={Link}
            href={`/states/${state.slug}`}
            sx={{
              borderRadius: 2,
              mb: 0.5,
              "&:hover": { bgcolor: "rgba(92, 158, 255, 0.08)" },
            }}
          >
            <ListItemText
              primary={state.stateName}
              secondary={`${state.stateAbbr} — ${state.countyCount} counties`}
              primaryTypographyProps={{ fontWeight: 500, fontSize: "0.9rem" }}
              secondaryTypographyProps={{ fontSize: "0.75rem" }}
            />
            <Box sx={{ textAlign: "right" }}>
              <Typography variant="body2" fontWeight={600} color="primary.main">
                {formatNumber(state.propertyCount)}
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
