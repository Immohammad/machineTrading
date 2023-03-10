import React, { useEffect, useState } from "react";
import axios from "axios";

import truck from "./assets/truck.jpg";
import service1 from "./assets/186728_101.jpg";
import service2 from "./assets/186729_621.jpg";
import service3 from "./assets/186732_748.jpg";

function AboutUs() {
  const [cards, setCards] = useState([]);

  //in this useefect we did nothing; just i gave some fake people for
  //our team part of page.
  useEffect(() => {
    axios
      .get("https://reqres.in/api/users")
      .then((response) => {
        setCards(response.data.data);
      })
      .catch((error) => {
        if (error.response.status == 404) setCards([]);
      });
  }, []);

  return (
    <div>
      <div id="aboutImgContainer">
        <img src={truck} alt="truck" id="aboutImg" />
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
            <img src={service1} alt="service1" className="serviceImg" />
            <p>
              لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) متنی ساختگی و
              بدون معنی است که برای امتحان فونت و یا پر کردن فضا در یک طراحی
              گرافیکی و یا صنعت چاپ استفاده میشود.
            </p>
          </div>
          <div className="services">
            <img src={service2} alt="service2" className="serviceImg" />
            <p>
              طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند
              که محتوای اصلی صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار
              فرما نمیدهد. اگر طراح بخواهد دنبال متن های مرتبط بگردد تمرکزش از
              روی کار اصلی برداشته میشود
            </p>
          </div>
          <div className="services">
            <img src={service3} alt="service3" className="serviceImg" />
            <p>
              از آنجا که لورم ایپسوم، شباهت زیادی به متن های واقعی دارد، طراحان
              معمولا از لورم ایپسوم استفاده میکنند تا فقط به مشتری یا کار فرما
              نشان دهند که قالب طراحی شده بعد از اینکه متن در آن قرار میگرد
              چگونه خواهد بود
            </p>
          </div>
        </div>
        <h2>تیم ما</h2>
        <hr />
        <div className="flex">
          {cards ? (
            cards.map((unit) => (
              <div>
                <img src={unit.avatar} />
                <p>{unit.first_name}</p>
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
              آدرس: <br /> آمل، بابل، قائمشهر
            </p>
            <p>
              تلفن: <br /> 0218574693 <br />
              0218574683
            </p>
            <p>
              ساعت کاری: <br />
              شنبه تا چهارشنبه 10 صبح الی الابد
            </p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26067.061209573367!2d51.34923087504778!3d35.6998439971783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8dfe05732c2e91%3A0xfcbec017befd15f4!2sAzadi%20Tower!5e0!3m2!1sen!2sde!4v1673821585567!5m2!1sen!2sde"
            className="col-sm-12 col-md-6"
            style={{ border: "0", height: "400" }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
