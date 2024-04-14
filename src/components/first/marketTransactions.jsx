import React, { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../variables";

function MarketTransactions() {
  const [indices, setIndices] = useState();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/common/getMarketOverallStatistics`)
      .then((response) => {
        // console.log(response.data);
        setIndices(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <table id="marketPulseTable">
      {indices && (
        <tbody>
          <tr>
            <th>ارزش معاملات</th>
            <th>حجم معاملات</th>
            <th>شاخص کل</th>
          </tr>
          <tr>
            <td style={{ color: "#00ABF0" }}>{indices.trade_value}</td>
            <td style={{ color: "#00ABF0" }}>{indices.trade_volume}</td>
            <td style={{ color: "#00ABF0" }}>{indices.index}</td>
          </tr>
          <tr>
            <th>نمادهای مثبت</th>
            <th>نمادهای منفی</th>
            <th>هم وزن</th>
          </tr>
          <tr>
            <td style={{ color: "green" }}>{indices.green}</td>
            <td style={{ color: "red" }}>{indices.red}</td>
            <td style={{ color: "#00ABF0" }}>{indices.index_h}</td>
          </tr>
        </tbody>
      )}
    </table>
  );
}

export default MarketTransactions;
