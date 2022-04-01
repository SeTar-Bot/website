import * as React from "react";

import './Header.css';

export default class HeaderBanner extends React.Component <{}> {

    render() {
        return (
            <section className="banner_main">
                <div className="container-fluid">
                    <div className="row d_flex">
                        <div className="col-md-6">
                           <div className="text-bg">
                              <h1>Setar Bot<br/>Created by you</h1>
                              <p>Setar-bot was originally founded in 2019, by the time passed, we update the bot and now,<br/>in the very beginning of version 3,<br/> we are making bot an open-source project, <br/>which means you guys can update the bot</p>
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="text-img">
                              <figure><img src="/images/box_img.png" alt="Setar Bot Logo" /></figure>
                           </div>
                        </div>
                     </div>
                  </div>
            </section>
        )
    }
}