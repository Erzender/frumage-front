import React from 'react';
import {
  Container, Label, Input, FormGroup, Button,
} from 'reactstrap';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import { Link, Redirect } from 'react-router-dom';

import { register, registerInputChange } from '../duck';

const styles = {
  container: {
    display: 'flex',
    flex: 1,
  },
};

const RegisterForm = ({
  t, name, password, registerButton, changeName, changePassword, registered,
}) => {
  const registerButtonPress = () => registerButton(name, password);
  if (registered) {
    return <Redirect to="/" />;
  }
  return (
    <Container style={styles.container}>
      <FormGroup className="col-8">
        <h2>{t('register.Register')}</h2>
        <Label>{t('register.Username')}</Label>
        <Input value={name} onChange={changeName} />
        <Label>{t('register.Password')}</Label>
        <Input type="password" value={password} onChange={changePassword} />
        <Button color="primary" className="col-10" onClick={registerButtonPress}>
          {t('register.Subscribe')}
        </Button>
        <Link to="/">
          <Button
            outline
            color="warning"
            className="col-2"
          >
            {t('register.toLogin')}
          </Button>
        </Link>
      </FormGroup>
    </Container>
  );
};

RegisterForm.propTypes = {
  registerButton: PropTypes.func.isRequired,
  changeName: PropTypes.func.isRequired,
  changePassword: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
  registered: PropTypes.bool.isRequired,
};

const mapDispatchToProps = dispatch => ({
  registerButton: (name, password) => dispatch(register(name, password)),
  changeName: event => dispatch(registerInputChange('name', event.target.value)),
  changePassword: event => dispatch(registerInputChange('password', event.target.value)),
});

const mapStateToProps = state => ({
  name: state.account.name,
  password: state.account.password,
  registered: state.account.registered,
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withNamespaces(),
)(RegisterForm);
