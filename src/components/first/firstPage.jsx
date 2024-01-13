import React from "react";
import Slider from "../slider";
import "react-slideshow-image/dist/styles.css";
import Footer from "../footer";
import FearAndGreed from "./fearAndGreed";
import Bubble from "./bubble";
import tabloPreview from "../assets/tabloPreview.PNG";

function firstPage() {
  return (
    <div>
      <div
        style={{
          maxWidth: "80%",
          margin: "0 auto",
        }}
      >
        <Slider />
        <div className="parts">
          <h3 style={{ textAlign: "right" }}>نبض بازار</h3>
          <div id="marketPulse">
            <table id="marketPulseTable">
              <tbody>
                <tr>
                  <th>ارزش بازار</th>
                  <th>حجم معاملات</th>
                  <th>شاخص کل</th>
                </tr>
                <tr>
                  <td style={{ color: "#00ABF0" }}>125B</td>
                  <td style={{ color: "#00ABF0" }}>5B</td>
                  <td style={{ color: "#00ABF0" }}>1,254,000</td>
                </tr>
                <tr>
                  <th>نمادهای مثبت</th>
                  <th>نمادهای منفی</th>
                  <th>هم وزن</th>
                </tr>
                <tr>
                  <td style={{ color: "green" }}>150</td>
                  <td style={{ color: "red" }}>170</td>
                  <td style={{ color: "#00ABF0" }}>723651</td>
                </tr>
              </tbody>
            </table>
            <FearAndGreed />
          </div>
        </div>
        <hr />

        <div className="servicesInFirstPage">
          <div>
            <h3 style={{ textAlign: "right" }}>پیش‌بینی نمودار سهام</h3>
            <hr />
            <p>
              با استفاده از یادگیری ماشین و الگوریتم‌های هوش مصنوعی روند آیندۀ
              نمودار سهم طی هفته آتی و در مقیاس بلندمدت‌تر یکماهه پیشبینی شده
            </p>
            <button style={{ backgroundColor: "red" }}>
              اطلاعات بیشتر ...
            </button>
          </div>
          <img src={tabloPreview} alt="تصویری از خدمت" />
        </div>

        <div className="parts">
          <h3>حباب سکه</h3>
          <Bubble />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default firstPage;
