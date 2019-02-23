import userConstants from '../constants/user.constants';
import userServices from '../../services/user.services';

export const login = (name, password) => {
  const request = payload => ({ type: userConstants.LOGIN_REQUEST, payload });
  const success = payload => ({ type: userConstants.LOGIN_SUCCESS, payload });
  const failure = error => ({ type: userConstants.LOGIN_FAILURE, error });

  return (dispatch) => {
    dispatch(request());
    userServices
      .login(name, password)
      .then(payload => dispatch(success(payload)), error => dispatch(failure(error)));
  };
};

const register = (user, password) => {
  const {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
  } = userConstants;
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


export default {
  login,
  register,
  // getUserData
};
