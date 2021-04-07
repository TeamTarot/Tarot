import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { Card, CardDeck, Container, Form, Button } from 'react-bootstrap';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';



class CardTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.userObj,
      draw: [],
      showCardDraw: false


    };
    // const user = this.props.auth0;
  }



 async componentDidMount(){
   
    try{
      const user = await axios.get("http://localhost:3001/user", {params:{email: this.props.auth0.user.email}});
      this.props.useHandle(user)

    } catch (err) {
      console.log(err)
    }
  }

  async handleDraw(e) {
    try {
      e.preventDefault();
      const hand = await axios.get("http://localhost:3001/draw", {});
      console.log('hand', hand);
      this.setState({ draw: hand, showCardDraw: true })

    } catch (err) {
      console.log(err)
    }

  }

  render() {
    return (
      <>
        <Container className="mt-4 mb-4 text-center">
          <Button className="mt-4 mb-4 text-center" onClick={(e) => { this.handleDraw(e) }}>Click me for fortune</Button>
          <CardDeck>
            {this.state.showCardDraw &&
              this.state.draw.data.map((card, index) => (
                <Card key={index}>
                  {/* <Card.Img variant="top" src={img} /> */}
                  <Card.Body>
                    <Card.Title>{card.name}</Card.Title>
                    <Card.Text>{card.meaning_up}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">{card.type} Arcana</small>
                  </Card.Footer>
                </Card>
              ))
            }
          </CardDeck>
        </Container>
      </>
    )
  }
}

export default withAuth0(CardTable);