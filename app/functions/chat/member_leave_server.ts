
import * as Discord from 'discord.js';
import { systemError } from '../../utils';

export const memberLeaveServer = async ( member: Discord.GuildMember | Discord.PartialGuildMember, client: Discord.Client): Promise< Discord.Message | systemError > => {
    try {
        let channel_info = await client.channels.cache.get(process.env.GENERAL_CHANNEL);

        const Embed = new Discord.MessageEmbed
        
        Embed.setTitle(`${member.displayName + ' ' + process.env.EXIT_SERVER_MESSAGE_EMBED}`)
        Embed.setImage(`${process.env.EXIT_SERVER_GIF_EMBED}`);
        

        
        return (channel_info as Discord.TextChannel).send({embeds:[Embed]});
    } catch (error) {
        console.log(error)
        return new systemError(500, `memberLeaveServer couldn't handle`, client, error)
    }
}