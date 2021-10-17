
import { systemError } from "../../utils";
import * as Discord from 'discord.js';

export const tapaNaGostosa = async (message: Discord.Message) => {
    var content = message.content.toLowerCase()
        if (content === process.env.TAPA_NA_GOSTOSA) {
        
            const embed = new Discord.MessageEmbed()
            .setTitle(`${message.author.username} deu um tapa na gostosa!`)
            .setColor('#fcfc00')
            .setImage('https://media.tenor.com/images/a46f5e9a57334b49e349b27736e03b4f/tenor.gif')
            .setFooter('Yes baby! Thank you!')

            message.channel.send({embeds:[embed]});
    }
}