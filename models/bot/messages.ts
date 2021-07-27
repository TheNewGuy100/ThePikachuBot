import Discord from 'discord.js';
import fs from 'fs';

export class botMessages {
	
	static bot_version(message) {
		const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#fcfc00')
		.setTitle('TheNextBot')
		.setAuthor('Nome real:')
		.setThumbnail('https://wiki.teamfortress.com/w/images/thumb/6/6a/Engineertaunt1.PNG/350px-Engineertaunt1.PNG')
		.setDescription(`Versão: 0.0.15`)
	
		message.channel.send(exampleEmbed);
	}

	static mensagemErro(message) {
		try {
			fs.readdir(`./images/`, () => {
				const attachment = new Discord.MessageAttachment(`./images/error-pikachu.png`)
				const embed = new Discord.MessageEmbed()
				.setDescription("ERRO | COMANDO INEXISTENTE")
				.setColor('#fcfc00')
				//.attachFiles(attachment)
				.setImage(`attachment://error-pikachu.png`);
			
				message.channel.send({embed})
				.then( (message) => {
					setTimeout(() => {
						message.delete() 
					}, 5000);
				})
			});
		} catch (error) {
			console.log(' | ERROR - ocorrido em "mensagemErro()"')
		}
	}

	static helpMe(message) {
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
	
		Comandos 'Administrado':
		!boas-vindas - gera mensagem de boas vindas
		!clear - Limpa chat
		`)
		.setThumbnail('https://www.clipartmax.com/png/full/99-991676_law-book-icon-png.png')
		.setTimestamp()
		.setFooter(global.bot_name , 'https://www.pngrepo.com/png/92783/512/checked.png');
	
		message.channel.send(exampleEmbed);
	}

	static meDaOi(message) {
        const Embed = new Discord.MessageEmbed()
        .setColor('#fcfc00')
        .setTitle('Pika Pika!')
        message.channel.send(Embed);
    }
}

export class systemError {
	code: number;
	description: string;

	constructor (code, description) {
		this.code = code;
		this.description = description;
	}
}