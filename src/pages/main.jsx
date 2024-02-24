import React from "react"; 
import {Dropdown} from ".././components/dropdown.jsx";
import { Chart } from "react-google-charts";

export const data = [
  ["Dorm", "January", "February"],
  ["ISR", 8175000, 8008000],
  ["PAR", 3792000, 3694000],
  ["FAR", 2695000, 2896000],
  ["Ikenberry", 2099000, 1953000],
  ["LAR", 1526000, 1517000],
];

export const options = {
  title: "Water Consumption in Dorm Buildings across UIUC",
  chartArea: { width: "50%" },
  hAxis: {
    title: "Total Water Consumption (gallons)",
    minValue: 0,
  },
  vAxis: {
    title: "Dorm",
  },
};

export const Main = () => {
    return(
        <div classname="page">
            <div>Main Page</div>
            <Chart
                chartType="BarChart"
                width="100%"
                height="400px"
                data={data}
                options={options}
                />
        </div>
    ); 
}