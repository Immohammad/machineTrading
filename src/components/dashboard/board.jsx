import React, { useEffect, useState } from "react";
import { data } from "./tabloData";
import axios from "axios";

function Tablo() {
  const filteredData = Object.entries(data).filter(([key]) => !/\d/.test(key));
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
    console.log(data);
  }, []);

  return (
    <div>
      <p>تاریخ امتیازدهی: 1402/05/31</p>
      <form
        // className="form-inline my-2 my-lg-0"
        // id="searchForm"
        onSubmit={handleSearch}
        style={{ display: "inline"}}
      >
        <input
          // className="form-control mr-sm-2"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          type="search"
          style={{
            borderRadius: "7px",
            display: "inline",
             margin:'15px'
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
