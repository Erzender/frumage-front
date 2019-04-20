import React from 'react';
import {
  Container, Label, Input, FormGroup, Button, Jumbotron,
} from 'reactstrap';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withNamespaces } from 'react-i18next';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import background from '../../../assets/cheese.jpg';
import AlertForm from './AlertForm';
import { register, registerInputChange } from '../duck';

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
  toCenter: {
    textAlign: 'center',
  },
};

const RegisterForm = ({
  t, name, password, registerButton, changeName, changePassword, registered, message,
}) => {
  const registerButtonPress = () => registerButton(name, password);
  const container = (
    <Container style={styles.container}>
      <Jumbotron>
        <FormGroup>
          <h2 style={styles.toCenter}>{t('register.Register')}</h2>
          <br />
          <Label>{t('register.Username')}</Label>
          <Input value={name} onChange={changeName} />
          <Label>{t('register.Password')}</Label>
          <Input type="password" value={password} onChange={changePassword} onKeyPress={({ key }) => { if (key === 'Enter') registerButtonPress(); }} />
          <br />
          <Button color="primary" className="col-12" onClick={registerButtonPress}>
            {t('register.Subscribe')}
          </Button>
          <Link to="/login">
            <Button
              style={{ marginTop: 5 }}
              color="link"
              className="col-12"
            >
              {t('register.toLogin')}
            </Button>
          </Link>
        </FormGroup>
        { message.visible ? <AlertForm message={message} /> : <div /> }
      </Jumbotron>
    </Container>
  );
  return registered ? <Redirect to="/login" /> : container;
};

RegisterForm.propTypes = {
  registerButton: PropTypes.func.isRequired,
  changeName: PropTypes.func.isRequired,
  changePassword: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
  registered: PropTypes.bool.isRequired,
  message: PropTypes.shape({
    code: PropTypes.number,
    response: PropTypes.string,
    visible: PropTypes.bool,
  }),
};

RegisterForm.defaultProps = {
  message: {
    status: 0,
    response: '',
    visible: false,
  },
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
  message: state.account.message,
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withNamespaces(),
)(RegisterForm);
