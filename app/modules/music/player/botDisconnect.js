module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - A música parou porque fui desconectado do canal !`);
};