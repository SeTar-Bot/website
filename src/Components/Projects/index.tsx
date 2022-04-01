import * as React from "react";
import { DiscordSupport } from "../../config";

import './Projects.css'

export default class Projects extends React.Component <{}> {

    render()
    {
        return (
            <div className="projects">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="titlepage">
                                <span>KEEP UP</span>
                                <h2>With our Updates</h2>
                                <p>There is no schedule for our updates, so make sure to be in touch.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                            <div className="row">
                                <div className="col-md-6 offset-md-3">
                                    <div className="projects_box ">
                                        <figure><img src="images/projects_img.png" alt="Setar Bot Projects"/></figure>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="projects_box ">
                                        <p>Setar-Bot is an open-source project, there is no schedule for our next update regardless of Github PR's, so make sure to follow our github profile and our Developers on Github. for more information you can always join our Discord Server and see the next-coming update.</p>
                                        <a className="read_more" href={`${DiscordSupport}`}>Join Discord!</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}