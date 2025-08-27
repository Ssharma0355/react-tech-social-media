import LandingPage from "../pages/landingpage/LandingPage";
import SignupPage from "../pages/authpage/SignupPage";
import Dashboard from "../pages/dashboard/Dashboard";
import Pricings from "../pages/pricings/Pricings";
import Features from "../pages/features/Features";
import LoginPage from "../pages/authpage/LoginPage";
import Onboarding from "../pages/onboarding/Onboarding";
import VerifyEmail from "../pages/email-verification/VerifyEmail";

const routes = {
  public: [
    { path: "/", element: <LandingPage /> },
    { path: "/signup", element: <SignupPage /> },
    { path: "/pricings", element: <Pricings /> },
    { path: "/features", element: <Features /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/onboarding", element: <Onboarding /> },
    { path: "/verify-email", element: <VerifyEmail /> },

    { path: "/*", element: <h1>Page not found</h1> },
  ],
  private: [{ path: "/dashboard", element: <Dashboard /> }],
};

export default routes;
