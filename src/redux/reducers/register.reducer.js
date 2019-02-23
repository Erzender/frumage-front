import userConstants from '../constants/user.constants';

const initialState = {
  isLoading: false,
  registered: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
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
