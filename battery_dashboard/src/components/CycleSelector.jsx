export default function CycleSelector({ cycles, onSelect }) {
  return (
    <div className="dashboard-container">
      <label>Select Cycle: </label>
      <select onChange={(e) => onSelect(Number(e.target.value))}>
        {cycles.map((c, idx) => (
          <option key={idx} value={c.cycle_number}>
            Cycle {c.cycle_number}
          </option>
        ))}
      </select>
    </div>
  );
}
