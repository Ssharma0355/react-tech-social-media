import React from "react";
import { Home, User, Settings, LogOut, Briefcase } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // navigation handler
  const handleNavigate = (path) => {
    navigate(path);
    setIsOpen(false); // close sidebar on mobile after click
  };

  // active link style
  const navItemStyle = (path) =>
    `flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer transition-colors ${
      location.pathname === path
        ? "bg-blue-500 text-white"
        : "text-gray-300 hover:bg-gray-800 hover:text-blue-400"
    }`;

  return (
    <aside
      className={`
        fixed top-0 left-0 h-full w-64 bg-black text-gray-100 flex flex-col z-40
        transform ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        transition-transform duration-300 ease-in-out 
        md:translate-x-0 md:static md:flex
      `}
    >
      {/* Logo / Title */}
      <div className="p-6 text-2xl font-bold border-b border-gray-800 text-center">
        My Dashboard
      </div>

      {/* Nav Items */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          <li
            onClick={() => handleNavigate("/dashboard")}
            className={navItemStyle("/dashboard")}
          >
            <Home size={20} /> Home
          </li>
          <li
            onClick={() => handleNavigate("/easy-apply")}
            className={navItemStyle("/easy-apply")}
          >
            <Briefcase size={20} /> Easy Apply
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
        className="p-4 border-t border-gray-800 cursor-pointer flex items-center gap-2 text-gray-300 hover:text-red-400 hover:bg-gray-900 transition"
        onClick={() => handleNavigate("/")}
      >
        <LogOut size={20} />
        Logout
      </div>
    </aside>
  );
};

export default Sidebar;
