import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import root from '../duck/reducer';

const rootReducer = combineReducers({ root });
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

const App = () => <div style={{ flex: 1 }}>hello</div>;

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
