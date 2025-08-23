import React, { useState, useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Optional: persist mode in localStorage
  useEffect(() => {
    const saved = localStorage.getItem("darkMode") === "true";
    setDarkMode(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className={`${darkMode ? "dark" : ""} min-h-screen`}>
      {/* Page container */}
      <div className="bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText transition-colors duration-300 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">
          React + Tailwind Dark/Light Mode
        </h1>

        {/* Toggle button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded bg-gray-300 dark:bg-gray-700 text-black dark:text-white transition-colors"
        >
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>
    </div>
  );
}

export default App;
