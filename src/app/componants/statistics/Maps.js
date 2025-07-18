import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";

const MapSimple = ({ cities, color }) => {
  return (
    <div >
      <ComposableMap
        projectionConfig={{
          scale: 800,
          center:  [-95, 37],// تركيز على أمريكا الشمالية
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={color}
                stroke="#FFF"
                strokeWidth={0.5}
              />
            ))
          }
        </Geographies>

        {cities.map(({ name, coordinates }) => (
          <Marker key={name} coordinates={coordinates}>
            <circle r={9} fill="rgb(27, 42, 92)" shapeRendering={"geometricPrecision"} stroke="#fff" strokeWidth={1.5} />
            <text
              textAnchor="middle"
              y={-10}
              style={{
                fontFamily: "Arial",
                fill: "rgba(255, 255, 255, 0.8)",
                textShadow: "1px 1px 200px rgba(0, 0, 0, 0.5)",
                fontWeight: "bold",

                fontSize: "30px", // هنا بنكبر الخط
              }}
            >
              {name}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
};

const citiesData = [
  { name: "San Francisco", coordinates: [-122.4194, 37.7749] },
  { name: "Los Angeles", coordinates: [-118.2437, 34.0522] },
  { name: "New York", coordinates: [-74.006, 40.7128] },
  { name: "Chicago", coordinates: [-87.6298, 41.8781] },
  { name: "Houston", coordinates: [-95.3698, 29.7604] },
];

export default function App() {
  return (
    <div>
      <MapSimple cities={citiesData} color="rgb(39, 76, 197)" />
    </div>
  );
}
