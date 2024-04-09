import { React, useState } from "react";
import { useForm } from "react-hook-form";

function Bubble() {
  const [type, setType] = useState(1);

  const [dollar, setDollar] = useState();
  const [dollarComma, setDollarComma] = useState();

  const [gold, setGold] = useState();
  const [goldComma, setGoldComma] = useState();

  const [sekke, setSekke] = useState();
  const [sekkeComma, setSekkeComma] = useState();

  const [result, setResult] = useState();

  const [bubblePercentage, setBubblePercentage] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newResult = (type * 0.9 * dollar * gold) / 31.1 + 50000;
    const newBubblePercentage = ((sekke - newResult) * 100) / newResult;
    setResult(newResult);
    setBubblePercentage(newBubblePercentage);
  };

  const handleChange = (event, setter, setterComma) => {
    const rawInput = event.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    setter(rawInput);

    const formatted = rawInput.replace(/\B(?=(\d{3})+(?!\d))/g, ","); // Add commas every three digits
    setterComma(formatted);
  };
  return (
    <div id="bubbleContainer">
      <form onSubmit={handleSubmit} id="bubbleForm">
        <h3 style={{ padding: "15px", paddingTop: "0" }}>حباب سکه</h3>
        <select value={type} onChange={(event) => setType(event.target.value)}>
          <option value="1">سکه گرمی</option>
          <option value="2.033">ربع سکه</option>
          <option value="4.066">نیم سکه</option>
          <option value="8.133">تمام سکه و سکه امامی</option>
          {/* <option value="8.133">سکه امامی</option> */}
        </select>
        <label>
          قیمت دلار (تومان):
          <br />
          <input
            type="text"
            className="bubbleInput"
            value={dollarComma}
            onChange={(event) => handleChange(event, setDollar, setDollarComma)}
            required
          />
        </label>
        <label>
          قیمت انس طلای جهانی (دلار):
          <br />
          <input
            type="text"
            className="bubbleInput"
            value={goldComma}
            onChange={(event) => handleChange(event, setGold, setGoldComma)}
            required
          />
        </label>
        <label>
          قیمت روز سکه (تومان):
          <br />
          <input
            type="text"
            className="bubbleInput"
            value={sekkeComma}
            onChange={(event) => handleChange(event, setSekke, setSekkeComma)}
            required
          />
        </label>

        <input type="submit" value="محاسبه" id="submitSekke" />
        <br />
        {result && (
          <p style={{ paddingTop: "30px" }}>
            ارزش ذاتی سکه برابر {parseInt(result, 10).toLocaleString()} تومان
            است
          </p>
        )}
        {bubblePercentage && (
          <p style={{ paddingTop: "30px" }}>
            سکه {bubblePercentage.toFixed(2)} درصد (
            {parseInt(sekke - result, 10).toLocaleString()} تومان) حباب دارد.
          </p>
        )}
        {/* <p st
        yle={{paddingTop:'30px'}}>{bubblePercentage}</p> */}
      </form>
    </div>
  );
}

export default Bubble;
