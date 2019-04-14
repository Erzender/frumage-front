import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import TopicElem from './TopicElem';

const styles = {
  container: { backgroundColor: '#222222', color: '#FFFFFF', flexDirection: 'column' },
  title: { color: '#666666', margin: 5 },
  box: {
    flex: 1,
    display: 'flex',
    overflow: 'hidden',
    flexDirection: 'column',
  },
  list: {
    display: 'flex',
    flex: 1,
    overflow: 'auto',
    flexDirection: 'column',
  },
};

const List = ({ Elem, nodes }) => (
  <div style={styles.list}>
    {nodes.map(node => (
      <Elem key={node.id} node={node} />
    ))}
  </div>
);

List.propTypes = {
  Elem: PropTypes.func.isRequired,
  nodes: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])),
  ).isRequired,
};

const LeftMenu = ({ t, style, topics }) => (
  <div style={{ ...style, ...styles.container }}>
    <div style={styles.box}>
      <h4 className="noselect" style={styles.title}>
        {t('board.TOPICS')}
      </h4>
      <List Elem={TopicElem} nodes={topics} />
    </div>
    <div style={styles.box}>
      <h4 style={styles.title}>{t('board.THREADS')}</h4>
    </div>
  </div>
);

LeftMenu.propTypes = {
  t: PropTypes.func.isRequired,
  topics: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])),
  ).isRequired,
  style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
};

LeftMenu.defaultProps = {
  style: {},
};

const mapDispatchToProps = () => ({});

const mapStateToProps = state => ({
  topics: state.board.topics.map(topic => ({
    title: topic.name,
    desc: topic.description,
    selected: false,
    recent: false,
    id: topic.id,
  })),
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withNamespaces(),
)(LeftMenu);
