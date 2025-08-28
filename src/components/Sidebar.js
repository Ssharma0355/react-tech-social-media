import React from "react";
import { Home, User, Settings, LogOut } from "lucide-react";

const Sidebar = ({ isOpen, setIsOpen }) => {
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
            className="flex items-center gap-2 cursor-pointer hover:text-blue-400"
            onClick={() => setIsOpen(false)} // auto-close on mobile
          >
            <Home size={20} /> Home
          </li>
          <li
            className="flex items-center gap-2 cursor-pointer hover:text-blue-400"
            onClick={() => setIsOpen(false)}
          >
            <User size={20} /> Profile
          </li>
          <li
            className="flex items-center gap-2 cursor-pointer hover:text-blue-400"
            onClick={() => setIsOpen(false)}
          >
            <Settings size={20} /> Settings
          </li>
        </ul>
      </nav>

      {/* Logout */}
      <div
        className="p-4 border-t border-gray-700 cursor-pointer hover:text-red-400"
        onClick={() => setIsOpen(false)}
      >
        <LogOut size={20} className="inline mr-2" />
        Logout
      </div>
    </aside>
  );
};

export default Sidebar;
