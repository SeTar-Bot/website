import * as React from "react";
import { DiscordSupport, InviteURL } from "../../config";

export default class InviteBot extends React.Component <{}> {

    componentWillMount()
    {
        window.location = InviteURL as (string | Location) & Location;
    }
    
}