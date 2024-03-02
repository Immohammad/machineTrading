import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

function getData() {
  return [
    ["Label", "Value"],
    ["شاخص ترس و طمع", 12],
  ];
}

const options = {
  width: 350,
  height: 350,
  redFrom: 80,
  redTo: 100,
  yellowFrom: 60,
  yellowTo: 80,
  minorTicks: 4,
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
    <div style={{ marginRight: "auto", marginLeft: "auto" }}>
      <Chart
        chartType="Gauge"
        width="350px"
        height="350px"
        data={data}
        options={options}
      />
    </div>
  );
}

export default FearAndGreed;
