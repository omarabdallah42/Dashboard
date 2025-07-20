import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
  LineElement,
  LineController,
  PointElement,
  Legend,
  Tooltip,
  Filler,
} from "chart.js";


import { Chart } from "react-chartjs-2";


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
  LineElement,
  LineController,
  PointElement,
  Legend,
  Tooltip,
  Filler
);

const labels = ["Week 1", "Week 2", "Week 3", "Week 4"];

const data = {
  labels,
  datasets: [
    {
      type: "bar",
      label: "Week 1",
      data: [5.75, 0, 0, 0],
      backgroundColor: "#2563eb",
      stack: "week1",
      grouped: false,
      borderRadius: 5,
      barPercentage: 0.45,
      categoryPercentage: 0.5,
    },
    {
      type: "bar",
      label: "Week 2",
      data: [0.5, 10, 14.5, 0],
      backgroundColor: "#3b82f6",
      stack: "week2",
      grouped: false,
      borderRadius: 5,
      barPercentage: 0.45,
      categoryPercentage: 0.5,
    },
    {
      type: "bar",
      label: "Week 3",
      data: [0, 0, 13, 0],
      backgroundColor: "#60a5fa",
      stack: "week3",
      grouped: false,
      borderRadius: 5,
      barPercentage: 0.45,
      categoryPercentage: 0.5,
    },
    {
      type: "bar",
      label: "Week 4",
      data: [0, 0, 0, 16],
      backgroundColor: "#93c5fd",
      stack: "week4",
      grouped: false,
      borderRadius: 5,
      barPercentage: 0.45,
      categoryPercentage: 0.5,
    },
    {
      type: "line",
      label: "Growth Rate",
      data: [6, 11, 15, 16],
      borderColor: "#334155",
      backgroundColor: "rgba(51, 65, 85, 0.10)",
      fill: true,
      borderWidth: 2.5,
      tension: 0.35,
      pointBackgroundColor: "#fff",
      pointBorderColor: "#334155",
      pointRadius: 6,
      pointHoverRadius: 8,
      order: 0,
    },
  ],
};

const options = {
  responsive: true,
  animation: {
    duration: 900,
    easing: "easeOutCubic",
  },
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        usePointStyle: true,
        font: {
          size: 13,
          weight: "bold",
        },
        color: "#334155",
      },
    },
    tooltip: {
      mode: "index",
      intersect: false,
      backgroundColor: "rgba(241, 245, 249, 0.5)",
      titleColor: "#1e293b",
      bodyColor: "#334155",
      padding: 10,
      cornerRadius: 6,
    },
  },
  interaction: {
    mode: "index",
    intersect: false,
  },
  scales: {
    x: {
      ticks: {
        color: "#64748b",
        font: {
          size: 12,
          weight: "bold",
        },
      },
      grid: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      max: 18,
      ticks: {
        color: "#94a3b8",
        font: {
          size: 11,
          weight: "bold",
        },
        stepSize: 2,
      },
      grid: {
        color: "rgba(226, 232, 240, 0.4)",
        borderDash: [4, 4],
      },
      title: {
        display: false,
      },
    },
  },
};

const GrowthChart = () => (
  <div className="ChartContainer max-w-3xl mx-auto p-4 bg-white rounded-xl shadow-md">
    <h2>Growth</h2>
    <Chart type="bar" data={data} options={options} />
  </div>
);

export default GrowthChart;