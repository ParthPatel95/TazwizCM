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
  HelpBlock
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
import placeholdermap from "../images/cbanner.jpg";
import contactusimg from "../images/lead_original.jpg";
import startculture from "../images/career-startup-culture.jpg";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
class Careers extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: ""
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
    this.setState({ value: e.target.value });
  }
  render() {
    return (
      <div>
        <div>
          <img
            className="career-header-img"
            alt="headerIMG"
            src={placeholdermap}
          />
        </div>

        <Grid>
          <Row>
            <Col md={6} mdPush={6}>
              <img
                style={{ maxWidth: "100%" }}
                alt="headerIMG"
                src={startculture}
              />
            </Col>
            <Col md={6} mdPull={6}>
              <img alt="headerIMG" src={thumb} />
            </Col>
          </Row>

          <Row style={{ width: "100%" }}>
            <h2>Perks of Working at iHired</h2>
            <Col xs={12} xsOffset={0} md={3} mdOffset={0}>
              <Image src={thumb} circle />
              <h4>Benefit 1</h4>
            </Col>
            <Col xs={12} xsOffset={0} md={3} mdOffset={0}>
              <Image src={thumb} circle />
              <h4>Benefit 2</h4>
            </Col>
            <Col xs={12} xsOffset={0} md={3} mdOffset={0}>
              <Image src={thumb} circle />
              <h4>Benefit 3</h4>
            </Col>
            <Col xs={12} xsOffset={0} md={3} mdOffset={0}>
              <Image src={thumb} circle />
              <h4>Benefit 4</h4>
            </Col>
          </Row>

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
              </form>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Careers;
