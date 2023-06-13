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
import alireza from "./assets/team/alireza.jpg";
import mehdi from "./assets/team/mehdi.jpg";
import reza from "./assets/team/reza.jpg";
import adel from "./assets/team/adel.jpg";

function AboutUs() {
  const cards = [
    {
      id: 1,
      email: "vmoghtadaiee@gmail.com",
      name: "وحیده مقتدایی",
      avatar: vahide,
    },
    {
      id: 2,
      email: "khodadi_j@yahoo.com",
      name: "حسین خدادی",
      avatar: hossein,
    },
    {
      id: 3,
      email: "mo.movahedinia@gmail.com",
      name: "محمد موحدی نیا",
      avatar: mmd,
    },
    {
      id: 4,
      email: "eve.holt@reqres.in",
      name: "علی شریفی",
      avatar: alireza,
    },
    {
      id: 5,
      email: "charles.morris@reqres.in",
      name: "مهدی مسلمی",
      avatar: mehdi,
    },
    {
      id: 6,
      email: "reza.kalhor19@gmail.com",
      name: "رضا کلهری",
      avatar: reza,
    },
    {
      id: 7,
      email: "charles.morris@reqres.in",
      name: "عادل ریوندی",
      avatar: adel,
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
            همین الان نصب کن
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
            <p><b>هوش مصنوعی</b><br /> تحلیل بازار با دانش هوش مصنوعی</p>
          </div>
          <div className="services">
            <img src={board} alt="service2" className="serviceImg" />
            <p><b>تابلوخوانی</b><br /> تحلیل بازار با تابلوخوانی</p>
          </div>
          <div className="services">
            <img src={technical1} alt="service3" className="serviceImg" />
            <p><b>تحلیل تکنیکال</b><br /> تحلیل بازار با تحلیل تکنیکال</p>
          </div>
          <div className="services">
            <img src={base} alt="service3" className="serviceImg" />
            <p><b>تحلیل بنیادی</b><br /> تحلیل بازار با تحلیل بنیادی</p>
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
                <p>{unit.name}</p>
                <p>{unit.email}</p>
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
              آدرس: <br /> تهران، ولنجک، بلوار دانشجو
            </p>
            <p>
              تلفن: <br /> 0218574693 <br />
              0218574683
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
