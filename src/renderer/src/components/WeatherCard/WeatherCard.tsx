import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getCurrentWeather } from "../../core/weather";
import { isDateToday } from "../../helpers/helpers";
import type { ForecastDay } from "../../types/weather";
import Loader from "../Loader/Loader";

interface Props extends ForecastDay {
  location: string;
}

export default function WeatherCard(props: Props) {
  const { data, isLoading } = useQuery({
    queryKey: ["current", props.location],
    throwOnError: true,
    queryFn: getCurrentWeather,
  });

  const currentWeather = {
    condition: data?.current.condition.text,
    temp_c: data?.current.temp_c,
    wind_kph: data?.current.wind_kph,
    humidity: data?.current.humidity,
    icon: data?.current.condition.icon,
  };

  const forecastWeather = {
    condition: props.day.condition.text,
    temp_c: props.day.maxtemp_c,
    wind_kph: props.day.maxwind_kph,
    humidity: props.day.avghumidity,
    icon: props.day.condition.icon,
  };

  const cardData = isDateToday(props.date) ? currentWeather : forecastWeather;

  return (
    <Card
      sx={{
        height: "13.8rem",
      }}
    >
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <CardContent
            sx={{
              display: "flex",
              alignItems: "end",
              justifyContent: "flex-start",
              gap: "1rem",
              pb: "1rem",
            }}
          >
            <Typography sx={{ lineHeight: "normal" }} variant="h4">
              {props.location}
            </Typography>
            <Typography variant="body1" color="grey.900">
              {cardData.condition}
            </Typography>
          </CardContent>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <CardMedia
              sx={{
                m: "10px",
                mt: 0,
                height: "min(140px, 23vw)",
                width: "min(140px, 23vw)",
              }}
              image={cardData.icon?.replace("64x64", "128x128")}
              title="Icon illustrating current weather"
            />
            <CardContent sx={{ display: "flex", gap: "1rem", px: "0.1rem" }}>
              <Typography variant="h3" component="p">
                {Math.round(cardData.temp_c || 26)}
                {"\u00B0"}C
              </Typography>
              <Box
                sx={{
                  pl: "5px",
                  borderLeftColor: "primary.main",
                  borderLeftWidth: "2px",
                  borderLeftStyle: "solid",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography variant="body2">
                  Wind: {cardData.wind_kph}km/h
                </Typography>
                <Typography variant="body2">
                  Humidity: {cardData.humidity}%
                </Typography>
              </Box>
            </CardContent>
          </Box>
        </>
      )}
    </Card>
  );
}
