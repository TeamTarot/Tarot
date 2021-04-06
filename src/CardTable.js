import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';

class CardTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tarotCards: [],
      cardName: '',
      cardDescription: '',
      reversed: false,
      showJournal: false,
      draw: false,
      // chosenJournal: {},
      // indexOfChosenBook: -1
    };
    // const user = this.props.auth0;
  }

  anteUp = async() => {
    const url= process.env.API
    axios.get(`${url}/draw`).
    then((hand)=> {
      this.props.handleDraw(hand)
    console.log("in ante", hand)})
    .catch(err => {console.error(err)})
  }

  render() {
    return(
      <>{this.state.draw=== false 
        ?<Button className="drawButton" onClick={this.state.draw} />
      : <Container> 
        <Card>
          <Card.Title>{this.state.cardName}</Card.Title>
          <Card.Text>{this.state.cardDescription}</Card.Text>
          <Button variant="edit">S</Button>
          <Button variant="delete">D</Button>
        </Card>
      </Container>
      }</>
    );
  }

}

export default withAuth0(CardTable);