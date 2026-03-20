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
  const { mode, hydrated, toggleMode } = useThemeStore();

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
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <Box
            sx={{
              fontSize: { xs: "0.95rem", sm: "1.25rem" },
              fontWeight: 800,
              lineHeight: 1.2,
              letterSpacing: "0.02em",
              fontFamily: "var(--font-inter), Inter, sans-serif",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              component="span"
              sx={{
                background: `
                  linear-gradient(180deg,
                    #B22234 0%, #B22234 15%,
                    #FFFFFF 15%, #FFFFFF 23%,
                    #B22234 23%, #B22234 38%,
                    #FFFFFF 38%, #FFFFFF 46%,
                    #B22234 46%, #B22234 61%,
                    #FFFFFF 61%, #FFFFFF 69%,
                    #B22234 69%, #B22234 84%,
                    #FFFFFF 84%, #FFFFFF 92%,
                    #B22234 92%, #B22234 100%
                  )`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                display: "inline",
              }}
            >
              MOTEL OWNERS
            </Box>
            <Box
              component="span"
              sx={{
                fontSize: { xs: "0.65rem", sm: "0.8rem" },
                fontWeight: 600,
                letterSpacing: "0.15em",
                background: "linear-gradient(90deg, #3C3B6E 0%, #5C9EFF 50%, #3C3B6E 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              OF AMERICA
            </Box>
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

        {hydrated && (
          <IconButton size="small" onClick={toggleMode} sx={{ color: "text.secondary" }}>
            {mode === "dark" ? <LightMode fontSize="small" /> : <DarkMode fontSize="small" />}
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
}
