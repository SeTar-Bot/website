import * as React from "react";
import { DataContext } from "../../contexts";
import "./members.css";

export default class Members extends React.Component {
  render()
  {
    return (
      <div id="members" className="container members-container">
        <h1 className="member-txt">Members</h1>
        <DataContext.Consumer>
          {context => context?.members?.map((x, i) => {
            const userStyle: React.CSSProperties = {
              background: `rgb(5, 7, 37) url('${x.avatar_url}')`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }
            return (
              <div className={"member member-"+i + 1} key={i.toString()}>
                <div className="member-img" style={userStyle}></div>
                <div className="member-info">
                  <h1 className="name">{x.name ?? x.username}</h1>
                  <h3 className="position">{x.role}</h3>
                  <h4 className="about">
                    {x.description}
                  </h4>
                  <a href={x.url} className="contact-member">
                    <span>Github Profile</span>
                  </a>
                </div>
              </div>
            )
          }
        )}
        </DataContext.Consumer>
      </div>
    );
  }
}