import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Cardd from './Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardDeck from 'react-bootstrap/CardDeck';
import './CardTable.css';
class CardTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.userObj,
      draw:[],
      showDeck: false,
    };
  }
  componentDidMount() {
   
    try{
      axios.get("http://localhost:3001/user", {params:{email: this.props.auth0.user.email}})
      .then(result => {this.props.useHandle(result)})
    } catch(err) {
      console.log(err)
    }
  }



  handleDraw = (e) => {
    try{
      e.preventDefault();
      const hand = axios.get("http://localhost:3001/draw", {})
      this.setState({draw: [hand],
                      showDeck: true})
    
      
    }catch(err){
        console.log(err)
    }

  }

  render() {
    console.log("staaaaate: ", this.state)
    console.log("render draw at table:", this.state.draw)
    return(
      <>
    { this.state.showDeck
      ?<>
       <CardDeck >
          {this.state.draw.map((card) =>{return <Cardd use={card} />})}
       </CardDeck>
       <div className="reflections">
       <textarea placeholder="Journal your thoughts and reflections" style={{height:"150px"}} />
       <button>Click to save</button>
       </div>
       </>
      :<div className="draw-button"><button onClick={(e)=>{this.handleDraw(e)}}>Click me for fortune</button></div>
    }
      </>
    );
  }
}

export default withAuth0(CardTable);