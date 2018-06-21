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
import Main from "./components/main";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        {/* Always shows a header, even in smaller screens. */}
        <div style={{ height: "300px", position: "relative" }}>
          <Layout fixedHeader>
            <Header
              title={
                <span>
                  <strong>iHired</strong>
                </span>
              }
            >
              <Navigation>
                <Link to="/">Home</Link>
                <Link to="/aboutus">About Us</Link>
                <Link to="/careers">Careers</Link>
                <Link to="/contactus">Contact Us</Link>
              </Navigation>
            </Header>
            <Content>
              <div className="page-content">
                <Main />
              </div>
            </Content>
          </Layout>
        </div>
        <div>{/* <LandingPage /> */}</div>
      </div>
    );
  }
}

export default App;
