// src/store/authStore.js
import { create } from "zustand";

const API_BASE = "https://reactapp-apis-3.onrender.com";
// const LOCAL_API_BASE = "http://localhost:8000"; // optional for dev

const useAuthStore = create((set, get) => ({
  userInfo: JSON.parse(localStorage.getItem("userInfo")) || {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  },

  // ✅ Update user info and save in localStorage
  setUserInfo: (updates) =>
    set((state) => {
      const updatedUser = { ...state.userInfo, ...updates };
      localStorage.setItem("userInfo", JSON.stringify(updatedUser));
      return { userInfo: updatedUser };
    }),

  // ✅ Signup API
  signup: async () => {
    const { firstName, lastName, email, password } = get().userInfo;
    try {
      const res = await fetch(`${API_BASE}/user/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstname: firstName, lastname: lastName, email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Signup failed");

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

  // ✅ Login API
  login: async () => {
    const { email, password } = get().userInfo;
    try {
      const res = await fetch(`${API_BASE}/user/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Login failed");

      // ✅ Save user in state + localStorage
      const user = {
        firstName: data.user.firstname,
        lastName: data.user.lastname,
        email: data.user.email,
      };
      set({ userInfo: { ...user, password: "" } });
      localStorage.setItem("userInfo", JSON.stringify({ ...user, password: "" }));

      return { success: true, data };
    } catch (err) {
      console.error("Login Error:", err);
      return { success: false, error: err.message };
    }
  },

  // ✅ Logout
  logout: () => {
    localStorage.removeItem("userInfo");
    set({
      userInfo: { firstName: "", lastName: "", email: "", password: "" },
    });
  },

  // ✅ Resend OTP
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

  // ✅ Onboarding (Candidate)
  candidateOnboarding: async (formData) => {
    try {
      const email = get().userInfo.email;
      const res = await fetch(`${API_BASE}/user/onboarding/candidate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, ...formData }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Candidate onboarding failed");

      return { success: true, data };
    } catch (err) {
      console.error("Candidate Onboarding Error:", err);
      return { success: false, error: err.message };
    }
  },

  // ✅ Onboarding (Hiring)
  hiringOnboarding: async (formData) => {
    try {
      const email = get().userInfo.email;
      const res = await fetch(`${API_BASE}/user/onboarding/hiring`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, ...formData }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Hiring onboarding failed");

      return { success: true, data };
    } catch (err) {
      console.error("Hiring Onboarding Error:", err);
      return { success: false, error: err.message };
    }
  },

  // ✅ Fetch Jobs & Candidates
  fetchUsersData: async () => {
    try {
      const res = await fetch(`${API_BASE}/user/users`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Fetching users failed");

      const jobs = data.users.filter((u) => u.hiring_details).map((u) => u.hiring_details);
      const candidates = data.users.filter((u) => u.candidate_details).map((u) => u.candidate_details);

      return { success: true, jobs, candidates };
    } catch (err) {
      console.error("Fetch Users Data Error:", err);
      return { success: false, error: err.message };
    }
  },

  // =====================
  // ✅ Posts
  // =====================
  posts: [],

  createPost: async (postData) => {
    try {
      const { email } = get().userInfo;
      if (!email) throw new Error("You must be logged in to create a post");

      const formData = new FormData();
      formData.append("author_email", email);
      formData.append("text", postData.text || "");
      if (postData.media) formData.append("media", postData.media);

      const res = await fetch(`${API_BASE}/user/posts`, { method: "POST", body: formData });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to create post");

      set((state) => ({ posts: [data.post, ...state.posts] }));
      return { success: true, data };
    } catch (err) {
      console.error("Create Post Error:", err);
      return { success: false, error: err.message };
    }
  },

  fetchPosts: async () => {
    try {
      const res = await fetch(`${API_BASE}/user/posts`, { method: "GET" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to fetch posts");

      set({ posts: data.posts });
      return { success: true, data };
    } catch (err) {
      console.error("Fetch Posts Error:", err);
      return { success: false, error: err.message };
    }
  },
}));

export default useAuthStore;
