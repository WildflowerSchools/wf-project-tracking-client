import * as React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";

import {useAuth0} from "@auth0/auth0-react";

import LogoutButton from "./LogoutButton";
import logo from "../logo.png";
import useConfig from "./useConfig";


export default () => {
  const auth0 = useAuth0();
  const config = useConfig();

  return (() => {
    if (auth0.isAuthenticated) {
      return (
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Project Tracking</Navbar.Brand>
            <LogoutButton />
          </Container>
        </Navbar>
      )
    } else {
      return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title mt-2">{config.app.TITLE}</h1>
        </header>
      )
    }
  })()
}