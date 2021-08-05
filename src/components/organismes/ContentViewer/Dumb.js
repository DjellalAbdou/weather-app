import React from 'react';
import PropTypes from 'prop-types';

import MapViewer from 'components/molecules/MapViewer';
import WeatherCard from 'components/molecules/WeatherCard';
import ContentHeader from './components/ContentHeader';

const ContentViewer = ({ selectedWeather, currentSelectedDay }) => {

  const renderWeatherCards = () => {

    return selectedWeather.daily && selectedWeather.daily.map(day => {

      return <WeatherCard key={day.dt} day={day} selected={day.dt === currentSelectedDay.dt} />
    })
  }

  return (
    <div className="content-viewer">
      <ContentHeader />
      <div className="content-viewer__card-container">
        {renderWeatherCards()}
      </div>
      <div>
        <MapViewer />
      </div>
    </div>
  )
}

ContentViewer.propTypes = {
  selectedWeather: PropTypes.object.isRequired,
  currentSelectedDay: PropTypes.object.isRequired
}

export default ContentViewer;
