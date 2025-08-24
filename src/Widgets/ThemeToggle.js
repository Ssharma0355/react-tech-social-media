import React, { useEffect } from "react";
import { FiSun } from "react-icons/fi";
import { IoMdMoon } from "react-icons/io";


const ThemeToggle = ({ darkMode, setDarkMode }) => {
  useEffect(() => {
    const saved = localStorage.getItem("darkMode") === "true";
    setDarkMode(saved);
  }, [setDarkMode]);

  return (
    <div className="flex">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 rounded bg-gray-300 dark:bg-gray-700 text-black dark:text-white transition-colors"
      >
        {darkMode ? <FiSun className="text-yellow" /> : <IoMdMoon />}
      </button>
    </div>
  );
};

export default ThemeToggle;
