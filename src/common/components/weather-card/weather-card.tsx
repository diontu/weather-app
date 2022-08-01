import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  IconDefinition,
  faCloud,
  faSun,
  faCloudShowersHeavy,
  faCloudBolt,
  faSnowflake,
  faSmog,
} from '@fortawesome/free-solid-svg-icons';

import { GetWeatherResponseList, WeatherInfo } from '../../types';
import { getDateAndTimeFromResponse, getTempFromResponse, getDayOfTheWeek, convertKelvinToCelcius, getWeatherFromResponse } from '../../util';
import './weather-card.css';

const getIconForWeather = (weather: string): IconDefinition => {
  if (weather.toLowerCase().includes('cloud')) return faCloud;
  if (weather.toLowerCase().includes('clear')) return faSun;
  if (weather.toLowerCase().includes('rain')) return faCloudShowersHeavy;
  if (weather.toLowerCase().includes('thunderstorm')) return faCloudBolt;
  if (weather.toLowerCase().includes('snow')) return faSnowflake;
  return faSmog;
};

const WeatherCard = ({ weatherResponse }: WeatherCardProps): JSX.Element => {
  const todayWeatherCard = (weatherResponseInfo: WeatherInfo): JSX.Element => (
    <div className="today-weather-card">
      <div className="today-title">
        Today
      </div>
      <div className="today-weather">
        <FontAwesomeIcon icon={getIconForWeather(getWeatherFromResponse(weatherResponseInfo))} size="4x" />
        <div className="weather-desc">
          <div className="weather-desc-degrees">
            {convertKelvinToCelcius(getTempFromResponse(weatherResponseInfo))}º
          </div>
          <div className="weather-desc-weather">{getWeatherFromResponse(weatherResponseInfo)}</div>
        </div>
      </div>
    </div>
  );
  const futureWeatherCards = (weatherResponse: GetWeatherResponseList): JSX.Element => (
    <>
      {weatherResponse.map((weatherResponseInfo, index) => (
        <div key={`weather-card-${index}`} className="future-weather-card">
          <div className="future-weather-card-content">
            {getDayOfTheWeek(new Date(getDateAndTimeFromResponse(weatherResponseInfo)[0]).getDay())}
          </div>
          <div className="future-weather-card-content">
            <FontAwesomeIcon icon={getIconForWeather(getWeatherFromResponse(weatherResponseInfo))} size="2x" />
          </div>
          <div className="future-weather-card-content weather-degrees">
            {convertKelvinToCelcius(getTempFromResponse(weatherResponseInfo))}º
          </div>
        </div>
      ))}
    </>
  );

  return (
    <div className="weather-card-container">
      {todayWeatherCard(weatherResponse[0])}
      {futureWeatherCards(weatherResponse.slice(1))}
    </div>
  );
};

export default WeatherCard;

type WeatherCardProps = {
  weatherResponse: GetWeatherResponseList;
};