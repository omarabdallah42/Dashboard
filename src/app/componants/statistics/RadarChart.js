"use client";

import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const RadarChart = ({ label, data1, data2 }) => {
  // إذا لم يتم تمرير labels، استخدم عدد عناصر data1 أو data2 كـ labels افتراضية
  const defaultLabels = Array.from({ length: Math.max(data1?.length || 0, data2?.length || 0) }, (_, i) => `Label ${i + 1}`);
  const chartLabels = label && Array.isArray(label) && label.length > 0 ? label : defaultLabels;

  const data = {
    labels: chartLabels,
    datasets: [
      {
        label: "This Week",
        data: data1,
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        borderColor: "#3B82F6",
        pointBackgroundColor: "#3B82F6",
      },
      {
        label: "Last Week",
        data: data2,
        backgroundColor: "rgba(34, 197, 94, 0.2)",
        borderColor: "#22C55E",
        pointBackgroundColor: "#22C55E",
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      r: {
        // إظهار الكلام على المحاور (الأطراف)
        pointLabels: {
          display: true,
          color: "#fff",
          font: {
            size: 14,
          },
        },
        // إخفاء الأرقام اللي داخل الدائرة (التكرات)
        ticks: {
          display: false,
          beginAtZero: true,
        },
        // خطوط الشبكة تظهر ولكن بلون فاتح
        grid: {
          color: "rgba(255, 255, 255, 0.2)",
        },
        angleLines: {
          color: "rgba(255, 255, 255, 0.3)",
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "#fff",
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  // تنسيق بسيط بدون Tailwind، فقط CSS عادي
  const containerStyle = {
    width: "100%",
    maxWidth: "600px",
    margin: "20px auto",
    height: "100%",
    padding: "20px",
    borderRadius: "10px",
  };
  const titleStyle = {
    color: "#fff",
    textAlign: "center",
    marginBottom: "16px",
    fontSize: "20px",
    fontWeight: "600",
    height: "40%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div className="chart-container" style={containerStyle}>
      <Radar  style={titleStyle} data={data} options={options} />
    </div>
  );
};

export default RadarChart;
