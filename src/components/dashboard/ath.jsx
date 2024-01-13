import React, { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from '../variables.js';

// import moment from "jalali-moment";
// import { DatePicker } from "zaman";
import loading from "../assets/loading.gif";
import { toast } from "react-toastify";

function Ath() {

  const [stocks, setStocks] = useState();
  const [wholeAth, setWholeAth] = useState(null);

  const [search, setSearch] = useState('');
  // const [requestedDate, setRequestedDate] = useState(moment(new Date()).subtract(3, 'month').format("jYYYY-jMM-jDD"));

  const token = localStorage.getItem('token')

  useEffect(() => {
    // const AthDate = moment(new Date()).subtract(3, 'month').format("jYYYY-jMM-jDD");
    axios
      .get(`${BASE_URL}/api/ath/getAll`, {
        headers: {
          authorization: token,
        }
      })
      .then((response) => {
        const sorted = response.data.slice().sort((a, b) => b.to_ath - a.to_ath);
        setWholeAth(sorted)
        setStocks(sorted)
        console.log(sorted)
        // console.log(AthDate)
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
          console.log(error)
        }
      });
  }, []);

  function handleSearch(event) {
    event.preventDefault();

    if (!search) {
      setStocks(wholeAth);
    } else {
      const foundItems = wholeAth.filter(item => item.stockTitle.includes(search));
      setStocks(
        foundItems
      );
    }
  }

  // function handleDate(event) {
  //   setRequestedDate(moment(event.value).subtract(3, 'month').format("jYYYY-jMM-jDD"))
  //   axios
  //     .get(`http://45.129.36.165:3000/api/board/getAll?date=${requestedDate}`, {
  //       headers: {
  //         authorization: token,
  //       }
  //     })
  //     .then((response) => {
  //       setWholeAth(response.data)
  //       setStocks(response.data)
  //       console.log(response.data)
  //       console.log(requestedDate)
  //     })
  //     .catch((error) => {
  //       toast("در تاریخ انتخاب شده بازار تعطیل می باشد. ");
  //       console.log("xz")
  //       console.log(requestedDate)
  //     });
  // }

  return (
    <div>
      {/* <DatePicker
        onChange={(event) => {
          console.log(moment(event.value).format("jYYYY-jMM-jDD"))
          handleDate(event)
        }
        }
        defaultValue={new Date()}
      /> */}
      {/* <p>تاریخ امتیازدهی: {requestedDate}</p> */}
      <form
        onSubmit={handleSearch}
        style={{ display: "inline" }}
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
          placeholder="جستجوی نام سهم"
        />
        <button
          type="submit"
          style={{ backgroundColor: "white", borderRadius: "7px" }}
        >
          جستجو
        </button>
      </form>
      <div style={{ display: "inline" }}>
        <label style={{ margin: "30px" }}>
          فیلتر بر اساس صنعت:{" "}
          <select
            value=""
            // onChange={(event) => setManager(event.target.value)}
            style={{ display: "inline" }}
          >
            <option value="">همه</option>
            <option value="Professor">خودرویی</option>
            <option value="Student">چند رشته ای صنعتی</option>
            <option value="Company">مواد غذایی</option>
          </select>
        </label>
      </div>

      <div className="tablesContainer" style={{height:'60vh'}}>
        <table className="boardTable">
          <thead>
            <tr>
              <th>رتبه</th>
              <th>سهم</th>
              <th>قیمت (تومان)</th>
              <th>سقف تاریخی (تومان)</th>
              <th>فاصله از کف تاریخی %</th>
              <th>افت از سقف تاریخی %</th>
              <th>فاصله تا سقف تاریخی %</th>
            </tr>
          </thead>

          <tbody>
            {stocks ?
              (stocks.map((item, index) => (
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
                  <td style={{ fontWeight: "bold" }}>{index + 1}</td>
                  <td style={{ fontWeight: "bold" }}>{item.stockTitle}</td>
                  <td>{(item.price / 10).toFixed(0)}</td>
                  <td>{(item.ath_price / 10).toFixed(0)}</td>
                  <td>{item.to_atl.toFixed(0)}</td>
                  <td>{item.from_ath.toFixed(0)}</td>
                  <td style={{ fontWeight: "bold" }}>{item.to_ath.toFixed(0)}</td>
                </tr>
              ))) : (
                <tr>
                  <td colSpan={6}><img src={loading} className="loadingGif" /></td>
                </tr>
              )
            }

          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Ath;
