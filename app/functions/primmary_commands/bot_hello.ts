
import { clearResponses } from "../../utils";
import * as Discord from 'discord.js';
import { BOT_HELLO_MESSAGE } from "../../../language";


export const information = () => {
    return {
        name: process.env.HELLO_COMMAND,
        description: 'Dá um oi para o bot'
    }
}


export const meDaOi = async(message: Discord.Message) => {
    try {
        const Embed = new Discord.MessageEmbed()
        .setColor('#fcfc00')
        .setTitle(BOT_HELLO_MESSAGE)
        .setImage('https://i.imgur.com/QsnFI7l.gif')
    
        const message_sent = await message.channel.send({embeds:[Embed]})
        clearResponses(message, message_sent, 3500)
    } catch (error) {
        console.log(error)
    }
}