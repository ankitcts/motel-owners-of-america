"use client";

import { useState, useMemo, useCallback } from "react";
import MapGL, { Source, Layer, Marker, Popup, NavigationControl } from "react-map-gl/mapbox";
import type { ViewStateChangeEvent, LayerProps } from "react-map-gl/mapbox";
import { Box, Typography, Chip, Button, CircularProgress } from "@mui/material";
import { OpenInNew } from "@mui/icons-material";
import Link from "next/link";
import type { Property } from "@/types";
import { PROPERTY_TYPE_COLORS } from "@/utils/colors";
import { propertyTypeLabel } from "@/utils/format";

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "";

interface PropertyMapViewProps {
  properties: Property[];
  initialViewport?: { latitude: number; longitude: number; zoom: number };
}

export default function PropertyMapView({ properties, initialViewport }: PropertyMapViewProps) {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  // Auto-calculate bounds from properties if no initial viewport
  const viewport = useMemo(() => {
    if (initialViewport) return initialViewport;
    if (properties.length === 0) return { latitude: 39.8283, longitude: -98.5795, zoom: 4 };
    if (properties.length === 1) {
      return {
        latitude: properties[0].location.coordinates[1],
        longitude: properties[0].location.coordinates[0],
        zoom: 13,
      };
    }
    const lats = properties.map((p) => p.location.coordinates[1]);
    const lngs = properties.map((p) => p.location.coordinates[0]);
    const centerLat = (Math.min(...lats) + Math.max(...lats)) / 2;
    const centerLng = (Math.min(...lngs) + Math.max(...lngs)) / 2;
    const latSpan = Math.max(...lats) - Math.min(...lats);
    const lngSpan = Math.max(...lngs) - Math.min(...lngs);
    const span = Math.max(latSpan, lngSpan);
    const zoom = span > 10 ? 4 : span > 5 ? 5 : span > 2 ? 6 : span > 0.5 ? 8 : 10;
    return { latitude: centerLat, longitude: centerLng, zoom };
  }, [properties, initialViewport]);

  const [viewState, setViewState] = useState(viewport);

  // GeoJSON for clustering
  const geojson = useMemo(
    () => ({
      type: "FeatureCollection" as const,
      features: properties.map((p) => ({
        type: "Feature" as const,
        geometry: {
          type: "Point" as const,
          coordinates: p.location.coordinates,
        },
        properties: {
          id: p.id,
          name: p.name,
          propertyType: p.propertyType,
          city: p.city,
          stateAbbr: p.stateAbbr,
          slug: p.slug,
          address: p.address,
          roomsCount: p.roomsCount || 0,
          color: PROPERTY_TYPE_COLORS[p.propertyType] || "#5C9EFF",
        },
      })),
    }),
    [properties]
  );

  const clusterLayer: LayerProps = {
    id: "clusters",
    type: "circle",
    filter: ["has", "point_count"],
    paint: {
      "circle-color": [
        "step",
        ["get", "point_count"],
        "#5C9EFF",
        10, "#A78BFA",
        30, "#FF8A65",
      ],
      "circle-radius": [
        "step",
        ["get", "point_count"],
        18,
        10, 24,
        30, 30,
      ],
      "circle-stroke-width": 2,
      "circle-stroke-color": "rgba(255,255,255,0.3)",
    },
  };

  const clusterCountLayer: LayerProps = {
    id: "cluster-count",
    type: "symbol",
    filter: ["has", "point_count"],
    layout: {
      "text-field": ["get", "point_count_abbreviated"],
      "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
      "text-size": 13,
    },
    paint: {
      "text-color": "#ffffff",
    },
  };

  const unclusteredLayer: LayerProps = {
    id: "unclustered-point",
    type: "circle",
    filter: ["!", ["has", "point_count"]],
    paint: {
      "circle-color": ["get", "color"],
      "circle-radius": 8,
      "circle-stroke-width": 2,
      "circle-stroke-color": "#ffffff",
    },
  };

  const handleClick = useCallback(
    (e: mapboxgl.MapMouseEvent & { features?: mapboxgl.MapboxGeoJSONFeature[] }) => {
      const feature = e.features?.[0];
      if (!feature) {
        setSelectedProperty(null);
        return;
      }

      // If cluster, zoom in
      if (feature.properties?.cluster) {
        return;
      }

      // Unclustered point - show popup
      const props = feature.properties;
      if (props?.id) {
        const property = properties.find((p) => p.id === props.id);
        if (property) setSelectedProperty(property);
      }
    },
    [properties]
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
      <MapGL
        {...viewState}
        onMove={(evt: ViewStateChangeEvent) => setViewState(evt.viewState)}
        mapboxAccessToken={MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/dark-v11"
        interactiveLayerIds={["clusters", "unclustered-point"]}
        onClick={handleClick}
        style={{ width: "100%", height: "100%" }}
      >
        <NavigationControl position="top-right" />

        <Source
          type="geojson"
          data={geojson}
          cluster={true}
          clusterMaxZoom={14}
          clusterRadius={50}
        >
          <Layer {...clusterLayer} />
          <Layer {...clusterCountLayer} />
          <Layer {...unclusteredLayer} />
        </Source>

        {selectedProperty && (
          <Popup
            latitude={selectedProperty.location.coordinates[1]}
            longitude={selectedProperty.location.coordinates[0]}
            onClose={() => setSelectedProperty(null)}
            closeOnClick={false}
            offset={12}
            maxWidth="280px"
          >
            <Box sx={{ minWidth: 200 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.5 }}>
                <Typography variant="subtitle2" fontWeight={600} sx={{ color: "#e5e7eb" }}>
                  {selectedProperty.name}
                </Typography>
              </Box>
              <Chip
                label={propertyTypeLabel(selectedProperty.propertyType)}
                size="small"
                sx={{
                  bgcolor: `${PROPERTY_TYPE_COLORS[selectedProperty.propertyType]}30`,
                  color: PROPERTY_TYPE_COLORS[selectedProperty.propertyType],
                  fontSize: "0.65rem",
                  height: 20,
                  mb: 0.5,
                }}
              />
              <Typography variant="caption" display="block" sx={{ color: "#9ca3af" }}>
                {selectedProperty.address}, {selectedProperty.city}, {selectedProperty.stateAbbr}
              </Typography>
              {selectedProperty.roomsCount && (
                <Typography variant="caption" display="block" sx={{ color: "#9ca3af" }}>
                  {selectedProperty.roomsCount} rooms
                </Typography>
              )}
              <Button
                component={Link}
                href={`/properties/${selectedProperty.slug}`}
                target="_blank"
                size="small"
                endIcon={<OpenInNew sx={{ fontSize: "14px !important" }} />}
                sx={{ mt: 1, fontSize: "0.7rem", p: 0, minWidth: "auto", color: "#5C9EFF" }}
              >
                View Details
              </Button>
            </Box>
          </Popup>
        )}
      </MapGL>
    </Box>
  );
}
