import React from "react";
import Slider from "../slider";
import "react-slideshow-image/dist/styles.css";
import Footer from "../footer";
import FearAndGreed from "./fearAndGreed";
import Bubble from "./bubble";
import tabloPreview from "../assets/tabloPreview.PNG";
import predictPreview from "../assets/predictPreview.png";
import fundamentalPreview from "../assets/fundamentalPreview.PNG";
import technicalPreview from "../assets/technicalPreview.jpg";
import { useNavigate } from "react-router-dom";

function FirstPage() {
  const navigate = useNavigate();
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
        {/* ////////////////////////////////////////////// */}
        <div id="athAndBubble">
          <div
            className="servicesInFirstPage"
            style={{
              backgroundImage: "linear-gradient(to right, purple, white)",
            }}
          >
            <div>
              <h3>جدول رایگان ATH</h3>
              <hr />
              <p>
                با ثبت نام رایگان در سایت تمام سهام جامانده بازار را شناسایی
                نمایید و از استراتژی فاصله تا سقف تاریخی محور ماشین‌تریدینگ بهره
                ببرید.
              </p>
              <button
                style={{ backgroundColor: "purple" }}
                onClick={() => navigate("/dashboard")}
              >
                ثبت نام رایگان
              </button>
            </div>
            <img src={predictPreview} alt="تصویری از خدمت" />
          </div>
          <div className="parts">
            <Bubble />
          </div>
        </div>
        <hr />
        {/* ///////////////////////////////////// */}
        <div
          className="servicesInFirstPage"
          style={{
            backgroundImage: "linear-gradient(to right, #e31228, white)",
          }}
        >
          <div>
            <h3>پیش‌بینی نمودار سهام</h3>
            <hr />
            <p>
              با استفاده از یادگیری ماشین و الگوریتم‌های هوش مصنوعی روند آیندۀ
              نمودار سهم طی هفته آتی و در مقیاس بلندمدت‌تر یکماهه پیشبینی شده
            </p>
            <button
              style={{ backgroundColor: "red" }}
              onClick={() => navigate("/predictMore")}
            >
              اطلاعات بیشتر ...
            </button>
          </div>
          <img src={predictPreview} alt="تصویری از خدمت" />
        </div>

        <div
          className="servicesInFirstPage"
          style={{
            backgroundImage: "linear-gradient(to right, #8cc73c, white)",
          }}
        >
          <div>
            <h3>تابلوخوانی تمام نمادهای بازار</h3>
            <hr />
            <p>
              با فیلترنویسی تمام پارامترهای تاثیرگذار در در بحث تابلوخوانی مورد
              نظر قرار گرفته اند تا در کسری از ثانیه تحلیل تابلوی تمام نمادهای
              بازار انجام شود و از آنجا که همۀ کاربران از میزان اهمیت هر کدام از
              سیگنال‌های تابلو آگاه نیستند، سهام بازار از این منظر نمره‌دهی و
              رتبه‌بندی شده‌اند.
            </p>
            <button
              style={{ backgroundColor: "#8cc73c" }}
              onClick={() => navigate("/boardMore")}
            >
              اطلاعات بیشتر ...
            </button>
          </div>
          <img src={tabloPreview} alt="تصویری از خدمت" />
        </div>

        <div
          className="servicesInFirstPage"
          style={{
            backgroundImage: "linear-gradient(to right, black, white)",
          }}
        >
          <div>
            <h3>تحلیل گزارشات و اخبار بنیادی سهام بازار</h3>
            <hr />
            <p>
              اخبار و گزارشات ماهانه و فصلی شرکت‌های مختلف بورسی با توجه به
              گذشته نماد و سود قابل‌بینی بررسی شده‌اند و خوبی یا بدی گزارش در یک
              نگاه نشان داده شده‌اند.
            </p>
            <button
              style={{ backgroundColor: "black" }}
              onClick={() => navigate("/fundamentalMore")}
            >
              اطلاعات بیشتر ...
            </button>
          </div>
          <img src={fundamentalPreview} alt="تصویری از خدمت" />
        </div>

        <div
          className="servicesInFirstPage"
          style={{
            backgroundImage: "linear-gradient(to right, #334456, white)",
          }}
        >
          <div>
            <h3>تحلیل تکنیکال بازار</h3>
            <hr />
            <p>
              با استفاده از الگوریتم‌های هوش مصنوعی اندیکاتورها و نقاط حساس
              نمودار پیدا شوند و نظر به شکل نمودار سهم مناسب بودن سهم از نظر
              تکنیکال بررسی شده اند. از آنجا که اهمیت هر کدام از سیگنال های
              تکنیکالی ممکن است برای همه کاربران میسر نباشد و امکان بررسی همه
              سهام بازار برای تحلیل گران میسر نیست سعی شده با وزن دهی به هر کدام
              از پارامترها نمادهای بازار رتبه‌بندی شوند.
            </p>
            <button
              style={{ backgroundColor: "#334456" }}
              onClick={() => navigate("/technicalMore")}
            >
              اطلاعات بیشتر ...
            </button>
          </div>
          <img src={technicalPreview} alt="تصویری از خدمت" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FirstPage;
