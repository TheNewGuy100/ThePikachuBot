import * as Discord from 'discord.js';

export function clearResponses (message_sent: Discord.Message, timeout: number, clearUserMessage?:Discord.Message ) {
    setTimeout(() => {
        message_sent.delete()
        clearUserMessage ? clearUserMessage.delete() : null
    }, timeout);
}