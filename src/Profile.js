import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import { Accordion } from 'react-bootstrap';
import ReadingRender from './readingRender'




class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          userObj: {},
        };

}
        
  

      
    render() {
      console.log('Profile props', this.props);
      console.log(this.props.auth0);
      return (
        <>  {this.state.userObj.cards &&
        <Accordion>
            <ReadingRender herstory={this.state.userObj.cardSet} />
        </Accordion>
        

        }
          
         </>
    );
  }
}

export default withAuth0(Profile);
