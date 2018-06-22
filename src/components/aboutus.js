import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class AboutUs extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="aboutus-grid">
          <Cell col={12} />
        </Grid>
      </div>
    );
  }
}

export default AboutUs;
