import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
import Dots from "./Dots";
import Arrows from "./Arrows";
import sliderImage from "./sliderImage";
import "./slider.css";

const len = sliderImage.length - 1;

function Slider(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const showMyArrow = () => {
    setShowArrow(!showArrow);
  };

  return (
    <div
      className='slider-container'
      onMouseEnter={showMyArrow}
      onMouseLeave={showMyArrow}
    >
      <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />
      {showArrow ? (
        <Arrows
          prevSlide={() =>
            setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
          }
          nextSlide={() =>
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
          }
        />
      ) : null}

      <Dots
        activeIndex={activeIndex}
        sliderImage={sliderImage}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  );
}

export default Slider;
