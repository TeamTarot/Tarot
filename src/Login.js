import React from 'react';
import Card from 'react-bootstrap/Card';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import './Login.css';

class Login extends React.Component {
  render() {
    return(
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
    );
  }
}

export default Login;
