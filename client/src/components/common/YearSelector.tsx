"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import {
  Box, IconButton, Slider, Chip, Tooltip, FormControl,
  InputLabel, Select, MenuItem, Typography,
} from "@mui/material";
import { PlayArrow, Pause, SkipPrevious, SkipNext, Speed } from "@mui/icons-material";

const PLAY_SPEEDS = [1000, 1500, 2000, 3000];
const SPEED_LABELS = ["Fast", "Normal", "Slow", "Very Slow"];

interface YearSelectorProps {
  years: number[];
  selectedIndex: number;
  onYearChange: (index: number) => void;
  compact?: boolean;
}

export default function YearSelector({ years, selectedIndex, onYearChange, compact }: YearSelectorProps) {
  const [playing, setPlaying] = useState(false);
  const [speedIndex, setSpeedIndex] = useState(1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (playing) {
      timerRef.current = setInterval(() => {
        onYearChange(-1); // signal to increment
      }, PLAY_SPEEDS[speedIndex]);
    }
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [playing, speedIndex]);

  // Handle the increment signal from the interval
  useEffect(() => {
    // This is handled by the parent via onYearChange
  }, []);

  const handlePlay = useCallback(() => {
    if (selectedIndex >= years.length - 1) onYearChange(0);
    setPlaying(true);
  }, [selectedIndex, years.length, onYearChange]);

  const handlePause = useCallback(() => setPlaying(false), []);

  const handlePrev = useCallback(() => {
    setPlaying(false);
    onYearChange(Math.max(0, selectedIndex - 1));
  }, [selectedIndex, onYearChange]);

  const handleNext = useCallback(() => {
    setPlaying(false);
    onYearChange(Math.min(years.length - 1, selectedIndex + 1));
  }, [selectedIndex, years.length, onYearChange]);

  // Auto-advance when playing
  useEffect(() => {
    if (!playing) return;
    const timer = setInterval(() => {
      onYearChange(selectedIndex + 1);
    }, PLAY_SPEEDS[speedIndex]);
    return () => clearInterval(timer);
  }, [playing, speedIndex, selectedIndex, onYearChange]);

  // Stop at end
  useEffect(() => {
    if (playing && selectedIndex >= years.length - 1) setPlaying(false);
  }, [playing, selectedIndex, years.length]);

  // Clean up double interval from first useEffect
  useEffect(() => {
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  if (years.length <= 1) return null;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: compact ? 1 : 2,
        flexWrap: "wrap",
        bgcolor: "background.paper",
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 2,
        px: compact ? 1.5 : 2,
        py: compact ? 0.75 : 1,
      }}
    >
      {/* Year dropdown */}
      <FormControl size="small" sx={{ minWidth: 90 }}>
        <Select
          value={selectedIndex}
          onChange={(e) => { setPlaying(false); onYearChange(e.target.value as number); }}
          size="small"
          sx={{ fontSize: "0.85rem", fontWeight: 600 }}
        >
          {years.map((y, i) => (
            <MenuItem key={y} value={i}>{y}</MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Controls */}
      <IconButton onClick={handlePrev} disabled={selectedIndex === 0} size="small" sx={{ color: "text.secondary" }}>
        <SkipPrevious fontSize="small" />
      </IconButton>

      {playing ? (
        <IconButton onClick={handlePause} size="small" sx={{ bgcolor: "primary.main", color: "white", "&:hover": { bgcolor: "primary.dark" }, width: 32, height: 32 }}>
          <Pause fontSize="small" />
        </IconButton>
      ) : (
        <IconButton onClick={handlePlay} size="small" sx={{ bgcolor: "primary.main", color: "white", "&:hover": { bgcolor: "primary.dark" }, width: 32, height: 32 }}>
          <PlayArrow fontSize="small" />
        </IconButton>
      )}

      <IconButton onClick={handleNext} disabled={selectedIndex >= years.length - 1} size="small" sx={{ color: "text.secondary" }}>
        <SkipNext fontSize="small" />
      </IconButton>

      <Tooltip title={`Speed: ${SPEED_LABELS[speedIndex]}`}>
        <IconButton onClick={() => setSpeedIndex((p) => (p + 1) % PLAY_SPEEDS.length)} size="small" sx={{ color: "text.secondary" }}>
          <Speed fontSize="small" />
        </IconButton>
      </Tooltip>

      {/* Slider */}
      {!compact && (
        <Box sx={{ flex: 1, minWidth: 120 }}>
          <Slider
            value={selectedIndex}
            onChange={(_, v) => { setPlaying(false); onYearChange(v as number); }}
            min={0}
            max={years.length - 1}
            step={1}
            marks={years.map((y, i) => ({
              value: i,
              label: years.length <= 8 || i % 2 === 0 ? String(y) : "",
            }))}
            valueLabelDisplay="auto"
            valueLabelFormat={(v) => String(years[v])}
            sx={{
              "& .MuiSlider-markLabel": { fontSize: "0.6rem", color: "text.secondary" },
              "& .MuiSlider-mark": { bgcolor: "rgba(255,255,255,0.2)" },
            }}
          />
        </Box>
      )}
    </Box>
  );
}
