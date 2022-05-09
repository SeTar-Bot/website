import "./footer.css";
import { BsInstagram, BsWhatsapp, BsMouse } from "react-icons/bs";
import { FaYahoo } from "react-icons/fa";
import { TiSocialTwitter, TiSocialLinkedin, TiSocialSkype, TiSocialYoutube, TiSocialGithub } from "react-icons/ti";
import * as React from "react";
import { DataContext } from "../../contexts";

const Icons = {
  youtube: () => (<TiSocialYoutube className="social"/>),
  whatsapp: () => (<BsWhatsapp className="social"/>),
  instagram: () => (<BsInstagram className="social"/>),
  skype: () => (<TiSocialSkype className="social"/>),
  github: () => (<TiSocialGithub className="social"/>),
  yahoo: () => (<FaYahoo className="social"/>),
  linkedin: () => (<TiSocialLinkedin className="social"/>),
  twitter: () => (<TiSocialTwitter className="social"/>),
}

export default class Footer extends React.Component {
  render()
  {
    return (
      <div id="footer" className="container footer-container">
        <h1>
          That's all{" "}
          <a href="#home">
            <h2>
              <BsMouse /> - scroll up -
            </h2>
          </a>
        </h1>
        <div className="social-links">
          <DataContext.Consumer>
            {context => context.contacts.map((x, i) => (x.type in Icons) ? (<a href={x.url} key={i.toString()}>{Icons[x.type]()}</a>) : '')}
          </DataContext.Consumer>
        </div>
      </div>
    )
  }
}