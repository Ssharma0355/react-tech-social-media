import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "../Widgets/ThemeToggle";
import useThemeStore from "../store/themeStore";
import { Menu, X } from "lucide-react"; // Hamburger & cross icons

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useThemeStore();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toSignupPage = () => {
    navigate("/signup");
    setMenuOpen(false);
  };
  const toHomePage = () => {
    navigate("/");
    setMenuOpen(false);
  };
  const toPricingPage = () => {
    navigate("/pricings");
    setMenuOpen(false);
  };
  const toFeaturesPage = () => {
    navigate("/features");
    setMenuOpen(false);
  };

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
          onClick={toHomePage}
          className="p-2 dark:text-darkText text-[#4D4D4D] font-medium rounded-[8px]"
        >
          Home
        </button>
        <button
          onClick={toPricingPage}
          className="p-2 dark:text-darkText text-[#4D4D4D] font-medium rounded-[8px]"
        >
          Pricings
        </button>
        <button
          onClick={toFeaturesPage}
          className="p-2 dark:text-darkText text-[#4D4D4D] font-medium rounded-[8px]"
        >
          Features
        </button>
        <button
          onClick={toSignupPage}
          className="p-2 bg-[#4CAF50] dark:text-darkText text-[#FFFFFF] font-medium rounded-[8px]"
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
            onClick={toHomePage}
            className="p-2 text-left dark:text-darkText text-[#4D4D4D] font-medium"
          >
            Home
          </button>
          <button
            onClick={toPricingPage}
            className="p-2 text-left dark:text-darkText text-[#4D4D4D] font-medium"
          >
            Pricings
          </button>
          <button
            onClick={toFeaturesPage}
            className="p-2 text-left dark:text-darkText text-[#4D4D4D] font-medium"
          >
            Features
          </button>
          <button
            onClick={toSignupPage}
            className="p-2 bg-[#4CAF50] dark:text-darkText text-white font-medium rounded-[8px]"
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
