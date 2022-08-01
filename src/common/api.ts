import axios from 'axios';
import { GetWeatherResponse } from './types';
import { FORECASE_WEATHER_URL } from './urls';

const weatherApiKey = process.env.WEATHER_API_KEY;

export const getWeather = (city: string): Promise<GetWeatherResponse> => {
  return axios.get(`${FORECASE_WEATHER_URL}?q=${city}&APPID=${weatherApiKey}`)
};
