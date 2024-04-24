import React, { useState } from "react";
import { weeklyData, monthlyData, oscillationData } from "./predictData.js";
import { toast } from "react-toastify";

function PredictSearch(props) {
  const [search, setSearch] = useState("");
  //   const [filtered, setFiltered] = useState("");

  const handleFilter = (event) => {
    let filtered;
    const isStock = weeklyData.filter((item) => item.name.includes(search));
    if (props.type == 0) {
      filtered = weeklyData.filter((item) => item.name.includes(search));
    } else if (props.type == 1) {
      filtered = monthlyData.filter((item) => item.name.includes(search));
    } else
      filtered = oscillationData.filter((item) => item.name.includes(search));
    if (isStock.length == 0) {
      toast("سهامی با این نام وجود ندارد.");
    } else if (filtered.length == 0) {
      toast("این سهم در این تاریخ احتمال خوبی برای پیش‌بینی ندارد.");
    } else props.setter(filtered);
  };

  const handleReset = () => {
    if (props.type == 0) {
      props.setter(weeklyData);
    } else if (props.type == 1) {
      props.setter(monthlyData);
    } else props.setter(oscillationData);
  };

  return (
    <div
      id="boardFilter"
      style={{
        margin: "10px",
        width: "80%",
        marginRight: "auto",
        marginLeft: "auto",
      }}
    >
      <input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        type="search"
        style={{
          borderRadius: "7px",
          display: "inline",
          margin: "15px",
        }}
        placeholder="نام سهم"
      />

      <button onClick={handleFilter}>جستجو</button>
      <button onClick={handleReset}>همه نمادها</button>
      <p style={{display:'inline', margin:'20px'}}>تاریخ پیش‌بینی: 1403/02/05</p>
    </div>
  );
}

export default PredictSearch;
