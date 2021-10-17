
import * as Discord from 'discord.js';
import { RELATION_ROLES_WITH_EMOJIS } from '../../../../language/brazillian-portuguese/enviroment.BR.language';
import { USER_SERVICE } from '../../../application';
import { WelcomePageMock } from '../../../models';


export const WelcomePageInit = async(client: Discord.Client) => {

    if ( USER_SERVICE.welcome_channel.id === process.env.WELCOME_CHANNEL) {
        (await USER_SERVICE.welcome_channel.messages.fetch({ limit: 100})).map((content) => {
            content.delete().catch()
        })
    }

    let messageSent = await USER_SERVICE.welcome_channel.send(WelcomePageMock);
    messageSent.react( RELATION_ROLES_WITH_EMOJIS().filter((emoji) => emoji.role === process.env.WELCOME_ROLE)[0].emoji );

    client.on("messageReactionAdd", async (reaction: Discord.MessageReaction, user: Discord.User | Discord.PartialUser) => {
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
        if (user.bot) return;
        if (!reaction.message.guild) return;

        if (reaction.message.channel.id === process.env.WELCOME_CHANNEL) {
            if (reaction.emoji.name === process.env.WELCOME_ROLE_EMOJI) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(USER_SERVICE.welcome_role && USER_SERVICE.member_role);
            }
        } else {
            return;
        }
    })

    client.on("messageReactionRemove", async (reaction: Discord.MessageReaction, user: Discord.User | Discord.PartialUser) => {
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
        if (user.bot) return;
        if (!reaction.message.guild) return;

        if (reaction.message.channel.id === process.env.WELCOME_CHANNEL) {
            if (reaction.emoji.name === process.env.WELCOME_ROLE_EMOJI) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(USER_SERVICE.welcome_role && USER_SERVICE.member_role);
            }
        } else {
            return;
        }
    })
}