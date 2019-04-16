import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  list: {
    display: 'flex',
    flex: 1,
    overflow: 'auto',
    flexDirection: 'column',
  },
};

const List = ({ Elem, nodes }) => (
  <div style={styles.list}>
    {nodes.map(node => (
      <Elem key={node.id} node={node} />
    ))}
  </div>
);

List.propTypes = {
  Elem: PropTypes.func.isRequired,
  nodes: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])),
  ).isRequired,
};

export default List;
