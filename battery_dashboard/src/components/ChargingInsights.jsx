export default function ChargingInsights({ cycle }) {
  return (
    <div className="dashboard-container">
      <h3 style={{ color: "#de7206ff" }}>Charging Insights</h3>

      <p>
        <b>Charging Events:</b> {cycle.charging_instances_count}
      </p>
      <p>
        <b>Avg Charge Start SOC:</b>{" "}
        {cycle.average_charge_start_soc?.toFixed(1)}%
      </p>
      <p>
        <b>Voltage Avg:</b> {cycle.voltage_avg?.toFixed(1)} V
      </p>
    </div>
  );
}
