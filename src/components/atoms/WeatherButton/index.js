import React from 'react';
import PropTypes from 'prop-types';

import Colors from 'colors';
import classNames from 'classnames';

const WeatherButton = ({ text, color, CTA, className }) => {
  const buttonStyle = classNames({
    "weather-button": true,
  }, className);

  return (
    <div onClick={CTA} style={{ backgroundColor: color }} className={buttonStyle}>
      {text}
    </div>
  )
}


WeatherButton.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  CTA: PropTypes.func.isRequired,
  className: PropTypes.string,
};

WeatherButton.defaultProps = {
  color: Colors.primaryBlue,
  className: '',
};

export default WeatherButton;