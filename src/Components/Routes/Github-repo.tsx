import * as React from "react";
import { GithubRepo as GitRepo } from "../../config";

export default class GithubRepo extends React.Component <{}> {

    componentWillMount()
    {
        window.location = GitRepo as (string | Location) & Location;
    }

}