import { handleActions } from 'redux-actions';

const initialRootState = {};

export const root = handleActions({}, initialRootState);

const initialPersistState = {
  token: null,
};
export const persist = handleActions({}, initialPersistState);
