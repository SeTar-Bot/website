import "./contact.css";
import { AiOutlineYoutube, AiOutlineWhatsApp, AiOutlineInstagram, AiOutlineSkype, AiOutlineWechat, AiOutlineGithub, AiOutlineGitlab, AiOutlineYahoo, AiOutlineLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs"
import * as React from "react";
import { DataContext } from "../../contexts";

const Icons = {
  youtube: () => (<AiOutlineYoutube className="icon"/>),
  whatsapp: () => (<AiOutlineWhatsApp className="icon"/>),
  instagram: () => (<AiOutlineInstagram className="icon"/>),
  skype: () => (<AiOutlineSkype className="icon"/>),
  wechat: () => (<AiOutlineWechat className="icon"/>),
  github: () => (<AiOutlineGithub className="icon"/>),
  gitlab: () => (<AiOutlineGitlab className="icon"/>),
  yahoo: () => (<AiOutlineYahoo className="icon"/>),
  linkedin: () => (<AiOutlineLinkedin className="icon"/>),
  twitter: () => (<AiOutlineTwitter className="icon"/>),
  discord: () => (<BsDiscord className="icon"/>)
}
export default class Contact extends React.Component {
  render()
  {
    return (
      <div id="contact" className="container contact-container">
        <DataContext.Consumer>
        {context => {
          return (
            <>
              <h1>Contact {context.pronounce}</h1>
              <div className="contact-links">
              {context.contacts.map(x => (<a href={x.url} className={"contact " + x.type} target={"_blank"}>{Icons[x.type]()}<h2>{x.type} <span>{x.placeholder ?? ""}</span></h2></a>))}
              </div>
            </>
          )
        }}
        </DataContext.Consumer>
      </div>
    );
  }
}
