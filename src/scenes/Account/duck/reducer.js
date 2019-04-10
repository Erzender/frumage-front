import {
  LOGIN_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  LOGIN_INPUT_CHANGE,
} from './types';

const initialState = {
  isLoading: false,
  registered: false,
  isLogged: true,
  name: '',
  password: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_INPUT_CHANGE:
      return {
        ...state,
        name: action.input === 'name' ? action.value : state.name,
        password: action.input === 'password' ? action.value : state.password,
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLogged: true,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};
