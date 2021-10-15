import * as Discord from "discord.js";
import { clearResponses } from ".";

export const searchError = (channel: Discord.TextBasedChannels, message: string) => {
    const embed = new Discord.MessageEmbed()
    .setTitle(message);

    channel.send({embeds: [embed]});
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

            let channel: Discord.Channel = client.channels.cache.get(`${process.env}`)

            if (channel.isText()) {
                channel.send({embeds:[Embed]})
            }

        } else {
            message.channel.send({embeds:[Embed]});
            clearResponses(message, client, 3000)
        }
	}
}