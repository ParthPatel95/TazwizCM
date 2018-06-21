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
import LandingPage from "./components/landingpage";

class App extends Component {
  render() {
    return (
      <div>
        {/* Always shows a header, even in smaller screens. */}
        <div style={{}}>
          <Layout fixedHeader>
            <Header
              title={
                <span>
                  <strong>iHired</strong>
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
          <LandingPage />
        </div>
      </div>
    );
  }
}

export default App;
