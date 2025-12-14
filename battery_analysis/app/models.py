from pydantic import BaseModel
from typing import Dict, List, Optional


class AlertDetails(BaseModel):
    warnings: List[str] = []
    protections: List[str] = []


class CycleSnapshot(BaseModel):
    imei: str
    cycle_number: int
    cycle_start_time: str
    cycle_end_time: str
    cycle_duration_hours: float

    soh_drop: float
    average_soc: float
    min_soc: float
    max_soc: float

    average_temperature: float
    temperature_dist_5deg: Optional[Dict[str, float]] = None
    temperature_dist_10deg: Optional[Dict[str, float]] = None
    temperature_dist_15deg: Optional[Dict[str, float]] = None
    temperature_dist_20deg: Optional[Dict[str, float]] = None

    total_distance: float
    average_speed: float
    max_speed: float

    charging_instances_count: int
    average_charge_start_soc: float

    voltage_avg: float
    voltage_min: float
    voltage_max: float

    alert_details: AlertDetails
 
