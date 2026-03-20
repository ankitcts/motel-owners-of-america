"use client";

import { useQuery } from "@tanstack/react-query";
import * as topojson from "topojson-client";
import type { Topology } from "topojson-specification";

async function fetchTopoJSON(path: string): Promise<GeoJSON.FeatureCollection> {
  const res = await fetch(path);
  if (!res.ok) throw new Error(`Failed to fetch ${path}`);
  const topo: Topology = await res.json();
  const objectKey = Object.keys(topo.objects)[0];
  return topojson.feature(topo, topo.objects[objectKey]) as GeoJSON.FeatureCollection;
}

export function useUSStatesGeo() {
  return useQuery({
    queryKey: ["geo", "us-states"],
    queryFn: () => fetchTopoJSON("/geo/us-states-topo.json"),
    staleTime: Infinity,
    gcTime: Infinity,
  });
}

export function useCountyGeo(stateAbbr: string | null) {
  return useQuery({
    queryKey: ["geo", "counties", stateAbbr],
    queryFn: () => fetchTopoJSON(`/geo/counties/${stateAbbr}.topo.json`),
    enabled: !!stateAbbr,
    staleTime: Infinity,
    gcTime: Infinity,
  });
}
