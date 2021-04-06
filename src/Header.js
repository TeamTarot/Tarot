import React from 'react';
import { Navbar, Form, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import LoggedInPic from './LoggedInPic';
import { withAuth0 } from '@auth0/auth0-react';

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="mr-5">My Tarot Cards</Navbar.Brand>
          <Nav className="mr-auto">
            <Navbar.Text className="mr-5"><Link to="/">Home</Link></Navbar.Text>
            <Navbar.Text className="mr-5"><Link to="/profile">Profile</Link></Navbar.Text>
          </Nav>
          <Form inline>
            <LoginButton />
            <LogoutButton auth={this.props.auth0.authenticated} />
            <LoggedInPic><Link to="/Profile" /></LoggedInPic>
          </Form>
        </Container>
      </Navbar>
    );
  }
}

export default withAuth0(Header);
