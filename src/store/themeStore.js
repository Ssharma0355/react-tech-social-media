import { create } from "zustand";
import { persist } from "zustand/middleware";

const useThemeStore = create(
  persist(
    (set) => ({
      darkMode: false,
      hasHydrated: false, // track hydration
      toggleDarkMode: () =>
        set((state) => ({
          darkMode: !state.darkMode,
        })),
      setDarkMode: (value) => set({ darkMode: value }),
      setHasHydrated: (val) => set({ hasHydrated: val }),
    }),
    {
      name: "theme-storage",
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true); // mark store as ready
      },
    }
  )
);

export default useThemeStore;
