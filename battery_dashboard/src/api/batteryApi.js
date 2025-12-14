const BASE_URL = "http://127.0.0.1:8000";

export async function getSummary() {
  const res = await fetch(`${BASE_URL}/summary`);
  return res.json();
}

export async function getCycles(imei) {
  const res = await fetch(`${BASE_URL}/cycles/${imei}`);
  return res.json();
}
