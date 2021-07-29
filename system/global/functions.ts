import * as Discord from 'discord.js';

export function clearResponses (message: Discord.Message, client: Discord.User, timeout: number) {
    setTimeout(() => {
        message.delete()
        
        message.channel.messages.fetch(client.lastMessageID).then((botMessage : Discord.Message) => {
    
        botMessage.delete()
    })}, timeout);
}