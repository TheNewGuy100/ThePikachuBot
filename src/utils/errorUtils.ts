import * as Discord from "discord.js";
import { clearResponses } from ".";

export const searchError = async(messageReceived: Discord.Message, message: string) => {
    const embed = new Discord.MessageEmbed()
    .setTitle(message);

    const errorSent = await messageReceived.channel.send({embeds: [embed]});
    setTimeout(() => {
        messageReceived.delete();
        errorSent.delete();
    }, 3000)
}

export class systemError {
	code: number;
	description: string;

    private async returnError(message: Discord.Message, code, description, exception) {

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

        const message_sent = await message.channel.send({embeds:[Embed]});
        clearResponses(message_sent, 3000, message);
    }

	constructor (code, description, exception ?, message ?: Discord.Message) {
		this.code = code;
		this.description = description;

        console.log(' | exception caught: ', this.code = code, this.description = description)

        this.returnError(message, code, description, exception);
	}
}