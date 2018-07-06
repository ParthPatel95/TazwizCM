import React, { Component } from "react";
import scrollToComponent from "react-scroll-to-component";
import { Wave } from "react-animated-text";
import Typist from "react-typist";
import TypistLoop from "react-typist-loop";
import TextLoop from "react-text-loop";
import ReactDOM from "react-dom";
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
  OverlayTrigger,
  Form,
  Glyphicon
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
import { Days, Hours, Minutes, Seconds } from "react-countdowntimer";
import "../App.css";
import thumb from "../images/test.png";
import thumblogo from "../images/iHireLogo.png";
import placeholdermap from "../images/placeholdermap.PNG";
import convenicnce from "../images/004-checked.png";
import crystalclear from "../images/003-computer.png";
import control from "../images/002-switch.png";
import connections from "../images/001-network.png";
import communityPIC from "../images/communityPIC.jpg";
import localINV from "../images/local_individual.jpeg";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";

class LandingPage extends Component {
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
          {/* <div className="middle-align" /> */}
          <Row bsClass="absolute">
            <Col xsHidden smHidden md={5}>
              <h1 style={{ textAlign: "left" }} className="h1font body-font">
                Coming Soon
              </h1>
            </Col>

            <Col xsHidden smHidden md={7}>
              <h1 className="h1font body-font">
                Make life&nbsp;
                <TextLoop springConfig={{ stiffness: 180, damping: 8 }}>
                  <div style={{ color: "#343434" }}>rewarding.</div>
                  <div style={{ color: "#343434" }}>easy.</div>
                  <div style={{ color: "#343434" }}>simple.</div>
                  <div style={{ color: "#343434" }}>connected.</div>
                </TextLoop>
              </h1>
            </Col>
            <Col xsHidden smHidden>
              <span
                className="body-font"
                style={{
                  color: "white",
                  fontSize: "38px",
                  marginRight: "25px"
                }}
              >
                &lt; With iHired /&gt;
              </span>
            </Col>
          </Row>
        </section>

        <section className="App-body" ref={this.aboutRef}>
          <Grid>
            <Row className="show-grid">
              <h1 className="body-font">
                We are in the middle of a{" "}
                <span
                  style={{ color: "#FFD700", textShadow: "6px 2px #343434" }}
                >
                  GOLDMINE
                </span>
              </h1>
              <Col md={6} mdPush={6}>
                <h4 className="body-font" style={{ textAlign: "center" }}>
                  That goldmine is our community. Regardless of background age
                  or gender we all have one thing in common: We face problems
                  one after another. But as we overcome these hurdles we gain
                  vast experiences and wisdom. Hense, together, we are a
                  community with endless talents and helpful connections.
                </h4>
              </Col>
              <Col md={6} mdPull={6}>
                <Row bsClass="timer-style">
                  <Col xs={12} md={3}>
                    <h3 className="timer-text-size table-padding">Days</h3>

                    <Days deadline="2018-07-25" />
                  </Col>
                  <Col xs={12} md={3}>
                    <h3 className="timer-text-size table-padding">Hours</h3>

                    <Hours deadline="2018-07-25" />
                  </Col>
                  <Col xs={12} md={3}>
                    <h3 className="timer-text-size table-padding">Minutes</h3>

                    <Minutes deadline="2018-07-25" />
                  </Col>
                  <Col xs={12} md={3}>
                    <h3 className="timer-text-size table-padding">Seconds</h3>

