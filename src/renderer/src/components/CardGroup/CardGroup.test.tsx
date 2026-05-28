import { render, screen } from "@testing-library/react";
import { QueryClientProvider } from "@tanstack/react-query";
import userEvent from "@testing-library/user-event";
import CardGroup from "./CardGroup";
import {
  currentDayFixure,
  forecastFixure,
  forecastDayFixure2,
} from "../../tests/fixures";
import { createQueryClient } from "../../tests/helpers";
import * as weatherCore from "../../core/weather";
import { vi, test, expect } from "vitest";

vi.mock("../../core/weather");
vi.mock("../../env.ts", () => ({
  apiKey: "test-api-key",
}));

test("Weather in main card changes on forecast card click", async () => {
  const user = userEvent.setup();
  const queryClient = createQueryClient();

  vi.mocked(weatherCore.getCurrentWeather).mockResolvedValue(currentDayFixure);
  vi.mocked(weatherCore.getForecastWeather).mockResolvedValue(forecastFixure);

  render(
    <QueryClientProvider client={queryClient}>
      <CardGroup location="Gliwice" />
    </QueryClientProvider>
  );

  const dayToClickOn = await screen.findByText("Thursday");
  await user.click(dayToClickOn);

  expect(
    await screen.findByText(forecastDayFixure2.day.condition.text)
  ).toBeInTheDocument();
});
