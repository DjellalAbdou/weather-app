
import React from 'react'
import PropTypes from 'prop-types';

import classNames from 'classnames';

import city from 'assets/images/city.jpg';

import dates from 'dates';

const ICON_URL = process.env.REACT_APP_API_ICON;

const SideBar = ({ currentSelectedDay }) => {
  const {
    sunrise,
    temp,
    weather,
    feels_like: feelsLike,
    humidity,
    wind_speed: windSpeed,
    rain,
  } = currentSelectedDay;

  const nightValueStyle = classNames({
    'side-bar__degree': true,
    'side-bar__degree-night': true
  })

  return (
    <div className="side-bar">
      <div className="side-bar__header">Weather Mapper</div>
      <div className="side-bar__weather-icon">
        <img
          src={`${ICON_URL}${weather[0].icon}@2x.png`}
          alt="weather icon"
          className="side-bar__weather-icon-pic"
        />
      </div>
      <div className="side-bar__date">{dates.shortFullDay(sunrise)}</div>
      <div className="side-bar__degree-container">
        <div className="side-bar__degree">{Math.round(temp.day)}° C</div>
        <div className={nightValueStyle}>{Math.round(temp.night)}° C</div>
      </div>
      <div className="side-bar__detail">
        <div>feels like</div>
        <div className="side-bar__degree-container">
          <div className="side-bar__degree">{Math.round(feelsLike.day)}° C</div>
          <div className={nightValueStyle}>{Math.round(feelsLike.night)}° C</div>
        </div>
        <div className="side-bar__detail-elements">
          <div className="side-bar__side-element">
            <img src={`${ICON_URL}13n@2x.png`} alt="humidity" className="side-bar__side-element-pic" />
            <div>humidity - {humidity}</div>
          </div>
          <div className="side-bar__side-element">
            <img
              src={`${ICON_URL}50n@2x.png`}
              alt="rain"
              className="side-bar__side-element-pic"
            />
            <div>wind speed - {windSpeed}</div>
          </div>
          <div className="side-bar__side-element">
            <img
              src={`${ICON_URL}09n@2x.png`}
              alt="rain"
              className="side-bar__side-element-pic"
            />
            <div>rain - {rain ? rain : 0}</div>
          </div>
        </div>
      </div>
      <div className="side-bar__footer">
        <div className="side-bar__position">
          <img src={city} alt="city" className="side-bar__position-pic" />
          <div className="side-bar__position-text"> New York, NY, USA</div>
        </div>
      </div>
    </div>
  )
}

SideBar.propTypes = {
  currentSelectedDay: PropTypes.object.isRequired,
}

export default SideBar;