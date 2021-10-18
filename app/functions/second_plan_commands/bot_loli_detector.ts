
import * as Discord from 'discord.js';
import { LOLI_DETECTOR_MESSAGE } from '../../../language';

export const information = () => {
    return {
        name: "active",
        description: 'Detecta quando alguém escreve loli e chama o FBI'
    }
}

export const getLoliScum = async (message: Discord.Message) => {
    var content = message.content.toLowerCase().split(' ')
    for (const chave of content) {
        if (chave === process.env.LOLI_DETECTOR) {
            const embed = new Discord.MessageEmbed()
            .setTitle( "<@" + message.author.id + "> " + LOLI_DETECTOR_MESSAGE )
            .setColor('#fcfc00')
            .setImage('https://thumbs.gfycat.com/FrailWelldocumentedBlackbuck-size_restricted.gif')

            message.channel.send({embeds:[embed]});
        }
    }
}