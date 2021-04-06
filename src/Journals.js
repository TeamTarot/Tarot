import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import {  Card, Container } from 'react-bootstrap';

class Journals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tarotCard: [],
      cardName: '',
      cardDescription: '',
      reversed: false,
      showJournal: false
      // chosenJournal: {},
      // indexOfChosenBook: -1
    };
    // const user = this.props.auth0;
  }

  render() {
    return(
      <>
      <Container> 
        <Card>
          <Card.Title>{this.state.cardName}</Card.Title>
          <Card.Text>{this.state.cardDescription}</Card.Text>
          <Button variant="edit">S</Button>
          <Button variant="delete">D</Button>
        </Card>
      </Container>
      </>
    );
  }

}

export default withAuth0(Journals);