import { WeatherInfo, DayOfTheWeek } from './types';
import { ABSOLUTE_ZERO_KELVIN_TEMP } from './constants';

export const convertKelvinToCelcius = (kelvin: number): number => {
  return Math.round(kelvin - ABSOLUTE_ZERO_KELVIN_TEMP);
};

export const getDateAndTimeFromResponse = (weatherInfo: WeatherInfo): string[] => {
  return weatherInfo.dt_txt.split(' ');
};

export const getTempFromResponse = (weatherInfo: WeatherInfo): number => {
  return weatherInfo.main.temp;
}

export const getWeatherFromResponse = (weatherInfo: WeatherInfo): string => {
  return weatherInfo.weather[0].main;
}

export const getDayOfTheWeek = (day: number): DayOfTheWeek => {
  if (typeof day !== 'number') throw Error('Not a number');
  switch (day) {
    case 0:
      return 'Sun';
    case 1:
      return 'Mon';
    case 2:
      return 'Tue';
    case 3:
      return 'Wed';
    case 4:
      return 'Thu';
    case 5:
      return 'Fri';
    case 6:
      return 'Sat';
    default:
      throw new Error('Not a number 1-6.');
  }
};