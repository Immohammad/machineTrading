import React, { useEffect, useState } from "react";
import Ath from "./ath";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList,
  faChartLine,
  faRuler,
  faBook,
  faUserAstronaut,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../variables.js";
import { toast } from "react-toastify";

function InitialDashboard() {
  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(false);
  const [serviceLeadTobuy, setServiceLeadTobuy] = useState("");

  const [name, setName] = useState("");
  const [userType, setUserType] = useState();
  const [email, setEmail] = useState("");

  const token = localStorage.getItem("token");

  const accessToService = (hasAccess, service) => {
    if (hasAccess) {
      navigate(`/dashboard/${service}`);
    } else {
      setShowPopup(true);
      setServiceLeadTobuy(service);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  // const navigateToBuy = () => {
  //   if (serviceLeadTobuy == "fundamental") {
  //     navigate("/fundamentalMore");
  //   } else {
  //   }
  // };
  useEffect(() => {
    axios
      .get(`${BASE_URL}/getUserDetail`, {
        headers: {
          authorization: token,
        },
      })
      .then((response) => {
        setName(
          `${
            response.data.isCompany
              ? response.data.companyName
              : response.data.firstName + " " + response.data.lastName
          }`
        );
        setUserType(`${response.data.isCompany ? "حقوقی" : "حقیقی"}`);
        setEmail(response.data.email);
      })
      .catch((error) => {
        toast("مشکلی پیش آمد");
        console.log(error);
      });
  }, []);

  return (
    <div style={{ width: "80%" }}>
      {showPopup && <div className="overlay"></div>}
      <table id="dashboardProfile">
        <tbody>
          <tr>
            <td>{name}</td>
            <td
              style={{
                borderRight: "1px solid black",
                borderLeft: "1px solid black",
              }}
            >
              کاربر {userType}
            </td>
            <td>ایمیل : {email}</td>
          </tr>
        </tbody>
      </table>
      <div className="servicesDashboard">
        <button
          onClick={() => accessToService(true, "predict")}
          style={{ backgroundColor: "#e31228" }}
        >
          پیش‌بینی نمودار
          <br />
          <FontAwesomeIcon icon={faChartLine} beatFade />
        </button>
        <button
          onClick={() => accessToService(true, "board")}
          style={{ backgroundColor: "#8cc73c" }}
        >
          تابلوخوانی
          <br />
          <FontAwesomeIcon icon={faClipboardList} beatFade />
        </button>
        <button
          onClick={() => accessToService(true, "fundamental")}
          style={{ backgroundColor: "white", color: "#334456" }}
        >
          تحلیل بنیادی
          <br />
          <FontAwesomeIcon icon={faBook} />
        </button>
        <button
          onClick={() => accessToService(false, "technical")}
          style={{ backgroundColor: "#334456" }}
        >
          تحلیل تکنیکال
          <br />
          <FontAwesomeIcon icon={faRuler} />
          <br />
          <FontAwesomeIcon icon={faLock} />
        </button>
        <button
          onClick={() => accessToService(false, "predict")}
          style={{
            background:
              "linear-gradient(to right, #e31228, #8cc73c, #334456, white)",
          }}
        >
          پکیج کامل
          <br />
          <FontAwesomeIcon icon={faUserAstronaut} />
          <br />
          <FontAwesomeIcon icon={faLock} />
        </button>
      </div>
      {showPopup && (
        <div className="popup">
          <button className="closeButton" onClick={closePopup}>
            ×
          </button>
          <p>
            شما به این سرویس دسترسی ندارید. برای اطلاعات بیشتر در مورد سرویس و
            خرید آن گزینه پرداخت را انتخاب کنید.
          </p>
          <button
            style={{
              backgroundColor: "#334456",
              borderRadius: "5px",
              color: "white",
              padding: "5px",
            }}
            onClick={() => navigate("/technicalMore")}
          >
            خرید سرویس
          </button>
        </div>
      )}

      <hr style={{ marginRight: "auto", marginLeft: "auto", width: "60%" }} />
      <h3 style={{ textAlign: "right" }}>
        جدول فاصله سهام تا ATH (سقف تاریخی)
      </h3>
      <p style={{ textAlign: "right" }}>
        این جدول فاصله سهام از سقف و کف تاریخی‌شان را نشان می‌دهد و برای شناسایی
        سهام جامانده از بازار مفید می‌باشد.
      </p>
      <Ath />
    </div>
  );
}

export default InitialDashboard;
