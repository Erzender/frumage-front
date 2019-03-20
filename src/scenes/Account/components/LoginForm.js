import React from 'react';
import { connect } from 'react-redux';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import userActions from '../duck/actions';
// import './LoginForm.css';
// import userActions from '../redux/actions/user.actions';

const LoginForm = ({login}) => (
  <Container className="LoginForm">
    <h2>Sign In</h2>
    <Form className="form" onSubmit={e => e.preventDefault() || login(e.target.name.value, e.target.password.value)}>
      <Col>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="pseudo"
            value="test"
          />
        </FormGroup>
      </Col>
      <Col>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="********"
            value="testtest"
          />
        </FormGroup>
      </Col>
      <Button type="submit">Submit</Button>
    </Form>
  </Container>
);

const mapDispatchToProps = dispatch => ({
  // login: ({ name, password }) => dispatch(userActions.login(name, password)),
  login: ( name, password ) => {
    console.log('mapDispatchToProps', name, password);
    return dispatch(userActions.login(name, password));
  },
});

const mapStateToProps = ({ login }) => ({ login });

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
