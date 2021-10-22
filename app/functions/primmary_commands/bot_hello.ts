
import { clearResponses } from "../../utils";
import * as Discord from 'discord.js';
import { BOT_HELLO_MESSAGE } from "../../../language";
import { functionCommandsModel } from "../../models/informationModel";
import { USER_SERVICE } from "../../application";


export const information = (): functionCommandsModel => {
    return {
        name: process.env.HELLO_COMMAND,
        description: 'Dá um oi para o bot'
    }
}

USER_SERVICE.client.on("messageCreate", async(message : Discord.Message): Promise<null> => {

    if (message.author.bot || !message.content.includes(process.env.HELLO_COMMAND)) return;

    const Embed = new Discord.MessageEmbed()
    .setColor('#fcfc00')
    .setTitle(BOT_HELLO_MESSAGE)
    .setImage('https://i.imgur.com/QsnFI7l.gif')

    const message_sent = await message.channel.send({embeds:[Embed]})
    clearResponses(message, message_sent, 3500)
    
})
