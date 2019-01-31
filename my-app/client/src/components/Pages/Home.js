import React, { Component } from 'react';
import {Button, Navbar, NavItem, Footer, Card, CardTitle} from 'react-materialize';
import Jumbotron from '../Jumbotron/index';
import { Link } from "react-router-dom";
import './style.css';
import {Plan} from '../../IMG/Plan.jpg'

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

const sizer = {
  width :"40%",
  margin: "auto",
  padding: "10px"
}

const whiteText = {
  color: "white"
}

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
        <Card style = {sizer} header={<CardTitle reveal image={require('../../IMG/Plan.jpg')} waves='light'/>}
          title="Subscribe or Save"
          reveal={<h2>A subscription tracker designed to calculate monthly
            expenditures and remind users of when payments are due. It is valuable
            as a tool to follow financial output and as a visual aid to show
            where money is going.</h2>}>
          <br></br>
          <Button waves='light'>
          <Link style = {whiteText} to = {'/Form'}>Sign Up</Link>
          </Button>
        </Card>
      </Jumbotron>
      <Footer style = {footerStyle}></Footer>
      </div>
    );
  }
}

export default Home;
