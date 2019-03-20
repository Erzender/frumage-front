import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from '../../Account/components/LoginForm';

import root from '../duck/reducer';
import persist from '../duck/persist';
import account from '../../Account/duck/reducer';

const persistConfig = {
  key: 'persist',
  storage,
};

const persistedReducer = persistReducer(persistConfig, persist);

const rootReducer = combineReducers({ root, persistedReducer, account });
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
const persistor = persistStore(store);

const App = () => (
  <div style={{ display: 'flex', flex: 1 }}>
    <LoginForm />
  </div>
);

export default () => (
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <App />
    </PersistGate>
  </Provider>
);
