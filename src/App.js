import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Well, Jumbotron, FormGroup, FormControl, ControlLabel, Col, Thumbnail, Row, Image, InputGroup } from 'react-bootstrap';
import "./App.css";
import "./scroll";
import {
  Icon,
  Layout,
  Header,
  Navigation,
  Drawer,
  Content,
  Button
} from "react-mdl";
import scrollToComponent from "react-scroll-to-component";
import Main from "./components/main";
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Layout>
            <header>
              <Navbar inverse collapseOnSelect>
              <Navbar.Header>
                <Navbar.Brand>
                  <a href="#brand"><div className="NavItem"><Link to="/">iHired</Link></div></a>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav pullRight>
                  <NavItem eventKey={1} href="#">
                    <div className="NavItem"><Link to="/aboutus">About Us</Link></div>
                  </NavItem>
                  <NavItem eventKey={2} href="#">
                    <div className="JoinFree">Join for Free</div>
                  </NavItem>
                  <NavItem eventKey={3} href="#">
                    <div className="NavItem"><Link to="/careers">Careers</Link></div>
                  </NavItem>
                  <NavItem eventKey={4} href="#">
                    <div className="NavItem"><Link to="/contactus">Contact Us</Link></div>
                  </NavItem>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </header>

            <Content>
              <div className="page-content" />
              <Main />
            </Content>
          </Layout>
        </div>
      </div>


    );
  }
}

export default App;
