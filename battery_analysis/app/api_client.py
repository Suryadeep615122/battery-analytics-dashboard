import requests

BASE_URL = "https://zenfinity-intern-api-104290304048.europe-west1.run.app"

ALLOWED_IMEIS = [
    "865044073967657",
    "865044073949366"
]

def _validate_imei(imei: str):
    if imei not in ALLOWED_IMEIS:
        raise ValueError("IMEI not authorized")


def get_summary():
    url = f"{BASE_URL}/api/snapshots/summary"
    response = requests.get(url)
    response.raise_for_status()
    return response.json()


def get_cycles(imei: str, limit: int = 100, offset: int = 0):
    _validate_imei(imei)
    url = f"{BASE_URL}/api/snapshots"
    params = {"imei": imei, "limit": limit, "offset": offset}
    response = requests.get(url, params=params)
    response.raise_for_status()
    return response.json()


def get_latest_cycle(imei: str):
    _validate_imei(imei)
    url = f"{BASE_URL}/api/snapshots/{imei}/latest"
    response = requests.get(url)
    response.raise_for_status()
    return response.json()


def get_cycle_by_number(imei: str, cycle_number: int):
    _validate_imei(imei)
    url = f"{BASE_URL}/api/snapshots/{imei}/cycles/{cycle_number}"
    response = requests.get(url)
    response.raise_for_status()
    return response.json()
