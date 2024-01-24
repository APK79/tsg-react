import React from "react";
import SlideTitle from "./SlideTitle.js";
import SlideImage from "./SlideImage";

import "./../style.css";

export default function Slide({ data: { url, title } }) {
  return (
    <div className="slide">
      <SlideImage src={url} alt={title} />
      <SlideTitle title={title} />
    </div>
  );
}