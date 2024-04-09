import React from "react";
import { Zoom } from "react-slideshow-image";
import image1 from "./assets/slider/predict.webp";
import image2 from "./assets/slider/coin.jpg";
import image3 from "./assets/slider/khodro.jpg";
import image4 from "./assets/slider/saba.jpg";
import image5 from "./assets/slider/sandoogh.PNG";
import image6 from "./assets/slider/eslami.jpg";

const images = [image1, image2, image3, image4, image5, image6];

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 1000,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true,
};

export default function Slide() {
  return (
    <div className="slide-container" id="firstPageSlider">
      <Zoom {...zoomOutProperties}>
        {images.map((each, index) => (
          <img
            key={index}
            style={{
              width: "80%",
              maxHeight: "50vh",
              borderRadius: "20px",
              // margin: "10px",
            }}
            src={each}
          />
        ))}
      </Zoom>
    </div>
  );
}
