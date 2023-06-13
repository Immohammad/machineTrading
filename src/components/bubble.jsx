import { React, useState } from "react";
import { useForm } from "react-hook-form";

function Bubble() {
  const [bubblePercentage, setBubblePercentage] = useState(0);
  const [type, setType] = useState(1);
  const [dollar, setDollar] = useState();
  const [gold, setGold] = useState();
  const [sekke, setSekke] = useState();
  const [result, setResult] = useState();
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors } ,
  // } = useForm();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(6);
    // let result = (data.type * 0.9 * data.dollar * data.gold) / 31.1 + 50000;
    setResult((type * 0.9 * dollar * gold) / 31.1 + 50000);
    setBubblePercentage((sekke - result) / result);
    console.log(bubblePercentage);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select value={type} onChange={(event) => setType(event.target.value)}>
          <option value="1">سکه گرمی</option>
          <option value="2.033">ربع سکه</option>
          <option value="4.066">نیم سکه</option>
          <option value="8.133">تمام سکه</option>
        </select>
        <label>
          قیمت دلار:
          <input type="number" value={dollar} onChange={(event) => setDollar(event.target.value)} required/>
          {/* {errors.dollar && <span>This field is required</span>} */}
        </label>
        <label>
          قیمت انس طلای جهانی:
          <input type="number" value={gold} onChange={(event) => setGold(event.target.value)} required />
          {/* {errors.gold && <span>This field is required</span>} */}
        </label>
        <label>
          قیمت روز سکه:
          <input
            type="number"
            value={sekke} onChange={(event) => setSekke(event.target.value)}
            // ref={register({ required: true })}
          />
          {/* {errors.sekke && <span>This field is required</span>} */}
        </label>

        <input type="submit" value="محاسبه" id="submitSekke"/>
      {result && <p style={{paddingTop:'30px'}}>ارزش ذاتی سکه برابر {result} است</p>}
      {bubblePercentage && <p style={{paddingTop:'30px'}}>سکه {bubblePercentage} درصد حباب دارد.</p>}
      {/* <p style={{paddingTop:'30px'}}>{bubblePercentage}</p> */}
      </form>
    </div>
  );
}

export default Bubble;
