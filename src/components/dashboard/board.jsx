import React, { useEffect, useState } from "react";
import { data as dataStatic } from "./tabloData";
import axios from "axios";
// import DatePicker from 'react-datepicker'
// import 'react-datepicker/dist/react-datepicker.css'
import moment from "jalali-moment";
import { DatePicker } from "zaman";
// import { DatePicker } from "@kasraghoreyshi/datepicker";
// import "@kasraghoreyshi/calendar/styles.css";
// import "@kasraghoreyshi/datepicker/styles.css";

function Tablo() {
  const filteredData = Object.entries(dataStatic).filter(
    ([key]) => !/\d/.test(key)
  );
  filteredData.sort(([, value1], [, value2]) => value2.sum - value1.sum);
  const sortedData = Object.fromEntries(filteredData);

  const [stocks, setStocks] = useState(sortedData);

  const [search, setSearch] = useState();

  function handleSearch(event) {
    event.preventDefault();

    if (!search) {
      setStocks(sortedData);
    } else {
      setStocks(
        Object.fromEntries(
          Object.entries(sortedData).filter(([key, value]) =>
            key.includes(search)
          )
        )
      );
    }
  }

  useEffect(() => {
    console.log(dataStatic);
    const boardDate = moment(new Date()).format("jYYYY-jMM-jDD");
    axios
      .get("https://api-machinetrading.onrender.com/api/table")
      .then(function (response) {
        // setFacultyMenu(response.data);
      })
      .catch(function () {
        // NotificationManager.warning("بارگیری دانشکده‌ها با خطا مواجه شد");
      });
  }, []);

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
      <DatePicker
        onChange={(event) =>
          console.log(moment(event.value).format("jYYYY-jMM-jDD"))
        }
        defaultValue={new Date()}
      />
      {/* <DatePicker onChange={(event) =>console.log(event.value)} autoUpdate={true}/> */}
      <p>تاریخ امتیازدهی: 1402/05/31</p>
      <form
        // className="form-inline my-2 my-lg-0"
        // id="searchForm"
        onSubmit={handleSearch}
        style={{ display: "inline" }}
      >
        <input
          // className="form-control mr-sm-2"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          type="search"
          style={{
            borderRadius: "7px",
            display: "inline",
            margin: "15px",
          }}
          placeholder="جستجوی نام سهم"
        />
        <button
          type="submit"
          style={{ backgroundColor: "white", borderRadius: "7px" }}
        >
          جستجو
        </button>
      </form>
      <table id="boardTable">
        <thead>
          <tr>
            <th>رتبه</th>
            <th>سهم</th>
            <th>حجم مشکوک</th>
            <th>پول هوشمند</th>
            <th>پول حقیقی</th>
            {/* <th>قیمت پایانی به آخرین</th> */}
            {/* <th>تجمع</th> */}
            <th>قدرت خرید</th>
            <th>مجموع</th>
          </tr>
        </thead>
        <tbody>
          {stocks &&
            Object.entries(stocks).map(([key, value], index) => (
              <tr
                key={key}
                style={
                  value.sum >= 75
                    ? { backgroundColor: "#0B6623" }
                    : value.sum >= 50
                    ? { backgroundColor: "#8cc73c" }
                    : value.sum >= 25
                    ? { backgroundColor: "#87CEEB" }
                    : value.sum >= -25
                    ? { backgroundColor: "#808080" }
                    : value.sum >= -50
                    ? { backgroundColor: "#9b870c" }
                    : value.sum >= -75
                    ? { backgroundColor: "orange" }
                    : { backgroundColor: "red" }
                }
              >
                <td>{index + 1}</td>
                <td>{key}</td>
                <td>{value.suspicios_volume}</td>
                <td>{value.intel_money}</td>
                <td>{value.real_money}</td>
                {/* <td>{value.final_last}</td> */}
                {/* <td>{value.accumulation}</td> */}
                <td>{value.buy_power}</td>
                <td>{value.sum}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tablo;
