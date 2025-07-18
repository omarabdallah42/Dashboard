import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
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
  LineElement,
  PointElement,
  Legend,
  Tooltip,
  Filler
);

const GrowthChart = () => {
  const labels = ["Week 1", "Week 2", "Week 3", "Week 4"];

  const getBarGradient = (ctx, colorStops) => {
    const chart = ctx.chart;
    const { ctx: canvasCtx, chartArea } = chart;
    if (!chartArea) return null;
    const gradient = canvasCtx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    colorStops.forEach((stop) => {
      gradient.addColorStop(stop.offset, stop.color);
    });
    return gradient;
  };

  const data = {
    labels,
    datasets: [
      {
        type: "bar",
        label: "Week 1",
        data: [5.75, 0, 0, 0],
        backgroundColor: (ctx) =>
          getBarGradient(ctx, [
            { offset: 0, color: "rgb(37, 99, 235)" },   // #2563eb
            { offset: 1, color: "rgb(59, 130, 246)" },  // #3b82f6
          ]),
        stack: "week1",
        grouped: false,
        borderRadius: 5,
        barPercentage: 0.45,
        categoryPercentage: 0.5,
      },
      {
        type: "bar",
        label: "Week 2",
        data: [.5, 10, 14.5, 0],
        backgroundColor: (ctx) =>
          getBarGradient(ctx, [
            { offset: 0, color: "rgb(59, 130, 246)" },  // #3b82f6
            { offset: 1, color: "rgb(96, 165, 250)" },  // #60a5fa
          ]),
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
        backgroundColor: (ctx) =>
          getBarGradient(ctx, [
            { offset: 0, color: "rgb(96, 165, 250)" },  // #60a5fa
            { offset: 1, color: "rgb(147, 197, 253)" }, // #93c5fd
          ]),
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
        backgroundColor: (ctx) =>
          getBarGradient(ctx, [
            { offset: 0, color: "rgb(147, 197, 253)" }, // #93c5fd
            { offset: 1, color: "rgb(174, 184, 196)" }, // #e0e7ef
          ]),
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
        borderColor: "rgb(51, 65, 85)", // #334155
        backgroundColor: "rgba(51, 65, 85, 0.10)",
        fill: true,
        borderWidth: 2.5,
        tension: 0.35,
        pointBackgroundColor: "rgb(255, 255, 255)",
        pointBorderColor: "rgb(51, 65, 85)",
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
          color: "rgb(51, 65, 85)", // #334155
        },
      },
      tooltip: {
        mode: "index",
        intersect: false,
        backgroundColor: "rgba(241, 245, 249, 0.5)", // #f1f5f9
        titleColor: "rgb(30, 41, 59)", // #1e293b
        bodyColor: "rgb(51, 65, 85)", // #334155
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
          color: "rgb(100, 116, 139)", // #64748b
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
          color: "rgb(148, 163, 184)", // #94a3b8
          font: {
            size: 11,
            weight: "bold",
          },
          stepSize: 2,
        },
        grid: {
          color: "rgba(226, 232, 240, 0.4)", // #e2e8f0
          borderDash: [4, 4],
        },
        title: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="ChartContainer max-w-3xl mx-auto p-4 bg-white rounded-xl shadow-md">
      <h2>  Growth </h2>
      <Chart type="bar" data={data} options={options} />
    </div>
  );
};

export default GrowthChart;
