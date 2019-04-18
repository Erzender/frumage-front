import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getThreads } from '../duck';
import TopicElem from './TopicElem';
import ThreadElem from './ThreadElem';
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
  t, token, style, topics, clickTopic, threads,
}) => {
  const clickTop = id => clickTopic(token, id);
  return (
    <div style={{ ...style, ...styles.container }}>
      <div style={styles.box}>
        <h4 className="noselect" style={styles.title}>
          {t('board.TOPICS')}
          <FontAwesomeIcon
            icon="plus-circle"
            style={{
              ...styles.plus,
            }}
          />
        </h4>
        <List Elem={TopicElem} nodes={topics} click={clickTop} />
      </div>
      <div style={styles.box}>
        <h4 style={styles.title}>
          {t('board.THREADS')}
          <FontAwesomeIcon
            icon="plus-circle"
            style={{
              ...styles.plus,
            }}
          />
        </h4>
        <List Elem={ThreadElem} nodes={threads} />
      </div>
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
  clickTopic: PropTypes.func.isRequired,
};

LeftMenu.defaultProps = {
  style: {},
  token: null,
};

const mapDispatchToProps = dispatch => ({
  clickTopic: (token, id) => dispatch(getThreads(token, id)),
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
    selected: false,
    recent: false,
  })),
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withNamespaces(),
)(LeftMenu);
