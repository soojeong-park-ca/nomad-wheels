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
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 0,
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
      display: false,
      grid: {
        display: false,
      },
    },
    y: {
      stacked: true,
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
};

const labels = ["☆☆☆☆☆", "☆☆☆☆", "☆☆☆", "☆☆", "☆"];
const allReviews = [15, 12, 2, 1, 1];

export const data = {
  labels,
  datasets: [
    {
      data: allReviews,
      backgroundColor: "rgb(255, 216, 3)",
    },
  ],
};

export default function ReviewsGraph() {
  return <Bar options={options} data={data} />;
}
