import chalk from 'chalk';
import * as Discord from 'discord.js';
import { USER_SERVICE } from '../application';
import { systemError } from '../utils';

export function guildMemberRemove() {
    USER_SERVICE.client.on('guildMemberRemove', async (member: Discord.GuildMember | Discord.PartialGuildMember): Promise<null> => {
        try {
            let channel_info = await USER_SERVICE.client.channels.cache.get(process.env.GENERAL_CHANNEL);
    
            const Embed = new Discord.MessageEmbed;
                Embed.setTitle(`${member.displayName + ' ' + process.env.EXIT_SERVER_MESSAGE_EMBED}`)
                Embed.setImage(`${process.env.EXIT_SERVER_GIF_EMBED}`);
            
            (channel_info as Discord.TextBasedChannels).send({embeds:[Embed]});
            return;
        } catch (error) {
            console.log(chalk.red(error));
            throw new systemError(500, `memberLeaveServer couldn't handle`, USER_SERVICE.client, error);
        }
    })
}
