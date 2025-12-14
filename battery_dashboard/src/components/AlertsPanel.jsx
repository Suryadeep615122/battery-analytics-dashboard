export default function AlertsPanel({ cycle }) {
  const warnings = cycle["alert_details.warnings"] || [];
  const protections = cycle["alert_details.protections"] || [];

  return (
    <div className="dashboard-container">
      <h3 style={{ color: "#d7074cff" }}>Alerts & Safety</h3>

      <p>
        <b>Warnings:</b> {warnings.length}
      </p>
      <p>
        <b>Protections:</b> {protections.length}
      </p>

      {warnings.length === 0 && protections.length === 0 && (
        <p className="good">No safety issues detected</p>
      )}
    </div>
  );
}
