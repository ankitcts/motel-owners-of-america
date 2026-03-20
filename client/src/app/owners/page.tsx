"use client";

import { useState, useMemo, useRef, useEffect, useCallback } from "react";
import {
  Container, Box, Typography, TextField, InputAdornment, Grid,
  Card, CardContent, Chip, Select, MenuItem, FormControl, InputLabel,
  Divider, CircularProgress,
} from "@mui/material";
import { Search, Hotel, LocationOn, Business, Person, Gavel, People, Flag } from "@mui/icons-material";
import Link from "next/link";
import { getOwnerProperties } from "@/data/mockProperties";
import { ownerTypeLabel, citizenshipLabel, propertyTypeLabel, formatNumber } from "@/utils/format";
import { STATE_ABBR_TO_NAME } from "@/data/states";
import { OWNERSHIP_BY_YEAR, CITIZENSHIP_KEYS, type YearData } from "@/data/ownershipTrends";
import { useOwnersData, useDataSource, useAvailableYears } from "@/api/hooks/useAppData";
import YearSelector from "@/components/common/YearSelector";
import type { Owner } from "@/types";

const PAGE_SIZE = 12;

const OWNER_TYPE_COLORS: Record<string, string> = {
  individual: "#34D399",
  llc: "#5C9EFF",
  corporation: "#A78BFA",
  trust: "#FBBF24",
  partnership: "#FF8A65",
};

const CITIZENSHIP_COLORS: Record<string, string> = {
  us_citizen: "#60A5FA",
  indian_american: "#F97316",
  chinese_american: "#EF4444",
  korean_american: "#8B5CF6",
  vietnamese_american: "#10B981",
  hispanic_american: "#F59E0B",
  african_american: "#6366F1",
  middle_eastern_american: "#EC4899",
  european_american: "#14B8A6",
  other: "#6B7280",
};

