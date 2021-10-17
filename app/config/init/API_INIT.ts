import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import chalk from 'chalk';
import { AxiosResponse } from 'axios';
import { API_SENDING_INFORMATION, API_SENDING_INFORMATION_DENIED, API_SENDING_INFORMATION_SUCCESS, BOT_COMMANDS_ARRAY } from '../../../language';

export class API_DISCORD {
  client: REST;
  
    constructor() {
        
        this.client = new REST({ version: '9' }).setToken(process.env.BOT_TOKEN);
        
        (async () => {
          console.log(chalk.blue(API_SENDING_INFORMATION));
      
          await this.client.put(
            Routes.applicationGuildCommands(process.env.BOT_ID, process.env.GUILD_ID),
            { body: BOT_COMMANDS_ARRAY() },
          ).catch(() => console.log(chalk.red(API_SENDING_INFORMATION_DENIED)))
            .then((axiosResponse: AxiosResponse) => {
              if (axiosResponse) {
                console.log(chalk.blue(API_SENDING_INFORMATION_SUCCESS))
              }
            });
        })();
    }
}
