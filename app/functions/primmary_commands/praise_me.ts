
import * as Discord from 'discord.js';
import { CHAT_PRAISE_ME } from '../../../language';

export const information = () => {
    return {
        name: process.env.PRAISE_YOU_COMMAND,
        description: "Comando para o bot elogiar você"
    }
}

export const praiseMe = async(message: Discord.Message) => {

    const curses_list = CHAT_PRAISE_ME();
    var num = Math.floor(Math.random() * curses_list.length);

    const messageEmbed = new Discord.MessageEmbed;

    messageEmbed.setImage(curses_list[num].img);
    messageEmbed.setDescription( "<@" + message.author.id + "> " + curses_list[num].chat)

    message.channel.send({embeds: [messageEmbed]})
}