import React from 'react';
import { Alert } from 'reactstrap';
import PropTypes from 'prop-types';

const styles = {
  alert: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
};

const AlertForm = ({ message }) => (
  <Alert
    color={message.success ? 'success' : 'danger'}
    style={styles.alert}
    isOpen={message.visible}
  >
    {message.response}
  </Alert>
);

AlertForm.propTypes = {
  message: PropTypes.shape({
    code: PropTypes.number,
    response: PropTypes.string,
    visible: PropTypes.bool,
  }),
};

AlertForm.defaultProps = {
  message: {
    response: '',
    visible: false,
  },
};

export default AlertForm;
