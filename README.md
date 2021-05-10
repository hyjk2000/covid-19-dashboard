# COVID-19 Dashboard

![covid-19-dashboard screenshot](https://user-images.githubusercontent.com/4647136/117603855-2f3bc380-b1a8-11eb-810a-23a047c33aec.png)

A data visulisation of COVID-19 in New Zealand with [Cube.js](https://cube.dev).

## Prerequisite

- Docker

## Usage

```shell
# Build & run Docker containers
docker compose up

# Seed the DB
cat db_seed.sql | docker exec -i covid-19-dashboard_db_1 psql -U postgres

# Start frontend development server
cd dashboard-app
npm start
```
