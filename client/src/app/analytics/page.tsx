"use client";

import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import {
  Container, Box, Typography, Card, CardContent, IconButton,
  Slider, Chip, Grid, Tooltip, Button, FormControl, InputLabel,
  Select, MenuItem,
} from "@mui/material";
import {
  PlayArrow, Pause, SkipPrevious, SkipNext, Speed, ArrowBack,
} from "@mui/icons-material";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer,
  Cell, LabelList, Tooltip as RechartsTooltip,
} from "recharts";
import {
  CITIZENSHIP_KEYS, CITIZENSHIP_CHART_COLORS,
  CITIZENSHIP_SUBCATEGORIES,
  type YearData,
} from "@/data/ownershipTrends";
import { citizenshipLabel, formatNumber } from "@/utils/format";
import { useAnalyticsData } from "@/api/hooks/useAppData";

const PLAY_SPEEDS = [1000, 1500, 2000, 3000];
const SPEED_LABELS = ["Fast", "Normal", "Slow", "Very Slow"];

export default function AnalyticsPage() {
  const { data: OWNERSHIP_BY_YEAR, source: analyticsSource } = useAnalyticsData();
  const [yearIndex, setYearIndex] = useState(OWNERSHIP_BY_YEAR.length - 1);
  const [playing, setPlaying] = useState(false);
  const [speedIndex, setSpeedIndex] = useState(1);
  const [drillCitizenship, setDrillCitizenship] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Clamp yearIndex when data changes
  const safeIndex = Math.min(yearIndex, OWNERSHIP_BY_YEAR.length - 1);
  const currentYear = OWNERSHIP_BY_YEAR[safeIndex];
  const years = OWNERSHIP_BY_YEAR.map((d) => d.year);

  // Top-level bar data
  const barData = useMemo(() => {
    return CITIZENSHIP_KEYS
      .map((key) => ({
        key,
        label: citizenshipLabel(key),
        value: currentYear[key as keyof YearData] as number,
        color: CITIZENSHIP_CHART_COLORS[key],
        hasSubcategories: !!CITIZENSHIP_SUBCATEGORIES[key],
      }))
      .sort((a, b) => b.value - a.value);
  }, [currentYear]);

  // Drill-down bar data
  const drillData = useMemo(() => {
    if (!drillCitizenship) return null;
    const parentValue = currentYear[drillCitizenship as keyof YearData] as number;
    const subs = CITIZENSHIP_SUBCATEGORIES[drillCitizenship];
    if (!subs) return null;
    return subs
      .map((sub) => ({
        key: sub.key,
        label: sub.label,
        value: Math.round(parentValue * sub.pct),
        color: sub.color,
        hasSubcategories: false,
      }))
      .sort((a, b) => b.value - a.value);
  }, [drillCitizenship, currentYear]);

  const activeData = drillData || barData;
  const totalProperties = useMemo(
    () => barData.reduce((sum, d) => sum + d.value, 0),
    [barData]
  );
  const drillTotal = useMemo(
    () => drillData ? drillData.reduce((sum, d) => sum + d.value, 0) : 0,
    [drillData]
  );

  // Play/pause
  useEffect(() => {
    if (playing) {
      timerRef.current = setInterval(() => {
        setYearIndex((prev) => {
          if (prev >= OWNERSHIP_BY_YEAR.length - 1) {
            setPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, PLAY_SPEEDS[speedIndex]);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [playing, speedIndex]);

  const handlePlay = useCallback(() => {
    if (yearIndex >= OWNERSHIP_BY_YEAR.length - 1) setYearIndex(0);
    setPlaying(true);
  }, [yearIndex]);

  const handlePause = useCallback(() => setPlaying(false), []);
  const handlePrev = useCallback(() => { setPlaying(false); setYearIndex((p) => Math.max(0, p - 1)); }, []);
  const handleNext = useCallback(() => { setPlaying(false); setYearIndex((p) => Math.min(OWNERSHIP_BY_YEAR.length - 1, p + 1)); }, []);
  const cycleSpeed = useCallback(() => setSpeedIndex((p) => (p + 1) % PLAY_SPEEDS.length), []);

  const handleBarClick = useCallback((data: { key: string; hasSubcategories: boolean }) => {
    if (data.hasSubcategories) {
      setPlaying(false);
      setDrillCitizenship(data.key);
    }
  }, []);

  const handleBackToOverview = useCallback(() => setDrillCitizenship(null), []);

  // Custom tooltip
  const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: Array<{ payload: { label: string; value: number; color: string; hasSubcategories: boolean } }> }) => {
    if (!active || !payload?.length) return null;
    const d = payload[0].payload;
    const base = drillCitizenship ? drillTotal : totalProperties;
    const pct = ((d.value / base) * 100).toFixed(1);
    return (
      <Box sx={{ bgcolor: "#1e293b", px: 2, py: 1.5, borderRadius: 1, border: "1px solid rgba(255,255,255,0.1)" }}>
        <Typography variant="subtitle2" fontWeight={600} sx={{ color: d.color }}>{d.label}</Typography>
        <Typography variant="body2" sx={{ color: "#e5e7eb" }}>{formatNumber(d.value)} properties</Typography>
        <Typography variant="caption" sx={{ color: "#9ca3af" }}>{pct}% of {drillCitizenship ? citizenshipLabel(drillCitizenship) : "total"}</Typography>
        {d.hasSubcategories && !drillCitizenship && (
          <Typography variant="caption" display="block" sx={{ color: "#5C9EFF", mt: 0.5 }}>Click to drill down</Typography>
        )}
      </Box>
    );
  };

  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>
      <Box sx={{ mb: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1 }}>
          <Typography variant="h4" fontWeight={700}>
            Ownership by Citizenship
          </Typography>
          <Chip
            label={analyticsSource === "live" ? "Live Data" : "Mock Data"}
            size="small"
            sx={{
              bgcolor: analyticsSource === "live" ? "rgba(52,211,153,0.15)" : "rgba(251,191,36,0.15)",
              color: analyticsSource === "live" ? "#34D399" : "#FBBF24",
              fontWeight: 600,
              fontSize: "0.7rem",
            }}
          />
        </Box>
        <Typography variant="body1" color="text.secondary">
          How hotel & motel ownership has changed across communities from 2000 to 2026.
          {!drillCitizenship && " Click any bar to drill down into sub-categories."}
        </Typography>
      </Box>

      {/* Drill-down breadcrumb */}
      {drillCitizenship && (
        <Box sx={{ mb: 2, display: "flex", alignItems: "center", gap: 1 }}>
          <Button
            startIcon={<ArrowBack />}
            onClick={handleBackToOverview}
            size="small"
            sx={{ color: "text.secondary" }}
          >
            Back to Overview
          </Button>
          <Chip
            label={citizenshipLabel(drillCitizenship)}
            sx={{
              bgcolor: `${CITIZENSHIP_CHART_COLORS[drillCitizenship]}20`,
              color: CITIZENSHIP_CHART_COLORS[drillCitizenship],
              fontWeight: 600,
            }}
          />
          <Typography variant="body2" color="text.secondary">
            — {formatNumber(drillTotal)} properties in {currentYear.year}
          </Typography>
        </Box>
      )}

      {/* Stats */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid size={{ xs: 12, sm: 4 }}>
          <Card>
            <CardContent sx={{ textAlign: "center", py: 3, "&:last-child": { pb: 3 } }}>
              <Typography
                variant="h2"
                fontWeight={800}
                sx={{
                  background: "linear-gradient(135deg, #5C9EFF 0%, #FF8A65 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {currentYear.year}
              </Typography>
              <Typography variant="body2" color="text.secondary">Selected Year</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 6, sm: 4 }}>
          <Card>
            <CardContent sx={{ textAlign: "center", py: 3, "&:last-child": { pb: 3 } }}>
              <Typography variant="h3" fontWeight={700} color="primary.main">
                {formatNumber(drillCitizenship ? drillTotal : totalProperties)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {drillCitizenship ? citizenshipLabel(drillCitizenship) : "Total"} Properties
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 6, sm: 4 }}>
          <Card>
            <CardContent sx={{ textAlign: "center", py: 3, "&:last-child": { pb: 3 } }}>
              <Typography variant="h3" fontWeight={700} sx={{ color: activeData[0]?.color }}>
                {activeData[0]?.label}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Top — {formatNumber(activeData[0]?.value || 0)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Chart */}
      <Card sx={{ mb: 3 }}>
        <CardContent sx={{ p: { xs: 1, sm: 3 } }}>
          <ResponsiveContainer width="100%" height={Math.max(350, activeData.length * 45 + 60)}>
            <BarChart
              data={activeData}
              layout="vertical"
              margin={{ top: 10, right: 50, left: 10, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" horizontal={false} />
              <XAxis
                type="number"
                tick={{ fill: "#9ca3af", fontSize: 12 }}
                tickFormatter={(v: number) => formatNumber(v)}
                axisLine={{ stroke: "rgba(255,255,255,0.1)" }}
              />
              <YAxis
                type="category"
                dataKey="label"
                width={170}
                tick={{ fill: "#e5e7eb", fontSize: 12 }}
                axisLine={{ stroke: "rgba(255,255,255,0.1)" }}
              />
              <RechartsTooltip
                content={<CustomTooltip />}
                cursor={{ fill: "rgba(255,255,255,0.03)" }}
              />
              <Bar
                dataKey="value"
                radius={[0, 6, 6, 0]}
                animationDuration={600}
                onClick={(data) => handleBarClick(data as unknown as { key: string; hasSubcategories: boolean })}
                style={{ cursor: drillCitizenship ? "default" : "pointer" }}
              >
                {activeData.map((entry) => (
                  <Cell key={entry.key} fill={entry.color} />
                ))}
                <LabelList
                  dataKey="value"
                  position="right"
                  formatter={(v) => formatNumber(Number(v))}
                  style={{ fill: "#9ca3af", fontSize: 11 }}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Playback controls */}
      <Card>
        <CardContent>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2, flexWrap: "wrap" }}>
            {/* Year dropdown */}
            <FormControl size="small" sx={{ minWidth: 100 }}>
              <InputLabel>Year</InputLabel>
              <Select
                value={yearIndex}
                label="Year"
                onChange={(e) => { setPlaying(false); setYearIndex(e.target.value as number); }}
              >
                {years.map((y, i) => (
                  <MenuItem key={y} value={i}>{y}</MenuItem>
                ))}
              </Select>
            </FormControl>

            <IconButton onClick={handlePrev} disabled={yearIndex === 0} size="small" sx={{ color: "text.secondary" }}>
              <SkipPrevious />
            </IconButton>

            {playing ? (
              <IconButton onClick={handlePause} sx={{ bgcolor: "primary.main", color: "white", "&:hover": { bgcolor: "primary.dark" } }}>
                <Pause />
              </IconButton>
            ) : (
              <IconButton onClick={handlePlay} sx={{ bgcolor: "primary.main", color: "white", "&:hover": { bgcolor: "primary.dark" } }}>
                <PlayArrow />
              </IconButton>
            )}

            <IconButton onClick={handleNext} disabled={yearIndex >= OWNERSHIP_BY_YEAR.length - 1} size="small" sx={{ color: "text.secondary" }}>
              <SkipNext />
            </IconButton>

            <Tooltip title={`Speed: ${SPEED_LABELS[speedIndex]}`}>
              <IconButton onClick={cycleSpeed} size="small" sx={{ color: "text.secondary" }}>
                <Speed />
              </IconButton>
            </Tooltip>
            <Chip label={SPEED_LABELS[speedIndex]} size="small" variant="outlined" sx={{ fontSize: "0.7rem" }} />

            <Box sx={{ flex: 1, ml: 2 }}>
              <Slider
                value={yearIndex}
                onChange={(_, v) => { setPlaying(false); setYearIndex(v as number); }}
                min={0}
                max={OWNERSHIP_BY_YEAR.length - 1}
                step={1}
                marks={years.map((y, i) => ({ value: i, label: i % 2 === 0 ? String(y) : "" }))}
                valueLabelDisplay="auto"
                valueLabelFormat={(v) => String(years[v])}
                sx={{
                  "& .MuiSlider-markLabel": { fontSize: "0.65rem", color: "text.secondary" },
                  "& .MuiSlider-mark": { bgcolor: "rgba(255,255,255,0.2)" },
                }}
              />
            </Box>
          </Box>

          {/* Legend */}
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            {(drillCitizenship
              ? CITIZENSHIP_SUBCATEGORIES[drillCitizenship] || []
              : CITIZENSHIP_KEYS.map((k) => ({ key: k, label: citizenshipLabel(k), color: CITIZENSHIP_CHART_COLORS[k] }))
            ).map((item) => (
              <Chip
                key={item.key}
                label={item.label}
                size="small"
                sx={{
                  bgcolor: `${item.color}20`,
                  color: item.color,
                  fontWeight: 500,
                  fontSize: "0.7rem",
                  "& .MuiChip-label": { px: 1 },
                }}
              />
            ))}
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}
