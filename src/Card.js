import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { Tooltip } from 'react-bootstrap';

function Cardd (props) {


  const readMore = (props) => {
    return (
      <Tooltip id="read-more" {...props}>
        {props.desc}
      </Tooltip>
    )
  }

//add another effect to the hover where the tarot image fades a little as the information gets displayed on hover
  const futureRender = (card) =>{
    return (
      <OverlayTrigger
        placement="right"
        delay={{ show: 250, hide: 400 }}
        overlay={readMore(card)}
      >
      <Card className="tarot-card">
        <Card.Img variant="top" src={`../deck/${card.name_short}.jpg`} />
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


    return futureRender(props.use);


}

export default Cardd;
