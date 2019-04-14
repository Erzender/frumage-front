import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';

const styles = {
  container: { backgroundColor: '#222222' },
};

const Header = ({ style }) => <div style={{ ...style, ...styles.container }} />;

Header.propTypes = {
  style: PropTypes.objectOf(PropTypes.string),
};

Header.defaultProps = {
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
)(Header);
