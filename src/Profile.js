import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import { Container, Card, Image, Accordion, Button, Form } from 'react-bootstrap';

class Profile extends Component {


  render() {
    console.log('getting userobj from App?', this.props.userObj.data.cards[0]);
    const cardData = this.props.userObj.data.cards;
    const { user } = this.props.auth0;
    return (
      <>
        <Container className="mt-5 mb-5">
          <Image style={{ width: '16rem' }} src={user.picture} roundedCircle />
          <Card.Body>
            <Card.Title >🔮 Hello {user.name} 🔮</Card.Title>
          </Card.Body>
        </Container>

        <Container>
          {cardData.map((entry, index) => (
            <Accordion key={index}>
              <Card>
                <Card.Header>
                  <Card.Title>{entry.date}</Card.Title>
                  <Accordion.Toggle as={Button} variant="dark" eventKey="0">
                    View
              </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <Form>

                      <Form.Group>
                        <Form.Control as="textarea" rows={4} placeholder={entry.journal} name="journal" />
                      </Form.Group>

                      <Button variant="danger" onClick={() => this.handleDeleteReading(index)}>delete</Button>
                      <Button variant="info" onClick={() => this.displayUpdateModal(index)}>update</Button>
                    </Form>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          ))}
        </Container>
      </>
    );
  }
}

export default withAuth0(Profile);