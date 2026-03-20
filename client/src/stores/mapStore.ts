import { create } from "zustand";
import type { MapViewport } from "@/types";

interface MapStore {
  viewport: MapViewport;
  selectedStateAbbr: string | null;
  selectedCountyFips: string | null;
  hoveredFeatureId: string | null;
  setViewport: (vp: Partial<MapViewport>) => void;
  selectState: (abbr: string | null) => void;
  selectCounty: (fips: string | null) => void;
  setHoveredFeature: (id: string | null) => void;
  reset: () => void;
}

const INITIAL_VIEWPORT: MapViewport = {
  latitude: 39.8283,
  longitude: -98.5795,
  zoom: 3.5,
};

export const useMapStore = create<MapStore>((set) => ({
  viewport: INITIAL_VIEWPORT,
  selectedStateAbbr: null,
  selectedCountyFips: null,
  hoveredFeatureId: null,

  setViewport: (vp) =>
    set((state) => ({ viewport: { ...state.viewport, ...vp } })),

  selectState: (abbr) => set({ selectedStateAbbr: abbr }),

  selectCounty: (fips) => set({ selectedCountyFips: fips }),

  setHoveredFeature: (id) => set({ hoveredFeatureId: id }),

  reset: () =>
    set({
      viewport: INITIAL_VIEWPORT,
      selectedStateAbbr: null,
      selectedCountyFips: null,
      hoveredFeatureId: null,
    }),
}));
