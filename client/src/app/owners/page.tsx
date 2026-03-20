"use client";

import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import {
  Container, Box, Typography, TextField, InputAdornment, Grid,
  Card, CardContent, Chip, Select, MenuItem, FormControl, InputLabel,
  Divider, CircularProgress,
} from "@mui/material";
import { Search, Hotel, LocationOn, Business, Person, Gavel } from "@mui/icons-material";
import Link from "next/link";
import { MOCK_OWNERS } from "@/data/mockProperties";
import { ownerTypeLabel, formatNumber } from "@/utils/format";
import { STATE_ABBR_TO_NAME } from "@/data/states";
import type { Owner, OwnerType } from "@/types";

const PAGE_SIZE = 12;

const OWNER_TYPE_COLORS: Record<string, string> = {
  individual: "#34D399",
  llc: "#5C9EFF",
  corporation: "#A78BFA",
  trust: "#FBBF24",
  partnership: "#FF8A65",
};

const OWNER_TYPE_ICONS: Record<string, typeof Person> = {
  individual: Person,
  llc: Business,
  corporation: Business,
  trust: Gavel,
  partnership: People,
};

import { People } from "@mui/icons-material";

export default function OwnersPage() {
  const [query, setQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [stateFilter, setStateFilter] = useState<string>("all");
  const [displayCount, setDisplayCount] = useState(PAGE_SIZE);
  const [loading, setLoading] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  // Get all unique states from owners
  const allStates = useMemo(() => {
    const states = new Set<string>();
    MOCK_OWNERS.forEach((o) => o.statesPresent.forEach((s) => states.add(s)));
    return Array.from(states).sort();
  }, []);

  // Filter owners
  const filtered = useMemo(() => {
    let result = MOCK_OWNERS;

    if (query && query.length >= 1) {
      const q = query.toLowerCase();
      result = result.filter(
        (o) =>
          o.name.toLowerCase().includes(q) ||
          o.ownerType.toLowerCase().includes(q) ||
          o.registrationNumber?.toLowerCase().includes(q) ||
          o.statesPresent.some((s) =>
            (STATE_ABBR_TO_NAME[s] || s).toLowerCase().includes(q) || s.toLowerCase().includes(q)
          )
      );
    }

    if (typeFilter !== "all") {
      result = result.filter((o) => o.ownerType === typeFilter);
    }

    if (stateFilter !== "all") {
      result = result.filter((o) => o.statesPresent.includes(stateFilter));
    }

    return result.sort((a, b) => b.propertyCount - a.propertyCount);
  }, [query, typeFilter, stateFilter]);

  // Items currently visible (infinite scroll)
  const visible = useMemo(
    () => filtered.slice(0, displayCount),
    [filtered, displayCount]
  );
  const hasMore = displayCount < filtered.length;

  // Reset display count when filters change
  useEffect(() => {
    setDisplayCount(PAGE_SIZE);
  }, [query, typeFilter, stateFilter]);

  // Intersection observer for infinite scroll
  useEffect(() => {
    if (!sentinelRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          setLoading(true);
          // Simulate slight delay for UX
          setTimeout(() => {
            setDisplayCount((prev) => prev + PAGE_SIZE);
            setLoading(false);
          }, 300);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [hasMore, loading]);

  // Stats
  const totalOwners = MOCK_OWNERS.length;
  const totalProperties = MOCK_OWNERS.reduce((acc, o) => acc + o.propertyCount, 0);

  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>
      {/* Header */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Property Owners Directory
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Browse {totalOwners} hotel & motel owners managing {formatNumber(totalProperties)} properties across the USA.
        </Typography>
      </Box>

      {/* Filters */}
      <Card sx={{ mb: 3 }}>
        <CardContent sx={{ pb: "16px !important" }}>
          <Grid container spacing={2} alignItems="center">
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <TextField
                fullWidth
                size="small"
                placeholder="Search by name, LLC, state..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
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
            </Grid>
            <Grid size={{ xs: 6, sm: 3, md: 2 }}>
              <FormControl fullWidth size="small">
                <InputLabel>Entity Type</InputLabel>
                <Select
                  value={typeFilter}
                  label="Entity Type"
                  onChange={(e) => setTypeFilter(e.target.value)}
                >
                  <MenuItem value="all">All Types</MenuItem>
                  <MenuItem value="llc">LLC</MenuItem>
                  <MenuItem value="corporation">Corporation</MenuItem>
                  <MenuItem value="individual">Individual</MenuItem>
                  <MenuItem value="trust">Trust</MenuItem>
                  <MenuItem value="partnership">Partnership</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid size={{ xs: 6, sm: 3, md: 2 }}>
              <FormControl fullWidth size="small">
                <InputLabel>State</InputLabel>
                <Select
                  value={stateFilter}
                  label="State"
                  onChange={(e) => setStateFilter(e.target.value)}
                >
                  <MenuItem value="all">All States</MenuItem>
                  {allStates.map((s) => (
                    <MenuItem key={s} value={s}>
                      {STATE_ABBR_TO_NAME[s] || s} ({s})
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="body2" color="text.secondary" sx={{ textAlign: { md: "right" } }}>
                Showing {visible.length} of {filtered.length} owners
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Owner cards grid */}
      <Grid container spacing={2}>
        {visible.map((owner) => (
          <Grid key={owner.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <OwnerCard owner={owner} />
          </Grid>
        ))}
      </Grid>

      {/* Infinite scroll sentinel */}
      <Box ref={sentinelRef} sx={{ py: 4, textAlign: "center" }}>
        {loading && <CircularProgress size={28} />}
        {!hasMore && filtered.length > 0 && (
          <Typography variant="body2" color="text.secondary">
            All {filtered.length} owners loaded
          </Typography>
        )}
        {filtered.length === 0 && (
          <Box sx={{ py: 6 }}>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              No owners found
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Try adjusting your search or filters.
            </Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
}

function OwnerCard({ owner }: { owner: Owner }) {
  const color = OWNER_TYPE_COLORS[owner.ownerType] || "#5C9EFF";

  return (
    <Card
      component={Link}
      href={`/owners/${owner.slug}`}
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        textDecoration: "none",
        transition: "all 0.2s ease",
        "&:hover": {
          borderColor: color,
          transform: "translateY(-3px)",
          boxShadow: `0 8px 24px ${color}15`,
        },
      }}
    >
      <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Header: type chip */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 1.5 }}>
          <Chip
            label={ownerTypeLabel(owner.ownerType)}
            size="small"
            sx={{
              bgcolor: `${color}18`,
              color,
              fontWeight: 600,
              fontSize: "0.7rem",
            }}
          />
          <Typography variant="h6" fontWeight={700} color="primary.main" sx={{ lineHeight: 1 }}>
            {owner.propertyCount}
          </Typography>
        </Box>

        {/* Name */}
        <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 1, lineHeight: 1.3 }}>
          {owner.name}
        </Typography>

        {/* Details */}
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.75 }}>
          {owner.registrationState && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
              <LocationOn sx={{ fontSize: 16, color: "text.secondary" }} />
              <Typography variant="body2" color="text.secondary">
                Registered in {STATE_ABBR_TO_NAME[owner.registrationState] || owner.registrationState}
              </Typography>
            </Box>
          )}
          {owner.registrationNumber && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
              <Business sx={{ fontSize: 16, color: "text.secondary" }} />
              <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "monospace", fontSize: "0.75rem" }}>
                {owner.registrationNumber}
              </Typography>
            </Box>
          )}
        </Box>

        {/* Footer: states */}
        <Divider sx={{ my: 1.5 }} />
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", gap: 0.5, flexWrap: "wrap" }}>
            {owner.statesPresent.slice(0, 5).map((s) => (
              <Chip
                key={s}
                label={s}
                size="small"
                variant="outlined"
                sx={{ height: 22, fontSize: "0.65rem" }}
              />
            ))}
            {owner.statesPresent.length > 5 && (
              <Chip
                label={`+${owner.statesPresent.length - 5}`}
                size="small"
                sx={{ height: 22, fontSize: "0.65rem", bgcolor: "rgba(255,255,255,0.05)" }}
              />
            )}
          </Box>
          <Typography variant="caption" color="text.secondary">
            {owner.statesPresent.length} state{owner.statesPresent.length !== 1 ? "s" : ""}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
