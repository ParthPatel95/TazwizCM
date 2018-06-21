import React, { Component } from "react";
import scrollToComponent from "react-scroll-to-component";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Well, Jumbotron, Button, FormGroup, FormControl, ControlLabel, Col, Thumbnail, Row, Image, InputGroup } from 'react-bootstrap';
import {
  Icon,
  Layout,
  Header,
  Navigation,
  Drawer,
  Content,
  Grid,
  Cell
} from "react-mdl";
import "../App.css";
import thumb from '../images/test.png';
import thumblogo from '../images/logoplaceholder.jpg';
import placeholdermap from '../images/placeholdermap.PNG';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class LandingPage extends Component {
  componentDidMount() {
    scrollToComponent(this.Blue, {
      offset: 0,
      align: "middle",
      duration: 500,
      ease: "inCirc"
    });
  }

  constructor(props) {
    super(props);

    this.state = {
      email: ""
    };
    this.handleSignup = this.handleSignup.bind(this);
  }

  handleSignup(){

  }

  render() {
    return (
      <div className="App">
        

      <section className="App-headsection">
        <Row>
      <Col md={2} mdOffset={3} xs={12}>
              <h1 className="App-countdown">00:00:00</h1>
            </Col>
            <Col md={2} xs={12}>
              <h1 className="App-countdown">Till</h1>
            </Col>
      <Col md={2}  xs={12}>
              <Image href="#" alt="logo" src={thumblogo}className="Placeholder-image"/>
            </Col>
        </Row>
      </section>

      <section >
        <Button  bsSize="large" className="LearnMore">Learn more</Button>
      </section>

      <section className="App-body">
        <Row>
          
          <h2>About Us</h2>
          <Col xs={12} md={3} mdOffset={2}>
            <Image  alt="171x180" src={thumb}/>
          </Col>
          <Col xs={12} md={4}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Col>
        <Row>
        </Row>
          <Col xs={12} md={3} mdOffset={2}>
            <Image  alt="171x180" src={thumb}/>
          </Col>
          <Col xs={12} md={4}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Col>

        </Row>
      </section>

      <section className="App-body">
        <Row>
          <h2>Processes</h2>
          <Col xs={12} xsOffset={0} md={3} mdOffset={0}>
          <Thumbnail alt="171x180" src={thumb} circle>
            <h3>Process 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              
            </p>
          </Thumbnail>
          </Col>
          <Col xs={12} xsOffset={0} md={3} mdOffset={0}>
          <Thumbnail alt="171x180" src={thumb} circle>
            <h3>Process 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              
            </p>
          </Thumbnail>
          </Col>
          <Col xs={12} xsOffset={0} md={3} mdOffset={0}>
          <Thumbnail alt="171x180" src={thumb} circle>
            <h3>Process 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              
            </p>
          </Thumbnail>
          </Col>
          <Col xs={12} xsOffset={0} md={3} mdOffset={0}>
          <Thumbnail alt="171x180" src={thumb} circle>
            <h3>Process 4</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              
            </p>
          </Thumbnail>
          </Col>
        </Row>
        <Row>
        <h2>Early Sign-up</h2>
        <Col xs={12} md={6} mdOffset={3} xsOffset={0}>
          <FormGroup>
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


      </section>

      <footer className="App-footer">
        <Row>
        <Col md={2} mdOffset={2}>
        <h6>Lorem ipsum</h6>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Join for Free</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </Col>
        <Col md={2} >
        <h6>Lorem ipsum</h6>
          <ul>
            <li><a href="#">Lorem ipsum</a></li>
            <li><a href="#">Lorem ipsum</a></li>
            <li><a href="#">Lorem ipsum</a></li>
            <li><a href="#">Lorem ipsum</a></li>
          </ul>
        </Col>
         <Col md={2} >
            <Image href="#" alt="logo" src={placeholdermap} className="Placeholder-image"/>
        </Col>
        <Col md={2} >
          <Image href="#" alt="logo" src={thumblogo} className="Placeholder-image"/>
        </Col>
        </Row>
      </footer>
      </div>
    );
  }
}

export default LandingPage;
{
  /* <div>
<Button
  style={{ height: "5vh", width: "100vw", position: "relative" }}
  onClick={() =>
    scrollToComponent(this.Violet, {
      offset: 0,
      align: "top",
      duration: 1500
    })
  }
  raised
  colored
>
  Learn More
</Button>
</div>

<div
style={{}}
className="violet"
ref={section => {
  this.Violet = section;
}}
>
<Button raised colored>
  Test
</Button>
</div> */
}
