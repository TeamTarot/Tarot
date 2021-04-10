import React from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { Card, Container, CardDeck } from 'react-bootstrap';


class Login extends React.Component {
  render() {
    return(
      <Container className="draw-button text-center login-container test-login">
        <CardDeck>
          <Card className="login-card" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Log In</Card.Title>
              <Card.Text>
                Click Below to Log In
              </Card.Text>

              <LoginButton />
              <LogoutButton />
            </Card.Body>
          </Card>
        </CardDeck>
      </Container>
    );
  }
}

export default Login;
