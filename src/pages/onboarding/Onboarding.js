import React from "react";
import { useNavigate } from "react-router-dom";

const Onboarding = () => {
  const navigate = useNavigate();

  const forCandidate = () => {
    navigate("/hiring-onboarding");
  };

  const forConnection = () => {
    navigate("/candidate-onboarding");
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 bg-gray-50">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-lg flex flex-col items-center gap-6">
        <h1 className="text-2xl font-semibold text-center text-gray-800">
          Step 1: Onboarding
        </h1>
        <p className="text-gray-600 text-center">
          Tell us what you’re looking for so we can personalize your experience.
        </p>

        <div className="flex flex-col gap-4 w-full">
          <button
            onClick={forCandidate}
            className="w-full py-3 px-4 rounded-lg border border-gray-300 text-gray-800 font-medium hover:bg-[#4CAF50] hover:text-white transition"
          >
            👔 Looking for Hiring?
          </button>

          <button
            onClick={forConnection}
            className="w-full py-3 px-4 rounded-lg border border-gray-300 text-gray-800 font-medium hover:bg-[#4CAF50] hover:text-white transition"
          >
            💼 Looking for Connection & Job?
          </button>
        </div>
      </div>
    </main>
  );
};

export default Onboarding;
