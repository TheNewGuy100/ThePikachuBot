
import * as Discord from 'discord.js';
import { BOT_HELP_FIELDS, BOT_HELP_TITLE, HELP_COMMAND_DESCRIPTION } from '../../../language/brazillian-portuguese/enviroment.BR.language';
import { USER_SERVICE } from '../../application';
import { functionCommandsModel } from '../../models/informationModel';

export const information = (): functionCommandsModel => {
    return {
        name: process.env.HELP_BOT_COMMAND,
        description: "Comando para obter a lista de help do bot"
    }
}

USER_SERVICE.client.on("messageCreate", async(message : Discord.Message): Promise<null> => {

    if (message.author.bot || !message.content.includes(process.env.HELP_BOT_COMMAND)) return;

    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#fcfc00')
    .setTitle(BOT_HELP_TITLE)
    .setAuthor('Pedro Bohn Costa', 'https://openjusticecourtofprotection.files.wordpress.com/2020/07/scale.gif')
    .setDescription(HELP_COMMAND_DESCRIPTION)
    .setThumbnail('https://www.clipartmax.com/png/full/99-991676_law-book-icon-png.png')
    .setFooter( process.env.BOT_NAME, 'https://www.pngrepo.com/png/92783/512/checked.png')
    .setFields(BOT_HELP_FIELDS(message))
    .setTimestamp(new Date())
    
    await message.channel.send({embeds:[exampleEmbed]});
})