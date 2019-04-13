import React from 'react';
import {
  Container, Label, Input, FormGroup,
} from 'reactstrap';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';

const styles = {
  container: {
    display: 'flex',
    flex: 1,
  },
};

const RegisterForm = ({ t }) => (
  <Container style={styles.container}>
    <FormGroup className="col-8">
      <h2>{t('login.Register')}</h2>
      <Label>{t('login.Username')}</Label>
      <Input />
      <Label>{t('login.Password')}</Label>
      <Input />
    </FormGroup>
  </Container>
);

RegisterForm.propTypes = {
  t: PropTypes.func.isRequired,
};

const mapDispatchToProps = () => ({});

const mapStateToProps = () => ({});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withNamespaces(),
)(RegisterForm);
