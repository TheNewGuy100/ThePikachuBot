
import * as Discord from 'discord.js';
import { LOLI_DETECTOR_MESSAGE } from '../../../language';
import { USER_SERVICE } from '../../application';

export const information = () => {
    return {
        name: "active",
        description: 'Detecta quando alguém escreve loli e chama o FBI'
    }
}

USER_SERVICE.client.on("messageCreate", async(message: Discord.Message): Promise<null | void> => {

    if (message.author.bot) return;

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
})