import React, { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../variables.js";
import { toast } from "react-toastify";
import { useNavigate, Routes, Route } from "react-router-dom";
import StockDetails from "./stockDetails.jsx";

function Didehban() {
  const navigate = useNavigate();
  const [stocks, setStocks] = useState();
  const [search, setSearch] = useState("");
  const [filteredStocks, setFilteredStocks] = useState("");

  const token = localStorage.getItem("token");

  const handleSearch = (e) => {
    const searchText = e.target.value;
    setSearch(searchText);

    const filtered = stocks.filter((stock) =>
      stock.symbol.includes(searchText)
    );
    setFilteredStocks(filtered);
  };

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/common/getStocks`, {
        headers: {
          authorization: token,
        },
      })
      .then((response) => {
        setStocks(response.data);
      })
      .catch((error) => {
        toast("مشکلی در بارگذاری نمادها پیش آمد");
      });
  }, []);

  return (
    <div>
      <div>
        <label>
          نام سهم را وارد کنید تا همۀ اطلاعات آن نمایش داده شود:{" "}
          <input
            value={search}
            onChange={handleSearch}
            type="search"
            style={{
              borderRadius: "7px",
              padding: "5px",
              width: "200px",
            }}
            placeholder=" ..."
          />
        </label>
        <div className="list-container">
          <ul className="list">
            {filteredStocks &&
              search.length != 0 &&
              filteredStocks.map((stock) => (
                <li
                  key={stock.code}
                  onClick={() => {
                    navigate(`/dashboard/didehban/${stock.symbol}`);
                    setSearch("");
                  }}
                >
                  {stock.symbol}
                </li>
              ))}
          </ul>
        </div>
      </div>
      {/* <div>دیده‌بان من</div> */}
      <hr />
      <div
        className="container justify-content-center"
        // style={{ maxWidth: "80%" }}
      >
        <Routes>
          <Route path="" />
          <Route path=":stockName" element={<StockDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default Didehban;
