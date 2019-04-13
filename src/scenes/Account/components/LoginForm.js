import React from 'react';
import {
  Container, FormGroup, Label, Input, Button, Jumbotron,
} from 'reactstrap';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';

import background from '../../../assets/cheese.jpg';
import { login, loginInputChange } from '../duck';

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
};

const LoginForm = ({
  t, name, password, loginButton, changeName, changePassword,
}) => {
  const loginButtonPress = () => loginButton(name, password);
  return (
    <Container style={styles.container}>
      <Jumbotron>
        <h2>{t('login.Log in')}</h2>
        <FormGroup>
          <Label>{t('login.Username')}</Label>
          <Input value={name} onChange={changeName} />
          <Label for="examplePassword">{t('login.Password')}</Label>
          <Input type="password" value={password} onChange={changePassword} />
        </FormGroup>
        <Button color="primary" className="btn-primary col-12" onClick={loginButtonPress}>
          {t('login.Ok')}
        </Button>
        <Link to="/register">
          <Button
            style={{ marginTop: 5 }}
            color="default"
            className="col-12"
            onClick={loginButtonPress}
          >
            {t('login.New Account')}
          </Button>
        </Link>
      </Jumbotron>
    </Container>
  );
};

LoginForm.propTypes = {
  loginButton: PropTypes.func.isRequired,
  changeName: PropTypes.func.isRequired,
  changePassword: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  loginButton: (name, password) => dispatch(login(name, password)),
  changeName: event => dispatch(loginInputChange('name', event.target.value)),
  changePassword: event => dispatch(loginInputChange('password', event.target.value)),
});

const mapStateToProps = state => ({
  name: state.account.name,
  password: state.account.password,
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withNamespaces(),
)(LoginForm);
