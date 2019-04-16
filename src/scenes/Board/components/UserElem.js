import React from 'react';
import PropTypes from 'prop-types';

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
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  name: {
    color: '#FFFFFF',
    marginBottom: 0,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    marginLeft: 10,
  },
};

const UserElem = ({ node }) => (
  <div
    className="listElem noselect"
    style={node.selected ? { ...styles.container, ...styles.selected } : styles.container}
  >
    <img style={styles.icon} alt="profile" src={node.pic} />
    <h5 style={styles.name}>{node.name}</h5>
  </div>
);

UserElem.propTypes = {
  node: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  ).isRequired,
};

export default UserElem;
