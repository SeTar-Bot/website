import * as React from "react";

// CSS-Styles
import './loading.css';

export default class Loading extends React.Component <{}> {
    render() {
        return (
            <div className="loader_bg" id="loader">
                <div className="loader"><img src="/images/loading.gif" alt="Setar Bot Loading" /></div>
            </div>
        );
    }
}