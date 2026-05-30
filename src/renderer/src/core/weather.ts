import { QueryFunctionContext } from "@tanstack/react-query";
import type { ForecastData, CurrentDay } from "../types/weather";

export async function getCurrentWeather(
  queryContext: QueryFunctionContext<[string, string]>
): Promise<CurrentDay> {
  const location = queryContext.queryKey[1];

  return await window.weatherAPI.getCurrentWeather(location);
}

export async function getForecastWeather(
  queryContext: QueryFunctionContext<[string, string]>
): Promise<ForecastData> {
  const location = queryContext.queryKey[1];
  
  return await window.weatherAPI.getForecastWeather(location);
}