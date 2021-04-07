import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Header from './Header';
import Login from './Login';
import Profile from './Profile';
import Footer from './Footer';
import CardTable from './CardTable';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      cardArray: [],
      journalEntry: '',
      selectedJournal: {},
      indexOfSelectedJournal: -1
    };

  }


  handleUser = (upd) => {
    this.setState({
      user: upd,
      cardArray: upd.data.cards
    })
  }
  
  handleDeleteReading = async (id) => {
    console.log('delete function', this.state.user.data);
    console.log('id?', id);
    const SERVER = 'http://localhost:3001';
    const deletedJournal = await axios.delete(`${SERVER}/reading/${id}`, {params: {email: this.props.auth0.user.email}} );
    console.log('after delete success', deletedJournal);
// on delete, we need to update user.data.cards
    const newCardArray = this.state.user.data.cards.filter((data) => {
      return id !== data._id;
    });
    console.log('new card array', newCardArray)
    this.setState( {cardArray: newCardArray} );
  
  }

  handleJournal = (journalEntry) => {
    console.log('update journal', this.state.indexOfSelectedJournal);
    this.setState({ journalEntry });
  };

  replaceJournalEntry = async (e) => {
    e.preventDefault();
    const SERVER = 'http://localhost:3001';
    const selectedJournal = this.state.user.data.cards[this.state.indexOfSelectedJournal];
    const entry = {
      cardSet: selectedJournal.cardSet,
      date: selectedJournal.date,
      journal: this.state.journalEntry
    };

    this.state.user.data.cards.splice(this.state.indexOfSelectedJournal, 1, entry);

    const updatedUserObj = await axios.put(`${SERVER}/reading/${this.state.indexOfChosenBook}`, { email: this.props.auth0.user.email, entry: entry });

    console.log('after update new obj:', updatedUserObj.data.cards);
    this.setState({ user: updatedUserObj.data.cards });
  }


  render() {
    console.log('app', this.props);
    console.log(this.props.auth0);
    return (
      <>
        <Router>
          <Header
            auth={this.props.auth0.isAuthenticated}
          />
          <Switch>

            <Route exact path="/">
              {this.props.auth0.isAuthenticated ?
                <CardTable useHandle={this.handleUser} userObj={this.state.user} /> : <Login />
              }
            </Route>
            <Route exact path="/profile">
              {this.props.auth0.isAuthenticated ?
                <Profile userObj={this.state.user} handleDeleteReading={this.handleDeleteReading} handleJournal={this.handleJournal} replaceJournalEntry={this.replaceJournalEntry} 
                cardArray={this.state.cardArray} /> : <Redirect to='/' />
              }
            </Route>
            {/* <Route exact path="/about">
         
                <AboutUs /> 
        
            </Route> */}

          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
