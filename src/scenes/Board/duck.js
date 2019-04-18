import { handleActions, createActions } from 'redux-actions';

import service from '../../service';

export const {
  topicsRequest,
  topicsFailure,
  topicsSuccess,
  openModal,
  closeModal,
} = createActions({
  TOPICS_REQUEST: () => ({}),
  TOPICS_FAILURE: () => ({}),
  TOPICS_SUCCESS: topics => ({ topics }),
  OPEN_MODAL: () => ({}),
  CLOSE_MODAL: () => ({}),
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
  isModalOpen: false,
  modal: {
    title: '',
    description: '',
  },
  topics: [],
  threads: [],
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
    [topicsSuccess]: (state, { payload: { topics } }) => ({ ...state, topics }),
    [openModal]: state => ({ ...state, isModalOpen: true }),
    [closeModal]: state => ({ ...state, isModalOpen: false }),
    // [closeModal]: state => ({ ...state, isModalOpen: false }),
  },
  initialBoardState,
);
