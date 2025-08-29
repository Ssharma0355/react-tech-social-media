import { create } from "zustand";
import { persist } from "zustand/middleware";

const useThemeStore = create(
  persist(
    (set) => ({
      // Always light mode for now
      darkMode: false,
      hasHydrated: false,

      // 🔒 Future dark mode functions (kept for later use)
      // toggleDarkMode: () =>
      //   set((state) => ({
      //     darkMode: !state.darkMode,
      //   })),
      // setDarkMode: (value) => set({ darkMode: value }),

      setHasHydrated: (val) => set({ hasHydrated: val }),
    }),
    {
      name: "theme-storage",
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);

export default useThemeStore;
