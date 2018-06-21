import React, { Component } from "react";
import scrollToComponent from "react-scroll-to-component";
import {
  Icon,
  Layout,
  Header,
  Navigation,
  Drawer,
  Content,
  Button
} from "react-mdl";

class LandingPage extends Component {
  componentDidMount() {
    scrollToComponent(this.Blue, {
      offset: 0,
      align: "middle",
      duration: 500,
      ease: "inCirc"
    });
  }

  render() {
    return (
      <div>
        <div
          style={{
            height: "95vh",
            position: "relative",
            background:
              "url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover"
          }}
        />

        <div>
          <Button
            style={{ height: "5vh", width: "100vw" }}
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
        </div>
      </div>
    );
  }
}

export default LandingPage;
