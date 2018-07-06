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
  Carousel,
  ButtonGroup,
  HelpBlock,
  Modal,
  Panel,
  PanelGroup
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
import thumb_label from "../images/thumbnail_label.png";
import thumblogo from "../images/iHireLogo.png";
import placeholdermap from "../images/cbanner.jpg";

import contactusimg from "../images/contactus.jpg";
import startculture from "../images/career-startup-culture.jpg";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";


class Careers extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      value: "",
      show1: false,
      show2: false,
      show3: false,
      show4: false
    };
  }
  

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return "success";
    else if (length > 5) return "warning";
    else if (length > 0) return "error";
    return null;
  }

  handleChange(e) {
    {
      /*this.setState({ value: e.target.value });*/
    }
  }

  handleClose() {
    this.setState({ show1: false, show2: false, show3: false, show4: false });
  }

  render() {
    return (
      <div>
        <div className="App-headsection2">
        <Row>
        <Col md={12}>
          <h1 className="h1font-header h1font body-font text-color">placeholder</h1>
        </Col>
        </Row>
          {/*<img
            className="career-header-img"
            alt="headerIMG"
            src={placeholdermap}
          />*/}
        </div>


           {/*
          <Row>
             
            <Col xs={12}>
              <h1 >Join iHired and tap into your potential</h1>
            </Col>
            <Col xs={12}>
              <img
                style={{
                  maxWidth: "50%",
                  padding: "10px",
                  borderRadius: "28px"
                }}
                alt="headerIMG"
                src={startculture}
              />
            </Col>

          </Row>
*/}

          <Row>
            <h1 >Join iHired and tap into your potential</h1>
            
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
              <h4>Scale your IQ</h4>
              
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
              <h4>Value</h4>
              
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
              <h4>Knitted</h4>
              
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
              <h4>Accommodation</h4>
              
            </Col>
          </Row>
          
            <Row>
              <h2 className="body-font">
                The people that make iHired ... iHIRED!
              </h2>
              <Col xs={12} sm={6} md={3}>
                <Thumbnail src={thumb_label} alt="242x200">
                  <h3>Thumbnail label</h3>
                  <p>Role: Lorem</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cupiditate illo quidem voluptate est praesentium et ut, reprehenderit reiciendis ea harum veritatis ipsa quod, esse quaerat labore hic sit eius.
                  </p>
                </Thumbnail>
              </Col>
              <Col xs={12} sm={6} md={3}>
                <Thumbnail src={thumb_label} alt="242x200">
                <h3>Thumbnail label</h3>
                  <p>Role: Lorem</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cupiditate illo quidem voluptate est praesentium et ut, reprehenderit reiciendis ea harum veritatis ipsa quod, esse quaerat labore hic sit eius.
                  </p>
                </Thumbnail>
              </Col>
              <Col xs={12} sm={6} md={3}>
                <Thumbnail src={thumb_label} alt="242x200">
                <h3>Thumbnail label</h3>
                  <p>Role: Lorem</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cupiditate illo quidem voluptate est praesentium et ut, reprehenderit reiciendis ea harum veritatis ipsa quod, esse quaerat labore hic sit eius.
                  </p>
                </Thumbnail>
              </Col>
              <Col xs={12} sm={6} md={3}>
                <Thumbnail src={thumb_label} alt="242x200">
                  <h3>Thumbnail label</h3>
                  <p>Role: Lorem</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cupiditate illo quidem voluptate est praesentium et ut, reprehenderit reiciendis ea harum veritatis ipsa quod, esse quaerat labore hic sit eius.
                  </p>
                </Thumbnail>
              </Col>
            </Row>


        <section>
          <h3>Available positions</h3>
          <Row className="table-padding">
            <Col xs={12} md={2} mdPush={2} xsPush={0}>
              <Image src={thumb} rounded />
            </Col>
            <Col xs={12} md={6} mdPush={2} xsPush={0}>
              <p>
                <b>Role:</b> Role 1 <br />
                <b>Requirements:</b> Requirements <br />
                <b>Start Date:</b> xx/xx/xxxx
              </p>
              <PanelGroup
                accordion
                id="accordion-uncontrolled-example"
                defaultActiveKey="2"
              >
                <Panel eventKey="1" bsClass="App-button">
                  <Panel.Heading>
                    <Panel.Title toggle>
                      <div className="text-color">Learn More...</div>
                    </Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </Panel.Body>
                </Panel>
              </PanelGroup>
            </Col>
          </Row>
          <Row className="table-padding">
            <Col xs={12} md={2} mdPush={2} xsPush={0}>
              <Image src={thumb} rounded />
            </Col>
            <Col xs={12} md={6} mdPush={2} xsPush={0}>
              <p>
                <b>Role:</b> Role 2 <br />
                <b>Requirements:</b> Requirements <br />
                <b>Start Date:</b> xx/xx/xxxx
              </p>
              <PanelGroup
                accordion
                id="accordion-uncontrolled-example"
                defaultActiveKey="2"
              >
                <Panel eventKey="1" bsClass="App-button">
                  <Panel.Heading>
                    <Panel.Title toggle>
                      <div className="text-color">Learn More...</div>
                    </Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </Panel.Body>
                </Panel>
              </PanelGroup>
            </Col>
          </Row>
        </section>

        <Grid>
          <Row className="career-ihired-intro">
            <Col md={6}>
              <img
                style={{ maxWidth: "100%" }}
                alt="headerIMG"
                src={contactusimg}
              />
            </Col>
            <Col md={6}>
              <h3 style={{ textAlign: "center" }}>
                Are you ready to take that next step?
              </h3>
              <form style={{ width: "75%", margin: "auto" }}>
                <FormGroup
                  controlId="formBasicText"
                  validationState={this.getValidationState()}
                >
                  {/* <ControlLabel>Working example with validation</ControlLabel> */}
                  <FormControl
                    type="text"
                    value={this.state.value}
                    placeholder="Enter Full Name"
                    onChange={this.handleChange}
                  />
                  <FormControl.Feedback />
                  {/* <HelpBlock>Validation is based on string length.</HelpBlock> */}
                </FormGroup>

                <FormGroup
                  controlId=""
                  validationState={this.getValidationState()}
                >
                  {/* <ControlLabel>Working example with validation</ControlLabel> */}
                  <FormControl
                    type="text"
                    value={this.state.value}
                    placeholder="Enter Email"
                    onChange={this.handleChange}
                  />
                  <FormControl.Feedback />
                  {/* <HelpBlock>Validation is based on string length.</HelpBlock> */}
                </FormGroup>

                <FormGroup controlId="formControlsSelect">
                  <FormControl componentClass="select" placeholder="Job">
                    <option value="1">Job 1</option>
                    <option value="2">Job 2</option>
                    <option value="3">Job 3</option>
                    <option value="4">Job 4</option>
                  </FormControl>
                </FormGroup>

                <FormGroup>
                  <FormControl
                    componentClass="textarea"
                    placeholder="Tell us about yourself"
                  />
                </FormGroup>

                <Button bsClass="App-button" type="submit">
                  Sign-up
                </Button>
              </form>
            </Col>
          </Row>
        </Grid>

        {/*MODALS*/}
        <section className=" body-font">
          <Modal show={this.state.show1} onClick={this.handleClose}>
            <Modal.Header>
              <Modal.Title>Scale your IQ</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h5>
              We don’t look for expert experience, we help build your experience
              </h5>
            </Modal.Body>
            <Modal.Footer>
              <Button bsClass="App-button" onClick={this.handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={this.state.show2} onClick={this.handleClose}>
            <Modal.Header>
              <Modal.Title>Value</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h5>
              Big or small anything you bring to the table can be a game changer
              </h5>
            </Modal.Body>
            <Modal.Footer>
              <Button bsClass="App-button" onClick={this.handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={this.state.show3} onClick={this.handleClose}>
            <Modal.Header>
              <Modal.Title>Knitted</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h5>
              Bringing the community together starts with a strong unified team, come join our iHired family!
              </h5>
            </Modal.Body>
            <Modal.Footer>
              <Button bsClass="App-button" onClick={this.handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={this.state.show4} onClick={this.handleClose}>
            <Modal.Header>
              <Modal.Title>Accommodation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h5>
              Give you the perks to fuel your thinking cells. Function the best, be the best. Water, coffee, munchies, and ofcourse ice-cream. All inclusive for iHired Family 
              </h5>
            </Modal.Body>
            <Modal.Footer>
              <Button bsClass="App-button" onClick={this.handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </section>
      </div>
    );
  }
}

export default Careers;
