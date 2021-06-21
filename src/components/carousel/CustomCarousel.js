import React, { useState } from "react";
import { carouselData } from "./carouselData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./carosel.css";

const CustomCarousel = ({}) => {
  const [current, setCurrent] = useState(0);
  const length = carouselData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(carouselData) || carouselData.length <= 0) {
    return null;
  }

  return (
    <section className='slider  mt-4'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {carouselData.map((slide, index) => {
        return (
          <div
            className={
              index === current ? "slide active" : "slide mx-auto d-block mt-2"
            }
            key={index}
          >
            {index === current && (
              <img
                src={slide.image}
                alt='travel image'
                className='image mx-auto d-block mt-2'
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default CustomCarousel;
