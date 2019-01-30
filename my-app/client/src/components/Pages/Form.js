import React, { Component } from 'react';
import {Button, Row, Input, Navbar, NavItem, Footer} from 'react-materialize';
import Jumbotron from '../Jumbotron/index'
import { Link } from "react-router-dom";

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

class Formie extends Component {
  render() {
    return (
      <div className="App">
        <Navbar brand='SuperScriber' right>
            <NavItem>
                <Link to = {'/Home'}>Sign-Out</Link>
            </NavItem>
        </Navbar>
        <Jumbotron>
            <Row>
              <Input s={6} label="Username" />
              <Input s={6} label="Password" />
            </Row>
            <Row>
              <Input s={12} label="Service" />
            </Row>
            <Row>
              <Input s={12} label="Price" />
            </Row>
            <Row>
              <Input s={12} label="Rate" />
            </Row>

            <Button waves='light'>
              Submit
            </Button>
        </Jumbotron>
        <Footer style = {footerStyle}></Footer>
      </div>
    );
  }
}

export default Formie;
