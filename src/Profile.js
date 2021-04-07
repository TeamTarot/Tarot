import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import { Container, Card, Image } from 'react-bootstrap';

class Profile extends Component {
  render() {
    console.log('getting userobj from App?', this.props.userObj);
    const { user } = this.props.auth0;
    return (
      <>
        <Container className="mt-5 mb-5">
          <Image style={{width: '16rem'}} src={user.picture} roundedCircle />
          <Card.Body>
            <Card.Title >🔮 Hello {user.name} 🔮</Card.Title>
          </Card.Body>
        </Container>

        
      </>
    );
  }
}

export default withAuth0(Profile);