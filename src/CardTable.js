import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';


class CardTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.userObj,
<<<<<<< Updated upstream
      draw:[]
     
      
=======
      draw:[],
      journal:'',
      showDeck: false,
      today:{
        cardSet:[],
        date: new Date(),
        journal:'',
    }
>>>>>>> Stashed changes
    };
    // const user = this.props.auth0;
  }
<<<<<<< Updated upstream



  componentDidMount(){
   
    try{
      const user = axios.get("http://localhost:3001/user", {params:{email: this.props.auth0.user.email}});
      this.props.useHandle(user)
      
    }catch(err){
        console.log(err)
    }
  }

  handleDraw = (e) => {
    try{
      e.preventDefault();
      const hand = axios.get("http://localhost:3001/draw", {});
      this.setState({draw: hand})
      
=======
  async componentDidMount() {
   
    try{
      await axios.get("http://localhost:3001/user", {params:{email: this.props.auth0.user.email}})
      .then(result => {
        this.props.useHandle(result)})
    } catch(err) {
      console.log(err)
    }
  }

 saveReading = async (e) =>{
   e.preventDefault();
   await axios.post(`http://localhost:3001/reading`, {params: {email:this.props.auth0.user.email, reading: [...this.state.today]}} )
   console.log("in save" , this.state) 
 }



  handleDraw = (e) => {
    try{
      e.preventDefault();
      const hand = await axios.get("http://localhost:3001/draw", {})
      this.setState({draw: hand,
                     showDeck: true,
                     today:{date: this.state.today.date, cardSet:[...hand], journal: this.state.today.journal} })
      console.log("handle draw hand:", hand)
>>>>>>> Stashed changes
    }catch(err){
        console.log(err)
    }

  }

  render() {
    console.log("CardTable User?: ", this.state.user)
    return(
      <>
{       this.state.draw.length > 0
      ?<>
<<<<<<< Updated upstream
      <div className='card-box'>

          <div className="card-1">
            <h1>{this.state.draw[0].name}</h1>
          </div>

          <div className="card-2">
            <h1>{this.state.draw[1].name}</h1>
          </div>

          <div className="card-3">
            <h1>{this.state.draw[2].name}</h1>
          </div>

      </div>
      <textarea placeholder="Journal your thoughts" style={{height:"150px"}}></textarea>

      <button>Click to save</button>
      
      </>
      :<button onClick={(e)=>{this.handleDraw()}}>Click me for fortune</button>
}
=======
       
       {/* <CardDeck >
          {this.props.userObj.cards.map((card) =>{
      return <Cardd use={card} id={card._id}/>})}
       </CardDeck> */}

       <div>{this.state.draw}</div>
       {this.state.draw.length && <div>this.state.draw</div>}
       <div className="reflections">
       <textarea placeholder="Journal your thoughts and reflections" style={{height:"150px"}} onChange={(e)=> this.setState({
                                                                    today:{date: this.state.today.date, cardSet: this.state.today.cardSet,  journal: e.target.value}})}/>
       <button onClick={(e)=> {this.saveReading(e)}}>Click to save</button>
       </div>
       </>
      :<div className="draw-button"><button onClick={(e)=>{this.handleDraw(e)}}>Click me for fortune</button></div>
    }
>>>>>>> Stashed changes
      </>
    );
  }

}

export default withAuth0(CardTable);