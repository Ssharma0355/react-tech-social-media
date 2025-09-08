// src/store/authStore.js
import { create } from "zustand";

const API_BASE = "https://reactapp-apis-3.onrender.com";

const useAuthStore = create((set, get) => ({
  userInfo: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  },
  setUserInfo: (updates) =>
    set((state) => ({
      userInfo: { ...state.userInfo, ...updates },
    })),

  // ✅ Signup API
  signup: async () => {
    const { firstName, lastName, email, password } = get().userInfo;
    try {
      const res = await fetch(`${API_BASE}/user/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstname: firstName,
          lastname: lastName,
          email,
          password,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Signup failed");

      // ✅ Save email to localStorage for verification
      localStorage.setItem("signupEmail", email);

      return { success: true, data };
    } catch (err) {
      console.error("Signup Error:", err);
      return { success: false, error: err.message };
    }
  },

  // ✅ Email Verification API
  verifyEmail: async (otp) => {
    const email = localStorage.getItem("signupEmail");
    if (!email) return { success: false, error: "No email found" };

    try {
      const res = await fetch(`${API_BASE}/user/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Verification failed");

      return { success: true, data };
    } catch (err) {
      console.error("Verification Error:", err);
      return { success: false, error: err.message };
    }
  },
   login: async () => {
    const { email, password } = get().userInfo;
    try {
      const res = await fetch(`${API_BASE}/user/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "login failed");

      return { success: true, data };
    } catch (err) {
      console.error("login Error:", err);
      return { success: false, error: err.message };
    }
  },
  resendOtp: async () => {
    const email = localStorage.getItem("signupEmail");
    if (!email) return { success: false, error: "No email found" };

    try {
      const res = await fetch(`${API_BASE}/user/resend-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Resend OTP failed");

      return { success: true, data };
    } catch (err) {
      console.error("Resend OTP Error:", err);
      return { success: false, error: err.message };
    }
  },
}));


export default useAuthStore;
