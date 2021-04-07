import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import { Container, CardDeck, Card, Image, Button } from 'react-bootstrap';
import './assets/styles/about.css';
import mason from './assets/imgs/mason.png'; 
import julien from './assets/imgs/julien.jpeg'; 
import audrey from './assets/imgs/audrey.jpeg'; 


class AboutUs extends React.Component {
  render() {
    const img = 'https://placekitten.com/200/200';

    const masonGit = 'https://github.com/masonaviles';
    const masonBlurp = '';

    const audreyGit = 'https://github.com/arpatterson31';
    const audreyBlurp = 'Hi my name is Audrey Patterson. I love that technology is constantly changing and am excited to continue on this journey into software development for the challenge that comes with that change.';

    const jacobGit = 'https://github.com/Pratibhaprogrammer';
    const jacobBlurp = '';

    const julienGit = 'https://github.com/TrunkOfUkuleles';
    const julienBlurp = 'With a unique perspective helping drive my fascination with front end and middleware technology, I want to bring the communication skills I learned managing and coordinating teams on long term projects.';

    return (
      <>
        <Container className="mt-5 mb-5">
          <h1 className="text-center mb-4">Meet the Team</h1>
          <CardDeck>
            <Card>
              <Card.Body>
                <Image className="teampic mb-3" src={audrey} roundedCircle />
                <Card.Title>Audrey Patterson</Card.Title>
                <Button  variant="primary" href={audreyGit} >Github</Button>
                <Card.Text className="mt-2">
                  {audreyBlurp}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
              <Image className="teampic mb-3" src={img} roundedCircle />
                <Card.Title>Jacob Holmer</Card.Title>
                <Button  variant="primary" href={jacobGit} >Github</Button>
                <Card.Text className="mt-2">
                  {jacobBlurp}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
              <Image className="teampic mb-3" src={julien} roundedCircle />
                <Card.Title>Julien Edwards</Card.Title>
                <Button  variant="primary" href={julienGit} >Github</Button>
                <Card.Text className="mt-2">
                  {julienBlurp}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
              <Image className="teampic mb-3" src={mason} roundedCircle />
                <Card.Title>Mason Aviles</Card.Title>
                <Button  variant="primary" href={masonGit} >Github</Button>
                <Card.Text className="mt-2">
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
