
import * as Discord from 'discord.js';
import { categoryPageMock, gameCategoryMock, programmerMock, suxualityMock } from '../../../models';

export const CategoryPageInit = async (client: Discord.Client) => {
        
    const Category: Discord.TextChannel = client.channels.cache.get(process.env.CATEGORY_CHANNEL) as Discord.TextChannel;

    const osuRole = client.guilds.cache.get(process.env.GUILD_ID).roles.cache.get(process.env.OSU_ROLE);
    const garrysmod_emoji =  client.guilds.cache.get(process.env.GUILD_ID).emojis.cache.find((emoji) => { return emoji.name === 'garrys_mod'})
    const osu_emoji =  client.guilds.cache.get(process.env.GUILD_ID).emojis.cache.find((emoji) => { return emoji.name === 'osu'})

    if ( Category.id === process.env.CATEGORY_CHANNEL) {
        (await Category.messages.fetch({ limit: 100})).map((content) => {
            content.delete().catch()
        })
    }

    let mocksHolder = [categoryPageMock, gameCategoryMock, suxualityMock, programmerMock].map(async (message, index) => {
        
        let messageSent = await Category.send(message);

        if (index === 1) {
            messageSent.react(garrysmod_emoji);
            messageSent.react(osu_emoji);
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

        if (reaction.message.channel.id === process.env.WELCOME_CHANNEL) {
            if (reaction.emoji.name === process.env.WELCOME_ROLE_EMOJI) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(osuRole);
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
                await reaction.message.guild.members.cache.get(user.id).roles.remove(osuRole);
            }
        } else {
            return;
        }
    })
}