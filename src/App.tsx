import * as React from "react";

// Components
import { BodyScripts, Business, Footer, Header, Loading, Projects } from "./Components";
import './assets/styles/responsive.all.css';

export default class App extends React.Component <{}> {

    componentDidMount()
    {
        setTimeout(() => {
            document.getElementById('loader').style.display = "none";
        }, 1000)
    }

    render() {
        return (
            <>
                <Loading/>
                <Header/>
                <Business/>
                <Projects/>
                <Footer/>

                <BodyScripts/>
            </>
        );
    }
}