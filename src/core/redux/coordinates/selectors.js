import { ReducerKey as COORDS_STATE_KEY } from './reducer';

export const getUserCoords = ({ [COORDS_STATE_KEY]: state }) => state.get('userLocation');
export const getSelectedWeather = ({ [COORDS_STATE_KEY]: state }) => state.get('selectedPositionWeather');
export const getCurrentSelectedDay = ({ [COORDS_STATE_KEY]: state }) => state.get('currentSelectedDay');
export const getSelectedDegreeType = ({ [COORDS_STATE_KEY]: state }) => state.get('selectedDegreeType');
export const getSelectedPlace = ({ [COORDS_STATE_KEY]: state }) => state.get('selectedPlace');