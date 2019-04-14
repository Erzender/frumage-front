import { createActions, handleActions } from 'redux-actions';
import service from '../../service/account.service';

export const {
  loginRequest,
  loginSuccess,
  loginFailure,
  registerRequest,
  registerSuccess,
  registerFailure,
  loginInputChange,
  registerInputChange,
} = createActions({
  LOGIN_REQUEST: () => ({}),
  LOGIN_SUCCESS: token => ({ token }),
  LOGIN_FAILURE: err => ({ err }),
  REGISTER_REQUEST: () => ({}),
  REGISTER_SUCCESS: () => ({}),
  REGISTER_FAILURE: err => ({ err }),
  LOGIN_INPUT_CHANGE: (input, value) => ({ input, value }),
  REGISTER_INPUT_CHANGE: (input, value) => ({ input, value }),
});

console.log(loginInputChange);

export const login = (name, password) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const ret = await service.login(name, password);
    if (ret.token) {
      dispatch(loginSuccess(ret.token));
    } else {
      dispatch(loginFailure(ret));
    }
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

const initialState = {
  isLoading: false,
  registered: false,
  isLogged: false,
  name: '',
  password: '',
};

export const account = handleActions(
  {
    [loginInputChange]: (state, { payload: { input, value } }) => ({
      ...state,
      name: input === 'name' ? value : state.name,
      password: input === 'password' ? value : state.password,
    }),
    [registerInputChange]: (state, { payload: { input, value } }) => ({
      ...state,
      name: input === 'name' ? value : state.name,
      password: input === 'password' ? value : state.password,
    }),
    [loginRequest]: state => ({ ...state, isLoading: true }),
    [loginSuccess]: state => ({ ...state, isLoading: false, isLogged: true }),
    [loginFailure]: state => ({ ...state, isLoading: false }),
    [registerFailure]: state => ({ ...state, isLoading: false }),
    [registerRequest]: state => ({ ...state, isLoading: true }),
    [registerSuccess]: state => ({ ...state, isLoading: false, registered: true }),
  },
  initialState,
);
