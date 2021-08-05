import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { convertCelciusToFarenheit } from 'core/utils';
import dates from 'dates';

const ICON_URL = process.env.REACT_APP_API_ICON;

const WeatherCard = ({ day, selected, saveCurrentSelectedDay, selectedDegreeType }) => {
  const { sunrise, temp, weather } = day;
  const weatherCardClass = classNames({
    'weather-card': true,
    'weather-card--selected': selected
  })

  const handleCardClick = () => () => {
    saveCurrentSelectedDay && saveCurrentSelectedDay(day);
  }

  return (
    <div className={weatherCardClass} onClick={handleCardClick()}>
      <div className="weather-card__title">{dates.shortDay(sunrise)}</div>
      <div className="weather-card__image-container">
        <img
          src={`${ICON_URL}${weather[0].icon}@2x.png`}
          alt="weather in the current day"
          className="weather-card__image-container-pic"
        />
      </div>
      <div className="weather-card__degree">
        {selectedDegreeType === 'C' && (
          <>
            <div className="weather-card__degree-day">{Math.round(temp.day)}°</div>
            <div className="weather-card__degree-night">{Math.round(temp.night)}°</div>
          </>
        )}
        {selectedDegreeType === 'F' && (
          <>
            <div className="weather-card__degree-day">{Math.round(convertCelciusToFarenheit(temp.day))}°</div>
            <div className="weather-card__degree-night">{Math.round(convertCelciusToFarenheit(temp.night))}°</div>
          </>
        )}
      </div>
    </div>
  )
}

WeatherCard.propTypes = {
  day: PropTypes.object.isRequired,
  selected: PropTypes.bool,
  // redux props
  saveCurrentSelectedDay: PropTypes.func.isRequired,
  selectedDegreeType: PropTypes.string.isRequired,
}

WeatherCard.defaultProps = {
  selected: false
}

export default WeatherCard;