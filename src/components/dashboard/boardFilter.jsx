import { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../variables.js";
import { toast } from "react-toastify";

const Filter = (props) => {
  const [suspicios, setSuspicios] = useState([]);
  const [intel, setIntel] = useState([]);
  const [real, setReal] = useState([]);
  const [final, setFinal] = useState([]);
  const [buyerPower, setBuyerPower] = useState([]);
  const [industry, setIndustry] = useState([]);
  const [stockName, setStockName] = useState("");

  const [filtering, setFiltering] = useState(false);
  const [allIndustries, setAllIndustries] = useState();
  const token = localStorage.getItem("token");

  const handleFilter = () => {
    // setFiltering(true);
    console.log(final)
    axios
      .get(
        `${BASE_URL}/api/board/getAll?date=${props.date}&nameArg=${stockName}&categoryArg=[${industry}]&finalLastArg=[${final}]&realMoneyArg=[${real}]&susArg=[${suspicios}]&intelMoneyArg=[${intel}]&buyPowerArg=[${buyerPower}]`,
        {
          headers: {
            authorization: token,
          },
        }
      )
      .then((response) => {
        props.setter(response.data);
        console.log(suspicios)
        setFiltering(false);
      })
      .catch((error) => {
        setFiltering(false);
        toast("مشکلی پیش آمد");
      });
  };

  const handleReset = () => {
    setSuspicios([]);
    setIntel([]);
    setReal([]);
    setFinal([]);
    setBuyerPower([]);
    setIndustry([]);
    setStockName("");
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
          حجم مشکوک:{" "}
          <select
            value={suspicios}
            onChange={(event) => setSuspicios(event.target.value)}
          >
            <option value={[]}>...</option>
            <option value={["خوب", "خیلی خوب"]}>خوب یا خیلی خوب</option>
            <option value={["متوسط"]}>متوسط</option>
            <option value={["بد", "خیلی بد"]}>بد یا خیلی بد</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          پول هوشمند:{" "}
          <select
            value={intel}
            onChange={(event) => setIntel(event.target.value)}
          >
            <option value={[]}>...</option>
            <option value={["خوب", "خیلی خوب"]}>خوب یا خیلی خوب</option>
            <option value={["متوسط"]}>متوسط</option>
            <option value={["بد", "خیلی بد"]}>بد یا خیلی بد</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          پول حقیقی:{" "}
          <select
            value={real}
            onChange={(event) => setReal(event.target.value)}
          >
            <option value={[]}>...</option>
            <option value={["خوب", "خیلی خوب"]}>خوب یا خیلی خوب</option>
            <option value={["متوسط"]}>متوسط</option>
            <option value={["بد", "خیلی بد"]}>بد یا خیلی بد</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          پایانی به آخرین:{" "}
          <select
            value={final}
            onChange={(event) => setFinal(event.target.value)}
          >
            <option value={[]}>...</option>
            <option value={["خوب", "خیلی خوب"]}>خوب یا خیلی خوب</option>
            <option value={["متوسط"]}>متوسط</option>
            <option value={["بد", "خیلی بد"]}>بد یا خیلی بد</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          قدرت خریدار:{" "}
          <select
            value={buyerPower}
            onChange={(event) => setBuyerPower(event.target.value)}
          >
            <option value={[]}>...</option>
            <option value={["خوب", "خیلی خوب"]}>خوب یا خیلی خوب</option>
            <option value={["متوسط"]}>متوسط</option>
            <option value={["بد", "خیلی بد"]}>بد یا خیلی بد</option>
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
            <option value={""}>...</option>
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
      <button onClick={handleReset}>پاکسازی فیلترها</button>
    </div>
  );
};
export default Filter;
