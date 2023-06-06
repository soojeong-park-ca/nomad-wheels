import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "2022-2023 Income Chart",
    },
  },
};

const labels = ["Jul", "Aug", "Sept", "Oct", "Nov", "Dec", "Jan"];
const monthlyIncome = [930, 620, 590, 840, 980, 560, 720];

export const data = {
  labels,
  datasets: [
    {
      label: "Income ($)",
      data: monthlyIncome,
      backgroundColor: "rgb(255, 216, 3)",
    },
  ],
};

export default function App() {
  return <Bar options={options} data={data} />;
}
