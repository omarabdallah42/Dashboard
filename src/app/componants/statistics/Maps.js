import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";
const countryData = {
  FRA: { name: "France", stats: [12, 18, 22, 30], cities: ["Paris", "Lyon", "Marseille"], users: 63 },
  DEU: { name: "Germany", stats: [20, 25, 28, 35], cities: ["Berlin", "Munich", "Frankfurt"], users: 80 },
  ITA: { name: "Italy", stats: [10, 15, 20, 18], cities: ["Rome", "Milan", "Naples"], users: 50 },
  ESP: { name: "Spain", stats: [8, 14, 19, 22], cities: ["Madrid", "Barcelona", "Valencia"], users: 47 },
  GBR: { name: "United Kingdom", stats: [15, 18, 25, 30], cities: ["London", "Manchester", "Birmingham"], users: 70 },
  NLD: { name: "Netherlands", stats: [9, 12, 14, 20], cities: ["Amsterdam", "Rotterdam", "The Hague"], users: 30 },
  SWE: { name: "Sweden", stats: [7, 10, 15, 18], cities: ["Stockholm", "Gothenburg", "Malmö"], users: 20 },
  NOR: { name: "Norway", stats: [6, 8, 12, 14], cities: ["Oslo", "Bergen", "Trondheim"], users: 15 },
  POL: { name: "Poland", stats: [10, 12, 16, 18], cities: ["Warsaw", "Kraków", "Gdańsk"], users: 40 },
  GRC: { name: "Greece", stats: [5, 7, 10, 12], cities: ["Athens", "Thessaloniki", "Patras"], users: 18 },
};

export default function EuropeMap() {
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Tooltip style
  // Tooltip position logic to avoid overflow
  const tooltipWidth = 210;
  const tooltipHeight = 120;
  const padding = 20;
  let left = mousePos.x + 18;
  let top = mousePos.y + 18;
  if (typeof window !== 'undefined') {
    if (left + tooltipWidth > window.innerWidth - padding) {
      left = mousePos.x - tooltipWidth - 18;
    }
    if (top + tooltipHeight > window.innerHeight - padding) {
      top = mousePos.y - tooltipHeight - 18;
    }
  }
  const tooltipStyle = {
    position: "fixed",
    left,
    top,
    zIndex: 9999,
    background: "#fff",
    color: "#222",
    borderRadius: 10,
    boxShadow: "0 8px 32px rgba(30,64,175,0.13)",
    padding: "16px 20px 16px 20px",
    minWidth: tooltipWidth,
    pointerEvents: "none",
    fontFamily: "inherit",
    fontSize: 15,
    fontWeight: 500,
    border: "1.5px solid #e0e7ef",
    transition: "opacity .18s cubic-bezier(.4,0,.2,1),transform .18s cubic-bezier(.4,0,.2,1)",
    opacity: hoveredCountry ? 1 : 0,
    transform: hoveredCountry ? "scale(1)" : "scale(0.98)",
    filter: hoveredCountry ? "blur(0)" : "blur(1px)",
    boxSizing: "border-box",
  };

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      style={{ display: "flex", gap: "20px", alignItems: "center", position: "relative" }}
      onMouseMove={handleMouseMove}
    >
      <ComposableMap
        projectionConfig={{
          scale: 500,
          center: [20, 55],
        }}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "10px",
          display: "flex",
          marginTop: "-100px",
          gap: "20px",
          alignItems: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const iso = geo.properties.ISO_A3;
              const data = countryData[iso];
              const isHovered = hoveredCountry?.name === data?.name;

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => data && setHoveredCountry(data)}
                  onMouseLeave={() => setHoveredCountry(null)}
                  style={{
                    default: {
                      fill: data ? (isHovered ? "#3b82f6" : "#2563eb") : "#94a3b8",
                      outline: "none",
                      transition: "all .4s ease",
                    },
                    hover: {
                      fill: "#1d4ed8",
                      cursor: data ? "pointer" : "default",
                    },
                    pressed: {
                      fill: "#1e40af",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>

      {/* Tooltip يظهر عند الـ Hover */}
      {hoveredCountry && (
        <div style={tooltipStyle}>
          {/* Arrow */}
          <div style={{
            position: "absolute",
            left: left < mousePos.x ? tooltipWidth - 18 : -12,
            top: 18,
            width: 0,
            height: 0,
            borderTop: "8px solid transparent",
            borderBottom: "8px solid transparent",
            borderLeft: left < mousePos.x ? "12px solid #fff" : undefined,
            borderRight: left >= mousePos.x ? "12px solid #fff" : undefined,
            filter: "drop-shadow(0 2px 6px rgba(30,64,175,0.10))",
            zIndex: 10000,
          }} />
          <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 6, color: '#1d4ed8', letterSpacing: 0.2 }}>{hoveredCountry.name}</div>
          <div style={{ color: "#64748b", fontSize: 14, marginBottom: 4, fontWeight: 600 }}>
            Users: <span style={{ color: '#2563eb', fontWeight: 700 }}>{hoveredCountry.users}K</span>
          </div>
          <div style={{ color: "#555", fontSize: 14, marginBottom: 4, fontWeight: 600 }}>
            Main Cities:
          </div>
          <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
            {hoveredCountry.cities.map((city) => (
              <li key={city} style={{ marginBottom: 2, color: '#334155', fontWeight: 500 }}>
                {city}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
