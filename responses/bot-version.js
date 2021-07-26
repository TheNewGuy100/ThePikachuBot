const Discord = require('discord.js');
const {bot_name} = require('../config.json')

module.exports =  function bot_version(message) {
    const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#fcfc00')
	.setTitle('TheNextBot')
	.setAuthor('Nome real:')
	.setThumbnail('https://wiki.teamfortress.com/w/images/thumb/6/6a/Engineertaunt1.PNG/350px-Engineertaunt1.PNG')
    .setDescription(`Versão: 0.0.15`)

    message.channel.send(exampleEmbed);
}