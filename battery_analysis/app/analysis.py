import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

from api_client import get_cycles

IMEI = "865044073967657"


def load_cycles_dataframe():
    """
    Fetch API response and extract only the cycle list.
    """
    response = get_cycles(IMEI)

    # 🔑 VERY IMPORTANT: extract "data"
    cycles = response["data"]

    # Normalize nested JSON
    df = pd.json_normalize(cycles)

    return df


def basic_overview(df: pd.DataFrame):
    print("\n--- BASIC INFO ---")
    print(df.info())

    print("\n--- SAMPLE DATA ---")
    print(df[[
        "cycle_number",
        "cycle_duration_hours",
        "average_soc",
        "average_temperature",
        "charging_instances_count"
    ]].head())


def soh_trend(df: pd.DataFrame):
    plt.figure(figsize=(10, 5))
    plt.plot(df["cycle_number"], df["soh_drop"], marker="o")
    plt.title("SOH Drop per Cycle")
    plt.xlabel("Cycle Number")
    plt.ylabel("SOH Drop (%)")
    plt.grid(True)
    plt.show()


def soc_distribution(df: pd.DataFrame):
    plt.figure(figsize=(8, 5))
    sns.histplot(df["average_soc"], bins=20)
    plt.title("Average SOC Distribution")
    plt.xlabel("SOC (%)")
    plt.show()


def temperature_distribution(
    df: pd.DataFrame,
    cycle_index=0,
    bucket="temperature_dist_5deg"
):
    prefix = bucket + "."

    temp_cols = [c for c in df.columns if c.startswith(prefix)]

    if not temp_cols:
        print(f"No temperature data for {bucket}")
        return

    temp_data = df.loc[cycle_index, temp_cols]
    temp_data.index = temp_data.index.str.replace(prefix, "")

    plt.figure(figsize=(9, 4))
    temp_data.plot(kind="bar")
    plt.title(f"Temperature Distribution ({bucket})")
    plt.xlabel("Temperature Range (°C)")
    plt.ylabel("Hours")
    plt.xticks(rotation=45)
    plt.tight_layout()
    plt.show()


def performance_analysis(df: pd.DataFrame):
    plt.figure(figsize=(8, 5))
    plt.scatter(df["average_speed"], df["total_distance"])
    plt.title("Average Speed vs Total Distance")
    plt.xlabel("Average Speed (km/h)")
    plt.ylabel("Total Distance (km)")
    plt.grid(True)
    plt.show()


def charging_analysis(df: pd.DataFrame):
    plt.figure(figsize=(9, 4))
    plt.plot(df["cycle_number"], df["charging_instances_count"], marker="o")
    plt.title("Charging Events per Cycle")
    plt.xlabel("Cycle Number")
    plt.ylabel("Charging Count")
    plt.grid(True)
    plt.show()


def alerts_summary(df: pd.DataFrame):
    print("\n--- ALERT SUMMARY ---")
    print("Total Cycles:", len(df))
    print("Total Warnings:",
          df["alert_details.warnings"].apply(len).sum())
    print("Total Protections:",
          df["alert_details.protections"].apply(len).sum())


def run_full_analysis():
    df = load_cycles_dataframe()

    basic_overview(df)
    soh_trend(df)
    soc_distribution(df)
    performance_analysis(df)
    charging_analysis(df)

    # Temperature views (toggle-like behavior)
    temperature_distribution(df, 0, "temperature_dist_5deg")
    temperature_distribution(df, 0, "temperature_dist_10deg")
    temperature_distribution(df, 0, "temperature_dist_15deg")
    temperature_distribution(df, 0, "temperature_dist_20deg")

    alerts_summary(df)


if __name__ == "__main__":
    run_full_analysis()
