module.exports = (client, error, message) => {
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
};
