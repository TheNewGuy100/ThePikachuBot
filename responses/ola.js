const Discord = require('discord.js');
const {bot_name} = require('../config.json')

module.exports =  function meDaOi(message) {
    const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#fcfc00')
	.setTitle('Pika Pika!')
    message.channel.send(exampleEmbed);
}