export default function OwnersPage() {
  const { owners: MOCK_OWNERS, source } = useOwnersData();
  const { years, defaultIndex } = useAvailableYears();
  const [yearIndex, setYearIndex] = useState(defaultIndex);
  const safeIndex = Math.min(yearIndex, years.length - 1);
  const [query, setQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [stateFilter, setStateFilter] = useState<string>("all");
  const [citizenshipFilter, setCitizenshipFilter] = useState<string>("all");
  const [propertyTypeFilter, setPropertyTypeFilter] = useState<string>("all");
  const [displayCount, setDisplayCount] = useState(PAGE_SIZE);
  const [loading, setLoading] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const selectedYear = years[safeIndex];

  // Scale owner property counts based on selected year
  const scaledOwners = useMemo(() => {
    const latestTrend = OWNERSHIP_BY_YEAR[OWNERSHIP_BY_YEAR.length - 1];
    const selectedTrend = OWNERSHIP_BY_YEAR.find((d) => d.year === selectedYear);
    if (!selectedTrend || !latestTrend) return MOCK_OWNERS;

    const latestTotal = CITIZENSHIP_KEYS.reduce((s, k) => s + (latestTrend[k as keyof YearData] as number), 0);
    const selectedTotal = CITIZENSHIP_KEYS.reduce((s, k) => s + (selectedTrend[k as keyof YearData] as number), 0);
    const globalRatio = selectedTotal / latestTotal;

    if (Math.abs(globalRatio - 1) < 0.01) return MOCK_OWNERS;

    return MOCK_OWNERS.map((o) => {
      // Per-citizenship ratio for more accurate scaling
      const citizenKey = o.citizenship || "other";
      const latestVal = latestTrend[citizenKey as keyof YearData] as number || 1;
      const selectedVal = selectedTrend[citizenKey as keyof YearData] as number || 1;
      const ratio = selectedVal / latestVal;
      return { ...o, propertyCount: Math.max(1, Math.round(o.propertyCount * ratio)) };
    });
  }, [MOCK_OWNERS, selectedYear]);

  // Get all unique states and citizenships
  const allStates = useMemo(() => {
    const states = new Set<string>();
    scaledOwners.forEach((o) => o.statesPresent.forEach((s) => states.add(s)));
    return Array.from(states).sort();
  }, [scaledOwners]);

  const allCitizenships = useMemo(() => {
    const set = new Set<string>();
    scaledOwners.forEach((o) => { if (o.citizenship) set.add(o.citizenship); });
    return Array.from(set).sort();
  }, [scaledOwners]);

  // Build owner → property types map
  const ownerPropertyTypes = useMemo(() => {
    const map = new Map<string, Set<string>>();
    scaledOwners.forEach((o) => {
      const props = getOwnerProperties(o.id);
      const types = new Set(props.map((p) => p.propertyType));
      map.set(o.id, types);
    });
    return map;
  }, []);

  // Filter owners
  const filtered = useMemo(() => {
    let result = scaledOwners;

    if (query && query.length >= 1) {
      const q = query.toLowerCase();
      result = result.filter(
        (o) =>
          o.name.toLowerCase().includes(q) ||
          o.ownerType.toLowerCase().includes(q) ||
          o.registrationNumber?.toLowerCase().includes(q) ||
          (o.citizenship && citizenshipLabel(o.citizenship).toLowerCase().includes(q)) ||
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

    if (citizenshipFilter !== "all") {
      result = result.filter((o) => o.citizenship === citizenshipFilter);
    }

    if (propertyTypeFilter !== "all") {
      result = result.filter((o) => ownerPropertyTypes.get(o.id)?.has(propertyTypeFilter));
    }

    return result.sort((a, b) => b.propertyCount - a.propertyCount);
  }, [scaledOwners, query, typeFilter, stateFilter, citizenshipFilter, propertyTypeFilter, ownerPropertyTypes]);

  const visible = useMemo(
    () => filtered.slice(0, displayCount),
    [filtered, displayCount]
  );
  const hasMore = displayCount < filtered.length;

  useEffect(() => {
    setDisplayCount(PAGE_SIZE);
  }, [query, typeFilter, stateFilter, citizenshipFilter, propertyTypeFilter]);

  useEffect(() => {
    if (!sentinelRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          setLoading(true);
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

  // Citizenship breakdown stats
  const citizenshipStats = useMemo(() => {
    const counts: Record<string, { owners: number; properties: number }> = {};
    scaledOwners.forEach((o) => {
      const key = o.citizenship || "other";
      if (!counts[key]) counts[key] = { owners: 0, properties: 0 };
      counts[key].owners++;
      counts[key].properties += o.propertyCount;
    });
    return Object.entries(counts)
      .map(([key, val]) => ({ key, label: citizenshipLabel(key), ...val }))
      .sort((a, b) => b.properties - a.properties);
  }, [scaledOwners]);

  const totalOwners = scaledOwners.length;
  const totalProperties = scaledOwners.reduce((acc, o) => acc + o.propertyCount, 0);

  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>
      <Box sx={{ mb: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1 }}>
          <Typography variant="h4" fontWeight={700}>
            Property Owners Directory
          </Typography>
          <Chip
            label={years[safeIndex]}
            size="small"
            sx={{ bgcolor: "rgba(92,158,255,0.15)", color: "#5C9EFF", fontWeight: 600, fontSize: "0.7rem" }}
          />
        </Box>
        <Typography variant="body1" color="text.secondary">
          Browse {totalOwners} hotel & motel owners managing {formatNumber(totalProperties)} properties across the USA.
        </Typography>
      </Box>

      {/* Year selector */}
      <Box sx={{ mb: 3 }}>
        <YearSelector
          years={years}
          selectedIndex={safeIndex}
          onYearChange={(idx) => setYearIndex(Math.max(0, Math.min(years.length - 1, idx)))}
        />
      </Box>

      {/* Citizenship breakdown chips */}
      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 3 }}>
        <Chip
          label={`All (${totalOwners})`}
          size="small"
          variant={citizenshipFilter === "all" ? "filled" : "outlined"}
          onClick={() => setCitizenshipFilter("all")}
          sx={{ fontWeight: citizenshipFilter === "all" ? 600 : 400 }}
        />
        {citizenshipStats.map((cs) => (
          <Chip
            key={cs.key}
            icon={<Flag sx={{ fontSize: "14px !important" }} />}
            label={`${cs.label} (${cs.owners})`}
            size="small"
            variant={citizenshipFilter === cs.key ? "filled" : "outlined"}
            onClick={() => setCitizenshipFilter(citizenshipFilter === cs.key ? "all" : cs.key)}
            sx={{
              fontWeight: citizenshipFilter === cs.key ? 600 : 400,
              borderColor: citizenshipFilter === cs.key ? CITIZENSHIP_COLORS[cs.key] : undefined,
              bgcolor: citizenshipFilter === cs.key ? `${CITIZENSHIP_COLORS[cs.key]}20` : undefined,
              color: citizenshipFilter === cs.key ? CITIZENSHIP_COLORS[cs.key] : undefined,
            }}
          />
        ))}
      </Box>

      {/* Filters */}
      <Card sx={{ mb: 3 }}>
        <CardContent sx={{ pb: "16px !important" }}>
          <Grid container spacing={2} alignItems="center">
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <TextField
                fullWidth
                size="small"
                placeholder="Search by name, LLC, citizenship..."
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
                <InputLabel>Citizenship</InputLabel>
                <Select
                  value={citizenshipFilter}
                  label="Citizenship"
                  onChange={(e) => setCitizenshipFilter(e.target.value)}
                >
                  <MenuItem value="all">All</MenuItem>
                  {allCitizenships.map((c) => (
                    <MenuItem key={c} value={c}>{citizenshipLabel(c)}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid size={{ xs: 6, sm: 3, md: 2 }}>
              <FormControl fullWidth size="small">
                <InputLabel>Property Type</InputLabel>
                <Select
                  value={propertyTypeFilter}
                  label="Property Type"
                  onChange={(e) => setPropertyTypeFilter(e.target.value)}
                >
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="hotel">Hotel</MenuItem>
                  <MenuItem value="motel">Motel</MenuItem>
                  <MenuItem value="resort">Resort</MenuItem>
                  <MenuItem value="inn">Inn</MenuItem>
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
            <Grid size={{ xs: 6, md: 3 }}>
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
  const citizenColor = owner.citizenship ? CITIZENSHIP_COLORS[owner.citizenship] || "#6B7280" : "#6B7280";

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
        {/* Header: type + citizenship chips */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 1.5, gap: 0.5 }}>
          <Box sx={{ display: "flex", gap: 0.5, flexWrap: "wrap" }}>
            <Chip
              label={ownerTypeLabel(owner.ownerType)}
              size="small"
              sx={{
                bgcolor: `${color}18`,
                color,
                fontWeight: 600,
                fontSize: "0.65rem",
                height: 22,
              }}
            />
            {owner.citizenship && (
              <Chip
                label={citizenshipLabel(owner.citizenship)}
                size="small"
                sx={{
                  bgcolor: `${citizenColor}18`,
                  color: citizenColor,
                  fontWeight: 500,
                  fontSize: "0.65rem",
                  height: 22,
                }}
              />
            )}
          </Box>
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
              <Chip key={s} label={s} size="small" variant="outlined" sx={{ height: 22, fontSize: "0.65rem" }} />
            ))}
            {owner.statesPresent.length > 5 && (
              <Chip label={`+${owner.statesPresent.length - 5}`} size="small" sx={{ height: 22, fontSize: "0.65rem", bgcolor: "rgba(255,255,255,0.05)" }} />
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
