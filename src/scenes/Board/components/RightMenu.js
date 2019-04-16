import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';

import List from '../../componentsReuse/List';
import UserElem from './UserElem';

const styles = {
  container: { backgroundColor: '#222222', color: '#FFFFFF', flexDirection: 'column' },
  title: { color: '#666666', margin: 5 },
};

const RightMenu = ({ t, style }) => (
  <div style={{ ...style, ...styles.container }}>
    <h4 style={styles.title}>{t('board.ROOM')}</h4>
    <List
      Elem={UserElem}
      nodes={[
        {
          id: '1',
          name: 'Erzender',
          pic: 'https://www.brick-a-brack.com/users/image/800/600/?1550004299',
        },
      ]}
    />
  </div>
);

RightMenu.propTypes = {
  t: PropTypes.func.isRequired,
  style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
};

RightMenu.defaultProps = {
  style: {},
};

const mapDispatchToProps = () => ({});

const mapStateToProps = () => ({});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withNamespaces(),
)(RightMenu);
