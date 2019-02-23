// react
import React, { Component } from 'react';
// redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
// reducers
import rootReducer from './redux/reducers';
// components
// import Login from './components/Login';
import LogForm from './components/LogForm';
import Toastify from './components/Toastify';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

const style = {
  display: 'flex',
  flex: 1,
  // alignItems: 'center',
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  justifyContent: 'center',
  alignItems: 'center',
};

class App extends Component {
  render() {
    return (
      <div style={style}>
        {/* <Login /> */}
        <LogForm />
        {/* <Toastify /> */}
      </div>
    );
  }
}

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
