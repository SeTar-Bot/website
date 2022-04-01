import * as React from "react";

import './Header.css';

export default class HeaderLogo extends React.Component <{}> {

    render() {
        return (
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                <div className="full">
                    <div className="center-desk">
                        <div className="logo">
                            <a href=""><img src="/images/logo.png" alt="Setar Bot Logo" /></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}