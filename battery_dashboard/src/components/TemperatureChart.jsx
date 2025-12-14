import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";

export default function TemperatureChart({ cycle }) {
  const [bucket, setBucket] = useState("5deg");

  // 🔹 safely get temperature distribution object
  const tempObj = cycle[`temperature_dist_${bucket}`] || {};

  // 🔹 convert object → array for recharts
  const data = Object.entries(tempObj).map(([range, minutes]) => ({
    range,
    minutes,
  }));

  return (
    <div style={{ marginTop: "30px" }}>
      <h3>Temperature Distribution</h3>

      <label>Bucket Size: </label>
      <select
        value={bucket}
        onChange={(e) => setBucket(e.target.value)}
        style={{ marginBottom: "10px", marginLeft: "5px" }}
      >
        <option value="5deg">5°C</option>
        <option value="10deg">10°C</option>
        <option value="15deg">15°C</option>
        <option value="20deg">20°C</option>
      </select>

      {data.length === 0 ? (
        <p>No temperature data available</p>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="range" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="minutes" fill="#ff7043" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
