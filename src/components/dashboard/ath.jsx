import React, { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../variables.js";

// import moment from "jalali-moment";
// import { DatePicker } from "zaman";
import loading from "../assets/loading.gif";
import { toast } from "react-toastify";

function Ath() {
  // const [stocks, setStocks] = useState();
  const [wholeAth, setWholeAth] = useState(null);

  const [search, setSearch] = useState("");
  const [allIndustries, setAllIndustries] = useState();
  const [industry, setIndustry] = useState("");
  // const [requestedDate, setRequestedDate] = useState(moment(new Date()).subtract(3, 'month').format("jYYYY-jMM-jDD"));

  const token = localStorage.getItem("token");

  useEffect(() => {
    // const AthDate = moment(new Date()).subtract(3, 'month').format("jYYYY-jMM-jDD");
    axios
      .get(`${BASE_URL}/api/ath/getAll`, {
        headers: {
          authorization: token,
        },
      })
      .then((response) => {
        setWholeAth(response.data);
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
          toast("مشکلی پیش آمد");
          console.log(error);
        }
      });
    axios
      .get(`${BASE_URL}/api/board/categories`, {
        headers: {
          authorization: token,
        },
      })
      .then((response) => {
        setAllIndustries(response.data);
      })
      .catch((error) => {
        toast("مشکلی در بارگذاری فیلتر صنایع پیش آمد");
      });
  }, []);

  const handleFilter = (event) => {
    // setFiltering(true);
    // console.log(final);
    event.preventDefault();
    axios
      .get(
        `${BASE_URL}/api/ath/getAll?categoryArg=[${industry}]&nameArg=${search}`,
        {
          headers: {
            authorization: token,
          },
        }
      )
      .then((response) => {
        setWholeAth(response.data);
        if (response.data.length == 0) {
          toast("سهمی با این فیلتر وجود ندارد");
        }
        // setFiltering(false);
      })
      .catch((error) => {
        // setFiltering(false);
        toast("مشکلی پیش آمد");
      });
  };

  function handleSearch(event) {
    event.preventDefault();

    // if (!search) {
    //   setStocks(wholeAth);
    // } else {
    //   const foundItems = wholeAth.filter((item) =>
    //     item.stockTitle.includes(search)
    //   );
    //   setStocks(foundItems);
    // }
  }

  return (
    <div>
      <form onSubmit={handleFilter} style={{ display: "inline" }}>
        <input
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
        

      <div style={{ display: "inline" }}>
        <label style={{ margin: "30px", fontWeight: "bold" }}>
          فیلتر بر اساس صنعت:{" "}
          <select
            value={industry}
            onChange={(event) => setIndustry(event.target.value)}
            // style={{ width: "300px" }}
          >
            <option value={""}>...</option>
            {allIndustries &&
              allIndustries.map((option, index) => (
                <option key={index} value={`"${option}"`}>
                  {option}
                </option>
              ))}
          </select>
        </label>
      </div>
<button
          type="submit"
          style={{ backgroundColor: "white", borderRadius: "7px" }}
        >
          جستجو
        </button>
      </form>
      <div className="tablesContainer" style={{ height: "60vh" }}>
        <table className="commonTable">
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
                      ? { color: "#8cc73c" }
                      : item.to_ath >= 0
                      ? { color: "#87CEEB" }
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

export default Ath;
