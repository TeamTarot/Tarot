
import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import {  Card, Container } from 'react-bootstrap';



class CardReveal extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        
      };
     
    }


 destiny =  (hand)=> {

        hand.reduce((acc,curr) =>{
            acc.push((
              <Card>
    {/* <Img src='' /> */}
<Card.Title>{curr.cardName}</Card.Title>
<Card.Text>{curr.cardDescription}</Card.Text>
</Card>  
            ))
        },[])
    }









render(){
    return(
        <Container>
            {this.destiny(this.props.future)}
        </Container>

    )
}



}
export default withAuth0(CardReveal);