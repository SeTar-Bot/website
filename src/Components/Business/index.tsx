import * as React from "react"

import './Bussines.css';

export default class Business extends React.Component <{}> {

    render()
    {
        return (
            <div className="business">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="titlepage">
                                <span>Help us</span>
                                <h2>To make a better application</h2>
                                <p>You can contact us with any issue or feature request or even an bussines plan for better applications</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="business_box ">
                                        <figure><img src="/images/business_img.jpg" alt="Setar Bot Business"/></figure>
                                        <p>There are many company/teams which wouldn't listen to their users like they should, but we do, you can easily contact our staff team with any BIG or even small idea you have in your mind. we can make this happen, but, you can make this dream come true by giving us enough information such as features, impact of application on users daily life, and even more.</p>
                                        <a className="read_more" href="https://github.com/SeTar-Bot/Setar-Bot/issues/new?assignees=&labels=feature+request&template=feature_request.yml">Give us your idea</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}