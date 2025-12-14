from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api_client import (
    get_summary,
    get_cycles,
    get_latest_cycle,
    get_cycle_by_number
)

app = FastAPI(title="Battery Analytics API")

# 🔥 ADD CORS MIDDLEWARE
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {"message": "Battery Analytics Backend Running"}


@app.get("/summary")
def summary():
    return get_summary()


@app.get("/cycles/{imei}")
def cycles(imei: str):
    return get_cycles(imei)


@app.get("/cycles/{imei}/latest")
def latest_cycle(imei: str):
    return get_latest_cycle(imei)


@app.get("/cycles/{imei}/{cycle_number}")
def cycle_detail(imei: str, cycle_number: int):
    return get_cycle_by_number(imei, cycle_number)
