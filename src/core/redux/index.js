import { combineReducers } from "redux";
import coordsReducer, { ReducerKey as COORDS_STATE_KEY } from '../redux/coordinates/reducer';

const rootReducer = combineReducers({
  [COORDS_STATE_KEY]: coordsReducer,
});

export default rootReducer;