                    <Seconds deadline="2018-07-25" />
                  </Col>
                </Row>
              </Col>
              <Col md={12}>
                <Row>
                  {/* <h2 className="body-font">Early Sign-up</h2> */}
                  {/* <Col xs={12} xsOffset={0} md={4} mdOffset={0}>
                    <Image src={thumb} />
                  </Col> */}
                  <Col xs={12} xsOffset={0} md={6} mdOffset={0}>
                    <h2 className="body-font">Early Access</h2>
                    <Form className="form-style">
                      <FormGroup controlId="formInlineName">
                        <InputGroup>
                          <InputGroup.Addon>
                            <Glyphicon glyph="envelope" />
                          </InputGroup.Addon>
                          <FormControl type="text" placeholder="Email" />
                        </InputGroup>
                      </FormGroup>{" "}
                      <FormGroup controlId="formInlineEmail">
                        <InputGroup>
                          <InputGroup.Addon>
                            <Glyphicon glyph="user" />
                          </InputGroup.Addon>
                          <FormControl type="text" placeholder="Full Name" />
                        </InputGroup>
                      </FormGroup>{" "}
                      <Button
                        type="submit"
                        style={{ width: "35%" }}
                        bsClass="App-button"
                      >
                        Sign-up
                      </Button>
                    </Form>
                  </Col>
                  <Col xs={12} xsOffset={0} md={6} mdOffset={0}>
                    <Image
                      style={{
                        maxWidth: "100%",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center",
                        borderRadius: "28px"
                      }}
                      src={communityPIC}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Grid>
        </section>
        <section className="" ref={this.aboutRef}>
          <div
            style={{
              background: "#3f88c5",
              color: "white",
              paddingTop: "5px"
            }}
          >
            <h2 className="body-font">Benefits</h2>
            <Row>
              <Col
                // className="bg-hover"
                xs={12}
                xsOffset={0}
                md={3}
                mdOffset={0}
              >
                <Image
                  className="imagehover"
                  src={convenicnce}
                  square
                  onClick={() =>
                    this.setState({
                      show1: true,
                      show2: false,
                      show3: false,
                      show4: false
                    })
                  }
                />
                <h4 className="body-font">Convenience</h4>
              </Col>
              <Col xs={12} xsOffset={0} md={3} mdOffset={0}>
                <Image
                  className="imagehover"
                  src={crystalclear}
                  square
                  onClick={() =>
                    this.setState({
                      show1: false,
                      show2: true,
                      show3: false,
                      show4: false
                    })
                  }
                />
                <h4 className="body-font">Crystal Clear</h4>
              </Col>
              <Col xs={12} xsOffset={0} md={3} mdOffset={0}>
                <Image
                  className="imagehover"
                  src={control}
                  square
                  onClick={() =>
                    this.setState({
                      show1: false,
                      show2: false,
                      show3: true,
                      show4: false
                    })
                  }
                />
                <h4 className="body-font">Control</h4>
              </Col>
              <Col xs={12} xsOffset={0} md={3} mdOffset={0}>
                <Image
                  className="imagehover"
                  src={connections}
                  square
                  onClick={() =>
                    this.setState({
                      show1: false,
                      show2: false,
                      show3: false,
                      show4: true
                    })
                  }
                />
                <h4 className="body-font">Connections</h4>
              </Col>
            </Row>
          </div>
        </section>
        <section className="App-body" ref={this.aboutRef}>
          <Grid>
            <Row className="show-grid">
              <Col md={6} xs={12}>
                <Image
                  style={{
                    maxWidth: "100%",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                    borderRadius: "28px"
                  }}
                  src={localINV}
                />
              </Col>
              <Col md={6} xs={12}>
                <div>
                  <h4 className="body-font" style={{ textAlign: "center" }}>
                    With&nbsp;
                    <span style={{ color: "", fontWeight: "bold" }}>
                      iHired
                    </span>
                    &nbsp;tap into that goldmine of local individuals and
                    professionals. So the next time you are faced with a sudden
                    problem or a daunting task have no fear. You have the
                    support of your community at your fingertips, one tap away.
                  </h4>
                </div>
              </Col>
            </Row>
            <Row className="show-grid">
              <Col md={6} xs={12}>
                <div>
                  <h4 className="body-font" style={{ textAlign: "center" }}>
                    With&nbsp;
                    <span style={{ color: "", fontWeight: "bold" }}>
                      iHired
                    </span>&nbsp;earn quick money by lending a helping hand
                    within your community. You have invested long hours to mold
                    your talents and sharpen your skills. Then why not reward
                    yourself. Earn extra money by doing what you do best.
                  </h4>
                </div>
              </Col>
              <Col md={6} xs={12}>
                <Image
                  style={{
                    maxWidth: "100%",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                    borderRadius: "28px"
                  }}
                  src={communityPIC}
                />
              </Col>
            </Row>
          </Grid>
        </section>
        <section className=" body-font">
          <div
            style={{
              background: "#3f88c5",
              color: "white",
              paddingLeft: "15px",
              paddingRight: "15px"
            }}
          >
            <Row>
              <h2 className="body-font">
                {" "}
                Solving Problems made EASY…..How easy?? :
              </h2>
              <Col xs={12} xsOffset={0} md={3} mdOffset={0}>
                <Image src={thumb} circle />
                <h3 className="body-font">Capture </h3>
                <p className="body-font">
                  Need something fixed? Take a Photo or video.
                </p>
              </Col>
              <Col xs={12} xsOffset={0} md={3} mdOffset={0}>
                <Image src={thumb} circle />
                <h3 className="body-font">Tag</h3>
                <p className="body-font">
                  Set your requirements, budget and tag your tasks.
                </p>
              </Col>
              <Col xs={12} xsOffset={0} md={3} mdOffset={0}>
                <Image src={thumb} circle />
                <h3 className="body-font">Post</h3>
                <p className="body-font">Post it onto iHired ecosystem.</p>
              </Col>
              <Col xs={12} xsOffset={0} md={3} mdOffset={0}>
                <Image src={thumb} circle />
                <h3 className="body-font">Connect</h3>
                <p className="body-font">
                  Your iHired community at your fingertips.
                </p>
              </Col>
            </Row>
          </div>
        </section>

