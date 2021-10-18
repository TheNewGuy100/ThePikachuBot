
import * as Discord from 'discord.js';
import { clearResponses } from '../../utils';

export const information = () => {
    return {
        name: process.env.BOT_VERSION_COMMAND,
        description: "Comando para ver a versão do bot"
    }
}

export const bot_version = async(message, client) => {
    const Embed = new Discord.MessageEmbed()
    .setColor('#fcfc00')
    .setTitle('TheNextBot')
    .setAuthor('Author: Pedro Bohn Costa')
    .setThumbnail('https://i.imgur.com/NG0cOQO.gif')
    .setDescription(`Versão: 0.1.20`)

    const message_sent = await message.channel.send({embeds:[Embed]});
    clearResponses( message, message_sent, 10000);
}