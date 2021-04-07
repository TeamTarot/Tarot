import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import { Container, Card, Image, Accordion, Button, Form, Col, Row } from 'react-bootstrap';

class Profile extends Component {


  render() {
    console.log('getting userobj from App?', this.props);
    const cardData = this.props.cardArray;
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
          {cardData.length && cardData.map((entry, index) => (
            <Accordion key={index}>
              <Card>
                <Card.Header>
                  <Row>
                    <Col>
                      <Card.Title>{entry.date}</Card.Title>
                    </Col>
                    <Col className="d-flex justify-content-end">
                      <Accordion.Toggle as={Button} variant="dark" eventKey="0">
                        &#9660;
                      </Accordion.Toggle>
                    </Col>
                  </Row>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <Form>

                      <Form.Group>
                        <Form.Control as="textarea" rows={4} placeholder={entry.journal} name="journal" onChange={(e) => this.props.handleJournal(e.target.value)} />
                      </Form.Group>

                      <Button className="mr-2" variant="danger" onClick={() => this.props.handleDeleteReading(index)}>delete</Button>
                      <Button variant="info" onClick={(e) => this.props.replaceJournalEntry(e, index)}>update</Button>
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