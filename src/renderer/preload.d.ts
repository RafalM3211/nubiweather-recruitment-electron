import type { ForecastData, CurrentDay } from "./src/types/weather";

declare global {
  interface Window {
    weatherAPI: {
      getCurrentWeather: (location: string) => Promise<CurrentDay>;
      getForecastWeather: (location: string) => Promise<ForecastData>;
    };
  }
}