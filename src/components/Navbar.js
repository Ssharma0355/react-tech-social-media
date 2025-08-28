import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ThemeToggle from "../Widgets/ThemeToggle";
import useThemeStore from "../store/themeStore";
import { Menu, X } from "lucide-react"; // Hamburger & cross icons

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useThemeStore();
  const navigate = useNavigate();
  const location = useLocation(); // 👈 get current path
  const [menuOpen, setMenuOpen] = useState(false);

  // Navigation helpers
  const handleNavigate = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  // Reusable style for buttons
  const navButtonStyle = (path) =>
    `p-2 font-medium rounded-[8px] transition ${
      location.pathname === path
        ? "text-[#4CAF50]" // Active route
        : "dark:text-darkText text-[#4D4D4D] hover:text-[#4CAF50]"
    }`;

  return (
    <nav
      className={`${
        darkMode ? "bg-darkBg" : "bg-[#FFFFFF]"
      } flex items-center justify-between p-4 relative`}
    >
      {/* Logo / Name */}
      <div className="flex">
        <h1 className="p-2 dark:text-darkText text-[#4CAF50] font-bold">
          Sachin's Development
        </h1>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-row gap-4 items-center">
        <button
          onClick={() => handleNavigate("/")}
          className={navButtonStyle("/")}
        >
          Home
        </button>
        <button
          onClick={() => handleNavigate("/pricings")}
          className={navButtonStyle("/pricings")}
        >
          Pricings
        </button>
        <button
          onClick={() => handleNavigate("/features")}
          className={navButtonStyle("/features")}
        >
          Features
        </button>
        <button
          onClick={() => handleNavigate("/signup")}
          className="p-2 bg-[#4CAF50] text-white font-medium rounded-[8px] hover:bg-[#43a047]"
        >
          Register Now &rarr;
        </button>
        <ThemeToggle darkMode={darkMode} setDarkMode={toggleDarkMode} />
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div
          className={`absolute top-[70px] right-4 z-20 w-[200px] rounded-lg shadow-lg ${
            darkMode ? "bg-darkBg" : "bg-white"
          } flex flex-col gap-2 p-4 md:hidden`}
        >
          <button
            onClick={() => handleNavigate("/")}
            className={navButtonStyle("/")}
          >
            Home
          </button>
          <button
            onClick={() => handleNavigate("/pricings")}
            className={navButtonStyle("/pricings")}
          >
            Pricings
          </button>
          <button
            onClick={() => handleNavigate("/features")}
            className={navButtonStyle("/features")}
          >
            Features
          </button>
          <button
            onClick={() => handleNavigate("/signup")}
            className="p-2 bg-[#4CAF50] text-white font-medium rounded-[8px] hover:bg-[#43a047]"
          >
            Register Now &rarr;
          </button>
          <ThemeToggle darkMode={darkMode} setDarkMode={toggleDarkMode} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
