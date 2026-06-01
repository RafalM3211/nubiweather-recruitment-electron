import { render, screen } from "@testing-library/react";
import { QueryClientProvider } from "@tanstack/react-query";
import WeatherCard from "./WeatherCard";
import { currentDayFixure, forecastDayFixure } from "../../tests/fixures";
import { createQueryClient } from "../../tests/helpers";
import * as weatherCore from "../../core/weather";
import { vi, test, expect } from "vitest";

vi.mock("../../core/weather");
vi.mock("../../env.ts", () => ({
  apiKey: "test-api-key",
}));

test("Renders with correct values", async () => {
  const queryClient = createQueryClient();

  vi.mocked(weatherCore.getCurrentWeather).mockResolvedValue(currentDayFixure);

  render(
    <QueryClientProvider client={queryClient}>
      <WeatherCard
        date={forecastDayFixure.date}
        day={forecastDayFixure.day}
        location="Gliwice"
      />
    </QueryClientProvider>
  );

  expect(
    await screen.findByRole("heading", { name: "Gliwice" })
  ).toBeInTheDocument();

  expect(
    await screen.findByText(`${forecastDayFixure.day.maxtemp_c}\u00B0C`)
  ).toBeInTheDocument();
});
