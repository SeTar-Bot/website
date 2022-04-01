import * as React from "react";
import { PPolicyURL } from "../../config";

export default class PrivacyPolicy extends React.Component <{}> {

    componentWillMount()
    {
        window.location = PPolicyURL as (string | Location) & Location;
    }
    
}