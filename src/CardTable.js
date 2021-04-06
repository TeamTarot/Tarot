import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';
import CardReveal from './CardReveal';

class CardTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tarotCards: [],
      cardName: '',
      journal: '',
      reversed: false,
      showJournal: false,
      draw: false,
      // chosenJournal: {},
      // indexOfChosenBook: -1
    };
    // const user = this.props.auth0;
  }
const axios = require('axios');
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
      : <>
        <CardReveal future={this.state.draw} />
        <textarea className="journal-field" onChange={(e)=>{this.setState({journal: e.target.value})}} />
        <Button type='submit' >Save entry to journal?</Button>
      </>
      }</>
    );
  }

}

export default withAuth0(CardTable);