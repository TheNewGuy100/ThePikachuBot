import * as Discord from 'discord.js';
import { systemError } from '@global';
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

    static xingamentoAslan(message, user_target) {
        const chingamentos = require('../data-base/aslan-xingamentos');
        var num = Math.floor(Math.random() * chingamentos.length)
        message.channel.send( user_target + ' ' + chingamentos[num])
    }

}
