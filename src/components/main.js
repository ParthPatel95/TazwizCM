import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./landingpage";
import AboutUs from "./aboutus";
import ContactUs from "./contactus";
import Careers from "./careers";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutus" component={AboutUs} />
    <Route path="/contactus" component={ContactUs} />
    <Route path="/careers" component={Careers} />
  </Switch>
);

export default Main;
