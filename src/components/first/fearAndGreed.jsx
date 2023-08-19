import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

function getData() {
  return [
    ["Label", "Value"],
    [" ", 11],
  ];
}

const options = {
  width: 400,
  height: 400,
  redFrom: 80,
  redTo: 100,
  yellowFrom: 60,
  yellowTo: 80,
  minorTicks: 5,
};

function FearAndGreed() {
  const [data, setData] = useState(getData);

//   useEffect(() => {
//     const id = setInterval(() => {
//       setData(getData());
//     }, 3000);

//     return () => {
//       clearInterval(id);
//     };
//   });

  return (
    <Chart
      chartType="Gauge"
      width='400px'
      height="400px"
      data={data}
      options={options}
    />
  );
}

export default FearAndGreed;