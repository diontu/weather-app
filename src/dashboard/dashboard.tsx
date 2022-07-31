import React, { useEffect, useState } from 'react';
import WeatherCard from '../common/components/weather-card/weather-card';
import CityLinks from '../common/components/city-links/city-links';
import { getWeather } from '../common/api';
import './dashboard.css';
import { faCommentsDollar } from '@fortawesome/free-solid-svg-icons';

const Dashboard = ({ city }: DashboardProps): JSX.Element => {
  const [weatherResponse, setWeatherResponse] = useState({});
  useEffect(() => {
    //make call to the weather service
    //for today's weather, get the current weather
    //for the other days, get the afternoon 12:00:00 pm weather
    const getWeatherApiCall = async () => {
      const response = await getWeather(city);
      // take the dates for the next few days 
      // specifically, the current date from the list, then the next date at 12:00pm -- doing this 3 more times
      // const 
      let currentDate: string = '';
      let count: number = 0;
      const alteredRepsonse = response.data.list.filter((weatherInfo, index) => {
        if (index === 0) {
          currentDate = weatherInfo.dt_txt.split(' ')[0];
          count ++;
          return true;
        }
        if (count > 4) return false; 
        if (currentDate === weatherInfo.dt_txt.split(' ')[0]) return false;
        if ('12:00:00' !== weatherInfo.dt_txt.split(' ')[1]) return false;
        count ++;
        currentDate = weatherInfo.dt_txt.split(' ')[0];
        return true;
      });
      console.log(alteredRepsonse);
      console.log(new Date(alteredRepsonse[0].dt_txt.split(' ')[0]).getDay());
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
        <WeatherCard weatherResponse={weatherResponse}/>
      </div>
    </div>
  );
};

export default Dashboard;

type DashboardProps = {
  city: string;
};