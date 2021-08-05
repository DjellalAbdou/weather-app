import axios from 'axios';

const API_END_POINT = process.env.REACT_APP_API_BASE;
const API_PLACE_END_POINT = process.env.REACT_APP_API_PLACE;
const API_KEY = process.env.REACT_APP_API_KEY;

export function getWeatherByCoords(coords) {
  const { latitude, longitude } = coords;

  return axios.get(API_END_POINT, {
    params: {
      lat: latitude,
      lon: longitude,
      appid: API_KEY,
      exclude: 'minutely,hourly',
      units: 'metric'
    }
  });

}

export function getSelectedPlace(coords) {
  const { latitude, longitude } = coords;

  return axios.get(API_PLACE_END_POINT, {
    params: {
      lat: latitude,
      lon: longitude,
      appid: API_KEY,
      units: 'metric'
    }
  });

}