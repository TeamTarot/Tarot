import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Cardd from './Card';
import { CardDeck, Container, Form, Button } from 'react-bootstrap';

class CardTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.userObj,
      draw:[],
      journal:'',
      showDeck: false,
      today:{
        cardSet:[],
        date: new Date(),
        journal:'',
    }
  }
  }
  async componentDidUpdate(){
   
    try{
      const user = await axios.get("http://localhost:3001/user", {params:{email: this.props.auth0.user.email}});
      this.props.useHandle(user);
    } catch(err) {
      console.log(err);
    }

  };
  
 saveReading = async (e) =>{
   e.preventDefault();
   console.log(this.props.auth0.user.email)
   await axios.post(`http://localhost:3001/reading`, {email:this.props.auth0.user.email, reading: this.state.today} )
   console.log("in save" , this.state) 
 }



  handleDraw = async (e) => {
    try{
      e.preventDefault();
      const hand = await axios.get("http://localhost:3001/draw", {})
      this.setState({draw: hand.data,
                     showDeck: true,
                     today:{date: this.state.today.date, cardSet:hand.data, journal: this.state.today.journal} })
      
    }catch(err){
        console.log(err)
    }

  }
  
  render() {
    console.log("CardTable User?: ", this.state.user)
    console.log("pre-render hand", this.state.draw)
    return(
      <>
{       this.state.draw.length
        ?<>
        <Container className="mt-4 mb-4">
          <CardDeck >
            {this.state.draw.map((card, index) =>{
        return <Cardd use={card} id={card._id}/>})}
          </CardDeck>
        </Container>
        {/* <div>{this.state.draw}</div> */}
        {this.state.draw.length && <div></div>}
        <Container className="reflections mb-4">
          <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows={6} onChange={(e)=> this.setState({today:{date: this.state.today.date, cardSet: this.state.today.cardSet,  journal: e.target.value}})} placeholder="Journal your thoughts and reflections" />
            </Form.Group>
            {/* <textarea placeholder="Journal your thoughts and reflections" style={{height:"150px"}} onChange={(e)=> this.setState({today:{date: this.state.today.date, cardSet: this.state.today.cardSet,  journal: e.target.value}})}/> */}
          </Form>
        <Button onClick={(e)=> {this.saveReading(e)}}>Click to save</Button>
       </Container>
       </>
      :
      <Container className="draw-button text-center mt-5 mb-5">
        <Button onClick={(e)=>{this.handleDraw(e)}}>Draw Tarot Cards 🔮</Button>
      </Container>
    }
      </>
    );
  }
}

export default withAuth0(CardTable);
