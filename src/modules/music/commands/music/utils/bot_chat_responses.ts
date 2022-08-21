
export const timeoutDisconnect = (client, message) => {
    message.channel.send(`${client.emotes.error} - A música parou porque fui desconectado do canal !`);
};

export const channelEmptyError = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - A música parou porque não há mais nenhum membro no canal de voz!`);
};

export const musicAddedToPlaylist = (client, message, queue, playlist) => {
    message.channel.send(`${client.emotes.music} - ${playlist.title} foi adicionado à fila (**${playlist.tracks.length}** songs) !`);
};

export const queueEnd = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - A música parou porque não há mais música na fila !`);
};

export const searchCancel = (client, message, query, tracks) => {
    message.channel.send(`${client.emotes.error} - Você não forneceu uma resposta válida ... Envie o comando novamente !`);
};

export const searchInvalidResponse = (client, message, query, tracks, content, collector) => {
    if (content === 'cancel') {
        collector.stop();
        return message.channel.send(`${client.emotes.success} - A seleção foi ** cancelada **!`);
    } else message.channel.send(`${client.emotes.error} - Você deve enviar um número válido entre ** 1 ** e **${tracks.length}** !`);
};

export const searchResults = (client, message, query, tracks) => {
    message.channel.send({
        embed: {
            color: 'BLUE',
            author: { name: `Aqui estão os resultados da sua pesquisa para ${query}` },
            footer: { text: 'bot criado por um genio louco' },
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    });
};

export const trackAdded = (client, message, queue, track) => {
    message.channel.send(`${client.emotes.music} - ${track.title} foi adicionado à fila!`);
};

export const trackStart = (client, message, track) => {
    message.channel.send(`${client.emotes.music} - tocando agora ${track.title} para dentro ${message.member.voice.channel.name} ...`);
};

export const moduleReady = async (client) => {
    console.log(`Ready on ${client.guilds.cache.size} servidores, para um total de ${client.users.cache.size} usuarios`);

    client.user.setActivity(client.config.discord.activity);
};
