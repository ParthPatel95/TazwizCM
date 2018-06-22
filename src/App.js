import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Well, Jumbotron, FormGroup, FormControl, ControlLabel, Col, Thumbnail, Row, Image, InputGroup, Button } from 'react-bootstrap';
import "./App.css";
import "./scroll";
import {
  Icon,
  Layout,
  Header,
  Navigation,
  Drawer,
  Content
} from "react-mdl";
import scrollToComponent from "react-scroll-to-component";
import Main from "./components/main";
import { Link } from "react-router-dom";

import thumb from './images/test.png';
import thumblogo from './images/iHireLogo.png';
import placeholdermap from './images/placeholdermap.PNG';


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: ""
    };
  }


  render() {
    return (
      <div>
        <div className="App">
          <Layout>
            <header>
              <Navbar inverse collapseOnSelect fixedTop>
              <Navbar.Header>
                <Navbar.Brand>
                  <a componentClass={Link} href="/" to="/" >
                  <Image href="#" alt="logo" src={thumblogo} className="Nav-logo"/>
                  </a>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav pullRight>

                  <NavItem eventKey={1} componentClass={Link} href="/" to="/" className="NavItem">Home</NavItem>
                  <NavItem eventKey={2} componentClass={Link} href="/careers" to="/careers" className="NavItem">Careers</NavItem>
                  <NavItem eventKey={3} componentClass={Link} href="/contactus" to="/contactus" className="NavItem">Contact Us</NavItem>

                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </header>

            <Content>
              <div className="page-content" />
              <Main />




              <footer className="App-footer">
                <Row>
                <Col md={4} >
                  <Image href="#" alt="logo" src={thumblogo} className="Placeholder-image"/>
                </Col>
                <Col md={1}>
                <h6>Company</h6>
                  <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </Col>
                <Col md={3}>
                <h6>Lorem ipsum</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </Col>
                <Col md={4} >
                
                  <FormGroup className="Signup">
                  <h6>Connect with us</h6>
                    <InputGroup>
                      <FormControl bsSize="large" type="email" value={this.state.email}
                              placeholder="Email"/>
                      <InputGroup.Button>
                        <Button bsStyle="primary" bsSize="large" onClick={this.handleSignup}>Sign-up</Button>
                      </InputGroup.Button>
                    </InputGroup>
                  </FormGroup>
                </Col>
                

                </Row>
              </footer>

            </Content>

      


          </Layout>
        </div>
      </div>


    );
  }
}

export default App;
