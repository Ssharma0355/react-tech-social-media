import React from "react";

const SwitchButton = ({ userType, setUserType }) => {
  return (
    <div
      onClick={() => setUserType(!userType)}
      className="relative w-40 h-8 flex items-center rounded-full cursor-pointer bg-gray-300 transition"
    >
      {/* Sliding Background */}
      <div
        className={`absolute top-0 left-0 h-8 w-1/2 rounded-full bg-[#4CAF50] transition-transform duration-300 ${
          userType ? "translate-x-0" : "translate-x-full"
        }`}
      />

      {/* Options */}
      <div className="relative z-10 flex w-full text-sm font-medium">
        <div
          className={`w-1/2 text-center transition ${
            userType ? "text-white" : "text-gray-600"
          }`}
        >
          Jobs
        </div>
        <div
          className={`w-1/2 text-center transition font-medium ${
            !userType ? "text-white" : "text-gray-600"
          }`}
        >
          Candidates
        </div>
      </div>
    </div>
  );
};

export default SwitchButton;
