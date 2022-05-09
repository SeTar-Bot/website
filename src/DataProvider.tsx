import * as React from "react";
import { Github } from "./structers";
import config from "./config";
import { DataContext } from "./contexts";

export default class DataProvider extends React.Component <any, Github> {

    state: Readonly<Github> = (config.type == "manual") ? config.data : ('data' in config) ? config.data : new Github(config.type, config.username);

    constructor(props: any)
    {
        super(props);
        this.state.load().then(() => {
            this.setState(this.state);
        })
    }

    render()
    {
        return (
            <DataContext.Provider
                value={this.state}
            >
                {this.props.children}
            </DataContext.Provider>)
    }
}