import "./navbar.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { TiGroupOutline } from "react-icons/ti";
import { BiMessageRoundedDots } from "react-icons/bi";
import { BsArrowDownCircle } from "react-icons/bs";
import * as React from "react";
import { DataContext } from "../../contexts";

export default class Navbar extends React.Component {
  render()
  {
    return (
      <DataContext.Consumer>
        {context => (
          <div className="navigation">
            <a href="#home">
              <AiOutlineHome className="icon active-nav" />
            </a>
            <a href="#about">
              <AiOutlineUser className="icon" />
            </a>
            {context.members ? <a href="#members"><TiGroupOutline className="icon" /></a> : <></>}
            
            <a href="#contact">
              <BiMessageRoundedDots className="icon" />
            </a>
            <a href="#footer">
              <BsArrowDownCircle className="icon" />
            </a>
          </div>
        )}
      </DataContext.Consumer>
    );
  }
}