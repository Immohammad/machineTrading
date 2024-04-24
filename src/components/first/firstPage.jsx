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
import athPreview from "../assets/athPreview.PNG";
import { useNavigate } from "react-router-dom";
import MarketTransactions from "./marketTransactions";

function FirstPage() {
  const navigate = useNavigate();
  return (
    <div>
      <Slider />
      <div
        style={{
          maxWidth: "80%",
          margin: "0 auto",
        }}
      >
        <div className="parts">
          <h3 style={{ textAlign: "center", margin: "20px" }}>نبض بازار</h3>
          <hr className="half" />
          <div id="marketPulse">
            <MarketTransactions />
            <FearAndGreed />
          </div>
        </div>
        {/* ////////////////////////////////////////////// */}
        <h3 style={{ textAlign: "center", margin: "20px" }}>خدمات ما</h3>
        <hr className="half" />
        <div id="athAndBubble">
          <div
            className="servicesInFirstPage"
            style={{
              backgroundImage: "linear-gradient(to right, purple, white)",
              gridTemplateColumns: "1fr 2fr",
            }}
          >
            <div>
              <h3>جدول رایگان ATH</h3>
              <hr />
              <p>
                با ثبت نام رایگان در سایت تمام سهام جامانده بازار را شناسایی
                نمایید و از استراتژی فاصله تا ATH محور ماشین‌تریدینگ بهره ببرید.
              </p>
              <button
                style={{ backgroundColor: "purple" }}
                onClick={() => navigate("/dashboard")}
              >
                ثبت نام رایگان
              </button>
            </div>
            <img src={athPreview} alt="تصویری از خدمت" />
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
            backgroundImage: "linear-gradient(to right, #334456, white)",
          }}
        >
          <div>
            <h3>پیش‌بینی نمودار سهام</h3>
            <hr />
            <p>
              با استفاده از یادگیری ماشین و الگوریتم‌های خاص هوش مصنوعی، روند
              تغییر قیمت سهام تا هفتۀ و ماه آتی پیش‌بینی سده است و احتمال وقوع
              هر پیش‌بینی نیز بیان شده است. علاوه بر این دو بستۀ کوتاه‌مدت و
              میان‌مدت، در این قسمت بسته‌ای برای نوسانگیری نیز در نظر گرفته شده
              است که سهام مناسب نوسانگیری طی هفتۀ آتی برای کاربر مشخص می‌شوند.
            </p>
            <button
              style={{ backgroundColor: "#334456" }}
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
            backgroundImage: "linear-gradient(to right, #e31228, white)",
          }}
        >
          <div>
            <h3>تابلوخوانی تمام نمادهای بازار</h3>
            <hr />
            <p>
              با استفاده از الگوریتم‌ها تمام پارامترهای تاثیرگذار در تابلوخوانی
              بررسی می‌شوند تا روزانه و در کسری از ثانیه تحلیل تابلوی تمام
              نمادهای بازار انجام شود و از آنجا که همۀ کاربران از میزان اهمیت هر
              کدام از سیگنال‌های تابلو آگاه نیستند، سهام بازار از این منظر
              امتیازدهی و رتبه‌بندی شده‌اند.
            </p>
            <button
              style={{ backgroundColor: "#e31228" }}
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
            backgroundImage: "linear-gradient(to right, #00755e, white)",
          }}
        >
          <div>
            <h3>تحلیل گزارشات و اخبار بنیادی سهام بازار</h3>
            <hr />
            <p>
              هوش مصنوعی انواع گزارش‌های ماهانه، فصلی، سود خالص سهام و ...
              شرکت‌های مختلف بورسی را با توجه به گزارش‌های قبلی نماد و سود
              قابل‌پیشبینی بررسی می‌کند و مثبت یا منفی‌بودن گزارش و برجسته‌ترین
              نکات آن در یک نگاه به نمایش درآمده‌اند.
            </p>
            <button
              style={{ backgroundColor: "#00755e" }}
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
            backgroundImage: "linear-gradient(to right, gray, white)",
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
              style={{ backgroundColor: "black" }}
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
