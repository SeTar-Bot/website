
import { DataConfig } from "./types/Config";
import { Github } from "./structers";

const config: DataConfig = {
    /**
     * Choose Org for Github Organizations
     * And user for Github User
     */
    type: "org",
    /**
     * Github Username
     * required on type org or user only.
     */
    username: "setar-bot",
    /**
     * Change Type to "manual" and remove username property, instead add the line below
     * You can also put data object and change some properties instead of fetching everything from Github
     * Add this Class first line of the file:
     * 
     * import { Github } from "./structers";
     * 
     * And then add the below property
     * 
     * PS: There is much more options to work around, so make sure to check it out yourself !
     */
    data: new Github("org", "setar-bot")
        .setContacts([
            {
                type: 'github',
                url: 'https://github.com/setar-bot',
                placeholder: 'Setar-Bot'
            },
            {
                type: 'discord',
                url: 'https://discord.gg/7jgfP6j4Tc',
                placeholder: 'Discord'
            }
        ])
        .setShortInfo('One of the best Music Bots in Discord.'),


    /**
     * Choose which component you don't need in your website
     * BUT, BE CAREFUL,
     * Disabling or Enabling Some components might cause some errors product result
     */
    enabledComponents:
    [
        //"about",
        "contact",
        "members"
    ]
}

export default config;