        <section className="App-body body-font">
          <Row>
            <h2 className="body-font">Decomplicate life with iHired!</h2>
            <Col xs={12} xsOffset={0} md={4} mdOffset={0}>
              <a href="#">
                <Image
                  className="imagehover"
                  style={{ width: "100%" }}
                  src={communityPIC}
                />
              </a>
            </Col>
            <Col xs={12} xsOffset={0} md={4} mdOffset={0}>
              <Image
                className="imagehover"
                style={{ width: "100%" }}
                src={communityPIC}
              />
            </Col>
            <Col xs={12} xsOffset={0} md={4} mdOffset={0}>
              <Image
                className="imagehover"
                style={{ width: "100%" }}
                src={communityPIC}
              />
            </Col>
          </Row>
        </section>

        {/*MODALS*/}
        <section className=" body-font">
          <Modal show={this.state.show1} onClick={this.handleClose}>
            <Modal.Header>
              <Modal.Title>Convenience</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h5>
                Life itself is complex, but solving the problems that come with
                it shouldn’t be. iHired is a one stop platform to get help with
                your day-to-day tasks.{" "}
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
              <Modal.Title>Crystal Clear</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h5>
                We’ve built a communication system that’s never been used
                before. Built solely with the purpose to bring clearity between
                you and the other party. Goodbye confusions, goodbye buried
                text. It's simple, cut and straight to the point.
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
              <Modal.Title>Control</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h5>
                With an all new integrated betting system You are in Control. We
                give you the power to choose who you hire. Set your own price
                point with the new betting system and edge out your competition.
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
              <Modal.Title>Connections</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h5>
                The greatest side benefit of using iHired is the connections you
                will create with people right in your community. This perk is
                priceless, the rewards you gain are boundless. Enrich your life
                with iHired.
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

export default LandingPage;

{
  /* <section className="App-body" ref={this.aboutRef}>
<Grid>
  <Row className="show-grid">
    <h1 className="body-font">
      We are in the middle of a{" "}
      <span style={{ color: "#FFDF00" }}>GOLDMINE</span>
    </h1>
    <Col md={6} mdPush={6}>
      <h4 className="body-font" style={{ textAlign: "left" }}>
        As we live thru life we gain and foster vast experiences and
        wisdom. We build and establish key networks and connections.
        We acquire and develop new skill sets that define who we are.
        <br />
        <br />
        <br />With&nbsp;
        <span style={{ color: "", fontWeight: "bold" }}>
          iHired
        </span>&nbsp;earn quick money by lending a helping hand within
        your community. You have invested long hours to mold your
        talents. You have put in ___ efforts to sharpen your skills.
        Then why not reward yourself. Earn extra money by doing what
        you do best.
      </h4>
    </Col>
    <Col md={6} mdPull={6}>
      <h4 className="body-font" style={{ textAlign: "right" }}>
        That goldmine is our Community. Everyone in it is different
        and unique, that's the beauty of life. But regardless of
        origin, background, age or gender one factor that is common
        amongst all is the passage of time. <br />
        <br />With&nbsp;
        <span style={{ color: "", fontWeight: "bold" }}>iHired</span>
        &nbsp;tap into that goldmine of local individuals and
        professionals. So the next time you are faced with a sudden
        problem or a daunting task have no fear. You have the support
        of your community at your fingertips, one tap away.
      </h4>
    </Col>
  </Row>
</Grid>
</section> */
}
