
import * as Discord from 'discord.js';
import { clearResponses } from '../../utils';

export const bot_version = (message, client) => {
    const Embed = new Discord.MessageEmbed()
    .setColor('#fcfc00')
    .setTitle('TheNextBot')
    .setAuthor('Author: Pedro Bohn Costa')
    .setThumbnail('https://i.imgur.com/NG0cOQO.gif')
    .setDescription(`Versão: 0.1.20`)

    message.channel.send(Embed);
    clearResponses(message, client, 10000);
}