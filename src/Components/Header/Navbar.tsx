import * as React from "react";
import { DiscordSupport, GithubProfile, InviteURL } from "../../config";

import './Header.css';

export default class HeaderNavbar extends React.Component <{}> {

    render() {
        return (
            <div className="collapse navbar-collapse" id="navbarsExample04">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#"> Home  </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={`${DiscordSupport}`}>Discord</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={`${InviteURL}`}>Invite</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={`${GithubProfile}`}>Github</a>
                    </li>
                </ul>
            </div>
        )
    }
}