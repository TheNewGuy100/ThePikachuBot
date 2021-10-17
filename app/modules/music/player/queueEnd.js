module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - A música parou porque não há mais música na fila !`);
};