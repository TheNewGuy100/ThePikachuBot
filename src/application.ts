import commands from './commands/index';

import * as Config from "./config";
import * as Discord from 'discord.js';

import { interactionCreate } from "./events/interactionCreate";
import { BOT_LOGIN_MESSAGE } from "./language";
import Logger from './utils/logger';

Config.setENV();

class application {
    public client: Discord.Client;
    public api: any;
    public Logger: Logger;
    public Commands: commands;
    public guild: Discord.Guild;
  
    // CHANNELS
    public welcome_channel: Discord.TextChannel;
    public category_channel: Discord.TextChannel;
    public nsfw_channel: Discord.TextChannel;
  
    // ROLES
    public member_role: Discord.Role;
    public welcome_role: Discord.Role;
    public osu_role: Discord.Role;
  
    // CUSTOM EMOJIS
    public garrysmod_emoji: Discord.GuildEmoji;
    public osu_emoji: Discord.GuildEmoji;
  
    // DEFAULT EMOJIS
    public welcome_emoji: string;
  
    // MUSIC BOT EMOJIS
    public music_module_off_emoji: string;
    public music_module_error_emoji: string;
    public music_module_queue_emoji: string;
    public music_module_music_emoji: string;
    public music_module_success_emoji: string;

    constructor() {
        this.initializeAPI()
        this.initializeBOT()

        // await WelcomePageInit(USER_SERVICE.client);
        // await CategoryPageInit(USER_SERVICE.client);
        
        // API SERVICES
        
        // REDIS SERVICE
        //     const redisCache = new applicationCache();
        //     redisCache.testRedis();
        
        // BOT SERVICES
    }

    private async envFetch() {
        this.guild = this.client.guilds.cache.get(process.env.GUILD_ID)

        this.welcome_channel = await this.guild.channels.fetch(process.env.WELCOME_CHANNEL) as Discord.TextChannel
        this.category_channel = await this.client.channels.fetch(process.env.CATEGORY_CHANNEL) as Discord.TextChannel
        this.nsfw_channel = await this.client.channels.fetch(process.env.NSFW_CHANNEL) as Discord.TextChannel
    
        this.welcome_role = await this.guild.roles.fetch(process.env.WELCOME_ROLE)
        this.member_role = await this.guild.roles.fetch(process.env.MEMBER_ROLE)
        this.osu_role = await this.guild.roles.fetch(process.env.OSU_ROLE)
    
        this.garrysmod_emoji = this.guild.emojis.cache.find( (emoji) => emoji.id === process.env.GARRYS_MOD_EMOJI)
        this.osu_emoji = this.guild.emojis.cache.find( (emoji) => emoji.id === process.env.OSU_EMOJI)
        this.welcome_emoji = process.env.WELCOME_ROLE_EMOJI
    
        this.music_module_error_emoji = process.env.MUSIC_BOT_ERROR_EMOJI
        this.music_module_music_emoji = process.env.MUSIC_BOT_MUSIC_EMOJI
        this.music_module_off_emoji =  process.env.MUSIC_BOT_OFF_EMOJI
        this.music_module_queue_emoji =  process.env.MUSIC_BOT_QUEUE_EMOJI
        this.music_module_success_emoji = process.env.MUSIC_BOT_SUCCESS_EMOJI
    }

    private async initializeAPI () {
        // this.api = new REST({ version: '9' }).setToken(process.env.BOT_TOKEN);
        
        // console.log(process.env.API_SENDING_INFORMATION);
    
        // await this.api.put(
        // Routes.applicationGuildCommands(process.env.BOT_ID, process.env.GUILD_ID),
        // { body: {} },
        // ).catch(() => console.log(process.env.API_SENDING_INFORMATION_DENIED))
        // .then((axiosResponse: AxiosResponse) => {
        //     if (axiosResponse) {
        //     console.log(process.env.API_SENDING_INFORMATION_SUCCESS)
        //     }
        // });
    }

    private async initializeBOT () {
        this.client = new Discord.Client({
            intents: [
                Discord.Intents.FLAGS.GUILDS,
                Discord.Intents.FLAGS.GUILD_MESSAGES,
                Discord.Intents.FLAGS.GUILD_MEMBERS,
                Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
                Discord.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS
            ]
        });

        await this.client.login(process.env.BOT_TOKEN);

        this.client.on('ready', () => {
            console.log(BOT_LOGIN_MESSAGE(this.client.user.tag));
      
            this.client.user.setPresence({
              status: process.env.BOT_STATUS as Discord.PresenceStatusData,
              afk: Boolean(process.env.BOT_AFK),
              activities: [{
                name: process.env.BOT_ACTIVITY_NAME,
                url: process.env.BOT_ACTIVITY_URL,
                type: "LISTENING",
              }]
            })
            
            this.client.user.setUsername(process.env.BOT_NAME)

            this.envFetch()
            this.Logger = new Logger();
            this.Commands = new commands();
        });
    }
}

export const Application = new application();






