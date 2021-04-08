import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import { Container, CardDeck, Card, Image, Button } from 'react-bootstrap';
import './assets/styles/about.css';
import mason from './assets/imgs/mason.png'; 
import julien from './assets/imgs/julien.jpeg'; 
import audrey from './assets/imgs/audrey.jpeg'; 
import jacob from './assets/imgs/jacob.png'; 


class AboutUs extends React.Component {
  render() {
    const masonGit = 'https://github.com/masonaviles';
    const masonL = 'https://www.linkedin.com/in/masonaviles/';
    const masonBlurp = 'Hi Im Mason. I believe in and champion technology access and human connection in my  work. I love pressing buttons and pulling levers.'

    const audreyGit = 'https://github.com/arpatterson31';
    const audreyL = 'https://www.linkedin.com/in/audrey-patterson31/';
    const audreyBlurp = 'Hi my name is Audrey Patterson. I love that technology is constantly changing and am excited to continue on this journey into software development for the challenge that comes with that change.';

    const jacobGit = 'https://github.com/Pratibhaprogrammer';
    const jacobL = 'http://linkedin.com/in/jacob-holmer';
    const jacobBlurp = 'I got into tech because I love to create! The thought of taking an idea and building something that is both functional and esthetically pleasing is very satisfying to me.  Beyond that, I love to collaborate and consider the perspectives of others in order to create something meaningful.';

    const julienGit = 'https://github.com/TrunkOfUkuleles';
    const julienL = 'https://www.linkedin.com/in/julien-edwards-367b5016/';
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
                <Button  className="mr-2" variant="primary" href={audreyGit} >Github</Button>
                <Button  variant="info" href={audreyL} >LinkedIn</Button>
                <Card.Text className="mt-2">
                  {audreyBlurp}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
              <Image className="teampic mb-3" src={jacob} roundedCircle />
                <Card.Title>Jacob Holmer</Card.Title>
                <Button  className="mr-2" variant="primary" href={jacobGit} >Github</Button>
                <Button  variant="info" href={jacobL} >LinkedIn</Button>
                <Card.Text className="mt-2">
                  {jacobBlurp}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
              <Image className="teampic mb-3" src={julien} roundedCircle />
                <Card.Title>Julien Edwards</Card.Title>
                <Button  className="mr-2" variant="primary" href={julienGit} >Github</Button>
                <Button  variant="info" href={julienL} >LinkedIn</Button>
                <Card.Text className="mt-2">
                  {julienBlurp}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
              <Image className="teampic mb-3" src={mason} roundedCircle />
                <Card.Title>Mason Aviles</Card.Title>
                <Button  className="mr-2" variant="primary" href={masonGit} >Github</Button>
                <Button  variant="info" href={masonL} >LinkedIn</Button>
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
