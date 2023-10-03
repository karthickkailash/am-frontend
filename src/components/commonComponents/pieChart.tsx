import React from "react";
import { ResponsiveContainer, PieChart, Pie, Tooltip, Legend } from "recharts";
import "./legend.css";

const CustomLegend = ({ payload }) => {
  return (
    <ul className="custom-legend">
      {payload.map((entry, index) => (
        <li key={`legend-${index}`} className="legend-item">
          <span
            className="legend-icon"
            style={{ backgroundColor: entry.color }}
          >
            {entry.payload.value}
          </span>
          <span className="legend-label" style={{ color: entry.color }}>
            {entry.value}
          </span>
        </li>
      ))}
    </ul>
  );
};

const CPieChart = ({ data, paddingAngle = 0, innerRadius = 60 }) => {
  return (
    <div style={{ width: "100%", height: "100%" }} className="chart-container">
      <ResponsiveContainer>
        <PieChart margin={{ top: 5, right: 45, bottom: 5, left: 45 }}>
          <Pie
            dataKey="value"
            data={data}
            innerRadius={innerRadius}
            outerRadius={80}
            paddingAngle={paddingAngle}
          ></Pie>
          <Tooltip />
          <Legend
            content={<CustomLegend payload={data} />}
            iconSize={30}
            layout="vertical"
            verticalAlign="middle"
            align="right"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CPieChart;
