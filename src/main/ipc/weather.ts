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
    try {
      const url = buildFetchURL("current.json", { q: location, aqi: "no", alerts: "no" });
      const response = await fetch(url);
      
      if (!response.ok) {
        const error = "Failed to retrieve current weather.";
        console.error(error);
        return { 
          success: false, 
          error:  error
        };
      }

      const data = await response.json();
      return { success: true, data };

    } catch (error: any) {
      return { success: false, error: error.message }; 
    }
  });

  ipcMain.handle('get-forecast-weather', async (event, location: string) => {
    try {
      console.log('Invoke fprecasrt' + location)
      const url = buildFetchURL("forecast.json", { q: location, days: 5, aqi: "no", alerts: "no" });
      const response = await fetch(url);

      console.log('return fprecasrt' + location)
      
      if (!response.ok) {
        const error = "Failed to retrieve forecast.";
        console.error(error);
        return { 
          success: false, 
          error:  error
        };
      }

      const data = await response.json();
      return { success: true, data };

    } catch (error: any) {
      return { success: false, error: error.message }; 
    }
  });
  
}