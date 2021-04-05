import React from 'react';
import Card from 'react-bootstrap/Card';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

class Login extends React.Component {
  render() {
    return(
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Log In</Card.Title>
          <Card.Text>
            Click Below to Log In
          </Card.Text>

          <LoginButton />
          <LogoutButton />
          {/* TODO: add a `LoginButton` component here that will log the user in with Auth0 */}
        </Card.Body>
      </Card>
    );
  }
}

export default Login;
