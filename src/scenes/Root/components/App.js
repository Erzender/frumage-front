import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Button } from 'reactstrap';
import root from '../duck/reducer';
import 'bootstrap/dist/css/bootstrap.min.css';

const rootReducer = combineReducers({ root });
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

const App = () => (
  <div style={{ flex: 1 }}>
    <Button>loul</Button>
  </div>
);

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
