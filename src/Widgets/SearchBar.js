import React, { useState } from 'react'

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="flex flex-col">
      <input
        type="text"
        placeholder="Search candidate"
        className="p-2 rounded-[8px]"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

export default SearchBar
