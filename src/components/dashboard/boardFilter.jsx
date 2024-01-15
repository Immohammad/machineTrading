import { useEffect, useState } from "react";
import axios from "axios";

const Filter = (props) => {
  const [suspicios, setSuspicios] = useState(0);
  const [intel, setIntel] = useState(0);
  const [real, setReal] = useState(0);
  const [final, setFinal] = useState(0);
  const [buyerPower, setBuyerPower] = useState(0);

  const [filtering, setFiltering] = useState(false);

  const handleFilter = () => {
    setFiltering(true);
    // const userFilter = {
    //   workFieldsId: area,
    //   projectState: parseInt(real),
    //   managerRole: intel,
    //   needState: parseInt(suspicios),
    // };
    // axios
    //   .post(
    //     "https://bsite.net/RezaKlhor/Project/GetProjectsByFilter",
    //     userFilter
    //   )
    //   .then(function (response) {
    //     props.setter(response.data);
    //     setFiltering(false);
    //   })
    //   .catch(function (error) {
    //     setFiltering(false);
    //     if (error.response.status == 404) {
    //       props.setter(null);
    //     } else return;
    //     // NotificationManager.warning("فیلتر با خطا مواجه شد");
    //   });
  };

  return (
    <div id="boardFilter">
      <h5 style={{ display: "inline" }}>فیلتر بر اساس :</h5>

      <div>
        <label>
          صنعت:{" "}
          <select
            value=""
            // onChange={(event) => setIntel(event.target.value)}
            style={{ width: "140px" }}
          >
            <option value="">...</option>
            <option value="Professor">خودرویی</option>
            <option value="Student">چند رشته ای صنعتی</option>
            <option value="Company">مواد غذایی</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          حجم مشکوک{" "}
          <select
            value={suspicios}
            onChange={(event) => setSuspicios(event.target.value)}
          >
            <option value={0}>...</option>
            <option value={1}>عالی</option>
            <option value={2}>خوب</option>
            <option value={3}>متوسط</option>
            <option value={4}>ضعیف</option>
            <option value={5}>افتضاح</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          پول هوشمند{" "}
          <select
            value={intel}
            onChange={(event) => setIntel(event.target.value)}
          >
            <option value={0}>...</option>
            <option value={1}>عالی</option>
            <option value={2}>خوب</option>
            <option value={3}>متوسط</option>
            <option value={4}>ضعیف</option>
            <option value={5}>افتضاح</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          پول حقیقی{" "}
          <select
            value={real}
            onChange={(event) => setReal(event.target.value)}
          >
            <option value={0}>...</option>
            <option value={1}>عالی</option>
            <option value={2}>خوب</option>
            <option value={3}>متوسط</option>
            <option value={4}>ضعیف</option>
            <option value={5}>افتضاح</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          پایانی به آخرین{" "}
          <select
            value={final}
            onChange={(event) => setFinal(event.target.value)}
          >
            <option value={0}>...</option>
            <option value={1}>عالی</option>
            <option value={2}>خوب</option>
            <option value={3}>متوسط</option>
            <option value={4}>ضعیف</option>
            <option value={5}>افتضاح</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          قدرت خریدار{" "}
          <select
            value={buyerPower}
            onChange={(event) => setBuyerPower(event.target.value)}
          >
            <option value={0}>...</option>
            <option value={1}>عالی</option>
            <option value={2}>خوب</option>
            <option value={3}>متوسط</option>
            <option value={4}>ضعیف</option>
            <option value={5}>افتضاح</option>
          </select>
        </label>
      </div>

      <button disabled={filtering} onClick={handleFilter}>
        اعمال فیلترها
      </button>
    </div>
  );
};
export default Filter;
