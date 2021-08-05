import InitialState from './state';
import types from './constants';
import Immutable from 'immutable';
import { type } from 'language-tags';

const ReducerKey = 'COORDS_REDUCER';

const dataReducer = (state = InitialState, action) => {
  switch (action.type) {
    case types.SAVE_USER_COORDS:
      return state.merge({
        userLocation: Immutable.fromJS(action.payload),
      });

    case types.SAVE_SELECTED_POSITION_WEATHER_FULFILLED:
      return state.merge({
        selectedPositionWeather: Immutable.fromJS(action.payload.data)
      });

    case types.SAVE_CURRENT_DAY:
      return state.merge({
        currentSelectedDay: Immutable.fromJS(action.payload)
      });

    case type.SAVE_SELECTED_DEGREE_TYPE:
      return state.merge({
        selectedDegreeType: action.payload
      })

    default:
      return state;
  }
}

export default dataReducer;
export { ReducerKey };