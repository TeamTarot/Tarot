import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
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
      user:{}
    };
   
  }


  handleUser = (upd) => {
  this.setState({
    user:upd
  })
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
                <Profile /> : <Redirect to='/' />
              }
            </Route>
            <Route exact path="/about">
              <AboutUs />
            </Route>

          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
