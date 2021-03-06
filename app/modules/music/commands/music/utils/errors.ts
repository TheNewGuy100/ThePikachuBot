import * as Discord from 'discord.js';

export const botError = (client, error, message) => {
    switch (error) {
        case 'Nãojogar':
            message.channel.send(`${client.emotes.error} - Não há música sendo tocada neste serviço !`);
            break;
        case 'Nãoconectado':
            message.channel.send(`${client.emotes.error} - Você não está conectado a nenhum canal de voz !`);
            break;
        case 'Incapazdeentrar':
            message.channel.send(`${client.emotes.error} - Não consigo entrar no seu canal de voz, verifique minhas permissões !`);
            break;
    };
}

export const searchError = (client, message, query) => {
    message.channel.send(`${client.emotes.error} - Nenhum resultado encontrado no YouTube para${query} !`);
};

export const moduleMusicBotReady = (client, message) => {
    if (message.author.bot || message.channel.type === 'dm') return;

    const prefix = client.config.discord.prefix;

    if (message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));

    if (cmd) cmd.execute(client, message, args);
};