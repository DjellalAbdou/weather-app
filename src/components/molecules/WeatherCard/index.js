import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import hoistNonReactStatics from 'hoist-non-react-statics';

import * as CoordsActions from 'core/redux/coordinates/actions';
import * as CoordsSelectors from 'core/redux/coordinates/selectors';

import DumbComponent from './Dumb';

const SmartComponent = compose(
  connect(
    state => ({
      userCoords: CoordsSelectors.getUserCoords(state) && CoordsSelectors.getUserCoords(state).toJS(),
      selectedWeather: CoordsSelectors.getSelectedWeather(state) && CoordsSelectors.getSelectedWeather(state).toJS(),
    }),
    dispatch =>
      bindActionCreators(
        {
          ...CoordsActions,
        },
        dispatch,
      ),
  ),
)(DumbComponent);

export default hoistNonReactStatics(SmartComponent, DumbComponent);
