import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "../Widgets/ThemeToggle";
import useThemeStore from "../store/themeStore";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useThemeStore();
  const navigate = useNavigate();

  const toSignupPage = () => {
    navigate("/signup");
  };
  const toHomePage = () => {
    navigate("/");
  };
  const toPricingPage = () => {
    navigate("/pricings");
  };

  const toFeaturesPage = () => {
    navigate("/features");
  };

  return (
    <nav
      className={`${
        darkMode ? "bg-darkBg" : "bg-[#FFFFFF]"
      } flex flex-row justify-between p-4 items-center`}
    >
      <div className="flex">
        <h1 className="p-2 dark:text-darkText text-[#4CAF50] font-medium ">
          Sachin's Development
        </h1>
      </div>
      <div className="flex flex-row gap-4">
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
    </nav>
  );
};

export default Navbar;
