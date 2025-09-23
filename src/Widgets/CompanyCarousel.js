"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CompanyCarousel({ companies }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", skipSnaps: false },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  return (
    <section className="w-full  py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#4CAF50]">
          Popular Companies Hiring Now
        </h1>
        <p className="text-gray-600 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
          Explore opportunities with leading companies across industries. Be
          part of innovation, creativity, and growth.
        </p>
      </div>

      <div className="relative">
        {/* Carousel viewport */}
        {/* Carousel viewport */}

        <div
          className="overflow-hidden rounded-lg p-5 bg-[#F5F7FA]/90 backdrop-blur-sm shadow-md"
          ref={emblaRef}
        >
          <div className="flex gap-6 p-2">
            {companies.map((company, index) => (
              <div
                key={index}
                className="
    flex-[0_0_90%] 
    sm:flex-[0_0_60%] 
    md:flex-[0_0_45%] 
    lg:flex-[0_0_30%] 
    xl:flex-[0_0_22%]
    border border-gray-100 
    rounded-2xl shadow-lg hover:shadow-2xl 
    transition-all duration-300 p-8 
    flex flex-col items-center justify-between text-center
    bg-white/70 backdrop-blur-sm
  "
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 object-contain mb-4 transition-transform duration-300 hover:scale-110"
                />
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                  {company.name}
                </h2>
                <p className="text-gray-500 text-sm sm:text-base mt-3 leading-relaxed">
                  {company.description}
                </p>
                <button className="mt-6 px-5 py-2 bg-[#4CAF50] text-white rounded-xl shadow-md hover:bg-[#43A047] transition-all text-sm sm:text-base">
                  View Jobs
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={scrollPrev}
          className="absolute top-1/2 -left-4 sm:-left-6 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 sm:p-3 hover:bg-gray-100 hover:scale-105 transition"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute top-1/2 -right-4 sm:-right-6 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 sm:p-3 hover:bg-gray-100 hover:scale-105 transition"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
        </button>
      </div>
    </section>
  );
}
