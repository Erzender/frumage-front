import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import TopicElem from './TopicElem';
import ThreadElem from './ThreadElem';
import List from '../../componentsReuse/List';

const styles = {
  container: { backgroundColor: '#222222', color: '#FFFFFF', flexDirection: 'column' },
  title: {
    color: '#666666',
    margin: 5,
    display: 'flex',
    alignItems: 'center',
  },
  box: {
    flex: 1,
    display: 'flex',
    overflow: 'hidden',
    flexDirection: 'column',
  },
  plus: {
    color: '#666666',
    height: 15,
    cursor: 'pointer',
  },
};

const LeftMenu = ({ t, style, topics }) => (
  <div style={{ ...style, ...styles.container }}>
    <div style={styles.box}>
      <h4 className="noselect" style={styles.title}>
        {t('board.TOPICS')}
        <FontAwesomeIcon
          icon="plus-circle"
          style={{
            ...styles.plus,
          }}
        />
      </h4>
      <List Elem={TopicElem} nodes={topics} />
    </div>
    <div style={styles.box}>
      <h4 style={styles.title}>
        {t('board.THREADS')}
        <FontAwesomeIcon
          icon="plus-circle"
          style={{
            ...styles.plus,
          }}
        />
      </h4>
      <List
        Elem={ThreadElem}
        nodes={[
          {
            id: '1',
            selected: true,
            recent: false,
            title: 'test',
            desc: 'blblblblblbl',
          },
          {
            id: '2',
            selected: false,
            recent: false,
            title: 'test',
            desc: 'blblblblblbl',
          },
        ]}
      />
    </div>
  </div>
);

LeftMenu.propTypes = {
  t: PropTypes.func.isRequired,
  topics: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])),
  ).isRequired,
  style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
};

LeftMenu.defaultProps = {
  style: {},
};

const mapDispatchToProps = () => ({});

const mapStateToProps = state => ({
  topics: state.board.topics.map(topic => ({
    title: topic.name,
    desc: topic.description,
    selected: false,
    recent: false,
    id: topic.id,
  })),
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withNamespaces(),
)(LeftMenu);
