import React from "react";
import Slider from "./slider";
import "react-slideshow-image/dist/styles.css";
import First from "./assets/logo.png";
import Second from "./assets/orangeLogo.png";
import Third from "./assets/photo_2022-10-19_23-47-29.jpg";
import Footer from "./footer";
function firstPage() {
  
  return (
    <div>
      <Slider id='slider'/>
      <div className="parts">
        <div>بورس</div>
      </div>
      <Footer />
    </div>
  );
}

export default firstPage;
