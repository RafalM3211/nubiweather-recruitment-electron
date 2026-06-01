import type { ForecastData, CurrentDay } from "./src/types/weather";

type IpcResponse<T> = 
  | { success: true; data: T }
  | { success: false; error: string };

declare global {
  interface Window {
    weatherAPI: {
      getCurrentWeather: (location: string) => Promise<IpcResponse<CurrentDay>>;
      getForecastWeather: (location: string) => Promise<IpcResponse<ForecastData>>;
    };
  }
}