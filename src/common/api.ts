import axios from 'axios';
import { FORECASE_WEATHER_URL } from './urls';

const weatherApiKey = process.env.WEATHER_API_KEY;

export const getWeather = (city: string): Promise<GetWeatherResponse> => {
  return axios.get(`${FORECASE_WEATHER_URL}?q=${city}&APPID=${weatherApiKey}`)
};

type GetWeatherResponse = {
  data: {
    cod: string;
    message: number;
    cnt: number;
    list: {
      dt: number,
      main: {
        temp: number,
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        sea_level: number;
        grnd_level: number;
        humidity: number;
        temp_kf: number;
      },
      weather: {
        id: number;
        main: string;
        description: string;
        icon: string;
      }[],
      dt_txt: string;
    }[],
  }
};