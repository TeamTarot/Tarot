import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { Tooltip } from 'react-bootstrap';

class Cardd extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      draw:[],
      showDeck: false,
    };
  }
//add a reverse function? Maybe a 3 to 1 odds of upward facing vs reverse card draws

  readMore = (props) => {
    return (
      <Tooltip id="read-more" {...props}>
        {props.desc}
      </Tooltip>
    )
  }

//add another effect to the hover where the tarot image fades a little as the information gets displayed on hover
  futureRender = (card) =>{
    return (
      <OverlayTrigger
        placement="right"
        delay={{ show: 250, hide: 400 }}
        overlay={this.readMore(card)}
      >
      <Card className="tarot-card">
        {/* <Card.Img variant="top" src={require('./assets/TempHang.jpg')} /> */}
          <Card.Body>
            <Card.Title>{card.name}</Card.Title>
            <Card.Text>
              {card.meaning_up}
            </Card.Text>
          </Card.Body>
        </Card>
      </OverlayTrigger>
        )

    }

render(){
    return this.futureRender(this.props.use)
}

}

export default Cardd;
