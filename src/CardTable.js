import React, {useContext, useState} from 'react';
import {UserContext} from './UserContext';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Cardd from './Card';
import { CardDeck, Container, Form, Button } from 'react-bootstrap';

function CardTable (props) {

const {value, setValue} = useContext(UserContext)
const [today, setToday] = useState({cardSet:[],
                                    date: new Date(),
                                    journal:'',});
// const [show, setShow] = useState(false);
  
 const saveReading = async (e) =>{
   e.preventDefault();
   const reading = await axios.post(`${process.env.REACT_APP_SERVER}/reading`, {email: props.auth0.user.email, reading: today} )
   console.log("SAVE READING:   ", reading)
  //  setValue(reading)
   props.updateHand(reading);
 }



  const handleDraw = async (e) => {
    try{
      e.preventDefault();
      const hand = await axios.get("http://localhost:3001/draw");
      setToday({date: today.date, cardSet: hand.data, journal: today.journal});
      console.log("TODAY:   ", today)
    }catch(err){
        console.log(err);
    }

  }
  

    return(
      <>
{       today.cardSet.length
        ?<>
        <Container className="mt-4 mb-4">
          <CardDeck >
            {today.cardSet.map((card, index) =>{
        return <Cardd key={index} use={card} id={card._id}/>})}
          </CardDeck>
        </Container>
        {today.cardSet.length && <div></div>}
        <Container className="reflections mb-4">
          <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows={6} onChange={(e)=> setToday({date: today.date, cardSet: today.cardSet,  journal: e.target.value})} placeholder="Journal your thoughts and reflections" />
            </Form.Group>
          </Form>
        <Button onClick={(e)=> {saveReading(e)}}>Click to save</Button>
       </Container>
       </>
      :
      <Container className="draw-button text-center mt-5 mb-5">
        <Button onClick={(e)=>{handleDraw(e)}}>Draw Tarot Cards 🔮</Button>
      </Container>
    }
      </>
    );
  
}

export default withAuth0(CardTable);
