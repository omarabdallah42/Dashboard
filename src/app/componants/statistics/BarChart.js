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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels,
  datasets: [
    {
      label: "Sales 2024",
      data: [3, 6, 4, 8, 7, 20],
      borderColor: "#1d4ed8", 
      backgroundColor: "rgba(29, 78, 216, 0.15)",
      borderWidth: 3,
      tension: 0.4,
      fill: true,
      pointBackgroundColor: "#fff",
      pointBorderColor: "#1d4ed8",
      pointRadius: 6,
      pointHoverRadius: 8,
    },
    {
      label: "Sales 2025",
      data: [2, 4, 6, 5, 9, 12],
      borderColor: "#16a34a", // Vivid green
      backgroundColor: "rgba(22, 163, 74, 0.15)",
      borderWidth: 3,
      tension: 0.4,
      fill: true,
      pointBackgroundColor: "#fff",
      pointBorderColor: "#16a34a",
      pointRadius: 6,
      pointHoverRadius: 8,
    },
    {
      label: "Sales 2026",
      data: [2, 4, 6, 5, 2, 12],
      borderColor: "#e11d48", // Strong pink/red
      backgroundColor: "rgba(225, 29, 72, 0.15)",
      borderWidth: 3,
      tension: 0.4,
      fill: true,
      pointBackgroundColor: "#000",
      pointBorderColor: "#e11d48",
      pointRadius: 6,
      pointHoverRadius: 8,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      labels: {
        font: {
          size: 14,
          weight: "bold",
          color:'red'
        },
        color: "rgba(255, 255, 255, 0.8)",
      },
    },
    tooltip: {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      titleColor: "#ffff",
      bodyColor: "#fff",
      borderColor: "#2563eb",
      borderWidth: 1,
    },
  },
  scales: {
    x: {
      ticks: {
        color: "#555",
        font: {
          size: 12,
          weight: "bold",
        },
      },
      grid: {
        display: false,
      },
    },
    y: {
      ticks: {
        color: "#555",
        font: {
          size: 12,
          weight: "bold",
        },
        stepSize: 2,
      },
      grid: {
        color: "rgba(0,0,0,0.1)",
        borderDash: [4, 4],
      },
    },
  },
};

const MultiLineChart = () => {
  return (
    <div className="ChartContainer">
      <h2>Statics Growth</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default MultiLineChart;
