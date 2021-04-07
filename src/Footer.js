import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './footer.css';

class Footer extends React.Component {
  render() {
    return (
      <Navbar className="footer" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>&copy; Tarot</Navbar.Brand>
          <Nav className="mr-auto">
            <Navbar.Text className="mr-5"><a href="https://github.com/TeamTarot" target="_blank" rel="noreferrer" >Github</a></Navbar.Text>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default Footer;
