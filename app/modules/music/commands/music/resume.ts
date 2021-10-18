
export async function resume(client, message) {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Você não está em um canal de voz !`);

    if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Você não está no mesmo canal de voz!`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Nenhuma música tocando atualmente !`);

    if (!client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} - A musica ja esta tocando !`);

    client.player.resume(message);

    message.channel.send(`${client.emotes.success} - Song ${client.player.getQueue(message).playing.title} resumed !`);

};