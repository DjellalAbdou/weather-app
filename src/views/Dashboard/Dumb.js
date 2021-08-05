import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';

import SideBar from 'components/organismes/SideBar';
import ContentViewer from 'components/organismes/ContentViewer';

const Dashboard = ({
  saveUserCoordinates,
  getCurrentPositionWeather,
  selectedWeather,
  saveCurrentSelectedDay,
  currentSelectedDay,
  getSelectedPlace,
  userCoords
}) => {

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        saveUserCoordinates && saveUserCoordinates({ latitude, longitude });
        getCurrentPositionWeather && getCurrentPositionWeather({ latitude, longitude }).then(res => {
          saveCurrentSelectedDay && saveCurrentSelectedDay(res.value.data.daily[0])
        });
        getSelectedPlace && getSelectedPlace({ latitude, longitude });
      })
    }
  }, []);

  const isLoading = () => {
    return Object.keys(selectedWeather).length === 0
      || Object.keys(userCoords).length === 0
      || Object.keys(currentSelectedDay).length === 0
  }

  return (
    <div className="dashboard">
      {isLoading() && (
        <div className="dashboard__loader">
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
          />
        </div>

      )}
      {!isLoading() && (
        <>
          <SideBar />
          <ContentViewer />
        </>
      )}
    </div>
  )
}

Dashboard.propTypes = {
  saveUserCoordinates: PropTypes.func.isRequired,
  getCurrentPositionWeather: PropTypes.func.isRequired,
  selectedWeather: PropTypes.object.isRequired,
  userCoords: PropTypes.object.isRequired,
  saveCurrentSelectedDay: PropTypes.func.isRequired,
  currentSelectedDay: PropTypes.object.isRequired,
  getSelectedPlace: PropTypes.func.isRequired,
}

export default Dashboard;
