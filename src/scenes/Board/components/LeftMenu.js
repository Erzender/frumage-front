import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import TopicElem from './TopicElem';
import ThreadElem from './ThreadElem';
import CreateModal from './CreateModal';
import { openModal, getThreads, getMessages } from '../duck';
import List from '../../componentsReuse/List';

const styles = {
  container: { backgroundColor: '#222222', color: '#FFFFFF', flexDirection: 'column' },
  title: {
    color: '#666666',
    margin: 5,
    display: 'flex',
    alignItems: 'center',
  },
  box: {
    flex: 1,
    display: 'flex',
    overflow: 'hidden',
    flexDirection: 'column',
  },
  plus: {
    color: '#666666',
    height: 15,
    cursor: 'pointer',
  },
};

const LeftMenu = ({
  t,
  token,
  style,
  topics,
  clickTopic,
  threads,
  thread,
  clickThread,
  openModalClick,
}) => {
  const clickTop = id => clickTopic(token, id);
  const clickThr = id => clickThread(token, id, thread);
  return (
    <div style={{ ...style, ...styles.container }}>
      <div style={styles.box}>
        <h4 className="noselect" style={styles.title}>
          {t('board.TOPICS')}
          <FontAwesomeIcon
            // onClick={openModalClick}
            onClick={() => openModalClick('topic')}
            icon="plus-circle"
            style={{
              ...styles.plus,
            }}
          />
        </h4>
        {/* <CreateModal type="topic" /> */}
        <List Elem={TopicElem} nodes={topics} click={clickTop} />
      </div>
      <div style={styles.box}>
        <h4 style={styles.title}>
          {t('board.THREADS')}
          <FontAwesomeIcon
            onClick={() => openModalClick('thread')}
            icon="plus-circle"
            style={{
              ...styles.plus,
            }}
          />
        </h4>
        {/* <CreateModal type="thread" /> */}
        <List Elem={ThreadElem} nodes={threads} click={clickThr} />
      </div>
      <CreateModal />
    </div>
  );
};

LeftMenu.propTypes = {
  t: PropTypes.func.isRequired,
  token: PropTypes.string,
  topics: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])),
  ).isRequired,
  threads: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])),
  ).isRequired,
  style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  openModalClick: PropTypes.func.isRequired,
  clickTopic: PropTypes.func.isRequired,
  clickThread: PropTypes.func.isRequired,
  thread: PropTypes.string,
};

LeftMenu.defaultProps = {
  style: {},
  token: null,
  thread: null,
};

const mapDispatchToProps = dispatch => ({
  openModalClick: type => dispatch(openModal(type)),
  clickTopic: (token, id) => dispatch(getThreads(token, id)),
  clickThread: (token, id, thread) => dispatch(getMessages(token, id, thread)),
});

const mapStateToProps = state => ({
  token: state.persistedReducer.token,
  topics: Object.keys(state.board.topics).map(topic => ({
    title: state.board.topics[topic].name,
    desc: state.board.topics[topic].description,
    selected: state.board.selectedTopic && state.board.selectedTopic === topic,
    recent: false,
    id: state.board.topics[topic].id,
  })),
  threads: Object.keys(state.board.threads).map(thread => ({
    ...state.board.threads[thread],
    selected: state.board.selectedThread && state.board.selectedThread === thread,
    recent: false,
  })),
  modal: state.board.modal,
  profile: state.account.profile,
  thread: state.board.selectedThread,
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withNamespaces(),
)(LeftMenu);
