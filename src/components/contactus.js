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
  Button,
  Form
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

import contactusimg from "../images/lead_original.jpg";
import placeholdermap from "../images/cbanner.jpg";

class ContactUs extends Component {
  render() {
    return (
      <div className="App">
        <Row className="div-vertical-center">
          <Col md={6} className="ContactUs-half">
            <Image
              alt="contact-us-img"
              src={contactusimg}
              className="img-responsive border-radius-28"
            />
          </Col>

          <Col md={6} className="ContactUs-half">
            <Col md={12}>
              <h3>Lets Talk!</h3>
              <Form>
                <FormGroup controlId="formInlineName">
                  <FormControl type="text" placeholder="Name" />
                </FormGroup>{" "}
                <FormGroup controlId="formInlineEmail">
                  <FormControl type="email" placeholder="Email" />
                </FormGroup>{" "}
                <FormGroup controlId="formControlsTextarea">
                  <FormControl
                    componentClass="textarea"
                    placeholder="Feedback"
                  />
                </FormGroup>
                <Button type="submit" bsClass="App-button">
                  Submit
                </Button>
              </Form>
              <h6 className="text-align-left">
                <b>Connect with us:</b>
              </h6>
              <p className="text-align-left">
                For any support, please Email us at{" "}
                <a href="#">info@Tazwiz.ca</a>.
              </p>
              <h6 className="text-align-left">
                <b>Visit us at:</b>
              </h6>
              <p className="text-align-left">
                Building D<br />1750 Finch Ave E<br />North York, ON M2J 2X5
              </p>
            </Col>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ContactUs;
