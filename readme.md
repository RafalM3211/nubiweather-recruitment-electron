# NubiWeather

## About

https://github.com/RafalM3211/nubiweather-recruitment-electron

NubiWeather is a simple React + Electron app made as a recruitment project for Nubisoft. It shows current weather in Gliwice and Hamburg as well as weather forecast for the next five days.
The app displays temperature, wind speed, humidity and weather description for a given city and selected day.
Previous version was written without using electron and with jest instead of vitest

Technical features include:

- Loading states
- Error handling
- Integration and unit tests

## Instructions on how to run the application

- Install dependencies

```bash
npm i
```

- Rename `.env.example` to `.env` and insert your [Weatherapi](https://www.weatherapi.com/) API key

```
VITE_API_KEY=your_api_key
```

- Run the application

```bash
npm start
```

Tests can be run with `npm run test` command

```bash
npm run test
```

For beautiful test interface run `npm run test:ui`

```bash
npm run test:ui
```
