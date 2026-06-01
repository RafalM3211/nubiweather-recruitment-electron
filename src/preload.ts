import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('weatherAPI', {
  getCurrentWeather: (location: string) => ipcRenderer.invoke('get-current-weather', location),
  getForecastWeather: (location: string) => ipcRenderer.invoke('get-forecast-weather', location)
});