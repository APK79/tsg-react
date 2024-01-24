import React, { useContext } from "react";
import Slide from "./Slide.js";
import { SliderContext } from "../Slider.js";
import { useResize } from "./resize.js";

import "../style.css";

export default function SlidesList() {
  const { slideNumber, items, slides } = useContext(SliderContext);
  const { isScreenLg } = useResize();
  const tranformNumber = ( isScreenLg ) ? (100 / slides) : 100;
  return (
    <div
      className="slide-list"
      style={{ transform: `translateX(-${slideNumber * tranformNumber}%)` }}
    >
      {items.map((slide, index) => (
        <Slide key={index} data={slide} />
      ))}

    </div>
  );
} 