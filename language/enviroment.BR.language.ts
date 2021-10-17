import chalk from "chalk"
import * as Discord from 'discord.js';

// BOT API
    // SENDING INFORMATION
    export const BOT_LOGIN_MESSAGE = (user) => `Logado como ${chalk.green(user)}!`
    export const API_SENDING_INFORMATION = 'Enviando informações de comandos da aplicação'
    export const API_SENDING_INFORMATION_SUCCESS = 'Dados de comandos disponíveis enviados'
    export const API_SENDING_INFORMATION_DENIED = 'Envio negado'
    export const REDIS_INIT_ERROR = 'ERROR, Redis not detected or not initialized'
    export const REDIS_INIT_SUCCESS = 'OK'

// BOT COMMANDS
    // CONFIGURATION TO THE DISCORD API REGISTER THE BOT COMMANDS ( CHANGE ONLY THE DESCRIPTIONS IF YOU WISH )
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
                name: process.env.HELLO_COMMAND,
                description: 'Dá um oi para o bot'
            },
            {
                name: process.env.RULE34_COMMAND,
                description: "Comando para utilizar a API do rule34"
            },
        ]
    }

    export const BOT_ADMINISTRATOR_COMMANDS_ARRAY = () => {
        return [
            {
                name: process.env.HELLO_COMMAND,
                description: 'Dá um oi para o bot'
            },
            {
                name: process.env.RULE34_COMMAND,
                description: "Comando para utilizar a API do rule34"
            },
        ]
    }

    // BOT TEXTS
        // BOT INIT IMAGE
        export const BOT_UPDATE_IMAGE_ERROR = "não foi possível atualizar a imagem do bot"
        // SEARCH RESULT TO NSFW SEARCHS
        export const SEARCH_RESULT_RETURNED_EMPTY = 'SEM RESULTADOS PRA PESQUISA'
        // HELLO COMMAND
        export const BOT_HELLO_MESSAGE = 'Pika Pika!'
        // HELP COMMAND
        export const BOT_HELP_TITLE = 'Comandos disponíveis'
        export const BOT_HELP_FIELDS = (message: Discord.Message): Discord.EmbedFieldData[] => {

            const mapCommandsPrimmary: string[] = BOT_COMMANDS_ARRAY().map((command) => {
                return "**" + process.env.PREFIX + command.name + "** | " + command.description + "\n"
            })
            const primmaryCommandsAsString = mapCommandsPrimmary.join('');

            const mapSecondaryCommands = BOT_SECOND_PLAN_COMMANDS_ARRAY().map((command) => {
                return "**" + command.name + "** | " + command.description + "\n"
            })
            const secondaryCommandsAsString = mapSecondaryCommands.join('');

            const mapAdministratorCommands = BOT_ADMINISTRATOR_COMMANDS_ARRAY().map((command) => {
                return "**" + command.name + "** | " + command.description + "\n"
            })
            const administratorCommandsAsString = mapAdministratorCommands.join('');

            let fields: Discord.EmbedFieldData[] = [
                { name: "📰 ***Comandos Gerais***", value: primmaryCommandsAsString, inline: false},
                { name: "☑️ ***Funções de segundo-plano***", value: secondaryCommandsAsString, inline: false}
            ]

            if (message.author.id === process.env.AUTHOR_ID || message.member.roles.cache.some((role) => role.name === process.env.ADMINISTRATOR_ROLE_NAME)) {
                fields.push({
                    name: "📠 ***Comando de administração***",
                    value: administratorCommandsAsString,
                    inline: false
                })
            }
            
            return fields;
        }

export const RELATION_ROLES_WITH_EMOJIS = () => [
    {
        emoji: "899102358691262474",
        role: process.env.WELCOME_ROLE
    },
    {
        emoji: "871596046667624529",
        role: process.env.OSU_ROLE
    },
    {
        emoji: "816128758917496832",
        role: process.env.GARRYS_MOD_ROLE
    }
]


    
    
        