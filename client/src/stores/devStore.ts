import { create } from "zustand";
import { persist } from "zustand/middleware";

interface DevStore {
  devMode: boolean;
  dataSource: "mock" | "live";
  hydrated: boolean;
  toggleDevMode: () => void;
  setDataSource: (source: "mock" | "live") => void;
  setHydrated: () => void;
}

export const useDevStore = create<DevStore>()(
  persist(
    (set) => ({
      devMode: false,
      dataSource: "mock",
      hydrated: false,
      toggleDevMode: () => set((s) => ({ devMode: !s.devMode })),
      setDataSource: (source) => set({ dataSource: source }),
      setHydrated: () => set({ hydrated: true }),
    }),
    {
      name: "moa-dev",
      partialize: (state) => ({ devMode: state.devMode, dataSource: state.dataSource }),
      onRehydrateStorage: () => (state) => { state?.setHydrated(); },
    }
  )
);
