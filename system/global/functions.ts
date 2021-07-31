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

	constructor (code, description, client : Discord.Client, exception, message ?: Discord.Message) {
		this.code = code;
		this.description = description;

		const Embed = new Discord.MessageEmbed()
        .setColor('#fcfc00')
        .setAuthor( code >= 300 && code < 500 
                        ? `Code status: ${code}🟨`
                            : `Code status: ${code}🟥`)
        .setTitle(`${description}`)
        .setDescription(`${exception}`)

        if (code >= 300 && code < 400) {
            
        }

        console.log(message);
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