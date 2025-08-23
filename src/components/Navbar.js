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
      } flex flex-row justify-between p-4 items-center`}
    >
      <div className="flex">
        <h1 className="p-2 dark:text-darkText text-[#262626] font-medium ">
          Sachin's Development
        </h1>
      </div>
      <div className="flex flex-row gap-4">
        <button className="bg-[#262626] p-2 dark:text-darkText text-[#f6f6f6] font-medium rounded-xl hover:bg-[#333]">
          <Link to={"/signup"}>SignUp</Link>
        </button>

        <button className="bg-[#262626] p-2 dark:text-darkText text-[#f6f6f6] font-medium rounded-xl hover:bg-[#333]">
          <Link to={"/signup"}>Login</Link>
        </button>
        <ThemeToggle darkMode={darkMode} setDarkMode={toggleDarkMode} />
      </div>
    </nav>
  );
};

export default Navbar;
