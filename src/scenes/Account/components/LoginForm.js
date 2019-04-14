import React from 'react';
import {
  Container, FormGroup, Label, Input, Button, Jumbotron,
} from 'reactstrap';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import { Link, Redirect } from 'react-router-dom';

import background from '../../../assets/cheese.jpg';
import AlertForm from './AlertForm';
import { login, loginInputChange, toRegister } from '../duck';

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    top: 0,
    left: 0,
    minHeight: '100%',
    minWidth: '100%',
    position: 'fixed',
  },
  title: {
    textAlign: 'center',
  },
};

const LoginForm = ({
  t, name, password, loginButton, changeName, changePassword, loginToRegister, message, isLogged,
}) => {
  const loginButtonPress = () => loginButton(name, password);
  const toRegisterButtonPress = () => loginToRegister();
  const container = (
    <Container style={styles.container}>
      <Jumbotron>
        <h2 style={styles.title}>{t('login.Log in')}</h2>
        <br />
        <FormGroup>
          <Label>{t('login.Username')}</Label>
          <Input value={name} onChange={changeName} />
          <Label for="examplePassword">{t('login.Password')}</Label>
          <Input type="password" value={password} onChange={changePassword} />
        </FormGroup>
        <Button color="primary" className="col-12" onClick={loginButtonPress}>
          {t('login.Login')}
        </Button>
        <Link to="/register">
          <Button
            style={{ marginTop: 5 }}
            color="link"
            className="col-12"
            onClick={toRegisterButtonPress}
          >
            {t('login.New Account')}
          </Button>
        </Link>
        { message.visible ? <AlertForm message={message} /> : <div /> }
      </Jumbotron>
    </Container>
  );
  return isLogged ? <Redirect to="/" /> : container;
};

LoginForm.propTypes = {
  loginButton: PropTypes.func.isRequired,
  changeName: PropTypes.func.isRequired,
  changePassword: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  loginToRegister: PropTypes.func.isRequired,
  message: PropTypes.shape({
    code: PropTypes.number,
    response: PropTypes.string,
    visible: PropTypes.bool,
  }),
};

LoginForm.defaultProps = {
  message: {
    status: 0,
    response: '',
    visible: false,
  },
};

const mapDispatchToProps = dispatch => ({
  loginButton: (name, password) => dispatch(login(name, password)),
  changeName: event => dispatch(loginInputChange('name', event.target.value)),
  changePassword: event => dispatch(loginInputChange('password', event.target.value)),
  loginToRegister: () => dispatch(toRegister()),
});

const mapStateToProps = state => ({
  name: state.account.name,
  password: state.account.password,
  isLogged: state.account.isLogged,
  message: state.account.message,
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withNamespaces(),
)(LoginForm);
