import { IContact, IGithub, IGithubOrg, IGithubUser } from "../types/GithubTypes";
import { Octokit } from "@octokit/rest"
import { RestEndpointMethods } from "@octokit/plugin-rest-endpoint-methods/dist-types/generated/method-types";

export default class Github implements IGithub {

    readonly githubClient: RestEndpointMethods;

    constructor(readonly type: "user" | "org" | "manual", readonly username?: string){
        if(type == "org" || type == "user")
        {
            this.githubClient = new Octokit().rest;
            this.blog = ""
            this.description = ""
            this.location = ""
            this.url = ""
        }
    }

    avatar_url: string = "";
    name: string = "";
    pronounce: "Me" | "Us";
    role?: "contributer" | "founder" = "contributer";
    id?: number;
    blog?: string;
    location?: string;
    description?: string;
    short_description?: string;
    url?: string;
    members?: Github[] = [];
    contacts: [IContact, IContact?, IContact?];
    isReady?: boolean;

    setName(name: string): this
    {
        this.name = name;
        return this;
    }

    setPronounce(x: "Me" | "Us"): this
    {
        this.pronounce = x;
        return this;
    }

    setURL(url: string): this 
    {
        this.url = url;
        return this;
    }

    setDescription(desc: string): this
    {
        this.description = desc;
        return this;
    }

    setShortInfo(i: string): this
    {
        this.short_description = i;
        return this;
    }

    setLocation(loc: string): this
    {
        this.location = loc;
        return this;
    }

    setBlog(url: string): this
    {
        this.blog = url;
        return this;
    }

    setAvatar(url: string): this
    {
        this.avatar_url = url;
        return this;
    }

    setContacts(ctx: [IContact, IContact?, IContact?]): this
    {
        this.contacts = ctx;
        return this;
    }

    addContact(ctx: IContact): this
    {
        this.contacts.push(ctx);
        return this;
    }

    setMembers(ctx: Github[]): this
    {
        this.members = ctx;
        return this;
    }

    addMember(ctx: Github): this
    {
        this.members.push(ctx);
        return this;
    }

    setRole(ctx: "contributer" | "founder"): this
    {
        this.role = ctx;
        return this;
    }
    
    async load(): Promise<void>
    {
        if(this.type == "org")
        {
            const response = await this.githubClient.orgs.get({
                org: this.username
            });
            const responseMembers = await this.githubClient.orgs.listMembers({
                org: this.username
            });
            const data = response.data;
            const dataMembers = responseMembers.data;

            this.avatar_url = data.avatar_url ?? this.avatar_url;
            this.name = data.name ?? data.login ?? this.name;
            this.location = data.location ?? this.location
            this.blog = data.blog ?? this.blog;
            this.description = data.description ?? this.description;
            this.id = data.id;
            this.url = data.html_url ?? this.url;
            this.pronounce = "Us";
            this.members = []
            for await (const member of dataMembers)
            {
                const user = new Github("user", member.login);
                await user.load();
                this.members.push(user);
            }

            this.isReady = true;

            return;
        }
        else if(this.type == "user")
        {
            const response = await this.githubClient.users.getByUsername({
                username: this.username
            })
            const data = response.data;
            this.avatar_url = data.avatar_url as string ?? this.avatar_url;
            this.name = data.name as string ?? data.login as string ?? this.name;
            this.location = data.location as string ?? this.location
            this.blog = data.blog as string ?? this.blog;
            this.description = data.bio as string ?? this.description;
            this.url = data.html_url as string ?? this.url;
            this.id = data.id as number;
            this.pronounce = "Me";
            
            this.isReady = true;

            return;
        }
        else this.isReady = true;

        return;
    }

}