import * as React from "react";
import { DiscordSupport } from "../../config";

export default class SupportServer extends React.Component <{}> {

    componentWillMount()
    {
        window.location = DiscordSupport as (string | Location) & Location;
    }

}