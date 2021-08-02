import { WelcomeChannel, MainChannel, guild_id, welcome_role, welcome_role_emoji, categoryChannel, member_role, osu_role } from '@botconfig';
import * as Discord from 'discord.js';
import { categoryPageMock, gameCategoryMock, programmerMock, suxualityMock, systemError, WelcomePageMock } from '@global';
import { clearResponses } from '@global';

export class functionOperations {

    static async clearAll(message : Discord.Message, client : Discord.Client) {
        try {
            if ( message.member.hasPermission("ADMINISTRATOR") ) {

                var content = message.content.split(' ')
                
                const Embed = new Discord.MessageEmbed()
                    
                if (!isNaN(content[1] as any) === true) {
                    await (message.channel as Discord.TextChannel).bulkDelete(parseInt(content[1]), true)
                    .then((content) => {Embed.setColor('#fcfc00')
                                        Embed.setTitle(`Deletei ${content.size} mensagens`)})
                    .catch(() => {
                        Embed.setTitle(`Não consegui Deletar ${content[1]} mensagens`)
                        Embed.setDescription('❌ Você não pode deletar mensagens anteriores a 14 dias')
                    })
                
                    message.channel.send(Embed);

                    clearResponses(message, client, 3000)

                } else {
                    const Embed = new Discord.MessageEmbed()
                    .setColor('#fcfc00')
                    .setTitle(`Operação inválida`)
                
                    message.channel.send(Embed);
                    clearResponses(message, client, 3000);
                }
            }
            else {
                console.log('FALTA DE PERMISSÃO')
            }

        } catch (error) {
            console.log(error)
            return new systemError(500, `clearAll couldn't handle`, client, error)
        }
    }

    static xingamentoFunction(message, user_target) {
        const chingamentos = require('../data-base/aslan-xingamentos');
        var num = Math.floor(Math.random() * chingamentos.length)
        message.channel.send( user_target + ' ' + chingamentos[num])
    }

    static async WelcomePageInit(client: Discord.Client) {
        
        const Welcome: Discord.TextChannel = client.channels.cache.get(WelcomeChannel) as Discord.TextChannel;

        const TheContractRole = client.guilds.cache.get(guild_id).roles.cache.get(welcome_role);
        const TheMemberRole = client.guilds.cache.get(guild_id).roles.cache.get(member_role);

        if ( Welcome.id === WelcomeChannel) {
            (await Welcome.messages.fetch({ limit: 100})).map((content) => {
                content.delete().catch()
            })
        }

        let messageSent = await Welcome.send(WelcomePageMock);
        messageSent.react(welcome_role_emoji);

        client.on('messageReactionAdd', async (reaction: Discord.MessageReaction, user: Discord.User | Discord.PartialUser) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id === WelcomeChannel) {
                if (reaction.emoji.name === welcome_role_emoji) {
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

            if (reaction.message.channel.id === WelcomeChannel) {
                if (reaction.emoji.name === welcome_role_emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(TheContractRole && TheMemberRole);
                }
            } else {
                return;
            }
        })

    }

    static async CategoryPageInit(client: Discord.Client) {
        
        const Category: Discord.TextChannel = client.channels.cache.get(categoryChannel) as Discord.TextChannel;

        const osuRole = client.guilds.cache.get(guild_id).roles.cache.get(osu_role);
        const garrysmod_emoji =  client.guilds.cache.get(guild_id).emojis.cache.find((emoji) => { return emoji.name === 'garrys_mod'})
        const osu_emoji =  client.guilds.cache.get(guild_id).emojis.cache.find((emoji) => { return emoji.name === 'osu'})

        if ( Category.id === categoryChannel) {
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

            if (reaction.message.channel.id === WelcomeChannel) {
                if (reaction.emoji.name === welcome_role_emoji) {
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

            if (reaction.message.channel.id === WelcomeChannel) {
                if (reaction.emoji.name === welcome_role_emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(osuRole);
                }
            } else {
                return;
            }
        })
    }
}
