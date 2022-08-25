import { eventTable } from './../interfaces/strategy';

import * as Discord from 'discord.js';
import { Application } from '../application';

export default class Logger {
    private logChannel: Discord.TextChannel;

    public logUserRunCommand(userMessage: Discord.Message) {
        this.logChannel.send({
            embeds: [
                new Discord.MessageEmbed({
                    color: 'BLURPLE',
                    description: "<@" + userMessage.author.id + "> " + "rodou um comando: \n" + userMessage.content,
                    author: {
                        name: "Usuário: " + userMessage.author.username,
                    },
                    thumbnail: {
                        url:  userMessage.author.avatarURL()
                    }
                })
            ]
        })
    }

    public logUserEvent(User: Discord.User | Discord.PartialUser, EventType: eventTable, Event?: Discord.MessageReaction | Discord.PartialMessageReaction) {
        this.logChannel.send({
            embeds: [
                new Discord.MessageEmbed({
                    color: 'DARK_GOLD',
                    description: "<@" + User.id + "> " + "provocou um evento de : \n" + EventType + "\nno canal: " + (Event.message.channel as Discord.BaseGuildTextChannel).name,
                    author: {
                        name: "Usuário: " + User.username,
                    },
                    thumbnail: {
                        url:  User.avatarURL()
                    }
                })
            ]
        })
    }

    public logError(message: string) {
        embeds: [
            new Discord.MessageEmbed({
                color: 'RED',
                author: {
                    name: "ERRO CRÍTICO",
                },
                description: message
            })
        ]
    }

    constructor() {
        try {
            const fetchChannel = Application.guild.channels.cache.find((channels) => channels.id === process.env.LOGS_CHANNEL);
            
            this.logChannel = fetchChannel as Discord.TextChannel;
        } catch (err) {
            console.log("não foi possível attribuir o canal de logs, error: " + err);
        }
    }
}