import React, { useEffect, useState } from "react";
import axios from "axios";

import ai from "./assets/services/ai.jpg";
import base from "./assets/services/base.jpg";
import technical1 from "./assets/services/technical.jpg";
import board from "./assets/services/board.jpg";
import ai1 from "./assets/services/aides.jpg";

import vahide from "./assets/team/vahide.jpg";
import hossein from "./assets/team/hossein.jpg";
import mmd from "./assets/team/mmd.jpg";
import mehdi from "./assets/team/mehdi.jpg";
import reza from "./assets/team/reza.jpg";
import adel from "./assets/team/adel.jpg";
import afroozi from "./assets/team/afroozi.jpg";
import farahani from "./assets/team/farahani.jpg";
import shideh from "./assets/team/shideh.jpg";

function AboutUs() {
  const cards = [
    {
      id: 1,
      position:
        "عضو هیات علمی دانشگاه شهید بهشتی و ناظر بر الگوریتم‌های هوش مصنوعی",
      name: "دکتر هادی فراهانی",
      avatar: farahani,
    },
    {
      id: 2,
      position: "فارغ‌التحصیل علوم کامپیوتر و مدل‌یاب",
      name: "حسین خدادی",
      avatar: hossein,
    },
    {
      id: 3,
      position: "فارغ‌التحصیل مهندسی کامپیوتر و برنامه‌نویس سایت",
      name: "محمد موحدی نیا",
      avatar: mmd,
    },
    {
      id: 4,
      position: "فارغ‌التحصیل علوم کامپیوتر و برنامه‌نویس هوش مصنوعی",
      name: "علیرضا افروزی",
      avatar: afroozi,
    },
    {
      id: 5,
      position: "فارغ‌التحصیل مهندسی کامپیوتر و برنامه‌نویس سایت",
      name: "رضا کلهری",
      avatar: reza,
    },

    {
      id: 6,
      position: "فارغ‌التحصیل مدیریت مالی و تحلیل‌گر بازار سرمایه",
      name: "مهدی مسلمی",
      avatar: mehdi,
    },
    {
      id: 7,
      position: "فارغ‌التحصیل مدیریت مالی و تحلیل‌گر بازار سرمایه",
      name: "عادل ریوندی",
      avatar: adel,
    },
    {
      id: 8,
      position: "فارغ‌التحصیل هوش مصنوعی و برنامه‌نویس هوش مصنوعی",
      name: "شیده شریف بختیار",
      avatar: shideh,
    },
  ];

  return (
    <div>
      <div id="aboutImgContainer">
        <img src={ai} alt="truck" id="aboutImg" />
        <h1 id="aboutText">
          بسپرس به هوش مصنوعی <br />{" "}
          <span style={{ fontWeight: "normal", fontSize: "20px" }}>
            {" "}
            همین الان ثبت نام کن
          </span>
        </h1>
      </div>
      <div id="aboutData">
        {/*kolli */}
        <h2>خدمات ما</h2>
        <hr />
        <div className="serviceContain">
          <div className="services">
            <img src={ai1} alt="service1" className="serviceImg" />
            <p>
              <b>هوش مصنوعی</b>
              <br /> پیش‌بینی روند آیندۀ نمودار سهم توسط هوش مصنوعی و یادگیری
              ماشین
            </p>
          </div>
          <div className="services">
            <img src={board} alt="service2" className="serviceImg" />
            <p>
              <b>تابلوخوانی</b>
              <br /> امتیازدهی سهام بازار سرمایه بر اساس پرکاربردترین پارامترهای
              تابلوخوانی توسط هوش مصنوعی
            </p>
          </div>
          <div className="services">
            <img src={technical1} alt="service3" className="serviceImg" />
            <p>
              <b>تحلیل تکنیکال</b>
              <br /> امتیازدهی سهام بازار سرمایه بر اساس پرکاربردترین شاخصه‌های
              تحلیل تکنیکال با الگوریتم{" "}
            </p>
          </div>
          <div className="services">
            <img src={base} alt="service3" className="serviceImg" />
            <p>
              <b>تحلیل بنیادی</b>
              <br /> امتیازدهی سهام بازار سرمایه بر اساس پرکاربردترین شاخصه‌های
              تحلیل بنیادی با هوش مصنوعی + سامانۀ کدال پلاس
            </p>
          </div>
        </div>
        <h2>تیم ما</h2>
        <hr />
        <div className="row">
          {cards ? (
            cards.map((unit) => (
              <div className="col-xs-12 col-sm-6 col-md-4 col-xl-3">
                <img
                  src={unit.avatar}
                  style={{
                    height: "200px",
                    width: "200px",
                    borderRadius: "10px",
                    boxShadow: "5px 5px 5px #ccc",
                  }}
                />
                <div style={{ margin: "10px" }}>
                  <p style={{ margin: "0px" , color:'#0077b6', fontWeight:'bold'}}>{unit.name}</p>
                  <p>{unit.position}</p>
                </div>
              </div>
            ))
          ) : (
            <div>درخواستی یافت نشد</div>
          )}
        </div>
        <h2>ارتباط با ما</h2>
        <hr />
        <div className="row" style={{ margin: "20pt auto" }}>
          <div className="col-sm-12 col-md-6" style={{ textAlign: "right" }}>
            <p>
              آدرس: <br /> تهران
            </p>
            <p>
              تلفن: <br /> 09195937200 <br />
              09115913969
            </p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d1026.6748508666537!2d51.3938164757033!3d35.79895135355408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m3!3m2!1d35.7986007!2d51.393744999999996!4m0!5e0!3m2!1sen!2s!4v1678647948152!5m2!1sen!2s"
            className="col-sm-12 col-md-6"
            style={{ border: "0", height: "400" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
