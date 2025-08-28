import React from 'react'
import Navbar from '../../components/Navbar'
import NavLayout from '../../layouts/NavLayout';
import PricingTab from '../../Widgets/PricingTab';

const Pricings = () => {
  return (
    <NavLayout>
      <main className="flex flex-col justify-center px-8 md:px-12 py-8">
        <div className="flex flex-col text-center ">
          <h1 className="text-4xl text-[#4CAF50] font-bold mb-4">
            Your Dream is priceless?
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            But we are budget friendly!!
          </p>
        </div>
        <PricingTab />
      </main>
    </NavLayout>
  );
}

export default Pricings
