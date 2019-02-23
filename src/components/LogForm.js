// react, redux
import React from 'react';
import { connect } from 'react-redux';
// semantic UI
import {
  Button, Divider, Form, Grid, Segment,
} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
// actions
import userActions from '../redux/actions/user.actions';

const LogForm = ({ login }) => (
  <Segment placeholder>
    <Grid columns={2} relaxed="very" stackable>
      <Grid.Column>
        <Form onSubmit={login}>
          <Form.Input icon="user" name="user" iconPosition="left" label="Username" placeholder="Username" />
          <Form.Input icon="lock" name="password" iconPosition="left" label="Password" placeholder="Password" type="password" />

          <Button type="submit" content="Login" primary />
        </Form>
      </Grid.Column>

      <Grid.Column verticalAlign="middle">
        <Button content="Sign up" icon="signup" size="big" />
      </Grid.Column>
    </Grid>

    <Divider vertical>Or</Divider>
  </Segment>
);

const mapDispatchToProps = dispatch => ({
  login: ({ name, password }) => {
    console.log('mapDispatchToProps', name, password);
    return dispatch(userActions.login(name, password));
  },
});

const mapStateToProps = ({ login }) => ({ login });

export default connect(mapStateToProps, mapDispatchToProps)(LogForm);
