import { MainChannel } from '@botconfig';
import * as Discord from 'discord.js';

export function clearResponses (message: Discord.Message, client: Discord.Client, timeout: number) {
    setTimeout(() => {
        
        message.delete()
        
        message.channel.messages.fetch(client.user.lastMessageID).then((botMessage : Discord.Message) => {
    
        botMessage.delete()
    })}, timeout);
}

export class systemError {
	code: number;
	description: string;

	constructor (code, description, client : Discord.Client, exception ?, message ?: Discord.Message) {
		this.code = code;
		this.description = description;

		const Embed = new Discord.MessageEmbed()
        .setColor('#fcfc00')
        .setAuthor( code === 0 ? ''
                            : code >= 300 && code < 500 
                                ? `Code status: ${code}🟨`
                                    : `Code status: ${code}🟥`)
        if (`${description}` !== undefined ? '' : `${description}`) {
            Embed.setTitle(`${description}`);
        }

        if (`${exception}` !== undefined ? '' : `${exception}`) {
            Embed.setDescription(`${exception}`);
        } else {
            Embed.setDescription(`**NÃO ENTENDI O QUE FAZER**`);
        }

        console.log(' | exception caught: ', this.code = code, this.description = description)

        if ( message === undefined ) {

            let channel: Discord.Channel = client.channels.cache.get(`${MainChannel}`)

            if (channel.isText()) {
                channel.send(Embed)
            }

        } else {
            message.channel.send(Embed);
            clearResponses(message, client, 3000)
        }
	}
}

export class globalModules {
    
    static async getLoliScum(message: Discord.Message, client: Discord.Client) {
        try {
            var content = message.content.toLowerCase().split(' ')
            for (const chave of content) {
                if (chave === 'loli') {
                
                    const embed = new Discord.MessageEmbed()
                    .setTitle(`${message.author.username} you are goind to jail BOY!`)
                    .setColor('#fcfc00')
                    .setImage('https://thumbs.gfycat.com/FrailWelldocumentedBlackbuck-size_restricted.gif')
    
                    message.channel.send(embed);
                }
            }
        } catch (error) {
            console.log(error)
            return new systemError(500, `loli catch couldn't handle`, client, error)
        }
    }

    static async tapaNaGostosa(message: Discord.Message, client: Discord.Client) {
        try {
            var content = message.content.toLowerCase()
                if (content === 'tapa na gostosa') {
                
                    const embed = new Discord.MessageEmbed()
                    .setTitle(`${message.author.username} deu um tapa na gostosa!`)
                    .setColor('#fcfc00')
                    .setImage('https://media.tenor.com/images/a46f5e9a57334b49e349b27736e03b4f/tenor.gif')
                    .setFooter('Yes baby! Thank you!')
    
                    message.channel.send(embed);
            }
        } catch (error) {
            console.log(error)
            return new systemError(500, `tapaNaGostosa catch couldn't handle`, client, error)
        }
    }

    
    
}