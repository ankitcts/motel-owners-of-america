"use client";

import { AppBar, Toolbar, Typography, Box, IconButton, Button } from "@mui/material";
import { Search as SearchIcon, DarkMode, LightMode, Hotel } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useThemeStore } from "@/stores/themeStore";

export default function Header() {
  const router = useRouter();
  const { mode, toggleMode } = useThemeStore();

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "background.paper",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Toolbar sx={{ gap: 2 }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Hotel sx={{ color: "primary.main", fontSize: 28 }} />
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "0.9rem", sm: "1.1rem" },
                lineHeight: 1.2,
                background: "linear-gradient(135deg, #5C9EFF 0%, #FF8A65 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Motel Owners of America
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "text.secondary", fontSize: "0.65rem", display: { xs: "none", sm: "block" } }}
            >
              Hotel & Motel Ownership Database
            </Typography>
          </Box>
        </Link>

        <Box sx={{ flexGrow: 1 }} />

        <Button
          size="small"
          startIcon={<SearchIcon />}
          onClick={() => router.push("/search")}
          sx={{
            color: "text.secondary",
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 2,
            px: 2,
            textTransform: "none",
            "&:hover": { borderColor: "primary.main", color: "primary.main" },
          }}
        >
          <Box sx={{ display: { xs: "none", sm: "inline" } }}>Search owners...</Box>
        </Button>

        <IconButton size="small" onClick={toggleMode} sx={{ color: "text.secondary" }}>
          {mode === "dark" ? <LightMode fontSize="small" /> : <DarkMode fontSize="small" />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
