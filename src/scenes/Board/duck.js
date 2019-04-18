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
  selectThread,
  messagesRequest,
  messagesFailure,
  messagesSuccess,
} = createActions({
  TOPICS_REQUEST: () => ({}),
  TOPICS_FAILURE: () => ({}),
  TOPICS_SUCCESS: topics => ({ topics }),
  SELECT_TOPIC: id => ({ id }),
  THREADS_REQUEST: () => ({}),
  THREADS_FAILURE: () => ({}),
  THREADS_SUCCESS: threads => ({ threads }),
  SELECT_THREAD: id => ({ id }),
  MESSAGES_REQUEST: () => ({}),
  MESSAGES_FAILURE: () => ({}),
  MESSAGES_SUCCESS: messages => ({ messages }),
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

export const getMessages = (token, id) => async (dispatch) => {
  dispatch(selectThread(id));
  dispatch(messagesRequest());
  try {
    const ret = await service.fetchMessages(token, id);
    if (ret.messages) {
      dispatch(messagesSuccess(ret.messages));
    } else {
      dispatch(messagesFailure(ret));
    }
  } catch (err) {
    dispatch(messagesFailure(err));
  }
};

const initialBoardState = {
  topics: {},
  selectedTopic: null,
  threads: {},
  selectedThread: null,
  messages: {},
};

export const board = handleActions(
  {
    [topicsSuccess]: (state, { payload: { topics } }) => ({ ...state, topics: serializer(topics) }),
    [threadsSuccess]: (state, { payload: { threads } }) => ({
      ...state,
      threads: serializer(threads),
    }),
    [messagesSuccess]: (state, { payload: { messages } }) => ({
      ...state,
      messages: serializer(messages),
    }),
    [selectTopic]: (state, { payload: { id } }) => ({ ...state, selectedTopic: id.toString() }),
    [selectThread]: (state, { payload: { id } }) => ({ ...state, selectedThread: id.toString() }),
  },
  initialBoardState,
);
