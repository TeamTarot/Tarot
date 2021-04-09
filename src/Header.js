import React from 'react';
import { Navbar, Form, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import LoggedInPic from './LoggedInPic';
import { withAuth0 } from '@auth0/auth0-react';
import './assets/styles/header.css';

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="md" className="header">
        <Container>
          <Navbar.Brand className="mr-5">My Tarot Cards</Navbar.Brand>
          <Nav className="mr-auto">
            <Navbar.Text className="mr-5"><Link to="/">Draw Cards</Link></Navbar.Text>
            <Navbar.Text className="mr-5"><Link to="/profile">Profile</Link></Navbar.Text>
            <Navbar.Text className="mr-5"><Link to="/about">About Us</Link></Navbar.Text>
          </Nav>
          <Form inline>
            <LoginButton />
            <LogoutButton auth={this.props.auth0.authenticated} />
            <LoggedInPic />
          </Form>
        </Container>
      </Navbar>
    );
  }
}

export default withAuth0(Header);
