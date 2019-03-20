import userConstants from './types';

const initialState = {
  isLoading: false,
  registered: false,
  isLogged: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        isLoading: true,
      };
    case userConstants.REGISTER_SUCCESS:
      console.log('login success');
      return {
        isLoading: false,
        isLogged: true,
      };
    case userConstants.REGISTER_FAILURE:
      console.log('register fail');
      return {
        isLoading: false,
      };
    case userConstants.REGISTER_REQUEST:
      return {
        isLoading: true,
      };
    case userConstants.REGISTER_SUCCESS:
      console.log('register success');
      return {
        isLoading: false,
        registered: true,
      };
    case userConstants.REGISTER_FAILURE:
      console.log('register fail');
      return {
        isLoading: false,
      };
    default:
      return state;
  }
};
