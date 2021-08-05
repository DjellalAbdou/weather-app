import React from 'react';
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const style = {
  width: '100%',
  height: '100%'
}

const containerStyle = {
  position: 'relative',
  width: '100%',
  height: 300
}


const MapViewer = (props) => {
  const handleMarker = () => () => {
    console.log("marker");
  }

  return (
    <div>
      <Map
        google={props.google}
        containerStyle={containerStyle}
        style={style}
        initialCenter={{ lat: 40.854885, lng: -88.081807 }}
        zoom={15}
      >
        <Marker onClick={handleMarker()} />
      </Map>
    </div>
  )
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAXaxqx7ExlpVztWFjICEC9Yn2CtQBMntM"
})(MapViewer);
