import * as React from "react";
import { GithubProfile as Githubpf } from "../../config";

export default class GithubProfile extends React.Component <{}> {

    componentWillMount()
    {
        window.location = Githubpf as (string | Location) & Location;
    }

}