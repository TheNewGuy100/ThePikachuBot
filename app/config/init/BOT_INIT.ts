
import * as Discord from 'discord.js';
import chalk from 'chalk';

export class CLIENT_DISCORD {
  client: Discord.Client;

  constructor() {
    this.client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES, Discord.Intents.FLAGS.GUILD_MEMBERS] });

    this.client.on('ready', async () => {
      console.log(`Logado como ${chalk.green(this.client.user.tag)}!`);

      this.client.user.setPresence({
        status: 'online',
        afk: false,
        activities: [{
          name: 'strage bot',
          url: 'httphahaha',
          type: 'STREAMING',
        }]
      })

      this.client.user.setAvatar(process.env.BOT_AVATAR)
        .catch( () => console.log(" | ERROR CHANGE AVATAR - mundando avatar muito rápido, tente novamente mais tarde"));

      this.client.user.setUsername(process.env.BOT_NAME)
    });

    this.client.login(process.env.BOT_TOKEN);
  }
}
