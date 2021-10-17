export const BOT_COMMANDS_ARRAY = () => {
    return [
        {
            name: process.env.HELLO_COMMAND,
            description: 'Dá um oi para o bot'
        },
        {
            name: process.env.RULE34_COMMAND,
            description: "Comando para utilizar a API do rule34"
        },
        {
            name: process.env.KONACHAN_COMMAND,
            description: "Comando para utilizar a API do konachan"
        },
        {
            name: process.env.HELP_BOT_COMMAND,
            description: "Comando para obter a lista de help do bot"
        },
        {
            name: process.env.CLEAR_ALL_COMMAND,
            description: "Comando para limpar o chat"
        },
        {
            name: process.env.BOT_VERSION_COMMAND,
            description: "Comando para ver a versão do bot"
        },
        {
            name: process.env.CURSE_SOMEONE_COMMAND,
            description: "Comando para xingar alguém"
        },
        {
            name: process.env.PRAISE_YOU_COMMAND,
            description: "Comando para o bot elogiar você"
        }
    ]
}

export const BOT_SECOND_PLAN_COMMANDS_ARRAY = () => {
    return [
        {
            name: process.env.LOLI_DETECTOR,
            description: 'Responde chamando o fbi para o usuário'
        }
    ]
}

export const BOT_ADMINISTRATOR_COMMANDS_ARRAY = () => {
    return [
        {
            name: process.env.HELLO_COMMAND,
            description: 'nenhum ainda'
        }
    ]
}

