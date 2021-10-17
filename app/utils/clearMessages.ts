import * as Discord from 'discord.js';

export function clearResponses (message: Discord.Message, message_sent: Discord.Message, timeout: number) {
    setTimeout(() => {
        message.delete()
        message_sent.delete()
    }, timeout);
}