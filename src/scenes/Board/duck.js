import { handleActions, createActions } from 'redux-actions';

import { serialize, addToObj, addToNested } from '../../utils/serializer';
import service from '../../service';

export const {
  topicsRequest,
  topicsFailure,
  topicsSuccess,
  openModal,
  closeModal,
  modalTitleChange,
  modalDescChange,
  createTopic,
  createTopicRequest,
  createTopicFailure,
  createTopicSuccess,
  selectTopic,
  threadsRequest,
  threadsFailure,
  threadsSuccess,
  selectThread,
  messagesRequest,
  messagesFailure,
  messagesSuccess,
  sendRequest,
  sendFailure,
  sendSuccess,
  messageType,
} = createActions({
  TOPICS_REQUEST: () => ({}),
  TOPICS_FAILURE: () => ({}),
  TOPICS_SUCCESS: topics => ({ topics }),
  OPEN_MODAL: () => ({}),
  CLOSE_MODAL: () => ({}),
  MODAL_TITLE_CHANGE: value => ({ value }),
  MODAL_DESC_CHANGE: value => ({ value }),
  CREATE_TOPIC: (type, modal) => ({ type, modal }),
  CREATE_TOPIC_REQUEST: () => ({}),
  CREATE_TOPIC_FAILURE: err => ({ err }),
  CREATE_TOPIC_SUCCESS: resp => ({ resp }),
  SELECT_TOPIC: id => ({ id }),
  THREADS_REQUEST: () => ({}),
  THREADS_FAILURE: () => ({}),
  THREADS_SUCCESS: threads => ({ threads }),
  SELECT_THREAD: id => ({ id }),
  MESSAGES_REQUEST: () => ({}),
  MESSAGES_FAILURE: () => ({}),
  MESSAGES_SUCCESS: messages => ({ messages }),
  SEND_REQUEST: () => ({}),
  SEND_FAILURE: () => ({}),
  SEND_SUCCESS: message => ({ message }),
  MESSAGE_TYPE: value => ({ value }),
});

export const createFromModal = (type, modal, token) => async (dispatch) => {
  dispatch(createTopicRequest());
  try {
    const ret = await service.newTopic(token, modal.title, modal.desc, '', '');
    if (ret.success) { // ongoing
      dispatch(createTopicSuccess(ret.topics));
    } else {
      dispatch(createTopicFailure(ret));
    }
  } catch (err) {
    dispatch(createTopicFailure(err));
  }
}

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

export const sendMessage = (token, id, message) => async (dispatch) => {
  if (message === '' || id === null) {
    return;
  }
  dispatch(selectThread(id));
  dispatch(sendRequest());
  try {
    const ret = await service.newMessage(token, id, message);
    if (ret.message) {
      dispatch(sendSuccess(ret.message));
    } else {
      dispatch(sendFailure(ret));
    }
  } catch (err) {
    dispatch(sendFailure(err));
  }
};

const initialBoardState = {
  modal: {},
  title: '',
  desc: '',
  topics: {},
  selectedTopic: null,
  threads: {},
  selectedThread: null,
  messages: {},
  messageInput: '',
};

export const board = handleActions(
  {
    [openModal]: state => ({ ...state, modal: addToNested(state.modal, 'isOpen', true) }),
    [closeModal]: state => ({ ...state, modal: { isOpen: false } }),
    [modalTitleChange]: (state, { payload: { value } }) => ({ ...state, modal: addToNested(state.modal, 'title', value) }),
    [modalDescChange]: (state, { payload: { value } }) => ({ ...state, modal: addToNested(state.modal, 'desc', value) }),
    [createTopic]: (state, { payload: { type, modal }}) => ({ ...state, modal: addToNested(state.modal, 'onCreate', type) }),
    [topicsSuccess]: (state, { payload: { topics } }) => ({ ...state, topics: serialize(topics) }),
    [threadsSuccess]: (state, { payload: { threads } }) => ({
      ...state,
      threads: serialize(threads),
    }),
    [messagesSuccess]: (state, { payload: { messages } }) => ({
      ...state,
      messages: serialize(messages),
    }),
    [selectTopic]: (state, { payload: { id } }) => ({ ...state, selectedTopic: id.toString() }),
    [selectThread]: (state, { payload: { id } }) => ({ ...state, selectedThread: id.toString() }),
    [messageType]: (state, { payload: { value } }) => ({ ...state, messageInput: value }),
    [sendRequest]: state => ({ ...state, messageInput: '' }),
    [sendSuccess]: (state, { payload: { message } }) => ({
      ...state,
      messages: addToObj(state.messages, message),
    }),
  },
  initialBoardState,
);
