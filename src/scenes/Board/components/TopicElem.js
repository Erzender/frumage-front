import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = {
  container: {
    padding: 5,
    flexDirection: 'row',
    flex: 1,
    display: 'flex',
    minHeight: 60,
    maxHeight: 60,
    overflow: 'hidden',
    alignItems: 'center',
    borderRadius: 5,
    cursor: 'pointer',
    color: '#777777',
  },
  selected: {
    backgroundColor: '#555555',
    color: '#FFFFFF',
  },
  icon: {
    backgroundColor: '#777777',
    color: '#222222',
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
    marginLeft: 5,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  title: {
    marginBottom: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
  },
  desc: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
};

const TopicElem = ({ selected }) => (
  <div
    className="listElem noselect"
    style={selected ? { ...styles.container, ...styles.selected } : styles.container}
  >
    <FontAwesomeIcon
      icon="cheese"
      style={{ ...styles.icon, backgroundColor: selected ? '#FFFFFF' : '#777777' }}
    />
    <div style={styles.text}>
      <h5 style={styles.title}>Hello world</h5>
      <div style={styles.desc}>
        ya ezrizehrze iroezrozerrzeoeriuz sezrezrezr zerzetrezrzeezr rrr y
      </div>
    </div>
  </div>
);

TopicElem.propTypes = {
  selected: PropTypes.bool,
};

TopicElem.defaultProps = {
  selected: false,
};

export default TopicElem;
