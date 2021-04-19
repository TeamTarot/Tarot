import React, { useState , useContext } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Header from './Header';
import Login from './Login';
import Profile from './Profile';
import Footer from './Footer';
import AboutUs from './AboutUs';
import CardTable from './CardTable';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { UserContext } from './UserContext';


function App (props) {

const {value, setValue} = useContext(UserContext)
const [cardHand, setCardHand] = useState([])
const [journalEntry, setJournalEntry] = useState({})
  
const handleDeleteReading = async (index) => {
  await axios.delete(`${process.env.REACT_APP_SERVER}/reading/${index}`, {params: {email: props.auth0.user.email} });
// on delete, we need to update user.data.cards
  const newCardArray = cardHand.filter((data, i) => {
      return index !== i;
    });
    setCardHand(newCardArray)
}

const handleJournal = (journalEntry) => {
    console.log('update journal', journalEntry);
    setJournalEntry(journalEntry)
};

const replaceJournalEntry = async (e, index) => {
    e.preventDefault();
    const selectedJournal = cardHand[index];
    const entry = {
      cardSet: selectedJournal.cardSet,
      date: selectedJournal.date,
      journal: journalEntry
    };

    value.data.cards.splice(index, 1, entry);
    // console.log('replace', this.state.data.cards);
    const updatedCardArray = await axios.put(`${process.env.REACT_APP_SERVER}/reading/${index}`, { email: props.auth0.user.email, entry: entry });
    console.log('updated cardarray', updatedCardArray);
    setCardHand(updatedCardArray)
  }


 
    return (
      <>
        <Router>
          <Header
            // auth={this.props.auth0.isAuthenticated}
          />
          <Switch>
<UserContext.Provider value={{value, setValue}}>
            <Route exact path="/">
              {props.auth0.isAuthenticated ?
                <CardTable updateHand={setCardHand} /> : <Login />
              }
            </Route>
            <Route exact path="/profile">
              {props.auth0.isAuthenticated ?
                <Profile userObj={value} handleDeleteReading={handleDeleteReading} handleJournal={handleJournal} replaceJournalEntry={replaceJournalEntry} 
                cardArray={cardHand} handleUser={setValue} /> : <Redirect to='/login' />
              }
            </Route>
            <Route exact path="/about">
              <AboutUs />
            </Route>

            <Route exact path="/login">
                {props.auth0.isAuthenticated ?
                  <Redirect to='/profile' /> : <Login />
                }
              </Route>
</UserContext.Provider>
          </Switch>
          <Footer />
        </Router>
      </>
    );
  
}

export default withAuth0(App);
