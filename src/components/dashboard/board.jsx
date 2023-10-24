import React, { useEffect, useState } from "react";
import { data as dataStatic } from "./tabloData";
import axios from "axios";
import moment from "jalali-moment";
import { DatePicker } from "zaman";
import loading from "../assets/loading.gif";
import { toast } from "react-toastify";
// import DatePicker from 'react-datepicker'
// import 'react-datepicker/dist/react-datepicker.css'
// import { DatePicker } from "@kasraghoreyshi/datepicker";
// import "@kasraghoreyshi/calendar/styles.css";
// import "@kasraghoreyshi/datepicker/styles.css";


function Tablo() {
  // const filteredData = Object.entries(dataStatic).filter(
  //   ([key]) => !/\d/.test(key)
  // );
  // filteredData.sort(([, value1], [, value2]) => value2.sum - value1.sum);
  // const sortedData = Object.fromEntries(filteredData);

  const [stocks, setStocks] = useState();
  const [wholeBoard, setWholeBoard] = useState(null);

  const [search, setSearch] = useState('');
  const [requestedDate, setRequestedDate] = useState(moment(new Date()).subtract(3, 'month').format("jYYYY-jMM-jDD"));

  const token = localStorage.getItem('token')

  useEffect(() => {
    // console.log(dataStatic);
    const boardDate = moment(new Date()).subtract(3, 'month').format("jYYYY-jMM-jDD");
    axios
      .get(`http://45.129.36.165:3000/api/board/getAll?date=${boardDate}`, {
        headers: {
          authorization: token,
        }
      })
      .then((response) => {
        // const sorted = response.data.slice().sort((a, b) => b.sum - a.sum);
        // wholeBoard = response.data
        setWholeBoard(response.data)
        setStocks(response.data)
        console.log(response.data)
        console.log(boardDate)
      })
      .catch((error) => {
        toast("در تاریخ انتخاب شده بازار تعطیل می باشد. ");
        console.log("xz")
        console.log(boardDate)
      });
  }, []);

  function handleSearch(event) {
    event.preventDefault();

    if (!search) {
      setStocks(wholeBoard);
      // console.log(wholeBoard)
    } else {
      // console.log('no')
      // console.log(foundItems)
      const foundItems = wholeBoard.filter(item => item.stockTitle.includes(search));
      setStocks(
        foundItems
      );
    }
  }
  // setStocks(
  //   Object.fromEntries(
  //     Object.entries(sortedData).filter(([key, value]) =>
  //       key.includes(search)
  //     )
  //   )
  // );

  function handleDate(event) {
    setRequestedDate(moment(event.value).subtract(3, 'month').format("jYYYY-jMM-jDD"))
    axios
      .get(`http://45.129.36.165:3000/api/board/getAll?date=${requestedDate}`, {
        headers: {
          authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTgxNzg2NTF9.z7mYgj_WbW8sIZHFg_3pKH_V5yaV5DvrT9BEAIjOK3E",
        }
      })
      .then((response) => {
        setWholeBoard(response.data)
        setStocks(response.data)
        console.log(response.data)
        console.log(requestedDate)
      })
      .catch((error) => {
        toast("در تاریخ انتخاب شده بازار تعطیل می باشد. ");
        console.log("xz")
        console.log(requestedDate)
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
      <DatePicker
        onChange={(event) => {
          console.log(moment(event.value).format("jYYYY-jMM-jDD"))
          handleDate(event)
        }
        }
        defaultValue={new Date()}
      />
      {/* <DatePicker onChange={(event) =>console.log(event.value)} autoUpdate={true}/> */}
      <p>تاریخ امتیازدهی: {requestedDate}</p>
      <form
        onSubmit={handleSearch}
        style={{ display: "inline" }}
      >
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          // onChange={handleSearch}
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

          {stocks ?
            (stocks.map((item, index) => (
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
                <td>{index + 1}</td>
                <td>{item.stockTitle}</td>
                <td>{item.suspicios_volume}</td>
                <td>{item.intel_money}</td>
                <td>{item.real_money}</td>
                {/* <td>{value.final_last}</td> */}
                {/* <td>{value.accumulation}</td> */}
                <td>{item.buy_power}</td>
                <td>{item.sum}</td>
              </tr>
            ))) : (
              <tr>
                <td colSpan={6}><img src={loading} className="loadingGif" /></td>
              </tr>
            )
          }


          {/* {stocks &&
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
                <td>{value.buy_power}</td>
                <td>{value.sum}</td>
              </tr>
            ))} */}

        </tbody>
      </table>
    </div>
  );
}

export default Tablo;
