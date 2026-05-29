import { QueryFunctionContext } from "@tanstack/react-query";
import type { ForecastData, CurrentDay } from "../types/weather";
import { apiKey } from "../env";

interface QueryParams{
    q: string;
    [param: string]: string|number;
}

export async function getCurrentWeather(queryContext: QueryFunctionContext<[string, string]>): Promise<CurrentDay> {
    const location = queryContext.queryKey[1];

    const url = buildFetchURL("current.json", {q: location, aqi: "no"});
    const response = await fetch(url);

    if(!response.ok){
        throw new Error("Error while retrieving current weather")
    }

    return response.json();
}

export async function getForecastWeather(queryContext: QueryFunctionContext<[string, string]>): Promise<ForecastData> {
    const location = queryContext.queryKey[1];

    const url = buildFetchURL("forecast.json", {q: location, days: 5, aqi: "no", alerts: "no"});
    const response = await fetch(url);

    if(!response.ok){
        throw new Error("Error while retrieving forecast")
    }

    return response.json();
}


function buildFetchURL(api: string, params: QueryParams){
    const baseURL="https://api.weatherapi.com/v1/";

    const URLWithoutParams=`${baseURL}${api}?key=${apiKey}`;

    let paramsURLString="";

    Object.entries(params).forEach(([key, value])=>{
        paramsURLString+=`&${key}=${value}`;
    })

    return URLWithoutParams+paramsURLString;
}