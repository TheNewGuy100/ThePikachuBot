
import * as Discord from 'discord.js';
import { BOT_HELP_FIELDS, BOT_HELP_TITLE } from '../../../language/enviroment.BR.language';

export const helpMe = (message : Discord.Message) => {
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#fcfc00')
    .setTitle(BOT_HELP_TITLE)
    .setAuthor('Pedro Bohn Costa', 'https://openjusticecourtofprotection.files.wordpress.com/2020/07/scale.gif')
    .setDescription("some description")
    .setThumbnail('https://www.clipartmax.com/png/full/99-991676_law-book-icon-png.png')
    .setTimestamp()
    .setFooter( process.env.BOT_NAME, 'https://www.pngrepo.com/png/92783/512/checked.png')
    .setFields(BOT_HELP_FIELDS(message))
    
    message.channel.send({embeds:[exampleEmbed]});
}