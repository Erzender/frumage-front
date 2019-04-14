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

const List = ({ Elem }) => (
  <div style={styles.list}>
    <Elem />
    <Elem />
    <Elem />
    <Elem />
    <Elem />
    <Elem />
    <Elem />
    <Elem />
    <Elem />
    <Elem />
    <Elem />
    <Elem />
    <Elem />
    <Elem />
    <Elem />
  </div>
);

List.propTypes = {
  Elem: PropTypes.func.isRequired,
};

const LeftMenu = ({ t, style }) => (
  <div style={{ ...style, ...styles.container }}>
    <div style={styles.box}>
      <h4 style={styles.title}>{t('board.TOPICS')}</h4>
      <List Elem={TopicElem} />
    </div>
    <div style={styles.box}>
      <h4 style={styles.title}>{t('board.THREADS')}</h4>
    </div>
  </div>
);

LeftMenu.propTypes = {
  t: PropTypes.func.isRequired,
  style: PropTypes.objectOf(PropTypes.string),
};

LeftMenu.defaultProps = {
  style: {},
};

const mapDispatchToProps = () => ({});

const mapStateToProps = () => ({});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withNamespaces(),
)(LeftMenu);
