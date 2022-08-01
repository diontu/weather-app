export interface WeatherInfo {
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
};

export type GetWeatherResponseList = WeatherInfo[];

export type GetWeatherResponse = {
  data: {
    cod: string;
    message: number;
    cnt: number;
    list: GetWeatherResponseList;
  }
};

export type DayOfTheWeek = 'Sun' | 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat';