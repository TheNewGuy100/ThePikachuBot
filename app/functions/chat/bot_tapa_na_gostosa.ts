
import { systemError } from "../../utils";
import * as Discord from 'discord.js';

export const tapaNaGostosa = async (message: Discord.Message, client: Discord.Client) => {
    try {
        var content = message.content.toLowerCase()
            if (content === 'tapa na gostosa') {
            
                const embed = new Discord.MessageEmbed()
                .setTitle(`${message.author.username} deu um tapa na gostosa!`)
                .setColor('#fcfc00')
                .setImage('https://media.tenor.com/images/a46f5e9a57334b49e349b27736e03b4f/tenor.gif')
                .setFooter('Yes baby! Thank you!')

                message.channel.send({embeds:[embed]});
        }
    } catch (error) {
        console.log(error)
        return new systemError(500, `tapaNaGostosa catch couldn't handle`, client, error)
    }
}