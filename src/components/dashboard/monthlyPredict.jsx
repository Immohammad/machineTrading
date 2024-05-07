import React, { useEffect, useState } from "react";
import { monthlyData } from "./predictData.js";
import Loading from "../assets/loading.gif";
import PredictSearch from "./predictSearch.jsx";

function MonthlyPredict() {
  const [loading, setLoading] = useState(true);
  const [thisTable, setThisTable] = useState(monthlyData);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      <PredictSearch type={1} setter={setThisTable} />
      <div id="fundamentalHelp" style={{ textAlign: "right", padding: "5px" }}>
        <p>
          در این قسمت روند قیمت سهم تا یک ماه بعد، نسبت به قیمت امروز بیان شده
          است.
        </p>
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
                  <td style={{ fontWeight: "bold" }}>{item.name}</td>
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
