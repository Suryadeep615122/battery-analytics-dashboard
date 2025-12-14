export default function CycleStats({ cycle }) {
  return (
    <div className="dashboard-container">
      <h2 style={{ color: "#078ed7ff" }}>Cycle {cycle.cycle_number}</h2>
      <p>
        <b>Duration:</b> {cycle.cycle_duration_hours.toFixed(2)} hrs
      </p>
      <p>
        <b>Average SOC:</b> {cycle.average_soc.toFixed(1)} %
      </p>
      <p>
        <b>Average Temp:</b> {cycle.average_temperature.toFixed(1)} °C
      </p>
      <p>
        <b>Charging Events:</b> {cycle.charging_instances_count}
      </p>
    </div>
  );
}
