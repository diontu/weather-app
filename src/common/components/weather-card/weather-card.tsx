import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';

import './weather-card.css';

const WeatherCard = ({ weatherResponse }: WeatherCardProps): JSX.Element => {
  const todayWeatherCard = (): JSX.Element => (
    <div className="today-weather-card">
      <div className="today-title">
        Today
      </div>
      <div className="today-weather">
        <FontAwesomeIcon icon={faCloud} size="4x" />
        <div className="weather-desc">
          <div className="weather-desc-degrees">19º</div>
          <div className="weather-desc-weather">Clouds</div>
        </div>
      </div>
    </div>
  );
  const futureWeatherCards = (): JSX.Element => (
    <>
      <div className="future-weather-card">
        <div className="future-weather-card-content">f</div>
        <div className="future-weather-card-content">f</div>
        <div className="future-weather-card-content">f</div>
      </div>
      <div className="future-weather-card"></div>
      <div className="future-weather-card"></div>
      <div className="future-weather-card"></div>
    </>
  );

  return (
    <div className="weather-card-container">
      {todayWeatherCard()}
      {futureWeatherCards()}
    </div>
  );
};

export default WeatherCard;

type WeatherCardProps = {
  weatherResponse: Object;
};