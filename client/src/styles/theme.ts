"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#5C9EFF",
      light: "#8CBFFF",
      dark: "#3A7DE0",
    },
    secondary: {
      main: "#FF8A65",
      light: "#FFB899",
      dark: "#E06840",
    },
    background: {
      default: "#0B1120",
      paper: "#111827",
    },
    text: {
      primary: "#E5E7EB",
      secondary: "#9CA3AF",
    },
    success: {
      main: "#34D399",
    },
    warning: {
      main: "#FBBF24",
    },
    error: {
      main: "#F87171",
    },
    divider: "rgba(255, 255, 255, 0.08)",
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCard: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          border: "1px solid rgba(255, 255, 255, 0.08)",
          backgroundImage: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { textTransform: "none", fontWeight: 600 },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { fontWeight: 500 },
      },
    },
  },
});

export default theme;
