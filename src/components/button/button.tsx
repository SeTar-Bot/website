import * as React from "react";
import "./button.css";

export default class Buttons extends React.Component {
  render()
  {
    return (
      <div className="container button-container">
        <a href="#about" className="btn pri">
          Learn more
        </a>
        <a href="#contact" className="btn sec">
          Get in Touch
        </a>
      </div>
    )
  }
}
