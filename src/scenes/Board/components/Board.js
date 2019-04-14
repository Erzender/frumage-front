import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withNamespaces } from 'react-i18next';

import Header from './Header';
import LeftMenu from './LeftMenu';

const styles = {
  container: {
    backgroundColor: '#333333',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  header: { display: 'flex', height: 60 },
  main: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
  },
  left: { display: 'flex', flex: 2 },
  right: { display: 'flex', flex: 2 },
  content: { display: 'flex', flex: 8 },
};

const Board = () => (
  <div style={styles.container}>
    <Header style={styles.header} />
    <div style={styles.main}>
      <LeftMenu style={styles.left} />
      <div style={styles.content}>loul</div>
      <div style={styles.right}>loul</div>
    </div>
  </div>
);

Board.propTypes = {};

const mapDispatchToProps = () => ({});

const mapStateToProps = () => ({});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withNamespaces(),
)(Board);
