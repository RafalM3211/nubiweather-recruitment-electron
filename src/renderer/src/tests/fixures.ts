import { CurrentDay, ForecastData, ForecastDay } from "../types/weather";

export const currentDayFixure = {
    current: {
      condition: { icon: "/weather/128x128/day/200.png", text: "Sunny" },
      humidity: 40,
      temp_c: 24,
      wind_kph: 50,
    },
  } satisfies CurrentDay;

export const forecastDayFixure = {
    date: "2025-06-01",
    day: {
      condition: {
        code: 200,
        icon: "/weather/128x128/day/200.png",
        text: "Sunny",
      },
      avghumidity: 40,
      maxtemp_c: 26,
      maxwind_kph: 30,
    },
  } satisfies ForecastDay;

export const forecastDayFixure2 = {
    date: "2025-06-05",
    day: {
      condition: {
        code: 200,
        icon: "/weather/128x128/day/200.png",
        text: "Rainy",
      },
      avghumidity: 60,
      maxtemp_c: 20,
      maxwind_kph: 50,
    },
  } satisfies ForecastDay;


export const forecastFixure = {
    forecast: {
        forecastday: [...[1,2,3,4].map((index)=>{return {...forecastDayFixure2, date: "2025-06-0"+index}}), forecastDayFixure2]
    }
} satisfies ForecastData