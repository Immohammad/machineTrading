import React, { useEffect, useState } from "react";
import { monthlyData } from "./predictData.js";
import Loading from "../assets/loading.gif";

function MonthlyPredict() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  
  return (
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
            monthlyData.map((item, index) => (
              <tr key={index}>
                <td style={{ fontWeight: "bold" }}>{index + 1}</td>
                <td style={{ fontWeight: "bold" }}>{item.name}</td>
                <td>{item.monthly == 1 ? "صعودی" : "نزولی"}</td>
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
  );
}

export default MonthlyPredict;
