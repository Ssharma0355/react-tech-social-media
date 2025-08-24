import React from "react";
import { CaruselData } from "../../assets/JSONs/Carousel";

const CaruselSection = () => {
  console.log(CaruselData); // ✅ Correct logging

  return (
    <div>
      {CaruselData.map((carusel, index) => (
        <div key={index}>
          {carusel.connection.map((item, idx) => (
            <div>
              <img src={item.img} alt={item.title} />
              <h1 key={idx}>{item.title}</h1>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CaruselSection;
