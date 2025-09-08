import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes/routes";
import PrivateRoute from "./routes/PrivateRoute";
import Navbar from "./components/Navbar";
import useThemeStore from "./store/themeStore";
import { Toaster } from "react-hot-toast";

function App() {
  const darkMode = useThemeStore((state) => state.darkMode);

  return (
    <div className={`${darkMode ? "dark" : ""} min-h-screen`}>
        <Toaster position="top-right" reverseOrder={false} />
      <div className="bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText transition-colors duration-300 min-h-screen flex flex-col">
        <Router>
          <Routes>
            {/* Public Routes */}
            {routes.public.map(({ path, element }, idx) => (
              <Route key={idx} path={path} element={element} />
            ))}

            {/* Private Routes */}
            {/* {routes.private.map(({ path, element }, idx) => (
              <Route
                key={idx}
                path={path}
                element={<PrivateRoute>{element}</PrivateRoute>}
              />
            ))} */}
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
