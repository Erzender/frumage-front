import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';

const styles = {
  container: { backgroundColor: '#222222', color: '#FFFFFF' },
  title: { color: '#666666' },
};

const LeftMenu = ({ t, style }) => (
  <div style={{ ...style, ...styles.container }}>
    <div>
      <h4 style={styles.title}>{t('board.TOPICS')}</h4>
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
