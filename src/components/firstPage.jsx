import React from "react";
import Slider from "./slider";
import "react-slideshow-image/dist/styles.css";
import Footer from "./footer";

function firstPage() {
  return (
    <div>
      <div
        style={{
          // maxWidth: "80%",
          // margin: "0",
          // top: "0%",
          // left: "50%",
          // right: "50%",
        }}
      >
        <Slider />
        <div className="parts">
          <div style={{background:'orange', color:'white'}}>بورس</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default firstPage;
