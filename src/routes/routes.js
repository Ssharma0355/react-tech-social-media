import LandingPage from "../pages/landingpage/LandingPage";
import SignupPage from "../pages/authpage/SignupPage";
import Dashboard from "../pages/dashboard/Dashboard";
import Pricings from "../pages/pricings/Pricings";
import Features from "../pages/features/Features";
import LoginPage from "../pages/authpage/LoginPage";
import Onboarding from "../pages/onboarding/Onboarding";
import VerifyEmail from "../pages/email-verification/VerifyEmail";
import HiringDetails from "../pages/onboarding/hiringUser/HiringDetails";
import PersonalInfo from "../pages/onboarding/commonUser/PersonalInfo";
import EasyApply from "../pages/easyapply/EasyApply";
import Feed from "../pages/feed/Feed";

const routes = {
  public: [
    { path: "/", element: <LandingPage /> },
    { path: "/signup", element: <SignupPage /> },
    { path: "/pricings", element: <Pricings /> },
    { path: "/features", element: <Features /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/onboarding", element: <Onboarding /> },
    { path: "/verify-email", element: <VerifyEmail /> },
    { path: "/hiring-onboarding", element: <HiringDetails /> },
    { path: "/candidate-onboarding", element: <PersonalInfo /> },// 👈 dashboard is public for now
    { path: "/easy-apply", element: <EasyApply /> },
    { path: "/dashboard", element: <Feed /> },
    { path: "/*", element: <h1>Page not found</h1> },
  ],

  // private: [
  //   { path: "/dashboard", element: <Dashboard /> },
  // ],
};

export default routes;
