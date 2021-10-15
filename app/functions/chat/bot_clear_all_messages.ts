
import * as Discord from 'discord.js';
import { clearResponses, systemError } from '../../utils';


export const clearAll = async(message : Discord.Message, client : Discord.Client) => {
    // try {message.flags.equals
    //     if ( message.user.hasPermissions() ) {

    //         var content = message.content.split(' ')
            
    //         const Embed = new Discord.MessageEmbed()
                
    //         if (!isNaN(content[1] as any) === true) {
    //             await (message.channel as Discord.TextChannel).bulkDelete(parseInt(content[1]), true)
    //             .then((content) => {Embed.setColor('#fcfc00')
    //                                 Embed.setTitle(`Deletei ${content.size} mensagens`)})
    //             .catch(() => {
    //                 Embed.setTitle(`Não consegui Deletar ${content[1]} mensagens`)
    //                 Embed.setDescription('❌ Você não pode deletar mensagens anteriores a 14 dias')
    //             })
            
    //             message.channel.send({embeds:[Embed]});

    //             clearResponses(message, client, 3000)

    //         } else {
    //             const Embed = new Discord.MessageEmbed()
    //             .setColor('#fcfc00')
    //             .setTitle(`Operação inválida`)
            
    //             message.channel.send({embeds:[Embed]});
    //             clearResponses(message, client, 3000);
    //         }
    //     }
    //     else {
    //         console.log('FALTA DE PERMISSÃO')
    //     }

    // } catch (error) {
    //     console.log(error)
    //     return new systemError(500, `clearAll couldn't handle`, client, error)
    // }
}