"use client";

import { AppBar, Toolbar, Typography, Box, IconButton, Button, Chip } from "@mui/material";
import { Search as SearchIcon, DarkMode, LightMode, Hotel, People, Map as MapIcon } from "@mui/icons-material";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useThemeStore } from "@/stores/themeStore";

const NAV_ITEMS = [
  { label: "Map", href: "/", icon: MapIcon },
  { label: "Owners", href: "/owners", icon: People },
  { label: "Search", href: "/search", icon: SearchIcon },
];

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
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
      <Toolbar sx={{ gap: 1.5 }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
          <Hotel sx={{ color: "primary.main", fontSize: 28 }} />
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "0.85rem", sm: "1.1rem" },
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
              sx={{ color: "text.secondary", fontSize: "0.6rem", display: { xs: "none", sm: "block" } }}
            >
              Hotel & Motel Ownership Database
            </Typography>
          </Box>
        </Link>

        <Box sx={{ display: "flex", gap: 0.5, ml: { xs: 1, sm: 3 } }}>
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/" || pathname.startsWith("/states")
                : pathname.startsWith(item.href);
            return (
              <Button
                key={item.href}
                component={Link}
                href={item.href}
                size="small"
                startIcon={<item.icon sx={{ fontSize: "18px !important" }} />}
                sx={{
                  color: isActive ? "primary.main" : "text.secondary",
                  bgcolor: isActive ? "rgba(92, 158, 255, 0.08)" : "transparent",
                  borderRadius: 2,
                  px: { xs: 1, sm: 1.5 },
                  minWidth: "auto",
                  fontSize: { xs: "0.75rem", sm: "0.85rem" },
                  fontWeight: isActive ? 600 : 400,
                  "&:hover": {
                    bgcolor: isActive ? "rgba(92, 158, 255, 0.12)" : "rgba(255,255,255,0.04)",
                  },
                  "& .MuiButton-startIcon": {
                    mr: { xs: 0, sm: 0.5 },
                  },
                }}
              >
                <Box sx={{ display: { xs: "none", sm: "inline" } }}>{item.label}</Box>
              </Button>
            );
          })}
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        <IconButton size="small" onClick={toggleMode} sx={{ color: "text.secondary" }}>
          {mode === "dark" ? <LightMode fontSize="small" /> : <DarkMode fontSize="small" />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
