import { Visibility, Weather } from "../types/types";

const isWeather = (weather: string): weather is Weather => {
  return Object.values(Weather)
    .map((v) => v.toString())
    .includes(weather);
};

const parseWeather = (weather: string): Weather => {
  if (!isWeather(weather)) {
    throw new Error("Incorrect or missing weather: " + weather);
  }
  return weather;
};

const isVisibility = (visibility: string): visibility is Visibility => {
  return Object.values(Visibility)
    .map((v) => v.toString())
    .includes(visibility);
};

const parseVisibility = (visibility: string): Visibility => {
  if (!isVisibility(visibility)) {
    throw new Error("Incorrect or missing weather: " + visibility);
  }
  return visibility;
};

export { parseWeather, parseVisibility };
