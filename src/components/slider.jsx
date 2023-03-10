import React from "react";
import { Zoom } from "react-slideshow-image";
import image1 from "./assets/186728_101.jpg";
import image2 from "./assets/186729_621.jpg";
import image3 from "./assets/186732_748.jpg";
import image4 from "./assets/truck.jpg";

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
