import * as Discord from "discord.js"
import { CHAT_CURSES } from "../../../language"

export const xingamentoFunction = async(message: Discord.Message) => {

    const curses_list = CHAT_CURSES();
    var num = Math.floor(Math.random() * curses_list.length);

    const messageEmbed = new Discord.MessageEmbed;

    messageEmbed.setImage(curses_list[num].img);
    messageEmbed.setDescription( "<@" + message.author.id + "> " + curses_list[num].chat + "<@" + message.mentions.members.first() + ">" )

    message.channel.send({embeds: [messageEmbed]})
}