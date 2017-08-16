// Vendor Assets
import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';

// Project Assets
import store, { history } from './store'
import './index.css';
import AppContainer from './containers/AppContainer';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppContainer />
    </ConnectedRouter>
  </Provider>
, document.getElementById('root'));
registerServiceWorker();
