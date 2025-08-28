// src/store/authStore.js
import { create } from "zustand";

const useAuthStore = create((set) => ({
  userInfo: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  },
  setUserInfo: (newInfo) =>
    set((state) => ({
      userInfo: { ...state.userInfo, ...newInfo },
    })),
  clearUserInfo: () =>
    set({
      userInfo: { firstName: "", lastName: "", email: "", password: "" },
    }),
}));

export default useAuthStore;
