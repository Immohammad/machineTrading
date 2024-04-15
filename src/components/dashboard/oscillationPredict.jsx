import React, { useEffect, useState } from "react";
import { oscillationData } from "./predictData.js";
import Loading from "../assets/loading.gif";

function OscillationPredict() {
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
            <th>نوسان</th>
            <th>احتمال</th>
          </tr>
        </thead>
        <tbody>
          {!loading ? (
            oscillationData.map((item, index) => (
              <tr key={index}>
                <td style={{ fontWeight: "bold" }}>{index + 1}</td>
                <td style={{ fontWeight: "bold" }}>{item.name}</td>
                <td>
                  {item.label == 2
                    ? "مثبت"
                    : item.label == 1
                    ? "رنج"
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
  );
}

export default OscillationPredict;
