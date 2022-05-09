import * as React from "react";
import config from "../config";
import { Github } from "../structers";

const DataContext: Github = (config.type == "manual") ? config.data : ('data' in config) ? config.data : new Github(config.type, config.username);
export default React.createContext<Github>(DataContext)