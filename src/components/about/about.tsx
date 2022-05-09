import "./about.css";
import Qualifications from "../qualifications/qualifications";
import * as React from "react";

export default class About extends React.Component {
  render()
  {
    return (
      <div id="qualifications" className="container about-container">
        <Qualifications />
      </div>
    )
  }
}
