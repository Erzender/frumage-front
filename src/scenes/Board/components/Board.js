import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withNamespaces } from 'react-i18next';

import { getTopics } from '../duck';
import Header from './Header';
import LeftMenu from './LeftMenu';

const styles = {
  container: {
    backgroundColor: '#333333',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    overflow: 'hidden',
  },
  header: { display: 'flex', height: 60 },
  main: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  left: { display: 'flex', flex: 2, overflow: 'hidden' },
  right: { display: 'flex', flex: 2 },
  content: { display: 'flex', flex: 8 },
};

class Board extends React.Component {
  componentDidMount() {
    const { token, load } = this.props;
    load(token);
  }

  render() {
    return (
      <div style={styles.container}>
        <Header style={styles.header} />
        <div style={styles.main}>
          <LeftMenu style={styles.left} />
          <div style={styles.content}>loul</div>
          <div style={styles.right}>loul</div>
        </div>
      </div>
    );
  }
}
Board.propTypes = {
  token: PropTypes.string,
  load: PropTypes.func.isRequired,
};

Board.defaultProps = {
  token: null,
};

const mapDispatchToProps = dispatch => ({
  load: token => dispatch(getTopics(token)),
});

const mapStateToProps = state => ({
  token: state.persistedReducer.token,
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withNamespaces(),
)(Board);
