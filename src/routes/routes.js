import LandingPage from "../pages/landingpage/LandingPage";
import SignupPage from "../pages/authpage/SignupPage";
import Dashboard from "../pages/dashboard/Dashboard";
import Pricings from "../pages/pricings/Pricings";
import Features from "../pages/features/Features";

const routes = {
  public: [
    { path: "/", element: <LandingPage /> },
    { path: "/signup", element: <SignupPage /> },
    { path: "/pricings", element: <Pricings /> },
    { path: "/features", element: <Features /> },
    { path: "/*", element:<h1>Page not found</h1>}
  ],
  private: [{ path: "/dashboard", element: <Dashboard /> }],
};

export default routes;
