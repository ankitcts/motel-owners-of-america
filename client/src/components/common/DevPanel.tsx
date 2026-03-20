"use client";

import { useState, useRef, useCallback } from "react";
import {
  Box, Paper, IconButton, Typography, Switch, FormControlLabel,
  Chip, Divider, ToggleButtonGroup, ToggleButton,
} from "@mui/material";
import { Settings, Close, Code, Storage, BugReport } from "@mui/icons-material";
import { useDevStore } from "@/stores/devStore";

export default function DevPanel() {
  const { devMode, dataSource, hydrated, toggleDevMode, setDataSource } = useDevStore();
  const [open, setOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSettingsClick = useCallback(() => {
    if (!devMode) {
      const newCount = clickCount + 1;
      setClickCount(newCount);
      if (newCount >= 3) {
        toggleDevMode();
        setClickCount(0);
        setOpen(true);
      }
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setClickCount(0), 2000);
    } else {
      setOpen((prev) => !prev);
    }
  }, [devMode, clickCount, toggleDevMode]);

  if (!hydrated) return null;

  return (
    <>
      <IconButton
        onClick={handleSettingsClick}
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 1300,
          bgcolor: devMode ? "warning.main" : "background.paper",
          color: devMode ? "black" : "text.secondary",
          border: "1px solid",
          borderColor: devMode ? "warning.main" : "divider",
          boxShadow: 3,
          width: 44,
          height: 44,
          "&:hover": {
            bgcolor: devMode ? "warning.dark" : "rgba(255,255,255,0.08)",
          },
        }}
      >
        {devMode ? <BugReport fontSize="small" /> : <Settings fontSize="small" />}
      </IconButton>

      {devMode && (
        <Paper
          elevation={8}
          sx={{
            position: "fixed",
            bottom: 74,
            right: 20,
            zIndex: 1300,
            width: 300,
            maxHeight: open ? 400 : 0,
            overflow: "hidden",
            transition: "max-height 0.3s ease",
            border: "1px solid",
            borderColor: "warning.main",
            bgcolor: "background.paper",
          }}
        >
          <Box sx={{ p: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1.5 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Code sx={{ color: "warning.main", fontSize: 20 }} />
                <Typography variant="subtitle2" fontWeight={700} sx={{ color: "warning.main" }}>
                  Dev Settings
                </Typography>
              </Box>
              <IconButton size="small" onClick={() => setOpen(false)} sx={{ color: "text.secondary" }}>
                <Close fontSize="small" />
              </IconButton>
            </Box>

            <Divider sx={{ mb: 2 }} />

            <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: "block" }}>
              Data Source
            </Typography>
            <ToggleButtonGroup
              value={dataSource}
              exclusive
              onChange={(_, v) => { if (v) { setDataSource(v); } }}
              size="small"
              fullWidth
              sx={{ mb: 2 }}
            >
              <ToggleButton value="mock" sx={{ fontSize: "0.75rem", textTransform: "none" }}>
                <Storage sx={{ fontSize: 16, mr: 0.5 }} /> Mock Data
              </ToggleButton>
              <ToggleButton value="live" sx={{ fontSize: "0.75rem", textTransform: "none" }}>
                <Code sx={{ fontSize: 16, mr: 0.5 }} /> Live Data
              </ToggleButton>
            </ToggleButtonGroup>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5 }}>
              <Chip
                label={dataSource === "mock" ? "MOCK" : "LIVE"}
                size="small"
                sx={{
                  bgcolor: dataSource === "mock" ? "rgba(251, 191, 36, 0.15)" : "rgba(52, 211, 153, 0.15)",
                  color: dataSource === "mock" ? "#FBBF24" : "#34D399",
                  fontWeight: 700,
                  fontSize: "0.7rem",
                }}
              />
              <Typography variant="caption" color="text.secondary">
                {dataSource === "mock"
                  ? "Using local mock data"
                  : "Using scraped data from JSON files"}
              </Typography>
            </Box>

            <Divider sx={{ mb: 1.5 }} />

            <FormControlLabel
              control={
                <Switch checked={devMode} onChange={toggleDevMode} size="small" color="warning" />
              }
              label={
                <Typography variant="caption" color="text.secondary">Dev Mode</Typography>
              }
            />
          </Box>
        </Paper>
      )}
    </>
  );
}
