import React, { Component } from "react";
import scrollToComponent from "react-scroll-to-component";
import logo from "../static/img/iHire.png";
import communityIMG from "../static/img/community-1.png";
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
      <div className="landing-page-fullpage">
        <Grid style={{ width: "60%", margin: "auto", textAlign: "center" }}>
          <Cell col={8}>
            <h1>When life happens</h1>
          </Cell>
          <Cell col={4}>
            <img src={logo} className="logo-img-style" alt="LOGO" />
          </Cell>
        </Grid>
        <Grid
          style={{
            position: "absolute",
            zIndex: "-1",
            width: "100%",
            margin: "auto",
            textAlign: "center"
          }}
        >
          <Cell col={12}>
            <img src={communityIMG} />
          </Cell>
        </Grid>
        <Grid
          style={{
            position: "fixed",
            bottom: "0",
            width: "100%",
            margin: "auto",
            textAlign: "center"
          }}
        >
          <Cell col={12}>
            <Button style={{ width: "100%", margin: "auto" }} raised colored>
              Test
            </Button>
          </Cell>
        </Grid>
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
