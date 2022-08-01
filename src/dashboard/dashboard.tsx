import React, { useEffect, useState } from 'react';
import WeatherCard from '../common/components/weather-card/weather-card';
import CityLinks from '../common/components/city-links/city-links';
import { getWeather } from '../common/api';
import { getDateAndTimeFromResponse } from '../common/util';
import './dashboard.css';
import { faCommentsDollar, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { GetWeatherResponseList } from '../common/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Dashboard = ({ city }: DashboardProps): JSX.Element => {
  const [weatherResponse, setWeatherResponse] = useState<GetWeatherResponseList>([]);
  useEffect(() => {
    const getWeatherApiCall = async () => {
      setWeatherResponse([]);
      const response = await getWeather(city);
      let currentDate: string = '';
      let count: number = 0;
      const alteredRepsonse = response.data.list.filter((weatherInfo, index) => {
        if (index === 0) {
          currentDate = getDateAndTimeFromResponse(weatherInfo)[0];
          count ++;
          return true;
        }
        if (count > 4) return false; 
        if (currentDate === getDateAndTimeFromResponse(weatherInfo)[0]) return false;
        if ('12:00:00' !== getDateAndTimeFromResponse(weatherInfo)[1]) return false;
        count ++;
        currentDate = getDateAndTimeFromResponse(weatherInfo)[0];
        return true;
      });
      console.log(alteredRepsonse);
      setWeatherResponse(alteredRepsonse);
    }
    getWeatherApiCall();
  }, [city]);

  return (
    <div>
      <div className="margin-top-40">
        <CityLinks city={city} />
      </div>
      <div className="margin-top-40">
        {typeof weatherResponse === 'object' && weatherResponse?.length > 0 ? (
          <WeatherCard weatherResponse={weatherResponse}/>
        ) : (
          <FontAwesomeIcon icon={faSpinner} size="2x"/>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

type DashboardProps = {
  city: string;
};