import types from './types';

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_DRAWER:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
