import { RELATION_ROLES_WITH_EMOJIS } from "../language";
import { Application } from "../application";
import * as Discord from 'discord.js';

Application.client.on('messageReactionRemove' as any, async (reaction: Discord.MessageReaction, user: Discord.User | Discord.PartialUser) => {

    // CATEGORIES PAGE HANDLE
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();
    if (user.bot) return;
    if (!reaction.message.guild) return;

    if (reaction.message.channel.id === process.env.CATEGORY_CHANNEL) {
        const role_related = RELATION_ROLES_WITH_EMOJIS().filter((array_role) => array_role.emoji === reaction.emoji.id)[0];
        await reaction.message.guild.members.cache.get(user.id).roles.remove(role_related.role);
    } else {
        return;
    }

    // WELCOME PAGE
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();
    if (user.bot) return;
    if (!reaction.message.guild) return;

    if (reaction.message.channel.id === process.env.WELCOME_CHANNEL) {
        if (reaction.emoji.name === process.env.WELCOME_ROLE_EMOJI) {
            await reaction.message.guild.members.cache.get(user.id).roles.remove(Application.welcome_role && Application.member_role);
        }
    } else {
        return;
    }
})