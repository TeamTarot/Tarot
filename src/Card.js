import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { Tooltip } from 'react-bootstrap';
import './assets/TempHang.jpg';
//Photo by Lucas Pezeta from Pexels
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
        return (<Tooltip id="read-more" {...props}>
            {props.desc}
        </Tooltip>
)
}
//add another effect to the hover where the tarot image fades a little as the information gets displayed on hover
    futureRender = (card) =>{

        return (
            <OverlayTrigger
    key={this.card.id}
    placement="right"
    delay={{ show: 250, hide: 400 }}
    overlay={this.readMore(card)}
  >
    <Card className="tarot-card">
      <Card.Img variant="top" src={require('./TempHang.jpg')} />
      <Card.ImgOverlay>

    <Card.Title>{card.name}</Card.Title>
    <Card.Body>
    <Card.Text>
      {card.meaning_up}
    </Card.Text>

    </Card.Body>

    </Card.ImgOverlay>
        </Card>
        </OverlayTrigger>
        )

    }

render(){
    return this.futureRender(this.props.use)
}

}

export default Cardd;   











// <Card className="card-1">
//     <Card.Header>
//       <Nav variant="tabs" defaultActiveKey="#first">
//       <Nav.Item>
//         <Nav.Link href="#first">Basic Meaning</Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link href="#link">Arcana Info</Nav.Link>
//       </Nav.Item> 
//       </Nav> 
//       </Card.Header>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.ImgOverlay>


//     <Card.Title>{use.name}</Card.Title>

//     <Card.Text>
//       {use.meaning_up}
//     </Card.Text>
//     <Card.Text>
//       {use.desc}
//     </Card.Text>
 

//     </Card.ImgOverlay>
//         </Card>