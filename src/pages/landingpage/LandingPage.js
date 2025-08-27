import React from "react";
import Navbar from "../../components/Navbar";
import NavLayout from "../../layouts/NavLayout";
import CaruselSection from "./Section1/CaruselSection";
import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";

const LandingPage = () => {
  return (
    <NavLayout>
      <main className="flex flex-col w-full h-full px-4 sm:px-6 md:px-8 py-6 md:py-8 overflow-x-hidden">
        {/* Carousel / Hero Section */}
        <Section1 />

        {/* Other Sections */}
        <Section2 />
      </main>
    </NavLayout>
  );
};

export default LandingPage;
