import { useEffect, useState } from "react";
import { getSummary, getCycles } from "../api/batteryApi";

import BatterySelector from "../components/BatterySelector";
import CycleSelector from "../components/CycleSelector";
import CycleStats from "../components/CycleStats";
import SohTrendChart from "../components/SohTrendChart";
import TemperatureChart from "../components/TemperatureChart";
import PerformanceChart from "../components/PerformanceChart";
import ChargingInsights from "../components/ChargingInsights";
import AlertsPanel from "../components/AlertsPanel";
import "../styles/dashboard.css";

export default function Dashboard() {
  const [batteries, setBatteries] = useState([]);
  const [imei, setImei] = useState("");
  const [cycles, setCycles] = useState([]);
  const [selectedCycle, setSelectedCycle] = useState(null);

  useEffect(() => {
    getSummary().then((data) => {
      setBatteries(data.summary || []);
    });
  }, []);

  useEffect(() => {
    if (imei) {
      getCycles(imei).then((data) => {
        setCycles(data.data || []);
        setSelectedCycle(data.data?.[0]);
      });
    }
  }, [imei]);

  const handleCycleChange = (cycleNumber) => {
    const cycle = cycles.find((c) => c.cycle_number === cycleNumber);
    setSelectedCycle(cycle);
  };

  return (
    <div className="dashboard-container">
      <h1>Battery Analytics Dashboard</h1>

      <BatterySelector batteries={batteries} onSelect={setImei} />

      {cycles.length > 0 && (
        <CycleSelector cycles={cycles} onSelect={handleCycleChange} />
      )}

      {selectedCycle && (
        <>
          <CycleStats cycle={selectedCycle} />
          <ChargingInsights cycle={selectedCycle} />
          <AlertsPanel cycle={selectedCycle} />
          <PerformanceChart cycle={selectedCycle} />
          <TemperatureChart cycle={selectedCycle} />
        </>
      )}

      {cycles.length > 0 && <SohTrendChart cycles={cycles} />}
    </div>
  );
}
