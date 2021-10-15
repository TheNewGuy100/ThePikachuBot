import chalk from "chalk"

// BOT API
    // SENDING INFORMATION
    export const BOT_LOGIN_MESSAGE = (user) => `Logado como ${chalk.green(user)}!`
    export const API_SENDING_INFORMATION = 'Enviando informações de comandos da aplicação'
    export const API_SENDING_INFORMATION_SUCCESS = 'Dados de comandos disponíveis enviados'
    export const API_SENDING_INFORMATION_DENIED = 'Envio negado'

// BOT COMMANDS
    // CONFIGURATION TO THE DISCORD API REGISTER THE BOT COMMANDS ( CHANGE ONLY THE DESCRIPTIONS IF YOU WISH )
    export const BOT_COMMANDS_ARRAY = [
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

    // BOT ERRORS
        // ERROR UPDATING THE BOT IMAGE
        export const BOT_UPDATE_IMAGE_ERROR = "não foi possível atualizar a imagem do bot"
