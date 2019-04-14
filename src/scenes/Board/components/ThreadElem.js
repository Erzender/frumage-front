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
    marginBottom: 0,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  desc: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
};

const ThreadElem = ({
  selected, recent, title, desc,
}) => (
  <div
    className="listElem noselect"
    style={selected ? { ...styles.container, ...styles.selected } : styles.container}
  >
    <FontAwesomeIcon
      icon="cheese"
      style={{
        ...styles.icon,
        backgroundColor: recent ? '#FF0000' : selected ? '#FFFFFF' : '#777777',
      }}
    />
    <div style={styles.text}>
      <h5 style={styles.title}>{title}</h5>
      <div style={styles.desc}>{desc}</div>
    </div>
  </div>
);

ThreadElem.propTypes = {
  selected: PropTypes.bool,
  recent: PropTypes.bool,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

ThreadElem.defaultProps = {
  selected: false,
  recent: false,
};

export default ThreadElem;
