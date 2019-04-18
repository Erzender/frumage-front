import { handleActions } from 'redux-actions';
import { loginSuccess } from '../Account/duck';

const initialRootState = {};

export const root = handleActions({}, initialRootState);

const initialPersistState = {
  token: null,
};

export const persist = handleActions(
  {
    [loginSuccess]: (state, { payload: { token } }) => ({ ...state, token }),
  },
  initialPersistState,
);
