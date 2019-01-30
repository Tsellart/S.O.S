import React, { Component } from 'react';
import {Navbar, NavItem, Table, Footer} from 'react-materialize';
import Jumbotron from '../Jumbotron/index';
import { Link } from "react-router-dom";
import API from "../Util/API";
import { SubList, SubListItem } from "../SubList/index";

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

class Subscriptions extends Component {

  state = {
    Subscription: []
  };

  loadSubs = () => {
    API.getSubs()
    .then(res => this.setState({ subs: res.data }))
    .catch(err => console.log(err));
  }


  render() {
    return (
      <div className="App">
      <Navbar brand='SuperScriber' right>
      <NavItem>
        <Link to = {'/Form'}>Manage Subscriptions</Link>
      </NavItem>
      <NavItem>
        <Link to = {'/home'}>Log-Out</Link>
      </NavItem>
      </Navbar>
      <Jumbotron>
        <SubList>
          <SubListItem>
          </SubListItem>
        </SubList>
        <Table className="centered">
        <thead>
          <tr>
            <th data-field="Cost">
              Monthly Expense
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              $42.00
            </td>
          </tr>
        </tbody>
        </Table>
      </Jumbotron>
      <Footer style = {footerStyle}></Footer>
      </div>
    );
  }
}

export default Subscriptions;
