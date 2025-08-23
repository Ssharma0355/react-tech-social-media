import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "../Widgets/ThemeToggle";
import useThemeStore from "../store/themeStore";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useThemeStore();

  return (
    <nav
      className={`${
        darkMode ? "bg-darkBg" : "bg-lightBg"
      } flex flex-row justify-between p-4`}
    >
      <div className="flex">
        <h1>Logo</h1>
      </div>
      <div className="flex flex-row gap-2">
        <Link to={"/signup"}>SignUp</Link>
      </div>
      <div>
        <ThemeToggle darkMode={darkMode} setDarkMode={toggleDarkMode} />
      </div>
    </nav>
  );
};

export default Navbar;
