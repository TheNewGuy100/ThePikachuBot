
import * as Discord from 'discord.js';
import chalk from 'chalk';
import { BOT_LOGIN_MESSAGE, BOT_UPDATE_IMAGE_ERROR } from '../../../language/brazillian-portuguese/enviroment.BR.language';

export class CLIENT_DISCORD {
  public client: Discord.Client;
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
    this.init()
  }

  async init() {
    this.client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES, Discord.Intents.FLAGS.GUILD_MEMBERS, Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Discord.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS] });

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

      this.client.user.setAvatar(process.env.BOT_AVATAR)
        .catch( () => console.log(chalk.red(BOT_UPDATE_IMAGE_ERROR)));

      this.client.user.setUsername(process.env.BOT_NAME)
    });

    await this.client.login(process.env.BOT_TOKEN);
    await this.getInformation();
    return;
  }

  async getInformation() {

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
}
