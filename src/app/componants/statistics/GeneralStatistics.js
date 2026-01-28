"use client";
import React, { useState, useEffect, useMemo } from "react";
import "../home/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
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

const GeneralStatistics = React.memo(function GeneralStatistics({ data, title, value, Growth, icon }) {
  // تحديد السهم واللون بناءً على النمو
  const arrow = useMemo(() => (Growth > 0 ? faArrowUp : faArrowDown), [Growth]);
  const iconStateClassName = useMemo(() => (Growth > 0 ? "growth" : "growth-negative"), [Growth]);
  const show = useMemo(() => data.length !== 0 && Growth !== 0, [data, Growth]);

  // بيانات الرسم البياني
  const chartData = useMemo(() => {
    if (!Array.isArray(data) || data.length === 0) return { labels: [], datasets: [] };
    let adjustedData;
    if (Growth < 0) {
      const maxVal = Math.max(...data);
      adjustedData = data.map((val) => maxVal - val + data[0]);
    } else {
      adjustedData = data;
    }
    return {
      labels: Array(data.length).fill(''),
      datasets: [
        {
          label: '',
          data: adjustedData,
          fill: false,
          borderColor: '#fff',
          tension: 0.4,
          pointRadius: 0,
        },
      ],
    };
  }, [data, Growth]);

  const chartOptions = useMemo(() => ({
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: false },
      tooltip: { enabled: false },
    },
    scales: {
      x: { display: false, grid: { display: false } },
      y: { display: false, grid: { display: false } },
    },
  }), []);

  return (
    <section className="generalStatisticsCard" aria-label={title + " statistics"}>
      <header className="statisticsHeader">
        <h4>{title}</h4>
        <FontAwesomeIcon width={20} height={20} icon={icon} aria-label={title + " icon"} />
      </header>
      <div className="statisticsValue">
        <p>{value}</p>
      </div>

      <footer className="statisticsFooter">
        {show && (
          <div className="statisticsGrowth">
            <div className="growthIcon">
              <FontAwesomeIcon width={15} height={15} icon={arrow} className={iconStateClassName} aria-label={Growth > 0 ? "Positive growth" : "Negative growth"} />
              <span className={iconStateClassName}>{Growth}%</span>
            </div>
            <div style={{ width: 80, height: 60, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Line data={chartData} options={chartOptions} aria-label={title + " trend chart"} />
            </div>
          </div>
        )}
      </footer>
    </section>
  );
});

export default GeneralStatistics;