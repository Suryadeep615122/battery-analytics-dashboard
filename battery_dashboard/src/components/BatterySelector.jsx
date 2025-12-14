export default function BatterySelector({ batteries, onSelect }) {
  return (
    <div className="dashboard-container">
      <label >Select Battery: </label>
      <select onChange={(e) => onSelect(e.target.value)}>
        <option value="">-- Select IMEI --</option>
        {batteries.map((b, idx) => (
          <option key={idx} value={b.imei}>
            {b.imei}
          </option>
        ))}
      </select>
    </div>
  );
}
