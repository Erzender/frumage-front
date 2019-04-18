import { handleActions, createActions } from 'redux-actions';

import serializer from '../../utils/serializer';
import service from '../../service';

export const {
  topicsRequest,
  topicsFailure,
  topicsSuccess,
  selectTopic,
  threadsRequest,
  threadsFailure,
  threadsSuccess,
} = createActions({
  TOPICS_REQUEST: () => ({}),
  TOPICS_FAILURE: () => ({}),
  TOPICS_SUCCESS: topics => ({ topics }),
  SELECT_TOPIC: id => ({ id }),
  THREADS_REQUEST: () => ({}),
  THREADS_FAILURE: () => ({}),
  THREADS_SUCCESS: threads => ({ threads }),
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

export const getThreads = (token, id) => async (dispatch) => {
  dispatch(selectTopic(id));
  dispatch(threadsRequest());
  try {
    const ret = await service.fetchThreads(token, id);
    if (ret.threads) {
      dispatch(threadsSuccess(ret.threads));
    } else {
      dispatch(threadsFailure(ret));
    }
  } catch (err) {
    dispatch(threadsFailure(err));
  }
};

const initialBoardState = {
  topics: {},
  selectedTopic: null,
  threads: {},
  messages: [
    {
      author: 'Erzender',
      pic: 'https://www.brick-a-brack.com/users/image/800/600/?1550004299',
      rank: 'User',
      text: 'Je connais le kung fu.',
      time: '2019-03-23T14:34:20.940Z',
      id: 4,
    },
  ],
};

export const board = handleActions(
  {
    [topicsSuccess]: (state, { payload: { topics } }) => ({ ...state, topics: serializer(topics) }),
    [threadsSuccess]: (state, { payload: { threads } }) => ({
      ...state,
      threads: serializer(threads),
    }),
    [selectTopic]: (state, { payload: { id } }) => ({ ...state, selectedTopic: id.toString() }),
  },
  initialBoardState,
);
