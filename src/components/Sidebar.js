import React from "react";
import { Home, User, Settings, LogOut, Briefcase, MessageCircle } from "lucide-react";
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
        ? "bg-[#4CAF50] text-white" // ✅ Green active
        : "text-gray-700 hover:bg-gray-100 hover:text-[#4CAF50]" // ✅ Green hover
    }`;

  return (
    <aside
      className={`
        fixed top-0 left-0 h-full w-64 bg-white text-gray-900 flex flex-col z-40
        transform ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        transition-transform duration-300 ease-in-out 
        md:translate-x-0 md:static md:flex
      `}
    >
      {/* Logo / Title */}
      <div className="p-6 border-b border-gray-200 gap-2 flex flex-row items-start">
        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#4CAF50]">
          <img
            src="/profile.jpg" // replace with dynamic user image
            alt="User Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col">
           <h2 className="mt-3 text-lg font-semibold text-gray-800">John Doe</h2>
        <p className="text-sm text-gray-500">Software Engineer</p>{" "}

        </div>
       
        {/* optional role */}
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
            onClick={() => handleNavigate("/easy-apply")}
            className={navItemStyle("/easy-apply")}
          >
            <MessageCircle size={20} /> Chat
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
        className="p-4 border-t border-gray-200 cursor-pointer flex items-center gap-2 text-gray-700 hover:text-white hover:bg-[#4CAF50] transition"
        onClick={() => handleNavigate("/")}
      >
        <LogOut size={20} />
        Logout
      </div>
    </aside>
  );
};

export default Sidebar;
