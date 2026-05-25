import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import ForecastCard from "../ForecastCard/ForecastCard";
import WeatherCard from "../WeatherCard/WeatherCard";
import { getForecastWeather } from "../../core/weather";
import type { ForecastDay } from "../../types/weather";
import Loader from "../Loader/Loader";

interface Props {
  location: string;
}

export default function CardGroup(props: Props) {
  const { data, isLoading } = useQuery({
    queryKey: ["forecast", props.location],
    throwOnError: true,
    queryFn: getForecastWeather,
  });

  const [selectedDay, setSelectedDay] = useState<ForecastDay | null>(null);

  useEffect(() => {
    if (!isLoading && data) {
      setSelectedDay(data.forecast.forecastday[0]);
    }
  }, [data, isLoading, setSelectedDay]);

  function handleDaySelect(date: string) {
    if (data) {
      const day = data.forecast.forecastday.find((day: ForecastDay) => {
        return day.date === date;
      });

      setSelectedDay(day || selectedDay);
    }
  }
  return (
    <Box sx={{ width: "69vw", maxWidth: "26rem", minHeight: "220px" }}>
      {isLoading || !selectedDay ? (
        <Loader text={`Loading weather for ${props.location}...`} />
      ) : (
        <>
          <WeatherCard
            date={selectedDay.date}
            day={selectedDay.day}
            location={props.location}
          />
          <Box
            sx={{
              mt: "10px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {data &&
              data.forecast.forecastday.map((day: ForecastDay) => {
                return (
                  <ForecastCard
                    key={day.date}
                    date={day.date}
                    temp_c={day.day.maxtemp_c}
                    icon={day.day.condition.icon}
                    isSelected={day.date === selectedDay.date}
                    handleClick={() => {
                      handleDaySelect(day.date);
                    }}
                  />
                );
              })}
          </Box>
        </>
      )}
    </Box>
  );
}
