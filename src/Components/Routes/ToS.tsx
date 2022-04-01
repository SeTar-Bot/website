import * as React from "react";
import { tosURL } from "../../config";

export default class ToS extends React.Component <{}> {

    componentWillMount()
    {
        window.location = tosURL as (string | Location) & Location;
    }
    
}