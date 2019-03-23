import userServices from '../../../service/account.service';

import {
  LOGIN_INPUT_CHANGE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from './types';

export const login = (name, password) => {
  console.log(name, password);
  const request = payload => ({ type: LOGIN_REQUEST, payload });
  const success = payload => ({ type: LOGIN_SUCCESS, payload });
  const failure = error => ({ type: LOGIN_FAILURE, error });

  return (dispatch) => {
    dispatch(request());
    userServices
      .login(name, password)
      .then(payload => dispatch(success(payload)), error => dispatch(failure(error)));
  };
};

export const register = (user, password) => {
  console.log('action/register', user);
  return (dispatch) => {
    dispatch({
      type: REGISTER_REQUEST,
    });

    userServices.register(user, password).then(
      (payload) => {
        dispatch({
          type: REGISTER_SUCCESS,
          payload,
        });
      },
      error => dispatch({
        type: REGISTER_FAILURE,
        error,
      }),
    );
  };
};

export const changeInput = (input, value) => ({
  type: LOGIN_INPUT_CHANGE,
  input,
  value,
});
