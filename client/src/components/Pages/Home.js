import React, { Component } from 'react';
import {Button, Navbar, NavItem, Footer, Card, CardTitle} from 'react-materialize';
import Jumbotron from '../Jumbotron/index';
import { Link } from "react-router-dom";
import './style.css';

const footerStyle = {
  fontSize: "20px",
  color: "white",
  textAlign: "center",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
  backgroundColor: "#57C478"
};

const navColor = {
  backgroundColor: "#57C478"
}
const sizer = {
  margin: "auto",
  padding: "5px",
  backgroundColor: "#E9AE0B",
  color: "black"
}

const colorer = {
  backgroundColor: "#E9AE0B",
  width: "80vh",
  margin: "auto"
}

const whiteText = {
  color: "white"
}


class Home extends Component {
  render() {
    return (
      <div className="App">
      <Navbar style = {navColor} brand='S.O.S' right>
        <NavItem>
          <Link to = {'/Subscriptions'}>Log-In</Link>
        </NavItem>
      </Navbar>
      <Jumbotron>
        <Card style = {colorer} header={<CardTitle reveal image={require('../../IMG/Plan.jpg')} style = {sizer} waves='light'/>}
          title="Subscribe? or Save?"
          reveal = {<h2>A subscription tracker designed to calculate monthly
            expenditures and remind users of when payments are due. It is valuable
            as a tool to follow financial output and as a visual aid to show
            where money is going.</h2>}>
          <br></br>
          <Button waves='light'>
          <Link style = {whiteText} to = {'/Form2'}>Sign Up</Link>
          </Button>
        </Card>
      </Jumbotron>
      <Footer style = {footerStyle}></Footer>
      </div>
    );
  }
}

export default Home;
