import React from "react";
import { Home, User, Settings, LogOut } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // navigation handler
  const handleNavigate = (path) => {
    navigate(path);
    setIsOpen(false); // close on mobile after clicking
  };

  // active link style
  const navItemStyle = (path) =>
    `flex items-center gap-2 cursor-pointer p-2 rounded-lg transition ${
      location.pathname === path
        ? "text-blue-400 bg-gray-800" // Active style
        : "hover:text-blue-400"
    }`;

  return (
    <aside
      className={`
        fixed top-0 left-0 h-full w-64 bg-gray-900 text-gray-100 flex flex-col z-40
        transform ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        transition-transform duration-300 ease-in-out 
        md:translate-x-0 md:static md:flex
      `}
    >
      {/* Logo / Title */}
      <div className="p-6 text-2xl font-bold border-b border-gray-700">
        My Dashboard
      </div>

      {/* Nav Items */}
      <nav className="flex-1 p-4">
        <ul className="space-y-4">
          <li
            onClick={() => handleNavigate("/dashboard")}
            className={navItemStyle("/")}
          >
            <Home size={20} /> Home
          </li>
          <li
            onClick={() => handleNavigate("/easy-apply")}
            className={navItemStyle("/easy-apply")}
          >
            <Home size={20} /> Easy Apply
          </li>
          <li
            onClick={() => handleNavigate("/profile")}
            className={navItemStyle("/profile")}
          >
            <User size={20} /> Profile
          </li>
          <li
            onClick={() => handleNavigate("/settings")}
            className={navItemStyle("/settings")}
          >
            <Settings size={20} /> Settings
          </li>
        </ul>
      </nav>

      {/* Logout */}
      <div
        className="p-4 border-t border-gray-700 cursor-pointer hover:text-red-400"
        onClick={() => handleNavigate("/logout")}
      >
        <LogOut size={20} className="inline mr-2" />
        Logout
      </div>
    </aside>
  );
};

export default Sidebar;
