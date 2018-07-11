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
        <Row style={{ display: "flex", alignItems: "center" }}>
          <Col xsHidden smHidde md={6} className="ContactUs-half">
            <Image
              alt="contact-us-img"
              src={contactusimg}
              style={{ borderRadius: "28px" }}
              className="img-responsive"
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
              <h6 style={{ textAlign: "left" }}>
                <b>Connect with us:</b>
              </h6>
              <p style={{ textAlign: "left" }}>
                For any support, please Email us at{" "}
                <a href="#">info@Tazwiz.ca</a>.
              </p>
              <h6 style={{ textAlign: "left" }}>
                <b>Visit us at:</b>
              </h6>
              <p style={{ textAlign: "left" }}>
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
