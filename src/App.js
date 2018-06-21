import React, { Component } from "react";
import "./App.css";
import "./scroll";
import {
  Icon,
  Layout,
  Header,
  Navigation,
  Drawer,
  Content,
  Button
} from "react-mdl";
import scrollToComponent from "react-scroll-to-component";
import History from "./components/History";

class App extends Component {
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
        {/* Uses a transparent header that draws on top of the layout's background */}
        <div style={{ height: "95vh", position: "relative" }}>
          <Layout
            style={{
              background:
                "url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover"
            }}
          >
            <Header
              transparent
              title={
                <span>
                  {/* <span style={{ color: "#ddd" }}>Area / </span> */}
                  <h1>iHired</h1>
                </span>
              }
            >
              <Navigation>
                <a href="#">About Us</a>
                <a href="#">Careers</a>
                <a href="#">Contact Us</a>
              </Navigation>
            </Header>
            <Content />
          </Layout>
        </div>

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
          <History />
        </div>
      </div>
    );
  }
}

export default App;
