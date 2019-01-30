import React, { Component } from 'react';
import {Button, Navbar, NavItem, Footer} from 'react-materialize';
import Jumbotron from '../Jumbotron/index';
import { Link } from "react-router-dom";
import './style.css';

const footerStyle = {
  fontSize: "20px",
  color: "white",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%"
};

class Home extends Component {
  render() {
    return (
      <div className="App">
      <Navbar brand='SuperScriber' right>
        <NavItem>
          <Link to = {'/Subscriptions'}>Log-In</Link>
        </NavItem>
      </Navbar>
      <Jumbotron>
        
        <h2>a subscription tracker designed to calculate monthly
expenditures and remind users of when payments are due. It is valuable
as a tool to follow financial output and as a visual aid to show
where money is going.</h2>
      
        <Button waves='light'>
          <Link to = {'/Form'}>Sign Up</Link>
        </Button>
        
      </Jumbotron>
      <Footer style = {footerStyle}></Footer>
      </div>
    );
  }
}

export default Home;
