import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import { Container, CardDeck, Card, Image, Button } from 'react-bootstrap';
import './assets/styles/about.css';
import mason from './assets/imgs/mason.png'; 


class AboutUs extends React.Component {
  render() {
    const img = 'https://placekitten.com/200/200';

    const masonGit = 'https://github.com/masonaviles';
    const masonBlurp = '';

    const audreyGit = 'https://github.com/masonaviles';
    const audreyBlurp = '';

    const jacobGit = 'https://github.com/masonaviles';
    const jacobBlurp = '';

    const julienGit = 'https://github.com/masonaviles';
    const julienBlurp = '';

    return (
      <>
        <Container className="mt-5 mb-5">
          <h1 className="text-center mb-4">Meet the Team</h1>
          <CardDeck>
            <Card>
              <Card.Body>
                <Image className="teampic mb-3" src={img} roundedCircle />
                <Card.Title>Audrey Patterson</Card.Title>
                <Button  variant="primary" href={audreyGit} >Github</Button>
                <Card.Text>
                  {audreyBlurp}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
              <Image className="teampic mb-3" src={img} roundedCircle />
                <Card.Title>Jacob Holmer</Card.Title>
                <Button  variant="primary" href={jacobGit} >Github</Button>
                <Card.Text>
                  {jacobBlurp}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
              <Image className="teampic mb-3" src={img} roundedCircle />
                <Card.Title>Julien Edwards</Card.Title>
                <Button  variant="primary" href={julienGit} >Github</Button>
                <Card.Text>
                  {julienBlurp}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
              <Image className="teampic mb-3" src={mason} roundedCircle />
                <Card.Title>Mason Aviles</Card.Title>
                <Button  variant="primary" href={masonGit} >Github</Button>
                <Card.Text className="mt-3">
                  {masonBlurp}
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </Container>
      </>
    );
  }
}

export default withAuth0(AboutUs);
