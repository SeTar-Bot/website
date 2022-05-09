import { operations } from "@octokit/openapi-types/types";
import { Github } from "../structers";
export type GithubOrgApi = operations["orgs/get"]["responses"]["200"]["content"]["application/json"];
export type GithubUserApi = operations["users/get-by-username"]["responses"]["200"]["content"]["application/json"];

export interface IGithub {
    setName: (name: string) => ThisType<IGithub>;
    setAvatar: (url: string) => ThisType<IGithub>;
    setLocation: (loc: string) => ThisType<IGithub>;
    setDescription: (desc: string) => ThisType<IGithub>;
    setShortInfo: (i: string) => ThisType<IGithub>;
    setBlog: (url: string) => ThisType<IGithub>;
    setURL: (url: string) => ThisType<IGithub>;
    setContacts: (ctx: [IContact, IContact?, IContact?]) => ThisType<IGithub>;
    addContact: (ctx: IContact) => ThisType<IGithub>;
    setMembers: (ctx: Github[]) => ThisType<IGithub>;
    addMember: (ctx: Github) => ThisType<IGithub>;
    setPronounce: (x: "Me" | "Us") => ThisType<IGithub>;
    setRole: (ctx:"contributer" | "founder" ) => ThisType<IGithub>;
    
    id?: number;
}

export interface IGithubUser extends Pick<GithubUserApi, "avatar_url" | "html_url"> {
    name: string;
    bio: string;
}

export interface IContact {
    type: "instagram" | "twitter" | "github" | "whatsapp" | "youtube" | "linkedin" | "yahoo" | "skype";
    url: string;
    placeholder?: string
}

export interface IGithubContext extends Github {
    isReady: boolean;
}