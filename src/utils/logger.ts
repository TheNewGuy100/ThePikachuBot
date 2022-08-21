
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

    constructor() {
        try {
            const fetchChannel = Application.guild.channels.cache.find((channels) => channels.id === process.env.LOGS_CHANNEL);
            
            this.logChannel = fetchChannel as Discord.TextChannel;
        } catch (err) {
            console.log("não foi possível attribuir o canal de logs, error: " + err);
        }
    }
}