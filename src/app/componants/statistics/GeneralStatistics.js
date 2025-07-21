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

export default function GeneralStatistics({ data , title, value, Growth, icon }) {
  const [arrow, setArrow] = useState(faArrowUp);
  const [iconStateClassName, setIconStateClassName] = useState("growth");
  const [show,SetShow] = useState(true);
  useEffect(() => {
    if (Growth > 0) { 
      setArrow(faArrowUp);
      setIconStateClassName("growth");
    } else {
      setArrow(faArrowDown);
      setIconStateClassName("growth-negative");
    }
  }, [Growth]);
  useEffect(() => {
   if(data.length == 0 || Growth == 0){
     SetShow(false);
   }
  }, [data, Growth]);
  const chartData = useMemo(() => {
    const baseData = data;

    let adjustedData;
    if (Growth < 0) {
      const maxVal = Math.max(...baseData);
      adjustedData = baseData.map((val) => maxVal - val + baseData[0]);
    } else {
      adjustedData = baseData;
    }

    return {
      labels: ['', '', '', '', '', ''],
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
  }, [Growth]);

  const chartOptions = {
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
  };

  return (
    <div className="generalStatisticsCard">
      <div className="statisticsHeader">
        <h4>{title}</h4>
        <FontAwesomeIcon icon={icon} />
      </div>

      <div className="statisticsValue">
        <p>{value}</p>
      </div>

      <div className="statisticsFooter">
       { show &&  <div className="statisticsGrowth">
          <div className="growthIcon">
   <FontAwesomeIcon icon={arrow} className={iconStateClassName} />
          <span className={iconStateClassName}>{Growth}%</span>
          </div>
       

          <div style={{ width: 80, height: 60 ,display:'flex',justifyContent:'center',alignItems:'center'}} >
            <Line  data={chartData} options={chartOptions} />
          </div>
        </div>}
      </div>
    </div>
  );
};