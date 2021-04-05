import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';

class CardTable extends React.Component {
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
      </>
    );
  }

}

export default withAuth0(CardTable);