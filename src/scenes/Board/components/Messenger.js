import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = {
  container: { display: 'flex', color: '#FFFFFF', flexDirection: 'column' },
  messages: { flex: 1 },
  writer: {
    margin: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#555555',
    resize: 'none',
    color: 'white',
    borderWidth: 0,
  },
  sendButton: {
    backgroundColor: 'white',
    color: '#555555',
    padding: 8,
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
    cursor: 'pointer',
  },
};

const Messenger = ({ style }) => (
  <div style={{ ...style, ...styles.container }}>
    <div style={styles.messages}>messages</div>
    <div style={styles.writer}>
      <Input type="textarea" style={styles.input} rows="1" />
      <FontAwesomeIcon icon="paper-plane" style={styles.sendButton} />
    </div>
  </div>
);

Messenger.propTypes = {
  style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
};

Messenger.defaultProps = {
  style: {},
};

const mapDispatchToProps = () => ({});

const mapStateToProps = () => ({});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Messenger);
