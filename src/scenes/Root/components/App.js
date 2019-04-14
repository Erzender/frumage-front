import React from 'react';
import { Provider } from 'react-redux';
import {
  createStore, applyMiddleware, combineReducers, compose,
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withNamespaces } from 'react-i18next';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LoginForm from '../../Account/components/LoginForm';
import RegisterForm from '../../Account/components/RegisterForm';
import Board from '../../Board/components/Board';
import { root, persist } from '../duck';
import { account } from '../../Account/duck';
import '../../../assets/fontAwesome';

const persistConfig = {
  key: 'persist',
  storage,
};

const persistedReducer = persistReducer(persistConfig, persist);

const rootReducer = combineReducers({ root, persistedReducer, account });

/* eslint-disable no-underscore-dangle */

const composed = window.__REDUX_DEVTOOLS_EXTENSION__
  ? compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
  : compose(applyMiddleware(thunkMiddleware));

const store = createStore(rootReducer, composed);
/* eslint-enable */

const persistor = persistStore(store);

const App = withNamespaces()(() => (
  <div
    style={{
      display: 'flex',
      flex: 1,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    }}
  >
    <Router>
      <div style={{ display: 'flex', flex: 1 }}>
        <Route exact path="/" component={Board} />
        <Route path="/register" component={RegisterForm} />
        <Route path="/login" component={LoginForm} />
      </div>
    </Router>
  </div>
));

export default () => (
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <App />
    </PersistGate>
  </Provider>
);
