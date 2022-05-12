import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './db/reducers';
import { getApiData} from './db/actions/index';
const { composeWithDevTools } = require('redux-devtools-extension')

const store = createStore(rootReducer,
  composeWithDevTools(applyMiddleware(thunk)));

  store.dispatch(getApiData());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

