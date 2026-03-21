"use client";

import { useMemo, useState, useCallback } from "react";
import MapGL, { Source, Layer, NavigationControl } from "react-map-gl/mapbox";
import type { MapMouseEvent, ViewStateChangeEvent } from "react-map-gl/mapbox";
import { useRouter } from "next/navigation";
import { Box, Typography, Paper, CircularProgress } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import type { StateSummary, CountySummary } from "@/types";
import { createChoroplethScale } from "@/utils/colors";
import { formatNumber } from "@/utils/format";
import { STATE_CENTERS } from "@/data/stateCenters";

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "";

interface StateMapViewProps {
  state: StateSummary;
  counties: CountySummary[];
}

interface HoveredCounty {
  name: string;
  count: number;
  x: number;
  y: number;
}

async function fetchCountyGeo(stateAbbr: string): Promise<GeoJSON.FeatureCollection> {
  const res = await fetch(`/geo/counties/${stateAbbr}.topo.json`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

export default function StateMapView({ state, counties }: StateMapViewProps) {
  const router = useRouter();
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [hovered, setHovered] = useState<HoveredCounty | null>(null);

  const center = STATE_CENTERS[state.stateAbbr] || { lat: 39.8283, lng: -98.5795, zoom: 6 };
  const [viewState, setViewState] = useState({
    latitude: center.lat,
    longitude: center.lng,
    zoom: center.zoom,
  });

  // Fetch GeoJSON via React Query (cached)
  const { data: countyGeo, isLoading, error } = useQuery({
    queryKey: ["county-geo", state.stateAbbr],
    queryFn: () => fetchCountyGeo(state.stateAbbr),
    staleTime: Infinity,
    gcTime: Infinity,
  });

  const maxCount = useMemo(
    () => Math.max(1, ...counties.map((c) => c.propertyCount)),
    [counties]
  );
  const colorScale = useMemo(() => createChoroplethScale(maxCount), [maxCount]);
  const countyMap = useMemo(
    () => new Map(counties.map((c) => [c.name, c])),
    [counties]
  );

  // Merge GeoJSON with county data — recomputes whenever either changes
  const geoData = useMemo(() => {
    if (!countyGeo) return null;
    return {
      type: "FeatureCollection" as const,
      features: countyGeo.features.map((f) => {
        const name = f.properties?.name || "";
        const county = countyMap.get(name);
        return {
          ...f,
          properties: {
            ...f.properties,
            propertyCount: county?.propertyCount || 0,
            fillColor: county ? colorScale(county.propertyCount) : "#334155",
            countyName: name,
            slug: county?.slug || "",
          },
        };
      }),
    };
  }, [countyGeo, countyMap, colorScale]);

  const handleMouseMove = useCallback((e: MapMouseEvent) => {
    const features = (e as unknown as { features?: Array<{ properties?: Record<string, unknown> }> }).features;
    if (features && features.length > 0) {
      const f = features[0];
      const name = (f.properties?.countyName as string) || "";
      setHoveredId(name);
      setHovered({
        name,
        count: (f.properties?.propertyCount as number) || 0,
        x: e.point.x,
        y: e.point.y,
      });
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredId(null);
    setHovered(null);
  }, []);

  const handleClick = useCallback(
    (e: MapMouseEvent) => {
      const features = (e as unknown as { features?: Array<{ properties?: Record<string, unknown> }> }).features;
      if (features && features.length > 0) {
        const slug = features[0].properties?.slug as string;
        if (slug) router.push(`/states/${state.slug}/counties/${slug}`);
      }
    },
    [router, state.slug]
  );

  if (!MAPBOX_TOKEN) {
    return (
      <Box sx={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "background.default" }}>
        <Typography color="text.secondary">Set NEXT_PUBLIC_MAPBOX_TOKEN to enable map</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
      {isLoading && (
        <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 10 }}>
          <CircularProgress size={32} />
        </Box>
      )}
      {error && (
        <Box sx={{ position: "absolute", top: 12, left: 12, zIndex: 10, bgcolor: "error.main", px: 2, py: 1, borderRadius: 1 }}>
          <Typography variant="caption" color="white">Failed to load county boundaries</Typography>
        </Box>
      )}
      <MapGL
        {...viewState}
        onMove={(evt: ViewStateChangeEvent) => setViewState(evt.viewState)}
        mapboxAccessToken={MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/dark-v11"
        interactiveLayerIds={geoData ? ["county-fill"] : []}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        style={{ width: "100%", height: "100%" }}
        cursor={hoveredId ? "pointer" : "grab"}
      >
        <NavigationControl position="top-right" />
        {geoData && (
          <Source id="counties" type="geojson" data={geoData}>
            <Layer
              id="county-fill"
              type="fill"
              paint={{
                "fill-color": ["get", "fillColor"],
                "fill-opacity": 0.85,
              }}
            />
            <Layer
              id="county-outline"
              type="line"
              paint={{
                "line-color": hoveredId
                  ? ["case", ["==", ["get", "countyName"], hoveredId], "#FFD700", "rgba(255, 255, 255, 0.6)"]
                  : "rgba(255, 255, 255, 0.6)",
                "line-width": hoveredId
                  ? ["case", ["==", ["get", "countyName"], hoveredId], 3, 1]
                  : 1,
              }}
            />
          </Source>
        )}
      </MapGL>
      {hovered && (
        <Paper
          elevation={4}
          sx={{
            position: "absolute",
            left: hovered.x + 12,
            top: hovered.y - 40,
            px: 2,
            py: 1,
            pointerEvents: "none",
            bgcolor: "background.paper",
            border: "1px solid",
            borderColor: "divider",
            zIndex: 10,
          }}
        >
          <Typography variant="subtitle2" fontWeight={600}>{hovered.name} County</Typography>
          <Typography variant="body2" color="text.secondary">{formatNumber(hovered.count)} properties</Typography>
        </Paper>
      )}
    </Box>
  );
}
