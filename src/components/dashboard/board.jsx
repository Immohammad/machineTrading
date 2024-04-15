import React, { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../variables.js";

import moment from "jalali-moment";
import { DatePicker } from "zaman";
import loading from "../assets/loading.gif";
import { toast } from "react-toastify";
import BoardFilter from "./boardFilter.jsx";
// import { data as dataStatic } from "./tabloData";
// import DatePicker from 'react-datepicker'
// import 'react-datepicker/dist/react-datepicker.css'
// import { DatePicker } from "@kasraghoreyshi/datepicker";
// import "@kasraghoreyshi/calendar/styles.css";
// import "@kasraghoreyshi/datepicker/styles.css";

function Tablo() {
  // const [stocks, setStocks] = useState();
  const [wholeBoard, setWholeBoard] = useState(null);

  // const [requestedDate, setRequestedDate] = useState(
  //   moment(new Date()).format("jYYYY-jMM-jDD")
  // );
  const [requestedDate, setRequestedDate] = useState();
  const [showDate, setShowDate] = useState('');

  const token = localStorage.getItem("token");

  useEffect(() => {
    // const boardDate = moment(new Date()).format("jYYYY-jMM-jDD");

    axios
      .get(`${BASE_URL}/api/board/lastDate`, {
        headers: {
          authorization: token,
        },
      })
      .then((response) => {
        // setRequestedDate(response.data.date.replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3"));
        const formattedDate = response.data.date.replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3");
        setRequestedDate(formattedDate)
        setShowDate(`${response.data.date.slice(0, 4)}/${response.data.date.slice(4, 6)}/${response.data.date.slice(6, 8)}`)
        // console.log(formattedDate);
        axios
          .get(`${BASE_URL}/api/board/getAll?date=${formattedDate}`, {
            headers: {
              authorization: token,
            },
          })
          .then((response) => {
            setWholeBoard(response.data);
            // console.log(boardDate);
          })
          .catch((error) => {
            if (error.response.status == 401) {
              localStorage.removeItem("userName");
              localStorage.removeItem("token");
              toast("به دلیل گذشت زمان باید دوباره وارد حساب خود شوید.");
              setTimeout(() => {
                window.location = "/";
              }, 1000);
            } else {
              toast("مشکلی پیش آمد1. ");
              // toast("در تاریخ انتخاب شده بازار تعطیل می باشد. ");
              // console.log(boardDate);
            }
          });
      })
      .catch((error) => {
        if (error.response.status == 401) {
          localStorage.removeItem("userName");
          localStorage.removeItem("token");
          toast("به دلیل گذشت زمان باید دوباره وارد حساب خود شوید.");
          setTimeout(() => {
            window.location = "/";
          }, 1000);
        } else {
          toast("مشکلی پیش آمد2. ");
          // toast("در تاریخ انتخاب شده بازار تعطیل می باشد. ");
          // console.log(boardDate);
        }
      });
  }, []);

  function handleDate(event) {
    // .subtract(3, "month")
    setRequestedDate(moment(event.value).format("jYYYY-jMM-jDD"));
    axios
      .get(`${BASE_URL}/api/board/getAll?date=${requestedDate}`, {
        headers: {
          authorization: token,
        },
      })
      .then((response) => {
        setWholeBoard(response.data);
      })
      .catch((error) => {
        if (error.response.status == 401) {
          localStorage.removeItem("userName");
          localStorage.removeItem("token");
          toast("به دلیل گذشت زمان باید دوباره وارد حساب خود شوید.");
          setTimeout(() => {
            window.location = "/";
          }, 1000);
        } else {
          toast("در تاریخ انتخاب شده بازار تعطیل می باشد. ");
          console.log(requestedDate);
        }
      });
  }

  return (
    <div>
      {/* <DatePicker
      selected={selected}
      onChange={handle}
      dateFormat="jYYYY/jMM/jDD"
      calendarClassName="jalali-datepicker"
      adapter={moment}
      /> */}
      {/* <DatePicker onChange={(event) =>console.log(event.value)}/> */}
      <p style={{ display: "inline", fontWeight: "bold", backgroundColor:'white', padding:'10px', borderRadius:'5px' }}>تاریخ امتیازدهی: {showDate}</p>
      {/* <DatePicker
        onChange={(event) => {
          console.log(moment(event.value).format("jYYYY-jMM-jDD"));
          handleDate(event);
        }}
        defaultValue={new Date()}
      /> */}

      <BoardFilter setter={setWholeBoard} date={requestedDate} />

      <hr />
      <div className="tablesContainer">
        <table className="commonTable" id="boardTable">
          <thead>
            <tr style={{ backgroundColor: "red" }}>
              <th>رتبه</th>
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
                  <td style={{ fontWeight: "bold" }}>{item.index}</td>
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
                  <img src={loading} className="loadingGif" />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tablo;
