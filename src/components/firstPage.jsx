import React from "react";
import Slider from "./slider";
import "react-slideshow-image/dist/styles.css";
import Footer from "./footer";
import FearAndGreed from "./fearAndGreed";
import Bubble from "./bubble";

function firstPage() {
  return (
    <div>
      <div
        style={{         
          maxWidth: "80%",
          margin: '0 auto'
        }}
      >
        <Slider />
        <div className="parts">
          <h3>شاخص ترس و طمع بازار بورس</h3>
          <FearAndGreed/>
        </div>
        <div className="parts">
          <h3>حباب سکه</h3>
          <Bubble/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default firstPage;
