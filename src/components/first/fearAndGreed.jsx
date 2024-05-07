import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import axios from "axios";
import BASE_URL from "../variables.js";

function getData() {
  return [
    ["Label", "Value"],
    ["شاخص ترس و طمع", 0],
  ];
}

const options = {
  width: 350,
  height: 350,
  redFrom: 80,
  redTo: 100,
  yellowFrom: 60,
  yellowTo: 80,
  minorTicks: 2,
};

function FearAndGreed() {
  const [data, setData] = useState(getData);

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     setData(getData());
  //   }, 3000);

  //   return () => {
  //     clearInterval(id);
  //   };
  // });
  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/fearngreed/getTotal?date=1403-02-12`)
      .then((response) => {
        // console.log(parseInt(response.data.total));
        setData([
          ["Label", "Value"],
          ["شاخص ترس و طمع", parseInt(response.data.total)],
        ]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
