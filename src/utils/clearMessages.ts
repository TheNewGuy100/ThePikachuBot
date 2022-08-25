import * as Discord from 'discord.js';

export function clearResponses (message_sent: Discord.Message, timeout: number, clearUserMessage?:Discord.Message ) {
    setTimeout(() => {
        message_sent.delete().catch((err) => console.log('não consegui apagar uma mensagem, possivelmente não existe mais'))
        clearUserMessage ? clearUserMessage.delete().catch((err) => console.log('não consegui apagar uma mensagem, possivelmente não existe mais')) : null
    }, timeout);
}