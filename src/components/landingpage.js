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
  Glyphicon,
  Carousel,
  Popover
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
import capture from "../images/capture.png";
import tag from "../images/tag.png";
import post from "../images/post.png";
import connect from "../images/connect.png";
import illest from "../images/illustration.png";
import signup from "../images/signup.png";
import overlayIMG from "../images/overlay-img.jpeg";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";

const popoverHoverFocus = (
  <Popover id="popover-trigger-hover-focus" title="Capture">
    Need something fixed? Take a Photo or video.
  </Popover>
);

class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.handleSignup = this.handleSignup.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false
    };
  }

  handleSignup() {}

  handleClose() {
    this.setState({
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false
    });
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
                  style={{ color: "#3f88c5", textShadow: "2px 1px #FFD700" }}
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
                  <Col xs={12} md={3} className="table-padding">
                    <h3 className="timer-text-size table-padding">Days</h3>

                    <Days deadline="2018-07-28" className="timer-count-size" />
                  </Col>
                  <Col xs={12} md={3} className="table-padding">
                    <h3 className="timer-text-size table-padding">Hours</h3>

                    <Hours deadline="2018-07-28" className="timer-count-size" />
                  </Col>
                  <Col xs={12} md={3} className="table-padding">
                    <h3 className="timer-text-size table-padding">Minutes</h3>

                    <Minutes
                      deadline="2018-07-28"
                      className="timer-count-size"
                    />
                  </Col>
                  <Col xs={12} md={3} className="table-padding">
                    <h3 className="timer-text-size table-padding"> Seconds</h3>

                    <Seconds
                      deadline="2018-07-28"
                      className="timer-count-size"
                    />
                  </Col>
                </Row>
              </Col>
              <Col xs={12} md={12}>
                <Row style={{ display: "flex", alignItems: "center" }}>
                  {/* <h2 className="body-font">Early Sign-up</h2> */}
                  {/* <Col xs={12} xsOffset={0} md={4} mdOffset={0}>
                    <Image src={thumb} />
                  </Col> */}
                  <Col xs={12} xsOffset={0} md={6} mdOffset={0}>
                    <h2 className="body-font">Early Access</h2>
                    <Form
                      action="https://formspree.io/baps.parthpatel@email.com"
                      method="POST"
                      className="form-style"
                    >
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
                        value="Send"
                        bsClass="App-button"
                        style={{ width: "45%" }}
                      >
                        Sign up
                      </Button>
                    </Form>
                  </Col>
                  <Col xsHidden smHidden md={6} mdOffset={0}>
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
            <h1 className="body-font">Benefits</h1>
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
                <h2 className="body-font">Convenience</h2>
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
                <h2 className="body-font">Crystal Clear</h2>
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
                <h2 className="body-font">Control</h2>
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
                <h2 className="body-font">Connections</h2>
              </Col>
            </Row>
          </div>
        </section>

        <section className="App-body" ref={this.aboutRef}>
          <Grid>
            <Row
              style={{ display: "flex", alignItems: "center" }}
              className="show-grid"
            >
              <h1 className="body-font">Why Tazwiz</h1>
              <Col style={{}} md={6} xs={12}>
                <h4 className="body-font" style={{ textAlign: "center" }}>
                  With&nbsp;
                  <span style={{ color: "", fontWeight: "bold" }}>
                    Tazwiz
                  </span>&nbsp;earn quick money by lending a helping hand within
                  your community. You have invested long hours to mold your
                  talents and sharpen your skills. Then why not reward yourself.
                  Earn extra money by doing what you do best.
                </h4>

                <h4 className="body-font" style={{ textAlign: "center" }}>
                  With&nbsp;
                  <span style={{ color: "", fontWeight: "bold" }}>Tazwiz</span>
                  &nbsp;tap into that goldmine of local individuals and
                  professionals. So the next time you are faced with a sudden
                  problem or a daunting task have no fear. You have the support
                  of your community at your fingertips, one tap away.
                </h4>
              </Col>
              <Col md={6} xsHidden smHidden>
                <Image
                  style={{
                    maxWidth: "100%",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                    borderRadius: "28px",
                    verticalAlign: "baseline"
                  }}
                  src={illest}
                />
              </Col>
            </Row>

            <Row className="iconadjust" style={{}}>
              <Col xsHidden smHidden md={3}>
                <h2 className="body-font">
                  <b>
                    <span style={{ color: "#3f88c5" }}>Sign </span>Up
                  </b>
                </h2>
                <Image
                  className="imagehover"
                  style={{ maxWidth: "100%" }}
                  src={signup}
                  square
                  onClick={() =>
                    this.setState({
                      show1: false,
                      show2: false,
                      show3: false,
                      show4: false,
                      show5: true
                    })
                  }
                />
              </Col>
              <Col xs={12} xsOffset={0} md={2} mdOffset={0}>
                {/* <OverlayTrigger
                  trigger={["hover", "focus"]}
                  placement="bottom"
                  overlay={popoverHoverFocus}
                  bsClass="overlay-css"
                > */}
                <Image
                  // className="cursorchange"
                  style={{ maxWidth: "50%" }}
                  src={capture}
                />
                {/* </OverlayTrigger> */}
                <h2 className="body-font">Capture </h2>
                <h5 className="body-font">
                  Need something fixed? Take a Photo or video.
                </h5>
              </Col>
              <Col xs={12} xsOffset={0} md={2} mdOffset={0}>
                <Image style={{ maxWidth: "50%" }} src={tag} />
                <h2 className="body-font">Tag</h2>
                <h5 className="body-font">
                  Set your requirements, budget and tag your tasks.
                </h5>
              </Col>
              <Col xs={12} xsOffset={0} md={2} mdOffset={0}>
                <Image style={{ maxWidth: "50%" }} src={post} />
                <h2 className="body-font">Post</h2>
                <h5 className="body-font">Post it onto iHired ecosystem.</h5>
              </Col>
              <Col xs={12} xsOffset={0} md={2} mdOffset={0}>
                <Image style={{ maxWidth: "50%" }} src={connect} />
                <h2 className="body-font">Connect</h2>
                <h5 className="body-font">
                  Your Tazwiz community at your fingertips.
                </h5>
              </Col>
            </Row>
          </Grid>
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
          <Modal show={this.state.show5} onClick={this.handleClose}>
            <Modal.Header>
              <Modal.Title>Sign Up</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col md={6} xs={12}>
                  <Image
                    className="cursorchange"
                    style={{ maxWidth: "100%" }}
                    src={overlayIMG}
                  />
                </Col>
                <Col style={{ marginTop: "5%" }} md={6} xs={12}>
                  <Form
                    style={{
                      width: "100%"
                    }}
                    className="form-style"
                  >
                    <FormGroup controlId="formInlineName">
                      <InputGroup style={{}}>
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
                    </FormGroup>
                  </Form>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button bsClass="App-button" onClick={this.handleClose}>
                Sign Up
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
