
import * as Discord from 'discord.js';
import { WelcomePageMock } from '../../../models';


export const WelcomePageInit = async (client: Discord.Client) => {
        
    const Welcome: Discord.TextChannel = client.channels.cache.get(process.env.WELCOME_CHANNEL) as Discord.TextChannel;

    const TheContractRole = client.guilds.cache.get(process.env.GUILD_ID).roles.cache.get(process.env.WELCOME_ROLE);
    const TheMemberRole = client.guilds.cache.get(process.env.GUILD_ID).roles.cache.get(process.env.MEMBER_ROLE);

    if ( Welcome.id === process.env.WELCOME_CHANNEL) {
        (await Welcome.messages.fetch({ limit: 100})).map((content) => {
            content.delete().catch()
        })
    }

    let messageSent = await Welcome.send(WelcomePageMock);
    messageSent.react(process.env.WELCOME_ROLE_EMOJI);

    client.on('messageReactionAdd', async (reaction: Discord.MessageReaction, user: Discord.User | Discord.PartialUser) => {
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
        if (user.bot) return;
        if (!reaction.message.guild) return;

        if (reaction.message.channel.id === process.env.WELCOME_CHANNEL) {
            if (reaction.emoji.name === process.env.WELCOME_ROLE_EMOJI) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(TheContractRole && TheMemberRole);
            }
        } else {
            return;
        }
    })

    client.on('messageReactionRemove', async (reaction: Discord.MessageReaction, user: Discord.User | Discord.PartialUser) => {
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
        if (user.bot) return;
        if (!reaction.message.guild) return;

        if (reaction.message.channel.id === process.env.WELCOME_CHANNEL) {
            if (reaction.emoji.name === process.env.WELCOME_ROLE_EMOJI) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(TheContractRole && TheMemberRole);
            }
        } else {
            return;
        }
    })
}