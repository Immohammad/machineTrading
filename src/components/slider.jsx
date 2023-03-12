import React from "react";
import { Zoom } from "react-slideshow-image";
import image1 from "./assets/slider/predict.webp";
import image2 from "./assets/slider/coin.jpg";
import image3 from "./assets/slider/gas.jpg";
import image4 from "./assets/slider/agreement.jpg";

const images = [image1, image2, image3, image4];

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 1000,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
};

export default function Slide() {
    return (
        <div className="slide-container">
          <Zoom {...zoomOutProperties}>
            {images.map((each, index) => (
              <img key={index} style={{ width: "100%", maxHeight:'50vh' }} src={each} />
            ))}
          </Zoom>
        </div>
      );
}
