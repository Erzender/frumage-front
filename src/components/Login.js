// react, redux
import React from 'react';
import { connect } from 'react-redux';
// atlaskit
import Form, { Field } from '@atlaskit/form';
import Button from '@atlaskit/button';
import TextField from '@atlaskit/textfield';
// toast
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// actions
import userActions from '../redux/actions/user.actions';

const Login = ({ register }) => (
<Form onSubmit={register}>
      {({ formProps }) => (
        <form {...formProps}>
          <Field name="name" defaultValue="" label="User name" isRequired>
            {({ fieldProps }) => <TextField {...fieldProps} />}
          </Field>
          <Field name="password" defaultValue="" label="Password" isRequired>
            {({ fieldProps }) => <TextField type="password" {...fieldProps} />}
          </Field>
          <Button type="submit" appearance="primary">
            Register
          </Button>
          <ToastContainer/>
          {/* <Button type="submit" appearance="secondary">
            Register
          </Button> */}
        </form>
      )}
  </Form>
)const mapDispatchToProps = dispatch => ({
  register: ({ name, password }) => dispatch(userActions.register(name, password)),
});

const mapStateToProps = ({ register }) => ({ register });

export default connect(mapStateToProps, mapDispatchToProps)(Login);
