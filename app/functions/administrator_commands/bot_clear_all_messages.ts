
import * as Discord from 'discord.js';
import { USER_SERVICE } from '../../application';
import { clearResponses, systemError } from '../../utils';

export const information = () => {
    return {
        name: process.env.CLEAR_ALL_COMMAND,
        description: "Comando para limpar o chat"
    }
}

USER_SERVICE.client.on("messageCreate", async(message: Discord.Message): Promise<null | void> => {

    if (message.author.bot || !message.content.includes(process.env.RULE34_COMMAND)) return;

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
})