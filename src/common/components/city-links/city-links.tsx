import React from 'react';
import { Link } from 'react-router-dom';

import { CITIES } from '../../constants';
import './city-links.css';

const CityLinks = ({ city }: CityLinksProps): JSX.Element => {
  return (
    <div className="city-links-container">
      {Object.keys(CITIES).map(nameOfCity => (
        <div key={nameOfCity} className="link-container">
          <Link
            className={`link ${city === nameOfCity ? 'chosen' : ''}`}
            to={`/${nameOfCity}`}
          >
            {nameOfCity.toUpperCase()}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CityLinks;

type CityLinksProps = {
  city: string;
};