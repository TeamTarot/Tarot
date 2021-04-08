import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Cardd from './Card';
import { Card, CardDeck, Container, Form, Button } from 'react-bootstrap';

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
  async componentDidMount(){
   
    try{
      const user = await axios.get("http://localhost:3001/user", {params:{email: this.props.auth0.user.email}})
      this.props.useHandle(user)
    } catch(err) {
      console.log(err)
    }

  };
  
 saveReading = async (e) =>{
   e.preventDefault();
   console.log(this.props.auth0.user.email)

   const up = await axios.post(`http://localhost:3001/reading`, {email:this.props.auth0.user.email, reading: this.state.today} )
   console.log("in save" , this.state) 
   this.props.update(up)
 }



  handleDraw = async (e) => {
    try{
      e.preventDefault();
      const hand = await axios.get("http://localhost:3001/draw", {})
      this.setState({draw: hand.data,
                     showDeck: true,
                     today:{date: this.state.today.date, cardSet:hand.data, journal: this.state.today.journal} })
      console.log("handle draw hand:", hand)
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
       
       <CardDeck >
          {this.state.draw.map((card) =>{
      return <Cardd use={card} id={card._id}/>})}
       </CardDeck>

       {/* <div>{this.state.draw}</div> */}
       {this.state.draw.length && <div>this.state.draw</div>}
       <div className="reflections">
       <textarea placeholder="Journal your thoughts and reflections" style={{height:"150px"}} onChange={(e)=> this.setState({
                                                                    today:{date: this.state.today.date, cardSet: this.state.today.cardSet,  journal: e.target.value}})}/>
       <button onClick={(e)=> {this.saveReading(e)}}>Click to save</button>
       </div>
       </>
      :<div className="draw-button"><button onClick={(e)=>{this.handleDraw(e)}}>Click me for fortune</button></div>
    }
      </>
    );
  }
}

export default withAuth0(CardTable);