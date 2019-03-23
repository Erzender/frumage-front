import React from 'react';
import {
  Container, FormGroup, Label, Input, Button, Jumbotron,
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import background from '../../../assets/cheese.jpg';
import { login, changeInput } from '../duck/actions';

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
  name, password, loginButton, changeName, changePassword,
}) => {
  const loginButtonPress = () => loginButton(name, password);
  return (
    <Container style={styles.container}>
      <Jumbotron>
        <FormGroup>
          <Label>Username</Label>
          <Input value={name} onChange={changeName} />
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            value={password}
            onChange={changePassword}
          />
        </FormGroup>
        <Button onClick={loginButtonPress}>Submit</Button>
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
};

const mapDispatchToProps = dispatch => ({
  loginButton: (name, password) => dispatch(login(name, password)),
  changeName: event => dispatch(changeInput('name', event.target.value)),
  changePassword: event => dispatch(changeInput('password', event.target.value)),
});

const mapStateToProps = state => ({
  name: state.account.name,
  password: state.account.password,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);
