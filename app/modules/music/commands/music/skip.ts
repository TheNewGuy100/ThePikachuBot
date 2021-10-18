export async function skip(client, message) {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Você não está em um canal de voz!`);

    if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Você não está no mesmo canal de voz !`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Nenhuma música tocando atualmente !`);

    client.player.skip(message);

    message.channel.send(`${client.emotes.success} - A música atual acaba de ser ** pulada **!`);

};