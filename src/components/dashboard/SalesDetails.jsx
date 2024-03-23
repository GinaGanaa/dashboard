import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    customCanvasBackgroundColor: {
      color: "lightGreen",
    },
  },
};

const labels = [
  "5k",
  "10k",
  "15k",
  "20k",
  "25k",
  "30k",
  "35k",
  "40k",
  "45k",
  "50k",
  "55k",
  "60k",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 2",
      data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      shadow: "10px 10px 5px red",
    },
  ],
};

export function SalesDetails() {
  return (
    <div>
      <div className="w-[80%] h-[444px] bg-white p-[35px] rounded-[12px] ">
        <h2 className="text-[24px] font-medium pb-[30px]">Sales Details</h2>
        <Line options={options} data={data} />
      </div>
    </div>
  );
}
