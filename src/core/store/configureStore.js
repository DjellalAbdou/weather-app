import { createStore, applyMiddleware } from 'redux';
import ThunkMiddleware from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from 'core/redux';
import * as api from 'core/api';

// add another middleware if we want
const middleware = [
  ThunkMiddleware.withExtraArgument({ api }),
  promise,
]

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

export { store };