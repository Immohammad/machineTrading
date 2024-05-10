import React, { useEffect, useState } from "react";
import { oscillationData, oscillationTestData } from "./predictData.js";
import axios from "axios";
import BASE_URL from "../variables.js";
import { toast } from "react-toastify";
import Loading from "../assets/loading.gif";
import PredictSearch from "./predictSearch.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCheck } from "@fortawesome/free-solid-svg-icons";

function OscillationPredict() {
  const [thisTable, setThisTable] = useState();
  const [thisTableTest, setThisTableTest] = useState(oscillationTestData);
  const [loading, setLoading] = useState(true);

  const [showPopup, setShowPopup] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/predict/oscPredict`, {
        headers: {
          authorization: token,
        },
      })
      .then((response) => {
        setThisTable(response.data);
        setLoading(false);
      })
      .catch((error) => {
        toast("مشکلی پیش آمد");
        console.log(error);
      });
    axios
      .get(`${BASE_URL}/api/predict/oscPredictObserve`, {
        headers: {
          authorization: token,
        },
      })
      .then((response) => {
        setThisTableTest(response.data);
        // setLoading(false);
      })
      .catch((error) => {
        toast("مشکلی پیش آمد");
      });
  }, []);

  return (
    <div style={{ position: "relative" }}>
      {/* {showPopup && (
        <div
          className="overlay"
          style={{ top: "auto", bottom: "0", position: "absolute" }}
        >
          <button className="closeButton" onClick={() => setShowPopup(false)}>
            ×
          </button>
          <p
            style={{
              borderRadius: "7px",
              backgroundColor: "white",
              width: "fit-content",
              marginRight: "auto",
              marginLeft: "auto",
              padding: "10px",
            }}
          >
            صحت‌سنجی پیش‌بینی تاریخ 1403/02/11 از امروز
          </p>
          <div className="tablesContainer" style={{ marginTop: "50px" }}>
            <table className="commonTable" id="predictTable">
              <thead>
                <tr>
                  <th>رتبه</th>
                  <th>سهم</th>
                  <th>روند تا ماه آینده</th>
                  <th>احتمال</th>
                  <th>صحت</th>
                </tr>
              </thead>
              <tbody>
                {thisTableTest &&
                  thisTableTest.map((item, index) => (
                    <tr key={index}>
                      <td style={{ fontWeight: "bold" }}>{index + 1}</td>
                      <td style={{ fontWeight: "bold", cursor: "pointer" }}>
                        {item.name}
                      </td>
                      <td>
                        {item.label == 2
                          ? "مثبت"
                          : item.label == 1
                          ? "خنثی"
                          : "منفی"}
                      </td>
                      <td>{item.confidence.toFixed(1)}</td>
                      <td
                        style={{
                          color: `${item.success ? "green" : "red"}`,
                        }}
                      >
                        {item.success ? (
                          <FontAwesomeIcon icon={faCheck} />
                        ) : (
                          <FontAwesomeIcon icon={faXmark} />
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      )} */}
      <PredictSearch type={2} setter={setThisTable} />
      <div id="fundamentalHelp" style={{ textAlign: "right", padding: "5px" }}>
        <p>
          سهام با نوسان مثبت در طول هفتۀ آتی سقف 5 درصد نسبت به قیمت امروز را
          می‌شکنند (ممکن است دوباره به زیر این سقف برگردند). سهام رنج بین بازه
          -5 تا +5 نوسان خواهند داشت و سهام با نوسان منفی در طول هفتۀ آتی کف -5
          درصد نسبت به قیمت امروز را می‌شکنند (و البته ممکن است دوباره به بالای
          کف برگردند).
        </p>
        <button
          style={{
            background:
              "linear-gradient(to right, #e31228, #00755E, #334456, white)",
            borderRadius: "7px",
            color: "white",
          }}
          onClick={() => setShowPopup(true)}
        >
          صحت‌سنجی نوسانگیر هفتۀ گذشته
        </button>
      </div>
      <div className="tablesContainer">
        <table className="commonTable" id="predictTable">
          <thead>
            <tr>
              <th>رتبه</th>
              <th>سهم</th>
              <th>نوسان</th>
              <th>احتمال</th>
            </tr>
          </thead>
          <tbody>
            {thisTable ? (
              thisTable.map((item, index) => (
                <tr key={index}>
                  <td style={{ fontWeight: "bold" }}>{index + 1}</td>
                  <td
                    style={{ fontWeight: "bold", cursor: "pointer" }}
                    onClick={() => {
                      window.open(`/dashboard/didehban/${item.name}`, "_blank");
                    }}
                  >
                    {item.name}
                  </td>
                  <td>
                    {item.label == 2
                      ? "مثبت"
                      : item.label == 1
                      ? "خنثی"
                      : "منفی"}
                  </td>
                  <td>{item.confidence.toFixed(1)}</td>
                </tr>
              ))
            ) : (
              <tr style={{ border: "none" }}>
                <td colSpan={6}>
                  <img src={Loading} className="loadingGif" />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OscillationPredict;
