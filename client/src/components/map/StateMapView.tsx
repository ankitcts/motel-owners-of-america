"use client";

import { useMemo, useState, useCallback } from "react";
import MapGL, { Source, Layer, NavigationControl } from "react-map-gl/mapbox";
import type { MapMouseEvent, ViewStateChangeEvent, LayerProps } from "react-map-gl/mapbox";
import { useRouter } from "next/navigation";
import { Box, Typography, Paper, CircularProgress } from "@mui/material";
import type { StateSummary, CountySummary } from "@/types";
import { useCountyGeo } from "@/api/hooks/useGeoData";
import { createChoroplethScale, BORDER_COLOR } from "@/utils/colors";
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

export default function StateMapView({ state, counties }: StateMapViewProps) {
  const router = useRouter();
  const { data: countyGeo, isLoading } = useCountyGeo(state.stateAbbr);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [hovered, setHovered] = useState<HoveredCounty | null>(null);

  const center = STATE_CENTERS[state.stateAbbr] || { lat: 39.8283, lng: -98.5795, zoom: 6 };
  const [viewState, setViewState] = useState({
    latitude: center.lat,
    longitude: center.lng,
    zoom: center.zoom,
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

  const geoData = useMemo(() => {
    if (!countyGeo) return null;
    return {
      ...countyGeo,
      features: countyGeo.features.map((f: GeoJSON.Feature) => {
        const name = f.properties?.name || f.properties?.NAME || "";
        const county = countyMap.get(name);
        return {
          ...f,
          properties: {
            ...f.properties,
            propertyCount: county?.propertyCount || 0,
            fillColor: county ? colorScale(county.propertyCount) : "#1a1a2e",
            countyName: name,
            slug: county?.slug || "",
          },
        };
      }),
    };
  }, [countyGeo, countyMap, colorScale]);

  const fillLayer: LayerProps = {
    id: "county-fill",
    type: "fill",
    paint: {
      "fill-color": ["get", "fillColor"],
      "fill-opacity": ["case", ["==", ["get", "countyName"], hoveredId || ""], 0.9, 0.7],
    },
  };

  const lineLayer: LayerProps = {
    id: "county-outline",
    type: "line",
    paint: {
      "line-color": ["case", ["==", ["get", "countyName"], hoveredId || ""], "#FFD700", BORDER_COLOR],
      "line-width": ["case", ["==", ["get", "countyName"], hoveredId || ""], 2, 0.5],
    },
  };

  const handleMouseMove = useCallback((e: MapMouseEvent) => {
    if (e.features && e.features.length > 0) {
      const f = e.features[0];
      setHoveredId(f.properties?.countyName || null);
      setHovered({
        name: f.properties?.countyName || "",
        count: f.properties?.propertyCount || 0,
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
      if (e.features && e.features.length > 0) {
        const slug = e.features[0].properties?.slug;
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
          <Source type="geojson" data={geoData}>
            <Layer {...fillLayer} />
            <Layer {...lineLayer} />
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
