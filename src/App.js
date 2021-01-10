import './configs/ReactotronConfig';

import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';

import { store, persistor } from './store';
import Routes from './routes';
import history from './services/history';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
