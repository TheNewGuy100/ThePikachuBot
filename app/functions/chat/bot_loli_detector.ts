
import * as Discord from 'discord.js';
import { systemError } from '../../utils';

export const getLoliScum = async (message: Discord.Message, client: Discord.Client) => {
    try {
        var content = message.content.toLowerCase().split(' ')
        for (const chave of content) {
            if (chave === 'loli') {
                const embed = new Discord.MessageEmbed()
                .setTitle(`${message.author.username} you are goind to jail BOY!`)
                .setColor('#fcfc00')
                .setImage('https://thumbs.gfycat.com/FrailWelldocumentedBlackbuck-size_restricted.gif')

                message.channel.send({embeds:[embed]});
            }
        }
    } catch (error) {
        console.log(error)
        return new systemError(500, `loli catch couldn't handle`, client, error)
    }
}