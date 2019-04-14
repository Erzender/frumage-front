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
  toRegister,
} = createActions({
  LOGIN_REQUEST: () => ({}),
  LOGIN_SUCCESS: token => ({ token }),
  LOGIN_FAILURE: err => ({ err }),
  REGISTER_REQUEST: () => ({}),
  REGISTER_SUCCESS: ret => ({ ret }),
  REGISTER_FAILURE: err => ({ err }),
  LOGIN_INPUT_CHANGE: (input, value) => ({ input, value }),
  REGISTER_INPUT_CHANGE: (input, value) => ({ input, value }),
  TO_REGISTER: () => ({}),
});

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
    console.log(ret);
    if (!ret.success) {
      throw ret;
    }
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
  message: { status: 0, response: '', visible: false },
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
    [loginFailure]: (state, { payload: { err } }) => ({ ...state, isLoading: false, message: { ...err, visible: true } }),
    // [loginFailure]: state => ({ ...state, isLoading: false }),
    [registerRequest]: state => ({ ...state, isLoading: true }),
    [registerFailure]: (state, { payload: { err } }) => ({ ...state, isLoading: false, message: { ...err, visible: true } }),
    [registerSuccess]: (state, { payload: { ret } }) => ({ ...state, isLoading: false, message: { ...ret, visible: true }, registered: true }),
    // [registerFailure]: (state, { payload: { err: { response } } }) => ({ ...state, isLoading: false, message: response }),
    // [registerSuccess]: state => ({ ...state, isLoading: false, registered: true }),
    [toRegister]: state => ({ ...state, registered: false }),
  },
  initialState,
);
