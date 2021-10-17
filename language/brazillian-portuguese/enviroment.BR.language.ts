import chalk from "chalk"
import * as Discord from 'discord.js';
import { USER_SERVICE } from "../../app/application";
import { resolve } from 'path';
import { existsSync } from 'fs';
import { BOT_ADMINISTRATOR_COMMANDS_ARRAY, BOT_COMMANDS_ARRAY, BOT_SECOND_PLAN_COMMANDS_ARRAY } from "./enviroment.BR.information";
import { MODULES_INIT } from "./enviroment.BR.modules";

// BOT API
    // SENDING INFORMATION
    export const BOT_LOGIN_MESSAGE = (user) => `Logado como ${chalk.green(user)}!`
    export const API_SENDING_INFORMATION = 'Enviando informações de comandos da aplicação'
    export const API_SENDING_INFORMATION_SUCCESS = 'Dados de comandos disponíveis enviados'
    export const API_SENDING_INFORMATION_DENIED = 'Envio negado'
    export const REDIS_INIT_ERROR = 'ERROR, Redis not detected or not initialized'
    export const REDIS_INIT_SUCCESS = 'OK'
    export const USE_THE_NSFW_CHAT_FOR_THIS = 'UTILIZE O CHAT NSFW PARA ISSO'
    export const LOLI_DETECTOR_MESSAGE = 'you are goind to jail BOY!'
    export const HELP_COMMAND_DESCRIPTION = 'lista de todos os comandos disponíveis do bot, de categorias de comandos de usuário, administrador e de segundo plano'

// BOT COMMANDS
    // CONFIGURATION TO THE DISCORD API REGISTER THE BOT COMMANDS ( CHANGE ONLY THE DESCRIPTIONS IF YOU WISH )


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
                return "**" + process.env.PREFIX + command.name + "** | " + command.description + "\n"
            })
            const administratorCommandsAsString = mapAdministratorCommands.join('');

            const mapModules = MODULES_INIT.map((command) => {
                return "Prefix **" + command.module_prefix + "** | " + command.module_description + "\n"
            })
            const modulesAsString = mapModules.join('');

            let fields: Discord.EmbedFieldData[] = [
                { name: "📰 ***Comandos Gerais***", value: primmaryCommandsAsString, inline: false},
                { name: "☑️ ***Funções de segundo-plano***", value: secondaryCommandsAsString, inline: false}
            ]

            const getModuleList = resolve(process.env.MODULES_PATH);

            if (existsSync(getModuleList)) {
                fields.push({
                    name: "🔗 ***Módulos instalados no bot***",
                    value: modulesAsString,
                    inline: false
                })
            }

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
        emoji: USER_SERVICE.welcome_emoji,
        role: process.env.WELCOME_ROLE
    },
    {
        emoji: USER_SERVICE.osu_emoji,
        role: process.env.OSU_ROLE
    },
    {
        emoji: USER_SERVICE.garrysmod_emoji,
        role: process.env.GARRYS_MOD_ROLE
    }
]

export const CHAT_CURSES = () => [
    {
        img: 'https://66.media.tumblr.com/tumblr_m6rer0aO1X1r2fs0co1_500.gif',
        chat: 'vai se foder'
    },
    {
        img: 'https://i.kym-cdn.com/photos/images/original/001/027/169/b4a.gif',
        chat: 'já foi se foder hoje?'
    }
]
    
export const CHAT_PRAISE_ME = () => [
    {
        img: 'https://66.media.tumblr.com/tumblr_m6rer0aO1X1r2fs0co1_500.gif',
        chat: 'está lindo hoje'
    },
    {
        img: 'https://i.kym-cdn.com/photos/images/original/001/027/169/b4a.gif',
        chat: 'está adorável hoje'
    }
]
        