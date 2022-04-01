import * as React from "react";
import { GithubProfile } from "../../config";

import './Footer.css';

export default class Footer extends React.Component <{}> {

    render()
    {
        return (
            <footer>
                <div className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 ">
                                <div className="cont">
                                    <h3>
                                        <strong className="multi">
                                            Setar-Bot
                                        </strong><br/>
                                            a Music Bot for you!
                                    </h3>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <ul className="social_icon">
                                    <li><a href={`${GithubProfile}`}><i className="fa fa-github" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="copyright">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <p>Copyright {new Date().getFullYear().toString()} All Right Reserved By <a href="https://github.com/EhsanFox">Ehsan Golmakani</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}