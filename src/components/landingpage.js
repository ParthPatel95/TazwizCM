import React, { Component } from "react";
import scrollToComponent from "react-scroll-to-component";
import { Wave } from "react-animated-text";
import Typist from "react-typist";
import TypistLoop from "react-typist-loop";
import TextLoop from "react-text-loop";
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Well,
  Jumbotron,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
  Col,
  Thumbnail,
  Row,
  Image,
  InputGroup,
  Modal,
  OverlayTrigger
} from "react-bootstrap";
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
import thumb from "../images/test.png";
import thumblogo from "../images/iHireLogo.png";
import placeholdermap from "../images/placeholdermap.PNG";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";

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

    this.handleSignup = this.handleSignup.bind(this);
    this.handleClose = this.handleClose.bind(this);
    {
      /*this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);*/
    }

    this.state = {
      show1: false,
      show2: false,
      show3: false,
      show4: false
    };
  }

  handleSignup() {}

  handleClose() {
    this.setState({ show1: false, show2: false, show3: false, show4: false });
  }

  render() {
    return (
      <div className="App">
        <section
          style={{ textAlign: "right", color: "white" }}
          className="App-headsection"
        >
          {/* <h1 className="h1font">Coming Soon</h1> */}
          <h1 className="h1font">Coming Soon</h1>
          <h3>
            <TypistLoop interval={1000}>
              {["When Life Happens", "iHired"].map(text => (
                <Typist key={text} startDelay={750}>
                  {text}
                </Typist>
              ))}
            </TypistLoop>
          </h3>
          {/* <Typist>When Life Happens, iHired!</Typist> */}
        </section>

        {/* <section>
          <Button
            bsSize="large"
            bsClass="LearnMore"
            onClick={() => scrollToComponent(this.aboutRef)}
          >
            Learn more
          </Button>
        </section> */}

        <section className="App-body" ref={this.aboutRef}>
          <Row>
            <h2>About Us</h2>

            <Col xs={12} md={4} mdOffset={2}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Col>

            <Col xs={12} md={4}>
              <Image alt="171x180" src={thumb} />
            </Col>
          </Row>
          <h2>Benefits</h2>
          <Row>
            <Col xs={12} xsOffset={0} md={3} mdOffset={0}>
              <Image
                src={thumb}
                circle
                onClick={() =>
                  this.setState({
                    show1: true,
                    show2: false,
                    show3: false,
                    show4: false
                  })
                }
              />
              <h4>Benefit 1</h4>
            </Col>
            <Col xs={12} xsOffset={0} md={3} mdOffset={0}>
              <Image
                src={thumb}
                circle
                onClick={() =>
                  this.setState({
                    show1: false,
                    show2: true,
                    show3: false,
                    show4: false
                  })
                }
              />
              <h4>Benefit 2</h4>
            </Col>
            <Col xs={12} xsOffset={0} md={3} mdOffset={0}>
              <Image
                src={thumb}
                circle
                onClick={() =>
                  this.setState({
                    show1: false,
                    show2: false,
                    show3: true,
                    show4: false
                  })
                }
              />
              <h4>Benefit 3</h4>
            </Col>
            <Col xs={12} xsOffset={0} md={3} mdOffset={0}>
              <Image
                src={thumb}
                circle
                onClick={() =>
                  this.setState({
                    show1: false,
                    show2: false,
                    show3: false,
                    show4: true
                  })
                }
              />
              <h4>Benefit 4</h4>
            </Col>
          </Row>
        </section>

        <section className="App-body">
          <Row>
            <h2>Processes</h2>
            <Col xs={12} xsOffset={0} md={3} mdOffset={0}>
              <Image src={thumb} circle />
              <h3>Process 1</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </Col>
            <Col xs={12} xsOffset={0} md={3} mdOffset={0}>
              <Image src={thumb} circle />
              <h3>Process 2</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </Col>
            <Col xs={12} xsOffset={0} md={3} mdOffset={0}>
              <Image src={thumb} circle />
              <h3>Process 3</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </Col>
            <Col xs={12} xsOffset={0} md={3} mdOffset={0}>
              <Image src={thumb} circle />
              <h3>Process 4</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </Col>
          </Row>
        </section>

        <section className="App-body">
          <Row>
            <h3>Launch Date</h3>
            <h3>00:00:00</h3>

            <Col md={6} xs={12} />
          </Row>
        </section>

        {/*MODALS*/}

        <Modal show={this.state.show1} onClick={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading 1</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>

        <Modal show={this.state.show2} onClick={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading 2</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>

        <Modal show={this.state.show3} onClick={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading 3</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>

        <Modal show={this.state.show4} onClick={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading 4</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
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
