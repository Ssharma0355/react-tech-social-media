import React, { useState } from "react";
import { Search } from "lucide-react"; // optional: nice search icon

const SearchBar = ({ placeholder = "Search..." }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex items-center w-full max-w-md bg-white border border-gray-300 rounded-[8px] shadow-sm px-3 py-2 focus-within:ring-2 focus-within:ring-[#4CAF50] transition">
      <Search className="text-gray-400 mr-2 h-5 w-5" />
      <input
        type="text"
        placeholder={placeholder}
        className="flex-1 outline-none text-gray-700 placeholder-gray-400"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
