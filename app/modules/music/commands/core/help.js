module.exports = {
    name: 'help',
    aliases: ['h'],
    category: 'Core',
    utilisation: '{prefix}help <command name>',

    execute(client, message, args) {
        if (!args[0]) {
            const music = message.client.commands.filter(x => x.category == 'Music').map((x) => '`' + x.name + '`').join(', ');

            message.channel.send({
                embed: {
                    color: 'blue',
                    author: { name: 'Help painel' },
                    footer: { text: 'prefixo do bot e ?' },
                    fields: [
                        { name: 'Music', value: music }                   
                     ],
                    timestamp: new Date()
                },
            });
        } else {
            const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));

            if (!command) return message.channel.send(`${client.emotes.error} - Não encontrei este comando !`);

            message.channel.send({
                embed: {
                    color: 'ORANGE',
                    author: { name: 'Help painel' },
                    footer: { text: 'escrevi sai correndo pau no cu de quem ta lendo' },
                    fields: [
                        { name: 'Nome', value: command.name, inline: true },
                        { name: 'Categoria', value: command.category, inline: true },
                        { name: 'apelido', value: command.aliases.length < 1 ? 'None' : command.aliases.join(', '), inline: true },
                        { name: 'Utilização', value: command.utilisation.replace('{prefix}', client.config.discord.prefix), inline: true },
                    ],
                    timestamp: new Date(),
                    description: 'Find information on the command provided.\nMandatory arguments `[]`, optional arguments `<>`.',
                }
            });
        };
    },
};