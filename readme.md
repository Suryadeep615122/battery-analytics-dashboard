\#  Battery Analytics Dashboard



A full-stack Battery Analytics Dashboard built using \*\*FastAPI (Python)\*\* and \*\*React\*\*, designed to visualize battery usage, health, and performance across charge–discharge cycles.



---



\##  Features



\### Backend (FastAPI)

\- Fetches battery data from Battery Snapshots API

\- Secure IMEI-based access

\- REST APIs:

&nbsp; - `/summary`

&nbsp; - `/cycles/{imei}`

&nbsp; - `/cycles/{imei}/latest`

\- Swagger UI for API testing



\### Frontend (React)

\- Battery (IMEI) selection

\- Cycle navigation

\- Cycle statistics

\- SOH degradation trend

\- Temperature distribution (5°C / 10°C / 15°C / 20°C toggle)

\- Performance metrics (speed \& distance)

\- Charging insights

\- Alerts \& safety monitoring



---



\##  Tech Stack



\- \*\*Backend:\*\* Python, FastAPI

\- \*\*Frontend:\*\* React, Recharts

\- \*\*Visualization:\*\* Line charts, Bar charts

\- \*\*API Docs:\*\* Swagger (OpenAPI)



---



\##  How to Run the Project



\### 1. Clone the Repository



```bash

git clone https://github.com/https://github.com/Suryadeep615122/battery-analytics-dashboard.git



\## backend setup fastAPI

\##create virtual environment



```bash

cd battery\_analysis

python -m venv venv



\## Activate virtual environment (for windows especially)


```bash
venv\\Scripts\\activate



\## install dependencies



```bash

pip install -r requirements.txt





\## to run analysis file

```bash

python app\\analysis.py





\## to run backend server

```bash
uvicorn app.main:app --reload





\## backend server runs at 

```bash
http://127.0.0.1:8000





\## Swagger ui

```bash
http://127.0.0.1:8000/docs





\###################################################################################################



\## Frontend setup 

\# open a new terminal (terminal 2) and run below mention commands one by one



```bash
cd battery\_dashboard

npm install

npm start


## install recharts

```bash

npm install recharts





\## frontend runs at 

```bash
http://localhost:3000





\##Usage



&nbsp;	##Select Battery IMEI



&nbsp;	##Select Cycle number



\##View:



&nbsp;	##Cycle statistics



&nbsp;	##SOH trend



&nbsp;	##Temperature distribution



&nbsp;	##Performance metrics



&nbsp;	##Charging insights



&nbsp;	##Alerts \& safety status















