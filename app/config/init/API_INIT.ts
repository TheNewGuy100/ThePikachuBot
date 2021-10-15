import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import chalk from 'chalk';

export class API_DISCORD {
    constructor() {

        const commands = [{
          name: 'ping',
          description: 'Replies with Pong!'
        }]; 
        
        const rest = new REST({ version: '9' }).setToken(process.env.BOT_TOKEN);
        
        (async () => {
          try {
            console.log('Started refreshing application (/) commands.');
        
            await rest.put(
              Routes.applicationGuildCommands("825057897850732569", "828957319755726879"),
              { body: commands },
            ).catch((err) => console.log(chalk.red("Acess denied in updating API")));
        
            console.log('Successfully reloaded application (/) commands.');
          } catch (error) {
            console.error(error);
          }
        })();
      
    }
}
