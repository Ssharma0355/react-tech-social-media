import React from "react";
import { useNavigate } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center text-gray-100">
      {/* 404 Text */}
      <h1 className="text-9xl font-extrabold text-blue-500 tracking-widest">
        404
      </h1>
      <p className="text-2xl md:text-3xl font-light mt-6">
        Oops! Page not found
      </p>
      <p className="text-gray-400 mt-2 text-center max-w-md">
        The page you’re looking for doesn’t exist or has been under Development! phase sorry!!! for incontinence.  
        Check the URL or go back to the homepage.
      </p>

      {/* Back Home Button */}
      <button
        onClick={() => navigate("/")}
        className="mt-8 flex items-center gap-2 px-6 py-3 bg-blue-500 text-white text-lg rounded-lg shadow-md hover:bg-blue-600 transition"
      >
        <Home size={20} />
        Back to Home
      </button>
    </div>
  );
};

export default NotFound;
