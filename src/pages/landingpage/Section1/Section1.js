import React from "react";
import CaruselSection from "./CaruselSection";
import { useNavigate } from "react-router-dom";

const Section1 = () => {
  const navigate = useNavigate();

  const toSignuppage = () => {
    navigate("/signup");
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 overflow-hidden">
      {/* Left Content */}
      <div className="flex flex-col w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-4">
          What are we building?
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl text-[#4CAF50] font-semibold mb-6">
          A platform to simplify hiring, networking & collaboration →
        </h2>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
          No more long queues, endless form filling, or waiting for callbacks.
          Our platform makes applying as simple as a swipe — like Tinder, but
          for work. Showcase your skills, get matched with your next cofounder,
          land jobs faster, and collaborate seamlessly with people from your
          domain.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button
            onClick={toSignuppage}
            className="px-6 py-3 bg-[#4CAF50] text-white rounded-xl shadow hover:bg-[#3eb442] transition"
          >
            Get Started Free
          </button>
          <button className="px-6 py-3 border border-[#4CAF50] text-[#4CAF50] rounded-xl hover:bg-[#d7dad7] transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Carousel */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="w-full max-w-sm sm:max-w-md md:max-w-full">
          <CaruselSection />
        </div>
      </div>
    </div>
  );
};

export default Section1;
