
import * as Discord from 'discord.js';
import { RELATION_ROLES_WITH_EMOJIS } from '../../../../language';
import { USER_SERVICE } from '../../../application';
import { categoryPageMock, gameCategoryMock, programmerMock, suxualityMock } from '../../../models';

export const CategoryPageInit = async (client: Discord.Client) => {

    if ( USER_SERVICE.category_channel.id === process.env.CATEGORY_CHANNEL) {
        (await USER_SERVICE.category_channel.messages.fetch({ limit: 100})).map((content) => {
            content.delete().catch()
        })
    }

    let mocksHolder = [categoryPageMock, gameCategoryMock, suxualityMock, programmerMock].map(async (message, index) => {
        
        let messageSent = await USER_SERVICE.category_channel.send(message);

        if (index === 1) {
            messageSent.react(USER_SERVICE.garrysmod_emoji);
            messageSent.react(USER_SERVICE.osu_emoji);
        }

        if (index === 2) {
            
        }

        if (index === 3) {
            
        }
    });

    client.on('messageReactionAdd', async (reaction: Discord.MessageReaction, user: Discord.User | Discord.PartialUser) => {
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
        if (user.bot) return;
        if (!reaction.message.guild) return;

        if (reaction.message.channel.id === process.env.CATEGORY_CHANNEL) {
            const role_related = RELATION_ROLES_WITH_EMOJIS().filter((array_role) => array_role.emoji === reaction.emoji.id)[0];
            await reaction.message.guild.members.cache.get(user.id).roles.add(role_related.role);

        } else {
            return;
        }
    })

    client.on('messageReactionRemove', async (reaction: Discord.MessageReaction, user: Discord.User | Discord.PartialUser) => {
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
    })
}