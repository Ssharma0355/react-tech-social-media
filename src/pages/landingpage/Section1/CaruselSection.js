import React from "react";
import { CaruselData } from "../../../assets/JSONs/Carousel";

const CaruselSection = () => {
  console.log(CaruselData); // ✅ Correct logging

  return (
    <div className="flex flex-col gap-4 rounded-[8px] justify-center align-center bg-[#4CAF50] px-12 py-4">
      {CaruselData.map((carusel, index) => (
        <div key={index}>
          {carusel.connection.map((item, idx) => (
            <div className="flex flex-col align-center rounded-[12px] w-[10rem] h-[10rem]">
              <img className="rounded-[12px]" src={item.img} alt={item.title} />
              <h1 key={idx}>{item.title}</h1>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CaruselSection;
