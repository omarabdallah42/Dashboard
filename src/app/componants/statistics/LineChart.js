"use client";
import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);
export default function LineChart() {

  const labels = [" A", "Page B", "Page C", "Page D", "Page E", "Page F"];
  const data = {
    labels,

    datasets: [
      {
        label: "value A",
        data: [0, 100, 400, 4005, 5000000, 6000],
        borderColor: "#4bc0c0",
        backgroundColor: "#4bc0c033",
        tension: 0.3,
        fill: true,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: "#4bc0c0",
        pointBorderColor: "#ffffff",
        pointBorderWidth: 2,
        pointHoverBackgroundColor: "#4bc0c0",
      },
      {
        label: "value B",
        data: [0, 106, 423, 312, 451, 623],
        borderColor: "#ff6384",
        backgroundColor: "#ff638433",
        tension: 0.3,
        fill: true,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: "#ff6384",
        pointBorderColor: "#ffffff",
        pointBorderWidth: 2,
        pointHoverBackgroundColor: "#ff6384",
      },
    ],

  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "bottom" },
    },
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Line  data={data} options={options} />
    </div>
  );
}
