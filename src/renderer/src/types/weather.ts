export interface ForecastData {
  forecast: {
    forecastday: ForecastDay[];
  };
}

export interface ForecastDay {
    date: string;
    day: ForecastDayWeatherData;
}

export interface ForecastDayWeatherData {
    avghumidity: number;
    maxtemp_c: number;
    maxwind_kph: number;
    condition: {
      code: number;
      icon: string;
      text: string;
    };
}

export interface CurrentDay{
  current:{
    condition: {text: string, icon: string};
    temp_c: number;
    wind_kph: number;
    humidity: number;
  }
}
