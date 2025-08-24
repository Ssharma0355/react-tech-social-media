import React, { useState, useEffect } from "react";
import { CaruselData } from "../../../assets/JSONs/Carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CaruselSection = () => {
  // Flatten categories into one array
  const items = [
    ...CaruselData[0].connection,
    ...CaruselData[0].hiring,
    ...CaruselData[0].collaborate,
    ...CaruselData[0].cofound,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Carousel Wrapper */}
      <div className="relative w-[40rem] h-[28rem] overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="min-w-full h-full flex flex-col items-center justify-center dark:bg-gray-800 rounded-2xl p-4"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-[30rem] h-[20rem] object-cover rounded-xl mb-4"
              />
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {item.title}
              </h2>
              {item.desc && (
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center">
                  {item.desc}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaruselSection;
