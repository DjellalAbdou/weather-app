import React from 'react'
import Dashboard from './views/Dashboard';
import { Provider } from 'react-redux';
import { store } from 'core/store/configureStore';

import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Dashboard />
      </div>
    </Provider>
  );
}

export default App;
