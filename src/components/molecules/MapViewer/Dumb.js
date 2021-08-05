import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactMapGL, { Marker } from 'react-map-gl';
import { MapPin } from 'react-feather';
import Colors from 'colors';
import WeatherButton from 'components/molecules/WeatherButton';

const MAP_KEY = process.env.REACT_APP_MAP_BOX_KEY;
const MAP_STYLE = process.env.REACT_APP_MAP_STYLE;

const MapViewer = ({
  userCoords,
  getCurrentPositionWeather,
  saveCurrentSelectedDay,
  getSelectedPlace,
}) => {

  const { latitude, longitude } = userCoords;
  const [viewPort, setViewPort] = useState({
    width: "100%",
    height: 300,
    latitude,
    longitude,
    zoom: 8
  });

  const [coords, setCoords] = useState({ latitude, longitude });

  const handleViewPortChange = () => (nextViewPort) => {
    setViewPort(nextViewPort);
  }

  const handleClickMap = () => (events) => {
    const { lngLat } = events;
    setCoords({
      latitude: lngLat[1],
      longitude: lngLat[0]
    });
    getCurrentPositionWeather && getCurrentPositionWeather({
      latitude: lngLat[1],
      longitude: lngLat[0]
    }).then(res => {
      saveCurrentSelectedDay && saveCurrentSelectedDay(res.value.data.daily[0]);
      getSelectedPlace && getSelectedPlace({
        latitude: lngLat[1],
        longitude: lngLat[0]
      });
    })
  }

  const handleBtnCallToAction = () => () => {
    setViewPort({
      ...viewPort,
      ...coords,
      zoom: 8
    })
  }

  return (
    <div className="map-viewer">
      <ReactMapGL
        {...viewPort}
        onViewportChange={handleViewPortChange()}
        mapboxApiAccessToken={MAP_KEY}
        mapStyle={MAP_STYLE}
        onClick={handleClickMap()}
      >
        <Marker
          {...coords}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <MapPin color={Colors.primaryOrange} size={30} />
        </Marker>
      </ReactMapGL>
      <WeatherButton text="centralise" CTA={handleBtnCallToAction()} />
    </div>
  )
}


MapViewer.propTypes = {
  userCoords: PropTypes.shape({
    longitude: PropTypes.number.isRequired,
    latitude: PropTypes.number.isRequired,
  }),
  getCurrentPositionWeather: PropTypes.func.isRequired,
  saveCurrentSelectedDay: PropTypes.func.isRequired,
  getSelectedPlace: PropTypes.func.isRequired,
}


export default MapViewer;
