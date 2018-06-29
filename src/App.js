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

    this.state = {
      email: ""
    };
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
                      eventKey={1}
                      componentClass={Link}
                      href="/"
                      to="/"
                      className="NavItem"
                    >
                      Home
                    </NavItem>
                    <NavItem
                      eventKey={2}
                      componentClass={Link}
                      href="/careers"
                      to="/careers"
                      className="NavItem"
                    >
                      Careers
                    </NavItem>
                    <NavItem
                      eventKey={3}
                      componentClass={Link}
                      href="/contactus"
                      to="/contactus"
                      className="NavItem"
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
                  <Col md={3}>
                    <Image
                      href="#"
                      alt="logo"
                      src={navlogo}
                      className="Placeholder-image"
                    />
                  </Col>
                  <Col md={1}>
                    <h6>Company</h6>
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/careers">Careers</Link>
                      </li>
                      <li>
                        <Link to="/contactus">Contact</Link>
                      </li>
                    </ul>
                  </Col>
                  <Col md={2}>
                    <h6 style={{}}>Contact Us</h6>
                    <p style={{}}>
                      info@iHired.ca<br />+1 (647) 393-7584
                    </p>
                  </Col>
                  <Col md={3}>
                    <h6>Our Address</h6>
                    <p>
                      Helix, Building D<br />1750 Finch Ave E<br />North York,
                      ON M2J 2X5
                    </p>
                  </Col>
                  <Col md={3}>
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
