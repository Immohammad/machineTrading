import { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../variables.js";
import { toast } from "react-toastify";

function FundamentalFilter(props) {
  const [stockName, setStockName] = useState("");
  const [industry, setIndustry] = useState("خودرو و ساخت قطعات");
  const [importance, setImportance] = useState("");
  const [audited, setAudited] = useState("");

  const [allIndustries, setAllIndustries] = useState();
  const [filtering, setFiltering] = useState(false);
  const [reseting, setReseting] = useState(false);
  const token = localStorage.getItem("token");

  const handleFilter = () => {
    setFiltering(true);
    axios
      .get(
        `${BASE_URL}/api/cp/getpaginated?nameArg=${stockName}&categoryArg=["${industry}"]&importanceArg=[${importance}]&isAuditedArg=${audited}`,
        {
          headers: {
            authorization: token,
          },
        }
      )
      .then((response) => {
        props.setter(response.data.stocks);
        if (response.data.stocks.length == 0) {
          toast("گزارشی با این فیلتر وجود ندارد");
        }
        setFiltering(false);
      })
      .catch((error) => {
        setFiltering(false);
        toast("مشکلی پیش آمد");
      });
  };

  const handleReset = () => {
    setReseting(true);
    setFiltering(true);

    setStockName("");
    setIndustry(allIndustries[19]);
    setImportance("");
    setAudited("");

    axios
      .get(
        `${BASE_URL}/api/cp/getpaginated?categoryArg=["خودرو و ساخت قطعات"]`,
        {
          headers: {
            authorization: token,
          },
        }
      )
      .then((response) => {
        props.setter(response.data.stocks);
        setReseting(false);
        setFiltering(false);
      })
      .catch((error) => {
        setReseting(false);
        setFiltering(false);
        toast("مشکلی پیش آمد");
      });
  };

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/board/categories`, {
        headers: {
          authorization: token,
        },
      })
      .then((response) => {
        setAllIndustries(response.data);
        setIndustry(response.data[19]);
      })
      .catch((error) => {
        toast("مشکلی در بارگذاری فیلتر صنایع پیش آمد");
      });
  }, []);
  
  return (
    <div id="boardFilter">
      <h5 style={{ display: "inline" }}>فیلتر بر اساس :</h5>

      <div>
        <label>
          نام سهم:{" "}
          <input
            value={stockName}
            onChange={(event) => setStockName(event.target.value)}
            type="search"
            style={{
              borderRadius: "7px",
              display: "inline",
            }}
            placeholder=" ..."
          />
        </label>
      </div>

      <div>
        <label>
          اهمیت گزارش:{" "}
          <select
            value={importance}
            onChange={(event) => setImportance(event.target.value)}
          >
            <option value={""}>...</option>
            <option value={"2"}>طلایی</option>
            <option value={"1"}>نقره‌ای</option>
            <option value={"0"}>برنزی</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          حسابرسی:{" "}
          <select
            value={audited}
            onChange={(event) => setAudited(event.target.value)}
          >
            <option value={""}>...</option>
            <option value={"true"}>شده</option>
            <option value={"false"}>نشده</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          صنعت:{" "}
          <select
            value={industry}
            onChange={(event) => setIndustry(event.target.value)}
            style={{ width: "300px" }}
          >
            <option value={`""`}>...</option>
            {allIndustries &&
              allIndustries.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
          </select>
        </label>
      </div>

      <button disabled={filtering} onClick={handleFilter}>
        اعمال فیلترها
      </button>
      <button disabled={reseting} onClick={handleReset}>
        پاکسازی فیلترها
      </button>
    </div>
  );
}

export default FundamentalFilter;
