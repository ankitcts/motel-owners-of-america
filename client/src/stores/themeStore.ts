import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeStore {
  mode: "light" | "dark";
  hydrated: boolean;
  toggleMode: () => void;
  setHydrated: () => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      mode: "dark",
      hydrated: false,
      toggleMode: () =>
        set((state) => ({ mode: state.mode === "dark" ? "light" : "dark" })),
      setHydrated: () => set({ hydrated: true }),
    }),
    {
      name: "moa-theme",
      partialize: (state) => ({ mode: state.mode }),
      onRehydrateStorage: () => (state) => {
        state?.setHydrated();
      },
    }
  )
);
