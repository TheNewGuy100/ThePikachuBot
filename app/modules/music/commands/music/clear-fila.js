module.exports = {
    name: 'clear-file',
    aliases: ['cq'],
    category: 'Music',
    utilisation: '{prefix}clear-fila',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Você não está em um canal de voz !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Você não está no mesmo canal de voz!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Nenhuma música tocando atualmente !`);

        if (client.player.getQueue(message).tracks.length <= 1) return message.channel.send(`${client.emotes.error} - Só há uma música na fila.`);

        client.player.clearQueue(message);

        message.channel.send(`${client.emotes.success} - A fila acabou de ser  removida!`);
    },
};