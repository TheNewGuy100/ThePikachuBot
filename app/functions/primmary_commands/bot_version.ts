
import * as Discord from 'discord.js';
import { USER_SERVICE } from '../../application';
import { functionCommandsModel } from '../../models/informationModel';
import { clearResponses } from '../../utils';

export const information = (): functionCommandsModel => {
    return {
        name: process.env.BOT_VERSION_COMMAND,
        description: "Comando para ver a versão do bot"
    }
}

USER_SERVICE.client.on("messageCreate", async(message : Discord.Message): Promise<null> => {

    if (message.author.bot || !message.content.includes(process.env.BOT_VERSION_COMMAND)) return;
    
    const Embed = new Discord.MessageEmbed()
    .setColor('#fcfc00')
    .setTitle('TheNextBot')
    .setAuthor('Author: Pedro Bohn Costa')
    .setThumbnail('https://i.imgur.com/NG0cOQO.gif')
    .setDescription(`Versão: 0.1.20`)

    const message_sent = await message.channel.send({embeds:[Embed]});
    clearResponses( message, message_sent, 10000);
})