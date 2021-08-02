import { AuthorId } from './../../system/global/config';
import { BotName, adminPrefix } from '@botconfig';
import { clearResponses, systemError } from '@global';
import Discord from 'discord.js';
import fs from 'fs';

export class botMessages {
	
	static bot_version(message, client) {
		const Embed = new Discord.MessageEmbed()
		.setColor('#fcfc00')
		.setTitle('TheNextBot')
		.setAuthor('Author: Pedro Bohn Costa')
		.setThumbnail('https://i.imgur.com/NG0cOQO.gif')
		.setDescription(`Versão: 0.1.20`)
	
		message.channel.send(Embed);
		clearResponses(message, client, 10000);
	}

	static helpMe(message : Discord.Message) {
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
	
		${message.author.id === AuthorId 
			? 	`Comandos '${adminPrefix}':
				!boas-vindas - gera mensagem de boas vindas
				!clear - Limpa chat`
				: ''}
		`)
		.setThumbnail('https://www.clipartmax.com/png/full/99-991676_law-book-icon-png.png')
		.setTimestamp()
		.setFooter( BotName, 'https://www.pngrepo.com/png/92783/512/checked.png');
	
		message.channel.send(exampleEmbed);
	}

	static meDaOi(message: Discord.Message, client: Discord.Client) {
        const Embed = new Discord.MessageEmbed()
        .setColor('#fcfc00')
        .setTitle('Pika Pika!')
		.setImage('https://i.imgur.com/QsnFI7l.gif')
        message.channel.send(Embed);

		clearResponses(message, client, 3500)
    }

    static elogieMe(message: Discord.Message, client : Discord.Client) {
        try {
        var num = Math.floor( Math.random() /* * db.length*/)
        message.channel.send( '<@' + message.author.id + "> ")
        }
        catch (error) {
            console.log(error)
            return new systemError(500, `elogieMe couldn't handle`, client, error)
        }
    }
}

