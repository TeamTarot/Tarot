import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { Card, CardDeck, Container, Form, Button } from 'react-bootstrap';



class CardTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.userObj,
      draw: []


    };
    // const user = this.props.auth0;
  }



  componentDidMount() {

    try {
      const user = axios.get("http://localhost:3001/user", { params: { email: this.props.auth0.user.email } });
      this.props.useHandle(user)

    } catch (err) {
      console.log(err)
    }
  }

  handleDraw = (e) => {
    try {
      e.preventDefault();
      const hand = axios.get("http://localhost:3001/draw", {});
      this.setState({ draw: hand })

    } catch (err) {
      console.log(err)
    }

  }

  render() {
    console.log("CardTable User?: ", this.state.user);
    const img = "https://placekitten.com/200/300";
    return (
      <>
        {/* {this.state.draw.length > 0 ?
          <>
            <div className='card-box'>
              <div className="card-1">
                <h1>{this.state.draw[0].name}</h1>
              </div>
              <div className="card-2">
                <h1>{this.state.draw[1].name}</h1>
              </div>
              <div className="card-3">
                <h1>{this.state.draw[2].name}</h1>
              </div>
            </div>
            <textarea placeholder="Journal your thoughts" style={{ height: "150px" }}></textarea>
            <button>Click to save</button>
          </>
          :
          <button onClick={(e) => { this.handleDraw() }}>Click me for fortune</button>
        } */}
        <Container>
          <h1 className="text-center mt-4 mb-4">Draw Cards</h1>
          <CardDeck>
            <Card>
              <Card.Img variant="top" src={img} />
              <Card.Body>
                <Card.Title>The Fool</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Major Arcana</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src={img} />
              <Card.Body>
                <Card.Title>The Fool</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Major Arcana</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src={img} />
              <Card.Body>
                <Card.Title>The Fool</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Major Arcana</small>
              </Card.Footer>
            </Card>
          </CardDeck>
        </Container>
        <Container className="mt-4 mb-4">
          <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows={6} placeholder="What do you think about this spread?" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Save My Thoughts
            </Button>
            <Button variant="secondary" className="ml-4">
              Draw Again
            </Button>
          </Form>
        </Container>

      </>
    );
  }

}

export default withAuth0(CardTable);