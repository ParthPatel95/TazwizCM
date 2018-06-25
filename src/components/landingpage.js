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
          <Row>
            <Col md={5}>
              <h1 style={{ textAlign: "left" }} className="h1font body-font">
                Coming Soon
              </h1>
            </Col>

            <Col md={7}>
              <h1 className="h1font body-font">
                Make it&nbsp;
                <TextLoop springConfig={{ stiffness: 180, damping: 8 }}>
                  <div style={{ color: "#a4a4a4" }}>loud.</div>
                  <div style={{ color: "#a4a4a4" }}>easy.</div>
                  <div style={{ color: "#a4a4a4" }}>work.</div>
                  <div style={{ color: "#a4a4a4" }}>strong.</div>
                  <div style={{ color: "#a4a4a4" }}>beautiful.</div>
                  <div style={{ color: "#a4a4a4" }}>connected.</div>
                </TextLoop>
              </h1>
            </Col>
          </Row>
          <span
            className="body-font"
            style={{ color: "white", fontSize: "38px" }}
          >
            &lt; With iHired /&gt;
          </span>
        </section>

        <section className="App-body" ref={this.aboutRef}>
          <Row>
            <h2 className="body-font">About Us</h2>

            <Col xs={12} md={4} mdOffset={2} />

            <Col xs={12} md={4}>
              <Image alt="171x180" src={thumb} />
            </Col>
          </Row>
          <h2 className="body-font">Benefits</h2>
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
              <h4 className="body-font">Benefit 1</h4>
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
              <h4 className="body-font">Benefit 2</h4>
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
              <h4 className="body-font">Benefit 3</h4>
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
              <h4 className="body-font">Benefit 4</h4>
            </Col>
          </Row>
        </section>

        <section className="App-body body-font">
          <Row>
            <h2 className="body-font">Processes</h2>
            <Col xs={12} xsOffset={0} md={3} mdOffset={0}>
              <Image src={thumb} circle />
              <h3 className="body-font">Process 1</h3>
              <p className="body-font">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </Col>
            <Col xs={12} xsOffset={0} md={3} mdOffset={0}>
              <Image src={thumb} circle />
              <h3 className="body-font">Process 2</h3>
              <p className="body-font">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </Col>
            <Col xs={12} xsOffset={0} md={3} mdOffset={0}>
              <Image src={thumb} circle />
              <h3 className="body-font">Process 3</h3>
              <p className="body-font">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </Col>
            <Col xs={12} xsOffset={0} md={3} mdOffset={0}>
              <Image src={thumb} circle />
              <h3 className="body-font">Process 4</h3>
              <p className="body-font">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </Col>
          </Row>
        </section>

        <section className="App-body body-font">
          <Row>
            <h3 className="body-font">Launch Date</h3>
            <h3 className="body-font">00:00:00</h3>

            <Col md={6} xs={12} />
          </Row>
        </section>

        {/*MODALS*/}
        <section className=" body-font">
          <Modal show={this.state.show1} onClick={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading 1</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Text in a modal</h4>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros.
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
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros.
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
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros.
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
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </section>
      </div>
    );
  }
}

export default LandingPage;
