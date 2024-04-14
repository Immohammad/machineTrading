import React, { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../variables.js";

import Loading from "../assets/loading.gif";
import { toast } from "react-toastify";

function Predict() {
  const stocks = [
    {
      symbol: "کهرام",
      code: "25631699615003698",
    },
    {
      symbol: "فملی",
      code: "35425587644337450",
    },
    {
      symbol: "وسین",
      code: "56591881518499520",
    },
    {
      symbol: "اهرم",
      code: "17914401175772326",
    },
    {
      symbol: "توان",
      code: "41927452991671109",
    },
    {
      symbol: "حاریا",
      code: "56798822689379375",
    },
    {
      symbol: "طلا",
      code: "46700660505281786",
    },
    {
      symbol: "پترول",
      code: "69143674941561637",
    },
    {
      symbol: "پالایش",
      code: "67675656072510693",
    },
    {
      symbol: "شستا",
      code: "2400322364771558",
    },
  ];
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    for (let index = 0; index < stocks.length; index++) {
      axios
        .get(`${BASE_URL}/api/predict?stockCode=${stocks[index].code}`, {
          headers: {
            authorization: token,
          },
        })
        .then((response) => {
          setData((prevData) => [
            ...prevData,
            {
              symbol: stocks[index].symbol,
              trend: response.data.trend,
              sureness: response.data.sureness,
            },
          ]);
        })
        .catch((error) => {
          toast("مشکلی پیش آمد. ");
        });
    }
    setLoading(false);
  }, []);

  return (
    <div>
      <div>
        <button>پیش‌بینی هفتگی</button>
        <button>پیش‌بینی ماهانه</button>
        <button>بستۀ نوسانگیر</button>
      </div>
      <div className="tablesContainer">
        <table className="commonTable" id="predictTable">
          <thead>
            <tr>
              <th>رتبه</th>
              <th>سهم</th>
              <th>روند</th>
              <th>احتمال</th>
            </tr>
          </thead>
          <tbody>
            {data.length != 0 ? (
              data.map((item, index) => (
                <tr
                  key={index}
                  // style={
                  //   item.sum >= 75
                  //     ? { backgroundColor: "#0B6623" }
                  //     : item.sum >= 50
                  //     ? { backgroundColor: "#8cc73c" }
                  //     : item.sum >= 25
                  //     ? { backgroundColor: "#87CEEB" }
                  //     : item.sum >= -25
                  //     ? { backgroundColor: "#808080" }
                  //     : item.sum >= -50
                  //     ? { backgroundColor: "#9b870c" }
                  //     : item.sum >= -75
                  //     ? { backgroundColor: "orange" }
                  //     : { backgroundColor: "red" }
                  // }
                >
                  <td style={{ fontWeight: "bold" }}>{index + 1}</td>
                  <td style={{ fontWeight: "bold" }}>{item.symbol}</td>
                  <td>
                    {item.trend == 2
                      ? "صعودی"
                      : item.trend == 1
                      ? "رنج"
                      : "نزولی"}
                  </td>
                  <td>{item.sureness.toFixed(0)}</td>
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

export default Predict;
