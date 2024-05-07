import React, { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../variables.js";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import loadingGif from "../assets/loading.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faClipboardCheck,
  faCircleXmark,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import { weeklyData, monthlyData, oscillationData } from "./predictData.js";

function StockDetails() {
  const { stockName } = useParams();

  const [wholeAth, setWholeAth] = useState(null);
  const [wholeBoard, setWholeBoard] = useState(null);
  const [reports, setReports] = useState();

  const token = localStorage.getItem("token");
  // predict
  const [enablePredict, setEnablePredict] = useState(
    weeklyData.filter((item) => item.name === stockName).length == 0
      ? false
      : true
  );
  const [weeklyMonthly, setWeeklyMonthly] = useState(
    weeklyData.filter((item) => item.name === stockName)
  );
  const [oscillation, setOscillation] = useState(
    oscillationData.filter((item) => item.name === stockName)
  );
  //
  useEffect(() => {
    setWholeAth(null);
    setWholeBoard(null);
    setReports();
    //
    setEnablePredict(
      weeklyData.filter((item) => item.name === stockName).length == 0
        ? false
        : true
    );
    setWeeklyMonthly(weeklyData.filter((item) => item.name === stockName));
    setOscillation(oscillationData.filter((item) => item.name === stockName));
    //
    axios
      .get(`${BASE_URL}/api/ath/getAll?nameArg=${stockName}`, {
        headers: {
          authorization: token,
        },
      })
      .then((response) => {
        setWholeAth(
          response.data.filter((item) => item.stockTitle === stockName)
        );
      })
      .catch((error) => {
        toast("مشکلی در ATH پیش آمد");
      });

    axios
      .get(`${BASE_URL}/api/board/lastDays?nameArg=${stockName}`, {
        headers: {
          authorization: token,
        },
      })
      .then((response) => {
        setWholeBoard(
          response.data.filter((item) => item.stockTitle === stockName)
        );
      })
      .catch((error) => {
        toast("مشکلی در تابلو پیش آمد. ");
      });

    axios
      .get(`${BASE_URL}/api/cp/getpaginated?nameArg=${stockName}`, {
        headers: {
          authorization: token,
        },
      })
      .then((response) => {
        setReports(response.data.stocks.filter((item) => item.symbol === stockName));
        // console.log(response.data);
      })
      .catch((error) => {
        toast("مشکلی در بنیادی پیش آمد");
      });
  }, [stockName]);

  return (
    <div id="detailsPage">
      <h1>{stockName}</h1>
      <hr />
      <div>
        <div className="tablesContainer">
          <table className="commonTable" id="athTable">
            <thead>
              <tr>
                <th>رتبه</th>
                <th>سهم</th>
                <th>قیمت (تومان)</th>
                <th>سقف تاریخی (تومان)</th>
                <th>فاصله تا کف تاریخی %</th>
                <th>افت از سقف تاریخی %</th>
                <th>فاصله تا سقف تاریخی %</th>
              </tr>
            </thead>

            <tbody>
              {wholeAth ? (
                wholeAth.map((item, index) => (
                  <tr
                    key={index}
                    style={
                      item.to_ath >= 100
                        ? { color: "#0B6623" }
                        : item.to_ath >= 50
                        ? { color: "#0066b2" }
                        : item.to_ath >= 0
                        ? { color: "#8cc73c" }
                        : { color: "red" }
                    }
                  >
                    <td style={{ fontWeight: "bold" }}>{item.index}</td>
                    <td style={{ fontWeight: "bold" }}>{item.stockTitle}</td>
                    <td>{(item.price / 10).toFixed(0)}</td>
                    <td>{(item.ath_price / 10).toFixed(0)}</td>
                    <td>{item.to_atl.toFixed(0)}</td>
                    <td>{item.from_ath.toFixed(0)}</td>
                    <td style={{ fontWeight: "bold" }}>
                      {item.to_ath.toFixed(0)}
                    </td>
                  </tr>
                ))
              ) : (
                <tr style={{ border: "none" }}>
                  <td colSpan={6}>
                    <img src={loadingGif} className="loadingGif" />
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <hr />
      <div>
        <h2 style={{ color: "#334456" }}>پیش‌بینی</h2>
        {enablePredict ? (
          <div id="detailsPagePredict">
            <div>
              <div>هفتگی</div>
              <div className="tablesContainer">
                <table className="commonTable" id="predictTable">
                  <thead>
                    <tr>
                      <th>روند تا هفتۀ آینده</th>
                      <th>احتمال</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        {weeklyMonthly[0].weekly == 2
                          ? "صعودی"
                          : weeklyMonthly[0].weekly == 1
                          ? "رنج"
                          : "نزولی"}
                      </td>
                      <td>{weeklyMonthly[0].weekly_confidence.toFixed(1)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div
              style={{
                borderRight: "solid 1px black",
                borderLeft: "solid 1px black",
              }}
            >
              <div>ماهانه</div>
              <div
                className="tablesContainer"
                style={{ height: "fit-content" }}
              >
                <table className="commonTable" id="predictTable">
                  <thead>
                    <tr>
                      <th>روند تا ماه آینده</th>
                      <th>احتمال</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        {weeklyMonthly[0].monthly == 2
                          ? "صعودی"
                          : weeklyMonthly[0].monthly == 1
                          ? "رنج"
                          : "نزولی"}
                      </td>
                      <td>{weeklyMonthly[0].monthly_confidence.toFixed(1)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <div>نوسانگیر</div>
              <div
                className="tablesContainer"
                style={{ height: "fit-content" }}
              >
                <table className="commonTable" id="predictTable">
                  <thead>
                    <tr>
                      <th>نوسان</th>
                      <th>احتمال</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        {oscillation[0].label == 2
                          ? "مثبت"
                          : oscillation[0].label == 1
                          ? "خنثی"
                          : "منفی"}
                      </td>
                      <td>{oscillation[0].confidence.toFixed(1)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <p>به علت کمبود منابع سرور در دسترس نمی‌باشد.</p>
        )}
      </div>
      <hr />
      <div>
        <h2 style={{ color: "#e31228" }}>تابلوخوانی</h2>
        <div className="tablesContainer">
          <table className="commonTable" id="boardTable">
            <thead>
              <tr style={{ backgroundColor: "red" }}>
                <th>تاریخ</th>
                <th>سهم</th>
                <th>حجم مشکوک</th>
                <th>پول هوشمند</th>
                <th>پول حقیقی</th>
                <th>پایانی به آخرین</th>
                <th>قدرت خریدار</th>
                <th>امتیاز</th>
              </tr>
            </thead>
            <tbody>
              {wholeBoard ? (
                wholeBoard.map((item, index) => (
                  <tr
                    key={index}
                    style={
                      item.sum >= 75
                        ? { backgroundColor: "#0B6623" }
                        : item.sum >= 50
                        ? { backgroundColor: "#8cc73c" }
                        : item.sum >= 25
                        ? { backgroundColor: "#87CEEB" }
                        : item.sum >= -25
                        ? { backgroundColor: "#808080" }
                        : item.sum >= -50
                        ? { backgroundColor: "#9b870c" }
                        : item.sum >= -75
                        ? { backgroundColor: "orange" }
                        : { backgroundColor: "red" }
                    }
                  >
                    <td style={{ fontWeight: "bold" }}>{item.date}</td>
                    <td style={{ fontWeight: "bold" }}>{item.stockTitle}</td>
                    <td>{item.suspicios_volume}</td>
                    <td>{item.intel_money}</td>
                    <td>{item.real_money}</td>
                    <td>{item.final_last}</td>
                    <td>{item.buy_power}</td>
                    <td style={{ fontWeight: "bold" }}>{item.sum}</td>
                  </tr>
                ))
              ) : (
                <tr style={{ border: "none" }}>
                  <td colSpan={6}>
                    <img src={loadingGif} className="loadingGif" />
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <hr />
      <div>
        <h2 style={{ color: "#00755e" }}>بنیادی</h2>
        <div className="tablesContainer" style={{ height: "300px" }}>
          <table className="commonTable" id="fundamentalTable">
            <thead>
              <tr>
                <th>تاریخ گزارش</th>
                <th>سهم</th>
                <th>نوع گزارش</th>
                <th>اهمیت</th>
                <th>دوره (ماه)</th>
                <th>وضعیت حسابرسی</th>
                <th>تلفیقی</th>
                <th>مقدار در گزارش قبلی</th>
                <th>مقدار در گزارش فعلی</th>
                <th>دانلود گزارش</th>
              </tr>
            </thead>
            <tbody>
              {reports ? (
                reports.length == 0 ? (
                  <tr>
                    <td colSpan={6}>گزارشی برای این نماد وجود ندارد</td>
                  </tr>
                ) : (
                  reports.map((dates, index) => (
                    <React.Fragment key={index}>
                      {dates.fundamental.map((item, indexReport) => (
                        <tr key={indexReport}>
                          {indexReport == 0 ? (
                            <td
                              style={{
                                fontWeight: "bold",
                                backgroundColor: "white",
                              }}
                              rowspan={dates.fundamental.length}
                            >
                              {dates.date.slice(0, 4)}/{dates.date.slice(4, 6)}/
                              {dates.date.slice(6, 8)}
                            </td>
                          ) : null}
                          <td style={{ fontWeight: "bold" }}>{dates.symbol}</td>

                          <td>{item.title}</td>

                          <td>
                            <FontAwesomeIcon
                              icon={faBell}
                              style={{
                                color: `${
                                  item.importance == 2
                                    ? "gold"
                                    : item.importance == 1
                                    ? "silver"
                                    : "chocolate"
                                }`,
                              }}
                            />
                          </td>
                          <td>{item.fiscal_period}</td>
                          <td>
                            {item.is_audited ? (
                              <FontAwesomeIcon icon={faClipboardCheck} />
                            ) : (
                              <FontAwesomeIcon icon={faCircleXmark} />
                            )}
                          </td>
                          <td>{item.is_combined ? "بله" : "خیر"}</td>
                          <td>
                            {item.value_prev !== null
                              ? item.value_prev.toLocaleString()
                              : ""}
                          </td>

                          <td
                            style={{
                              backgroundColor: `${
                                item.color == 1
                                  ? "green"
                                  : item.color == 0
                                  ? "gray"
                                  : "red"
                              }`,
                              color: "white",
                            }}
                          >
                            {item.value !== null
                              ? item.value.toLocaleString()
                              : ""}
                          </td>
                          <td
                            style={{ cursor: "pointer" }}
                            onClick={() => toast("دریافت گزارش در دسترس نیست")}
                          >
                            <FontAwesomeIcon
                              icon={faDownload}
                              style={{ color: "#0077b6" }}
                            />
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))
                )
              ) : (
                <tr>
                  <td colSpan={6}>
                    <img src={loadingGif} className="loadingGif" />
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default StockDetails;
