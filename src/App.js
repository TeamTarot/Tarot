import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
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

  render() {
    console.log('app', this.props);
    console.log(this.props.auth0);
    return (
      <>
        <Router>
          <Header
            auth={this.props.auth0.authenticated}
          />
          <Switch>

            <Route exact path="/">
              {this.props.auth0.isAuthenticated ?
                <CardTable /> : <Login />
              }
            </Route>
            <Route exact path="/profile">
              {this.props.auth0.isAuthenticated ?
                <Redirect to='/profile' /> : <Login />
              }
            </Route>
            <Route exact path="/About Us">
              {this.props.auth0.isAuthenticated ?
                <AboutUs /> : <Redirect to='/login' />
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
