import React from 'react';
import PropTypes from 'prop-types';

import Colors from 'colors';

const WeatherButton = ({ text, color, CTA }) => {
  return (
    <div onClick={CTA} style={{ backgroundColor: color }} className="weather-button">
      {text}
    </div>
  )
}


WeatherButton.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  CTA: PropTypes.func.isRequired
};

WeatherButton.defaultProps = {
  color: Colors.primaryBlue,
};

export default WeatherButton;