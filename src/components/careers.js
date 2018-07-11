import React, { Component } from "react";

import {
  Button,
  FormGroup,
  FormControl,
  Col,
  Row,
  Image,
  Modal,
  Panel,
  PanelGroup
} from "react-bootstrap";
import { Grid } from "react-mdl";
import "../App.css";
import thumb from "../images/test.png";
import jobICONCoder from "../images/career-coder.png";

import contactusimg from "../images/contactus.jpg";
import business_job from "../images/career_contract.png";

import IQ from "../images/intellectual.png";
import value from "../images/rate-star-button.png";
import support from "../images/social-care.png";
import accommodation from "../images/coffee-cup.png";
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
        <Row>
          <section className="App-body body-font">
            <Row>
              <Col xs={12} xsOffset={0} md={12} mdOffset={0}>
                <div className="career-headersection">
                  <div className="career-header-text-bg">
                    <h1 className="TextAlignCenter">The Next Big Step</h1>
                  </div>
                </div>
              </Col>
            </Row>
          </section>
        </Row>

        <h1 className="body-font text-align-center">
          Join <span className="color-blue">Tazwiz</span> and tap into
          your <span className="color-blue">Potential</span>
        </h1>
        <Row className="margin-auto">
          <Col xs={12} md={12} className="text-align-center">
            <h3 className="body-font ">
              In you there is a spark of magic. That spark is your Creativity,
              your Energy, your Identity. Here at Tazwiz we don’t contain that
              spark, we Ignite it. Be Bold. Be Fearless. Be Apart of Tazwiz.
            </h3>
          </Col>
        </Row>
        <Row>
          <Col xs={12} xsOffset={0} md={3} mdOffset={0}>
            <Image
              className="imagehover maxwidth-50"
              src={IQ}

              onClick={() =>
                this.setState({
                  show1: true,
                  show2: false,
                  show3: false,
                  show4: false
                })
              }
            />
            <h3 className="body-font">Scale your IQ</h3>
          </Col>
          <Col xs={12} xsOffset={0} md={3} mdOffset={0}>
            <Image
              className="imagehover maxwidth-50"
              src={value}

              onClick={() =>
                this.setState({
                  show1: false,
                  show2: true,
                  show3: false,
                  show4: false
                })
              }
            />
            <h3 className="body-font">Value</h3>
          </Col>
          <Col xs={12} xsOffset={0} md={3} mdOffset={0}>
            <Image
              className="imagehover maxwidth-50"
              src={support}

              onClick={() =>
                this.setState({
                  show1: false,
                  show2: false,
                  show3: true,
                  show4: false
                })
              }
            />
            <h3 className="body-font">Support</h3>
          </Col>
          <Col xs={12} xsOffset={0} md={3} mdOffset={0}>
            <Image
              className="imagehover maxwidth-50"
              src={accommodation}

              onClick={() =>
                this.setState({
                  show1: false,
                  show2: false,
                  show3: false,
                  show4: true
                })
              }
            />
            <h3 className="body-font">Accommodation</h3>
          </Col>
        </Row>

        <section>
          <h1 className="body-font text-align-center">
            Available positions
          </h1>
          <Row className="table-padding">
            <Col xs={12} md={2} mdPush={2} xsPush={0}>
              <Image className="maxwidth-80" src={jobICONCoder} rounded />
            </Col>
            <Col xs={12} md={6} mdPush={2} xsPush={0}>
              <p className="text-align-left">
                <b>Role:</b> Full Stack Developer Intern <br />
                <b>Requirements:</b> Some full stack background
                <br />
                <b>Compensation:</b> The provisional intern term is until the
                end of the summer. This is a non-paid internship. However,
                Students will receive university/college credits towards their
                program requirement as part of their participation in our
                program.<br />
                <b>Start Date:</b> Immediate
              </p>
              <PanelGroup
                accordion
                id="accordion-uncontrolled-example"
                defaultActiveKey="2"
              >
                <Panel eventKey="1" bsClass="App-button">
                  <Panel.Heading>
                    <Panel.Title toggle>
                      <div className="text-color">Learn More</div>
                    </Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>
                    <p>
                      Gain relevant work experience working with front and
                      backend technologies. Further build their portfolio of
                      professional work. Work closely with our team to develop
                      contemporary, functional, responsive web applications.
                    </p>
                  </Panel.Body>
                </Panel>
              </PanelGroup>
            </Col>
          </Row>
          <Row className="table-padding">
            <Col xs={12} md={2} mdPush={2} xsPush={0}>
              <Image className="maxwidth-80" src={business_job} rounded />
            </Col>
            <Col xs={12} md={6} mdPush={2} xsPush={0}>
              <p className="text-align-left">
                <b>Role:</b> Junior Business Development Representative <br />
                <b>Requirements:</b> Bachelor’s degree in Business, Sales,
                Marketing, Communications or an Equivalent. An entrepreneurial
                spirit, passionate about what you do, enthusiastic, competitive,
                disciplined, self-motivated, hands-on, with a strong work ethic
                <br />
                <b>Start Date:</b> 01/08/2018
              </p>
              <PanelGroup
                accordion
                id="accordion-uncontrolled-example"
                defaultActiveKey="2"
              >
                <Panel eventKey="1" bsClass="App-button">
                  <Panel.Heading>
                    <Panel.Title toggle>
                      <div className="text-color">Learn More</div>
                    </Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>
                    <p>
                      The right candidate will have experience in both strategy
                      and execution. They will be able to think big, but also
                      deliver on the small tasks. There is a lot of room for
                      ownership and leadership, so being a self-starter is an
                      asset.
                    </p>
                  </Panel.Body>
                </Panel>
              </PanelGroup>
            </Col>
          </Row>
          <Row className="table-padding">
            <Col xs={12} md={2} mdPush={2} xsPush={0}>
              <Image className="maxwidth-80" src={jobICONCoder} rounded />
            </Col>
            <Col xs={12} md={6} mdPush={2} xsPush={0}>
              <p className="text-align-left">
                <b>Role:</b> Front-end Developer (Reactjs) <br />
                <b>Requirements:</b> A Degree, Diploma, or Certificate in web
                design and development or a related field; Some experience in
                working with ReactJs and any other relevant front-end
                technologies. <br />
                <b>Start Date:</b> 01/08/2018
              </p>
              <PanelGroup
                accordion
                id="accordion-uncontrolled-example"
                defaultActiveKey="2"
              >
                <Panel eventKey="1" bsClass="App-button">
                  <Panel.Heading>
                    <Panel.Title toggle>
                      <div className="text-color">Learn More</div>
                    </Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>
                    <p>
                      Solid understanding of web markup, including HTML5, CSS3
                      and JS including ES6 features. Strong understanding
                      ofReact JS Framework. Good understanding of server-side
                      CSS pre-processing platforms, such as SASS. Proficient
                      understanding of client-side scripting and JavaScript
                      frameworks, including jQuery. Proficient understanding and
                      hands on experience of Node js and NPM. Good understanding
                      of asynchronous request handling, partial page updates,
                      and AJAX. Basic knowledge of image authoring tools, to be
                      able to crop, resize, or perform small adjustments on an
                      image. Familiarity with tools such as Gimp or Photoshop is
                      a plus. Proficient understanding of cross-browser
                      compatibility issues and ways to work around them.
                      Proficient understanding of code versioning toolGit. Good
                      understanding of SEO principles and ensuring that
                      application will adhere to them.
                    </p>
                  </Panel.Body>
                </Panel>
              </PanelGroup>
            </Col>
          </Row>
          <Row className="table-padding">
            <Col xs={12} md={2} mdPush={2} xsPush={0}>
              <Image className="maxwidth-80" src={jobICONCoder} rounded />
            </Col>
            <Col xs={12} md={6} mdPush={2} xsPush={0}>
              <p className="text-align-left">
                <b>Role:</b> NodeJS Application Developer <br />
                <b>Requirements:</b> A Degree, Diploma, or Certificate in web
                design and development or a related field; Some experience in
                working with NodeJS <br />
                <b>Start Date:</b> 01/08/2018
              </p>
              <PanelGroup
                accordion
                id="accordion-uncontrolled-example"
                defaultActiveKey="2"
              >
                <Panel eventKey="1" bsClass="App-button">
                  <Panel.Heading>
                    <Panel.Title toggle>
                      <div className="text-color">Learn More</div>
                    </Panel.Title>
                  </Panel.Heading>
                  <Panel.Body collapsible>
                    <p>
                      This is a challenging full-time position in a fast paced
                      environment based in Toronto, Ontario. Tazwiz offers
                      excellent technical and career opportunities for talented
                      and enthusiastic developers. You will be exposed to new
                      technologies and projects and have a lot of opportunity to
                      grow. Reporting to the Development Manager
                    </p>
                  </Panel.Body>
                </Panel>
              </PanelGroup>
            </Col>
          </Row>
        </section>

        <Grid>
          <Row
            className="career-ihired-intro div-vertical-center"
          >
            <Col md={6}>
              <img
                className="maxwidth-80"
                alt="headerIMG"
                src={contactusimg}
              />
            </Col>
            <Col md={6}>
              <h3 className="text-align-center">
                Are you ready to take that next step?
              </h3>
              <form className="width-75 margin-auto">
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
                    <option value="">Position</option>
                    <option value="1">Full Stack Developer Intern </option>
                    <option value="2">
                      Junior Business Development Representative{" "}
                    </option>
                    <option value="3">Front-end Developer (Reactjs) </option>
                    <option value="4">NodeJS Application Developer </option>
                  </FormControl>
                </FormGroup>

                <FormGroup>
                  <FormControl
                    componentClass="textarea"
                    placeholder="Forget resumes, tell us why we should hire you?"
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
                We don’t look for expert experience, we help build your
                experience
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
                Big or small anything you bring to the table can be a game
                changer
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
                Bringing the community together starts with a strong unified
                team, come join our iHired family!
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
                Give you the perks to fuel your thinking cells. Function the
                best, be the best. Water, coffee, munchies, and ofcourse
                ice-cream. All inclusive for iHired Family
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
