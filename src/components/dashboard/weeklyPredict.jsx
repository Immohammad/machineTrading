import React, { useEffect, useState } from "react";
import { weeklyData } from "./predictData.js";
import Loading from "../assets/loading.gif";

function WeeklyPredict() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      <div id="fundamentalHelp" style={{ textAlign: "right", padding: "5px" }}>
        <p>
          در این قسمت روند قیمت سهم تا یک هفته بعد، نسبت به قیمت امروز بیان شده است.
        </p>
      </div>
      <div className="tablesContainer">
        <table className="commonTable" id="predictTable">
          <thead>
            <tr>
              <th>رتبه</th>
              <th>سهم</th>
              <th>روند تا هفتۀ آینده</th>
              <th>احتمال</th>
            </tr>
          </thead>
          <tbody>
            {!loading ? (
              weeklyData.map((item, index) => (
                <tr key={index}>
                  <td style={{ fontWeight: "bold" }}>{index + 1}</td>
                  <td style={{ fontWeight: "bold" }}>{item.name}</td>
                  <td>{item.weekly == 1 ? "صعودی" : "نزولی"}</td>
                  <td>{item.weekly_confidence.toFixed(1)}</td>
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

export default WeeklyPredict;
