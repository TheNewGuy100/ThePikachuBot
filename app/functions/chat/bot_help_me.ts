
import * as Discord from 'discord.js';

export const helpMe = (message : Discord.Message) => {
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#fcfc00')
    .setTitle('Comandos disponíveis')
    .setAuthor('Pedro Bohn Costa', 'https://openjusticecourtofprotection.files.wordpress.com/2020/07/scale.gif')
    .setDescription(`
    Comandos 'Gerais':
    !help - Guia de comandos
    !olá - Dá oi para o bot
    !version - versão do bot
    !aslan - Xinga o aslan ou quem você escolher
    !elogio - Elogia você <3!
    !emoji - 

    Funções de segundo-plano:
    loli - você já sabe né...

    ${message.author.id === process.env.AUTHOR_ID 
        ? 	`Comandos '${process.env.ADMIN_PREFIX}':
            !boas-vindas - gera mensagem de boas vindas
            !clear - Limpa chat`
            : ''}
    `)
    .setThumbnail('https://www.clipartmax.com/png/full/99-991676_law-book-icon-png.png')
    .setTimestamp()
    .setFooter( process.env.BOT_NAME, 'https://www.pngrepo.com/png/92783/512/checked.png');

    message.channel.send({embeds:[exampleEmbed]});
}