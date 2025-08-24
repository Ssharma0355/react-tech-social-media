import React from 'react'
import CaruselSection from './CaruselSection';

const Section1 = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-8 w-full p-5">
      <div className="flex flex-col w-full">
        <h1 className="text-[4rem] align-start">What I am trying to do?</h1>
        <h1 className="text-[2rem] align-start">
          I am trying to make a platform &rarr;
        </h1>
      </div>
      <CaruselSection />
    </div>
  );
}

export default Section1
