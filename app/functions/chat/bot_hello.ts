
import { clearResponses } from "../../utils";
import * as Discord from 'discord.js';

export const meDaOi = (message: Discord.Message, client: Discord.Client) => {
    const Embed = new Discord.MessageEmbed()
    .setColor('#fcfc00')
    .setTitle('Pika Pika!')
    .setImage('https://i.imgur.com/QsnFI7l.gif')
    message.channel.send({embeds:[Embed]});

    clearResponses(message, client, 3500)
}