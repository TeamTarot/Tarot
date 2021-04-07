import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


class Card extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        user: this.props.userObj,
       }
    }



    futureRender = (card) =>{
        return (
    <Card className="card-1 tarot-card">
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.ImgOverlay>

    <Card.Title>{use.name}</Card.Title>
    <Card.Body>
    <Card.Text>
      {use.meaning_up}
    </Card.Text>
    <Card.Text>
      {use.desc}
    </Card.Text>
    </Card.Body>
    </Card.ImgOverlay>
        </Card>
        )

    }






render(){
    return(

        <futureRender card={this.props.draw} />
        
    )
}

}

export default Card;   











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