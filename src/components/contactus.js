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
import contactusimg from "../images/contactus.jpg";
import placeholdermap from "../images/cbanner.jpg";

class ContactUs extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <img
            className="career-header-img"
            alt="headerIMG"
            src={placeholdermap}
          />
        </div>
        <Row>
          <Col md={6} className="ContactUs-half">
            <Image
              alt="contact-us-img"
              src={contactusimg}
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
            </Col>

            <Col md={12}>
              <h6 className="left">
                <b>Connect with us:</b>
              </h6>
              <p>
                For any support, please Email us at{" "}
                <a href="#">info@iHired.ca</a>.
              </p>
              <h6 className="left">
                <b>Visit us at:</b>
              </h6>
              <p>
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
