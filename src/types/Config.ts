import { Github } from "../structers";

export interface DataConfig {
    type: "user" | "org" | "manual";
    username?: string;
    data?: Github;
    enabledComponents: ("about" | "contact" | "members")[]
}