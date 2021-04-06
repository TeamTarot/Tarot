import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';


class CardTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.userObj,
      draw:[]
     
      
    };
    // const user = this.props.auth0;
  }



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
      </>
    );
  }

}

export default withAuth0(CardTable);