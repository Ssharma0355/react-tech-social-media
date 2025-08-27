import React from 'react'
import Navbar from '../../components/Navbar'
import NavLayout from '../../layouts/NavLayout';
import PricingTab from '../../Widgets/PricingTab';

const Pricings = () => {
  return (
    <NavLayout>
      <main className="flex flex-col justify-center px-12 py-8">
        <div className="flex flex-col text-center ">
          <h1 className="text-[#4CAF50] text-[32px]">Your Dream is priceless?</h1>
          <h2 className='text-[24px]'>But we are budget friendly!!</h2>
        </div>
        <PricingTab />
      </main>
    </NavLayout>
  );
}

export default Pricings
