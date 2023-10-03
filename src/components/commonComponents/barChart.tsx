import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import "./legend.css";

const getPath = (x: number, y: number, width: number, height: number) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  } 
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
    Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const CustomLegend = ({ payload }) => {
  console.log(payload, "os");
  return (
    <ul className="custom-legend">
      {payload.map((entry, index) => (
        <li key={`legend-${index}`} className="legend-item">
          <span
            className="legend-icon"
            style={{ backgroundColor: entry.color }}
          >
            {entry?.value}
          </span>
          <span className="legend-label" style={{ color: entry.color }}>
            {entry?.name}
          </span>
        </li>
      ))}
    </ul>
  );
};

const CBarChart = ({ barData, shape = "" }) => {
  return (
    <div style={{ width: "100%", height: "100%" }} className="chart-container">
      <ResponsiveContainer>
        <BarChart
          data={barData}
          margin={{
            top: 25,
            right: 10,
            left: 10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3" vertical={false} />
          {/* <XAxis type="number" />  */}
          <XAxis dataKey="name" />
          {/* <YAxis dataKey="name" type="category" /> */}
          <YAxis />
          {shape === "Triangle" ? (
            <Bar
              dataKey="value"
              shape={<TriangleBar />}
              label={{ position: "top" }}
              width={10}
            >
              {barData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry?.color} />
              ))}
            </Bar>
          ) : (
            <Bar dataKey="value" label={{ position: "top" }} barSize={25}>
              {barData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry?.color} />
              ))}
            </Bar>
          )}
        </BarChart>
      </ResponsiveContainer>
      <div style={{ marginRight: 20 }}>
        <CustomLegend payload={barData} />
      </div>
    </div>
  );
};

export default CBarChart;
