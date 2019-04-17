import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = {
  container: {
    flex: 1,
    color: '#FFFFFF',
    flexDirection: 'column',
    overflow: 'hidden',
    overflowY: 'auto',
    display: 'inline-block',
  },
  messageContainer: {
    display: 'flex',
    overflow: 'hidden',
    flexDirection: 'row',
    borderStyle: 'solid',
    borderColor: '#555555',
    borderWidth: 0,
    borderBottomWidth: 1,
    minHeight: '200px',
  },
  meta: {
    minWidth: '120px',
    maxWidth: '120px',
    overflow: 'hidden',
    padding: 10,
  },
  pic: {
    height: 100,
    width: 100,
    color: 'transparent',
    backgroundColor: '#777777',
  },
  author: {
    fontWeight: 'bold',
  },
  time: {
    fontStyle: 'italic',
  },
  rank: {
    color: '#777777',
  },
  message: {
    flex: 1,
    padding: 10,
    borderStyle: 'solid',
    borderColor: 'red',
    borderWidth: 0,
    overflow: 'hidden',
  },
  icon: {
    height: 100,
    width: 100,
    color: '#222222',
    backgroundColor: '#777777',
    padding: 5,
  },
};

const Messages = ({ messages }) => (
  <div style={styles.container}>
    {messages.map(message => (
      <div style={styles.messageContainer}>
        <div style={styles.meta}>
          <div style={styles.pic}>
            <FontAwesomeIcon icon="cheese" style={styles.icon} />
            {message.pic !== '' && (
              <img
                style={{ ...styles.pic, top: -104, position: 'relative' }}
                src={message.pic}
                alt="sender"
              />
            )}
          </div>
          <div style={styles.author}>{message.author}</div>
          <div style={styles.rank}>{message.rank}</div>
          <div style={styles.time}>{message.time}</div>
        </div>
        <div style={styles.message}>
          <pre
            style={{
              overflow: 'hidden',
              display: 'inline',
              textAlign: 'left',
              whiteSpace: 'pre-wrap',
              color: 'white',
              fontFamily: '"Lucida Sans Unicode", "Lucida Grande", sans-serif',
            }}
          >
            {message.text}
          </pre>
        </div>
      </div>
    ))}
  </div>
);

Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  ).isRequired,
};

Messages.defaultProps = {};

const mapDispatchToProps = () => ({});

const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Messages);
