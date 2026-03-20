"use client";

import { useCallback, useState, useMemo } from "react";
import MapGL, { Source, Layer, NavigationControl } from "react-map-gl/mapbox";
import type { MapMouseEvent, ViewStateChangeEvent, LayerProps } from "react-map-gl/mapbox";
import { useRouter } from "next/navigation";
import { Box, Typography, Paper, CircularProgress } from "@mui/material";
import type { StateSummary } from "@/types";
import { createChoroplethScale, BORDER_COLOR } from "@/utils/colors";
import { formatNumber } from "@/utils/format";
import { useUSStatesGeo } from "@/api/hooks/useGeoData";

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "";

interface USMapProps {
  states: StateSummary[];
}

interface HoveredState {
  name: string;
  count: number;
  x: number;
  y: number;
}

export default function USMap({ states }: USMapProps) {
  const router = useRouter();
  const { data: statesGeo, isLoading: geoLoading } = useUSStatesGeo();
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [hovered, setHovered] = useState<HoveredState | null>(null);
  const [viewState, setViewState] = useState({
    latitude: 39.8283,
    longitude: -98.5795,
    zoom: 3.5,
  });

  const maxCount = useMemo(
    () => Math.max(...states.map((s) => s.propertyCount)),
    [states]
  );
  const colorScale = useMemo(() => createChoroplethScale(maxCount), [maxCount]);

  const stateCountMap = useMemo(
    () => new Map(states.map((s) => [s.stateAbbr, s])),
    [states]
  );

  // Merge GeoJSON features with count data
  const geoData = useMemo(() => {
    if (!statesGeo) return null;
    return {
      ...statesGeo,
      features: statesGeo.features.map((f: GeoJSON.Feature) => {
        // us-atlas uses "name" for state name; STUSPS is not present
        // We need to match by state name since us-atlas doesn't include abbreviations
        const name = f.properties?.name || "";
        const state = states.find((s) => s.stateName === name);
        const abbr = state?.stateAbbr || "";
        return {
          ...f,
          properties: {
            ...f.properties,
            propertyCount: state?.propertyCount || 0,
            fillColor: colorScale(state?.propertyCount || 0),
            stateName: name,
            stateAbbr: abbr,
            slug: state?.slug || "",
          },
        };
      }),
    };
  }, [statesGeo, states, colorScale]);

  const fillLayer: LayerProps = {
    id: "states-fill",
    type: "fill",
    paint: {
      "fill-color": ["get", "fillColor"],
      "fill-opacity": [
        "case",
        ["==", ["get", "stateAbbr"], hoveredId || ""],
        0.9,
        0.7,
      ],
    },
  };

  const lineLayer: LayerProps = {
    id: "states-outline",
    type: "line",
    paint: {
      "line-color": [
        "case",
        ["==", ["get", "stateAbbr"], hoveredId || ""],
        "#FFD700",
        BORDER_COLOR,
      ],
      "line-width": [
        "case",
        ["==", ["get", "stateAbbr"], hoveredId || ""],
        2.5,
        0.8,
      ],
    },
  };

  const handleMouseMove = useCallback(
    (e: MapMouseEvent) => {
      if (e.features && e.features.length > 0) {
        const feature = e.features[0];
        const abbr = feature.properties?.stateAbbr;
        setHoveredId(abbr);
        setHovered({
          name: feature.properties?.stateName || "",
          count: feature.properties?.propertyCount || 0,
          x: e.point.x,
          y: e.point.y,
        });
      }
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    setHoveredId(null);
    setHovered(null);
  }, []);

  const handleClick = useCallback(
    (e: MapMouseEvent) => {
      if (e.features && e.features.length > 0) {
        const slug = e.features[0].properties?.slug;
        if (slug) router.push(`/states/${slug}`);
      }
    },
    [router]
  );

  if (!MAPBOX_TOKEN) {
    return (
      <Box
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          borderRadius: 2,
          border: "1px solid",
          borderColor: "divider",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography color="text.secondary" variant="h6">
          Map Preview
        </Typography>
        <Typography color="text.secondary" variant="body2">
          Set NEXT_PUBLIC_MAPBOX_TOKEN in .env.local to enable the interactive map
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
      {geoLoading && (
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 10,
          }}
        >
          <CircularProgress size={32} />
        </Box>
      )}

      <MapGL
        {...viewState}
        onMove={(evt: ViewStateChangeEvent) => setViewState(evt.viewState)}
        mapboxAccessToken={MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/dark-v11"
        interactiveLayerIds={["states-fill"]}
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
          <Typography variant="subtitle2" fontWeight={600}>
            {hovered.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {formatNumber(hovered.count)} properties
          </Typography>
        </Paper>
      )}
    </Box>
  );
}
