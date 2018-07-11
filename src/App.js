import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Well,
  Jumbotron,
  FormGroup,
  FormControl,
  ControlLabel,
  Col,
  Thumbnail,
  Row,
  Image,
  InputGroup,
  Button
} from "react-bootstrap";
import { ScrollTo } from "react-scroll-to";
import "./App.css";
import "./scroll";
import { Icon, Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import scrollToComponent from "react-scroll-to-component";
import Main from "./components/main";
import { Link } from "react-router-dom";

import thumb from "./images/test.png";
import navlogo from "./images/iHire2.png";
import thumblogo from "./images/iHireLogo.png";
import placeholdermap from "./images/placeholdermap.PNG";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.scrollUp = this.scrollUp.bind(this);
    this.state = {
      email: ""
    };
  }

  scrollUp() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="body-font">
        <div className="App">
          <Layout>
            <header>
              <Navbar collapseOnSelect fixedTop className="navbarColour">
                <Navbar.Header>
                  <Navbar.Brand>
                    <a componentClass={Link} href="/" to="/">
                      <Image
                        href="#"
                        alt="logo"
                        src={navlogo}
                        className="Nav-logo"
                      />
                    </a>
                  </Navbar.Brand>
                  <Navbar.Toggle />
                </Navbar.Header>

                <Navbar.Collapse>
                  <Nav pullRight>
                    <NavItem
                      componentClass={Link}
                      href="/"
                      to="/"
                      className="NavItem"
                      onClick={this.scrollUp}
                    >
                      Home
                    </NavItem>
                    <NavItem
                      componentClass={Link}
                      href="/careers"
                      to="/careers"
                      className="NavItem"
                      onClick={this.scrollUp}
                    >
                      Careers
                    </NavItem>
                    <NavItem
                      componentClass={Link}
                      href="/contactus"
                      to="/contactus"
                      className="NavItem"
                      onClick={this.scrollUp}
                    >
                      Contact Us
                    </NavItem>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </header>

            <div className="Nav-space" />

            <Content>
              <div className="page-content" />
              <Main />

              <footer className="App-footer">
                <Row>
                  <Col xsHidden smHidden md={3}>
                    <Image
                      href="#"
                      alt="logo"
                      src={navlogo}
                      className="Placeholder-image"
                    />
                    <p className="body-font">
                      Copyright © 2018 Tazwiz Inc. All rights reserved.
                    </p>
                  </Col>
                  <Col xs={2} md={1}>
                    <h6>Company</h6>
                    <ul>
                      <li>
                        <Link
                          componentClass={Link}
                          eventKey={4}
                          href="/"
                          to="/"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          componentClass={Link}
                          eventKey={5}
                          href="/careers"
                          to="/careers"
                        >
                          Careers
                        </Link>
                      </li>
                      <li>
                        <Link
                          componentClass={Link}
                          eventKey={6}
                          href="/contactus"
                          to="/contactus"
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </Col>
                  <Col xs={4} md={2}>
                    <h6 style={{ textAlign: "center" }}>Contact Us</h6>
                    <p className="left">
                      info@iHired.ca<br />+1 (647) 393-7584
                    </p>
                  </Col>
                  <Col md={3}>
                    <h6 style={{ textAlign: "center" }}>Our Address</h6>
                    <p className="left">
                      Helix, Building D<br />1750 Finch Ave E<br />North York,
                      ON M2J 2X5
                    </p>
                  </Col>
                  <Col xs={6} md={3}>
                    <FormGroup className="Signup">
                      <h6>Connect with us</h6>
                      <InputGroup>
                        <FormControl
                          bsSize="large"
                          type="email"
                          value={this.state.email}
                          placeholder="Email"
                        />
                        <InputGroup.Button>
                          <Button
                            bsStyle="primary"
                            bsSize="large"
                            onClick={this.handleSignup}
                          >
                            Sign-up
                          </Button>
                        </InputGroup.Button>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                  {/* <Col xs={12} md={12}>
                    <p className="body-font">
                      Copyright © 2018 Tazwiz Inc. All rights reserved.
                    </p>
                  </Col> */}
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
