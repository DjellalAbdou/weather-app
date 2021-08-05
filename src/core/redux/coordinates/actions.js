import types from './constants';

export function saveUserCoordinates(coords) {
  return dispatch => {

    return dispatch({
      type: types.SAVE_USER_COORDS,
      payload: coords
    })
  };
}

export function getCurrentPositionWeather(coords) {
  return (dispatch, getState, { api }) => {

    return dispatch({
      type: types.SAVE_SELECTED_POSITION_WEATHER,
      payload: api.getWeatherByCoords(coords),
    })
  }
}

export function saveCurrentSelectedDay(day) {
  return dispatch => {

    return dispatch({
      type: types.SAVE_CURRENT_DAY,
      payload: day
    })
  };
}

export function saveSelectedDegreeType(degreeType) {
  return dispatch => {

    return dispatch({
      type: types.SAVE_SELECTED_DEGREE_TYPE,
      payload: degreeType
    })
  };
}

export function getSelectedPlace(coords) {
  return (dispatch, getState, { api }) => {

    return dispatch({
      type: types.SAVE_SELECTED_PLACE,
      payload: api.getSelectedPlace(coords),
    });
  }
}