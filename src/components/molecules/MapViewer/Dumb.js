import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactMapGL, { Marker } from 'react-map-gl';
import { MapPin } from 'react-feather';
import Colors from 'colors';
import WeatherButton from 'components/molecules/WeatherButton';

const MAP_KEY = process.env.REACT_APP_MAP_BOX_KEY;
const MAP_STYLE = process.env.REACT_APP_MAP_STYLE;

const MapViewer = ({ userCoords }) => {
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
    })
  }

  const handleBtnCallToAction = () => () => {
    console.log('clickedonbutton');
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
  })
}


export default MapViewer;
