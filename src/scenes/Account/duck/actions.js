import service from '../../../service/account.service';

import {
  LOGIN_INPUT_CHANGE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from './types';

export const loginRequest = payload => ({ type: LOGIN_REQUEST, payload });
export const loginSuccess = payload => ({ type: LOGIN_SUCCESS, payload });
export const loginFailure = error => ({ type: LOGIN_FAILURE, error });
export const registerRequest = payload => ({ type: REGISTER_REQUEST, payload });
export const registerSuccess = payload => ({ type: REGISTER_SUCCESS, payload });
export const registerFailure = error => ({ type: REGISTER_FAILURE, error });

export const login = (name, password) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const ret = await service.login(name, password);
    dispatch(loginSuccess(ret));
  } catch (err) {
    dispatch(loginFailure(err));
  }
};

export const register = (name, password) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const ret = await service.register(name, password);
    dispatch(registerSuccess(ret));
  } catch (err) {
    dispatch(registerFailure(err));
  }
};

export const changeInput = (input, value) => ({
  type: LOGIN_INPUT_CHANGE,
  input,
  value,
});
