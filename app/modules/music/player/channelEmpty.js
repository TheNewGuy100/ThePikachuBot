module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - A música parou porque não há mais nenhum membro no canal de voz!`);
};