import React, { useState, useEffect } from "react";
import ThemeToggle from "./Widgets/ThemeToggle";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  // Optional: persist mode in localStorage


  return (
    <div className={`${darkMode ? "dark" : ""} min-h-screen`}>
      {/* Page container */}
      <div className="bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText transition-colors duration-300 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">
          React + Tailwind Dark/Light Mode
        </h1>

        {/* Toggle button */}
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </div>
  );
}

export default App;
