import * as Discord from "discord.js"
import { CHAT_CURSES } from "../../../language"
import { USER_SERVICE } from "../../application"
import { functionCommandsModel } from "../../models/informationModel"

export const information = (): functionCommandsModel => {
    return {
        name: process.env.CURSE_SOMEONE_COMMAND,
        description: "Comando para xingar alguém"
    }
}

USER_SERVICE.client.on("messageCreate", async(message : Discord.Message): Promise<null> => {

    if (message.author.bot || !message.content.includes(process.env.CURSE_SOMEONE_COMMAND)) return;

    const curses_list = CHAT_CURSES();
    var num = Math.floor(Math.random() * curses_list.length);

    const messageEmbed = new Discord.MessageEmbed;

    messageEmbed.setImage(curses_list[num].img);
    messageEmbed.setDescription( "<@" + message.author.id + "> " + curses_list[num].chat + "<@" + message.mentions.members.first() + ">" )

    message.channel.send({embeds: [messageEmbed]})
});
