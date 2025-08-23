import LandingPage from "../pages/LandingPage";
import SignupPage from "../pages/SignupPage";
import Dashboard from "../pages/Dashboard";

const routes = {
  public: [
    { path: "/", element: <LandingPage /> },
    { path: "/signup", element: <SignupPage /> },
  ],
  private: [{ path: "/dashboard", element: <Dashboard /> }],
};

export default routes;
