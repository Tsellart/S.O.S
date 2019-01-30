import React, { Component } from "react";
import Jumbotron from "../Jumbotron/index";
import Input from "../Input/index";
import Button from "../Button/index";
import API from "../Util/API";
import {Navbar, NavItem, Footer} from 'react-materialize';
import { Container, Row, Col } from "../Grid/index";
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

class FormTwo extends Component {
  state = {
    Subscriptions: [],
    service: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getSubs(this.state.service)
      .then(res => this.setState({ service: res.data }))
      .catch(err => console.log(err));
    };

  render() {
    return (
        <div>
            <Navbar brand='SuperScriber' right>
                <NavItem>
                    <Link to = {'/Subscriptions'}>My Subscriptions</Link>
                </NavItem>
                <NavItem>
                    <Link to = {'/Home'}>Sign-Out</Link>
                </NavItem>
            </Navbar>
            <Jumbotron>
                <Container>
                    <h1>Enter your Subscriptions!</h1>
                    <form>
                        <Row>
                            <Col size="xs-9 sm-10">
                            <Input
                                name="service"
                                value={this.state.service}
                                onChange={this.handleInputChange}
                                placeholder="Service"
                            />
                            </Col>
                            <Col size="xs-9 sm-10">
                            <Input
                                name="price"
                                value={this.state.price}
                                onChange={this.handleInputChange}
                                placeholder="Price"
                            />
                            </Col>
                            <Col size="xs-9 sm-10">
                            <Input
                                name="rate"
                                value={this.state.rate}
                                onChange={this.handleInputChange}
                                placeholder="Rate"
                            />
                            </Col>
                        </Row>
                        <Row>
                            <Col size="xs-3 sm-2">
                                <Button
                                    onClick={this.handleFormSubmit}
                                    type="success"
                                    className="input-lg"
                                >
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                    </form>
                </Container>
            </Jumbotron>
            <Footer style = {footerStyle}></Footer>
        </div>
    );
  }
}

export default FormTwo;