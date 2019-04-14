import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = {
  container: {
    backgroundColor: '#222222',
    padding: 5,
    flexDirection: 'row',
    flex: 1,
    display: 'flex',
    minHeight: 60,
    maxHeight: 60,
    overflow: 'hidden',
    alignItems: 'center',
  },
  icon: {
    backgroundColor: '#777777',
    padding: 8,
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  text: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: 5,
  },
  title: { marginBottom: 0 },
  desc: { whiteSpace: 'nowrap' },
};

const TopicElem = () => (
  <div style={styles.container}>
    <FontAwesomeIcon icon="cheese" style={styles.icon} />
    <div style={styles.text}>
      <h5 style={styles.title}>Hello world</h5>
      <div style={styles.desc}>ya ezrizehrze iroezrozerrzeoeriuz y</div>
    </div>
  </div>
);

TopicElem.propTypes = {};

export default TopicElem;
