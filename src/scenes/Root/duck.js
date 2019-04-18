import { handleActions } from 'redux-actions';
import { registerSuccess } from '../Account/duck';

const initialRootState = {};

export const root = handleActions({}, initialRootState);

const initialPersistState = {
  token: null,
};
export const persist = handleActions(
  { [registerSuccess]: (state, { payload: { ret } }) => ({ ...state, token: ret.token }) },
  initialPersistState,
);
