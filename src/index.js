import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import './assets/styles/style.css';

ReactDOM.render(
  <Auth0Provider
    domain="dev-d6ditd3b.us.auth0.com"
    clientId="6g7Eo7CCR8Wtk3VTX6LZrwfvDS2B7hXR"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
