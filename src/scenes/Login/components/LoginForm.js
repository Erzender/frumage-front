import React from 'react';
import {
  Container, Form, FormGroup, Label, Input, Button, Jumbotron,
} from 'reactstrap';
import background from '../../../assets/cheese.jpg';

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

export default () => (
  <Container style={styles.container}>
    <Jumbotron>
      <Form className="form">
        <FormGroup>
          <Label>Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="myemail@email.com" />
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="********" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </Jumbotron>
  </Container>
);
