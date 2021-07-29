import * as Discord from 'discord.js';
import * as fs from 'fs';

import { clearResponses } from '@global';
export class globalUseFunctions {
    
    static async clearAll(message : Discord.Message, client : Discord.User) {
        try {
            if ( message.member.hasPermission("ADMINISTRATOR") ) {

                var content = message.content.split(' ')
                
                const Embed = new Discord.MessageEmbed()
                    .setColor('#fcfc00')
                    .setTitle(`Deletei ${content[1]} mensagens`)
                    
                if (!isNaN(content[1] as any) === true) {
                    await (message.channel as Discord.TextChannel).bulkDelete(parseInt(content[1]))
                    .catch((err) => {
                        console.log(err);
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

        } catch (err) {
            console.log(err)
        }
    }

    static elogieMe(message) {
        try {
        var num = Math.floor( Math.random() /* * db.length*/)
        message.channel.send( '<@' + message.author.id + "> ")
        }
        catch (error) {
            console.log(' | ERRO AO MANDAR MENSAGEM NO function ElogieMe()')
        }
    }

    static xingamentoAslan(message, user_target) {
        const chingamentos = require('../data-base/aslan-xingamentos');
        var num = Math.floor(Math.random() * chingamentos.length)
        message.channel.send( user_target + ' ' + chingamentos[num])
    }

}
