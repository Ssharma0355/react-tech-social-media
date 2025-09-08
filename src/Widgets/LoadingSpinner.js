// src/Widgets/LoadingSpinner.jsx
import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-full py-10">
      <div
        className="w-12 h-12 border-4 border-t-4 border-t-[#4CAF50] border-gray-300 rounded-full animate-spin"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
