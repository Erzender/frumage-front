import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = {
  container: {
    padding: 5,
    paddingLeft: 10,
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

const TopicElem = ({ node }) => (
  <div
    className="listElem noselect"
    style={node.selected ? { ...styles.container, ...styles.selected } : styles.container}
  >
    <FontAwesomeIcon
      icon="cheese"
      style={{
        ...styles.icon,
        backgroundColor: node.recent ? '#FF0000' : node.selected ? '#FFFFFF' : '#777777',
      }}
    />
    <div style={styles.text}>
      <h5 style={styles.title}>{node.title}</h5>
      <div style={styles.desc}>{node.desc}</div>
    </div>
  </div>
);

TopicElem.propTypes = {
  node: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  ).isRequired,
};

export default TopicElem;
