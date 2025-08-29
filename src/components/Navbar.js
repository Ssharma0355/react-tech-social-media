import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Hamburger & cross icons

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Navigation helpers
  const handleNavigate = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  // Active styles
  const navButtonStyle = (path) =>
    `block w-full text-left p-2 font-medium rounded-[8px] transition ${
      location.pathname === path
        ? "text-[#4CAF50]" // active
        : "text-[#4D4D4D] hover:text-[#4CAF50]"
    }`;

  return (
    <nav className="bg-white flex items-center justify-between px-4 py-3 sticky top-0 z-50 shadow-md">
      {/* Logo */}
      <div className="flex">
        <h1 className="p-2 text-[#4CAF50] font-bold text-lg md:text-xl">
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
          className="p-2 bg-[#4CAF50] text-white whitespace-nowrap w-full font-medium rounded-[8px] hover:bg-[#43a047] transition"
        >
          Register now &rarr;
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-[60px] left-0 w-full flex flex-col gap-2 p-4 shadow-lg md:hidden bg-white">
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
            className="p-2 bg-[#4CAF50] text-white font-medium rounded-[8px] hover:bg-[#43a047] transition"
          >
            Register Now &rarr;
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
