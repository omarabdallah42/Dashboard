"use client";

import React from "react";
import { VictoryArea, VictoryChart, VictoryAxis, VictoryTooltip, VictoryVoronoiContainer } from "victory";

const StaticsVector = ({ data,typeBar }) => {
  // تأكد أن البيانات نسب مئوية
  const formattedData = data.map((y, i) => ({ x: i + 1, y }));

  const maxY = Math.max(...data, 100); // حتى لو أقل من 100، المحور يوضح أنه نسبة مئوية
  const xLength = data.length;

  return (
    <div className="VictoryContainer">
      <VictoryChart

        domain={{
          x: [1, xLength],
          y: [0, Math.ceil(maxY / 10) * 10], // تقريب لأقرب 10
        }}
        domainPadding={20}
        containerComponent={<VictoryVoronoiContainer />}
      >
        <VictoryAxis
          label="Months"
          style={{
            axis: { stroke: "rgba(255, 255, 255, 0.85)" },
            tickLabels: { fontSize: 14, padding: 10, fill: "#fff" },
            ticks: { stroke: "rgba(255, 255, 255, 0.85)" },
            axisLabel: { fill: "#fff", fontSize: 12, padding: 30, fontWeight: "bold" },
          }}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(t) => `${t}${typeBar}`}
          style={{
            tickFormat:{fontFamily: "Arial", fontSize: 14, fill: "#fff"},
            axis: { stroke: "rgba(255, 255, 255, 0.85)" },
            ticks: { stroke: "rgba(255, 255, 255, 0.85)" },
            grid: { stroke: "rgba(0, 102, 255, 0.2)" },
            tickLabels: { fontSize: 14, padding: 5, fill: "#fff" },
            axisLabel: { fill: "#fff", fontSize: 12, padding: 40, fontWeight: "bold" },
          }}
        />
        <defs>
          <linearGradient id="myGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1F4068" />
            <stop offset="50%" stopColor="#1B1B2F" />
            <stop offset="100%" stopColor="#162447" />
          </linearGradient>
        </defs>
        <VictoryArea
          data={formattedData}
          interpolation="natural"
          animate={{
            duration: 1500,
            onLoad: { duration: 1000 },
            onExit: { duration: 500 },
            onEnter: { duration: 1000 },
            easing: "linear",
          }}
          style={{
            data: {
              fill: "url(#myGradient)",
              stroke: "#fff",
              strokeWidth: .5,
            },
          }}
          labels={({ datum }) => `${datum.y.toFixed(1)}%`}
          labelComponent={<VictoryTooltip style={{ fontSize: 14, fill: "#fff", fontWeight: "bold" }} />}
        />
      </VictoryChart>
    </div>
  );
};

export default StaticsVector;
