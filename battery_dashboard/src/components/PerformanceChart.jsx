import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function PerformanceChart({ cycle }) {
  const data = [
    { name: "Avg Speed", value: cycle.average_speed || 0 },
    { name: "Max Speed", value: cycle.max_speed || 0 },
    { name: "Distance", value: cycle.total_distance || 0 },
  ];

  return (
    <div style={{ marginTop: "30px" }}>
      <h3>Performance Metrics</h3>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#42a5f5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
