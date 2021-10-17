module.exports = async (client) => {
    console.log(`Ready on ${client.guilds.cache.size} servidores, para um total de ${client.users.cache.size} usuarios`);

    client.user.setActivity(client.config.discord.activity);
};