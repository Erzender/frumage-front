import { handleActions, createActions } from 'redux-actions';

import service from '../../service';

export const { topicsRequest, topicsFailure, topicsSuccess } = createActions({
  TOPICS_REQUEST: () => ({}),
  TOPICS_FAILURE: () => ({}),
  TOPICS_SUCCESS: () => ({}),
});

export const getTopics = token => async (dispatch) => {
  dispatch(topicsRequest());
  try {
    const ret = await service.fetchTopics(token);
    if (ret.topics) {
      dispatch(topicsSuccess(ret.topics));
    } else {
      dispatch(topicsFailure(ret));
    }
  } catch (err) {
    dispatch(topicsFailure(err));
  }
};

const initialBoardState = {
  topics: [],
};

export const board = handleActions({}, initialBoardState);
