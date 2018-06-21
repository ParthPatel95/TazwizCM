import React, { Component } from "react";
import scrollToComponent from "react-scroll-to-component";
import {
  Icon,
  Layout,
  Header,
  Navigation,
  Drawer,
  Content,
  Button,
  Grid,
  Cell
} from "react-mdl";
import "../App.css";

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
      <div style={{ width: "100%", margin: "auto" }}>
        {/* <img
          src="http://www.getmdl.io/assets/demos/transparent.jpg"
          className="bg-img"
        /> */}
      </div>
    );
  }
}

export default LandingPage;
{
  /* <div>
<Button
  style={{ height: "5vh", width: "100vw", position: "relative" }}
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
</div> */
}
