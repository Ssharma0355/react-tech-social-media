import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Sidebar from "../components/Sidebar";

const DashboardLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6 overflow-y-auto relative">
        {/* Toggle Button (Mobile only) */}
        <button
          className="md:hidden mb-4 text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
