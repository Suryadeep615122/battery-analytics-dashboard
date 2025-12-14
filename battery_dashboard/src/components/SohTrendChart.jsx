import {
  LineChart, Line, XAxis, YAxis,
  Tooltip, CartesianGrid, ResponsiveContainer
} from "recharts";

export default function SohTrendChart({ cycles }) {
  const data = cycles.map(c => ({
    cycle: c.cycle_number,
    soh: c.average_soh
  }));

  return (
    <div style={{ marginTop: "30px" }}>
      <h3>SOH Trend Across Cycles</h3>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="cycle" />
          <YAxis domain={["dataMin - 1", "dataMax + 1"]} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="soh"
            stroke="#1976d2"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
