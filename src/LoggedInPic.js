import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from 'react-bootstrap';

function LoggedInPic() {
  const {
    isAuthenticated,
    user
  } = useAuth0();

  return isAuthenticated && (
    <>
      <Image className="loggedInPic" src={user.picture} roundedCircle />
    </>
  );
}

export default LoggedInPic;
