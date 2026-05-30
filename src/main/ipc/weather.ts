import { ipcMain } from 'electron';

const apiKey = import.meta.env.VITE_API_KEY;

function buildFetchURL(api: string, params: Record<string, string | number>) {
  const baseURL = "https://api.weatherapi.com/v1/";
  let paramsURLString = "";
  Object.entries(params).forEach(([key, value]) => {
    paramsURLString += `&${key}=${value}`;
  });
  return `${baseURL}${api}?key=${apiKey}${paramsURLString}`;
}

export function registerWeatherHandlers() {
  
  ipcMain.handle('get-current-weather', async (event, location: string) => {
    const url = buildFetchURL("current.json", { q: location, aqi: "no" });
    const response = await fetch(url);
    
    if (!response.ok) throw new Error("Error while retrieving current weather");
    return response.json();
  });

  ipcMain.handle('get-forecast-weather', async (event, location: string) => {
    const url = buildFetchURL("forecast.json", { q: location, days: 5, aqi: "no", alerts: "no" });
    const response = await fetch(url);
    
    if (!response.ok) throw new Error("Error while retrieving forecast");
    return response.json();
  });
  
}