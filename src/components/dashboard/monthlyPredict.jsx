import React, { useEffect, useState } from "react";
import { monthlyData, monthlyTestData } from "./predictData.js";
import Loading from "../assets/loading.gif";
import PredictSearch from "./predictSearch.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCheck } from "@fortawesome/free-solid-svg-icons";

function MonthlyPredict() {
  const [loading, setLoading] = useState(true);
  const [thisTable, setThisTable] = useState(monthlyData);
  const [thisTableTest, setThisTableTest] = useState(monthlyTestData);

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div style={{ position: "relative" }}>
      {showPopup && (
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
            صحت‌سنجی پیش‌بینی تاریخ ... از امروز
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
                {thisTableTest.map((item, index) => (
                  <tr key={index}>
                    <td style={{ fontWeight: "bold" }}>{index + 1}</td>
                    <td style={{ fontWeight: "bold", cursor: "pointer" }}>
                      {item.name}
                    </td>
                    <td>
                      {item.monthly == 2
                        ? "صعودی"
                        : item.monthly == 1
                        ? "رنج"
                        : "نزولی"}
                    </td>
                    <td>{item.monthly_confidence.toFixed(1)}</td>
                    <td
                      style={{
                        color: `${item.monthly_success ? "green" : "red"}`,
                      }}
                    >
                      {item.monthly_success ? (
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
      )}
      <PredictSearch type={1} setter={setThisTable} />
      <div id="fundamentalHelp" style={{ textAlign: "right", padding: "5px" }}>
        <p>
          در این قسمت روند قیمت سهم تا یک ماه بعد، نسبت به قیمت امروز بیان شده
          است.
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
          صحت‌سنجی پیش‌بینی ماه گذشته
        </button>
      </div>
      <div className="tablesContainer">
        <table className="commonTable" id="predictTable">
          <thead>
            <tr>
              <th>رتبه</th>
              <th>سهم</th>
              <th>روند تا ماه آینده</th>
              <th>احتمال</th>
            </tr>
          </thead>
          <tbody>
            {!loading ? (
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
                    {item.monthly == 2
                      ? "صعودی"
                      : item.monthly == 1
                      ? "رنج"
                      : "نزولی"}
                  </td>
                  <td>{item.monthly_confidence.toFixed(1)}</td>
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

export default MonthlyPredict;
