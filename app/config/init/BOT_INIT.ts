
import * as Discord from 'discord.js';
import chalk from 'chalk';
import { BOT_LOGIN_MESSAGE, BOT_UPDATE_IMAGE_ERROR } from '../../../language/enviroment.BR.language';

export class CLIENT_DISCORD {
  client: Discord.Client;

  constructor() {
    this.client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES, Discord.Intents.FLAGS.GUILD_MEMBERS] });

    this.client.on('ready', async () => {
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

    this.client.login(process.env.BOT_TOKEN);
  }
}
