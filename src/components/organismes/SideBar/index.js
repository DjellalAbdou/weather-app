import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import hoistNonReactStatics from 'hoist-non-react-statics';

import * as CoordsActions from 'core/redux/coordinates/actions';
import * as CoordsSelectors from 'core/redux/coordinates/selectors';

import DumbComponent from './Dumb';

const SmartComponent = compose(
  connect(
    state => ({
      selectedWeather: CoordsSelectors.getSelectedWeather(state) && CoordsSelectors.getSelectedWeather(state).toJS(),
      currentSelectedDay: CoordsSelectors.getCurrentSelectedDay(state) && CoordsSelectors.getCurrentSelectedDay(state).toJS(),
      selectedDegreeType: CoordsSelectors.getSelectedDegreeType(state) && CoordsSelectors.getSelectedDegreeType(state),
      selectedPlace: CoordsSelectors.getSelectedPlace(state) && CoordsSelectors.getSelectedPlace(state).toJS()
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
