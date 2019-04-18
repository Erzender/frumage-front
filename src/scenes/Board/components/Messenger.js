import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';

import { sendMessage, messageType } from '../duck';
import Messages from './Messages';

const styles = {
  container: {
    display: 'flex',
    color: '#FFFFFF',
    flexDirection: 'column',
    overflow: 'hidden',
  },
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

const Messenger = ({
  style, messages, writer, send, token, thread, message, inputChange,
}) => {
  const sendM = () => send(token, thread, message);
  return (
    <div style={{ ...style, ...styles.container }}>
      <Messages messages={messages} />
      {writer && (
        <div style={styles.writer}>
          <Input
            value={message}
            onChange={inputChange}
            type="textarea"
            style={styles.input}
            rows="1"
          />
          <FontAwesomeIcon onClick={sendM} icon="paper-plane" style={styles.sendButton} />
        </div>
      )}
    </div>
  );
};

Messenger.propTypes = {
  style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  messages: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  ).isRequired,
  writer: PropTypes.bool.isRequired,
  send: PropTypes.func.isRequired,
  token: PropTypes.string,
  thread: PropTypes.string,
  message: PropTypes.string.isRequired,
  inputChange: PropTypes.func.isRequired,
};

Messenger.defaultProps = {
  style: {},
  token: null,
  thread: null,
};

const mapStateToProps = state => ({
  messages: Object.keys(state.board.messages).map(message => ({
    ...state.board.messages[message],
    time: moment(state.board.messages[message].createdAt).fromNow(),
  })),
  writer:
    !!state.board.selectedTopic
    && !!state.board.selectedThread
    && state.board.topics[state.board.selectedTopic].canWrite,
  token: state.persistedReducer.token,
  thread: state.board.selectedThread,
  message: state.board.messageInput,
});

const mapDispatchToProps = dispatch => ({
  send: (token, thread, message) => dispatch(sendMessage(token, thread, message)),
  inputChange: e => dispatch(messageType(e.target.value)),
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Messenger);
