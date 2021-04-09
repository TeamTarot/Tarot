import React from 'react';
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



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      cardArray: [],
      journalEntry: '',
      selectedJournal: {}, 
      indexOfSelectedJournal: -1 //TODO: find a place to update this state
    };

  }

  // async componentDidMount(){
   
  //   try{
  //     const user = await axios.get(`${process.env.REACT_APP_SERVER}/user`, {params:{email: this.props.auth0.user.email}});
  //     this.handleUser(user);
  //   } catch(err) {
  //     console.log(err);
  //   }

  // };

  handleUser = (upd) => {
    this.setState({
      user: upd,
      cardArray: upd.data.cards
    })
  }
  
  handleDeleteReading = async (index) => {
    console.log('delete function', this.state.user.data);
    console.log('index?', index);

    await axios.delete(`${process.env.REACT_APP_SERVER}/reading/${index}`, {params: {email: this.props.auth0.user.email} });

   
// on delete, we need to update user.data.cards
    const newCardArray = this.state.cardArray.filter((data, i) => {
      return index !== i;
    });
    console.log('new card array', newCardArray)
    this.setState( {cardArray: newCardArray} );
  
  }

  handleJournal = (journalEntry) => {
    console.log('update journal', this.state.indexOfSelectedJournal);
    this.setState({ journalEntry });
  };

  replaceJournalEntry = async (e, index) => {
    e.preventDefault();
 
    console.log('card array index', index);
    const selectedJournal = this.state.cardArray[index];
    const entry = {
      cardSet: selectedJournal.cardSet,
      date: selectedJournal.date,
      journal: this.state.journalEntry
    };

    this.state.user.data.cards.splice(index, 1, entry);
    // console.log('replace', this.state.data.cards);
    const updatedCardArray = await axios.put(`${process.env.REACT_APP_SERVER}/reading/${index}`, { email: this.props.auth0.user.email, entry: entry });
    console.log('updated cardarray', updatedCardArray);
    this.setState({ cardArray: updatedCardArray.data });
  }


  render() {
    console.log('app');
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
                <CardTable useHandle={this.handleUser} update={this.handleNew} userObj={this.state.user} /> : <Login />
              }
            </Route>
            <Route exact path="/profile">
              {this.props.auth0.isAuthenticated ?
                <Profile userObj={this.state.user} handleDeleteReading={this.handleDeleteReading} handleJournal={this.handleJournal} replaceJournalEntry={this.replaceJournalEntry} 
                cardArray={this.state.cardArray} handleUser={this.handleUser} /> : <Redirect to='/login' />
              }
            </Route>
            <Route exact path="/about">
              <AboutUs />
            </Route>

            <Route exact path="/login">
                {this.props.auth0.isAuthenticated ?
                  <Redirect to='/profile' /> : <Login />
                }
              </Route>

          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
