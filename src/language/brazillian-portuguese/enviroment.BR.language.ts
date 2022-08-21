import * as Discord from 'discord.js';
import { Application } from "../../application";
import { resolve } from 'path';
import * as fs from 'fs';
import { MODULES_INIT } from "./enviroment.BR.modules";


    export const API_SENDING_INFORMATION = 'Enviando informações de comandos da aplicação'
    export const API_SENDING_INFORMATION_SUCCESS = 'Dados de comandos disponíveis enviados'
    export const API_SENDING_INFORMATION_DENIED = 'Envio negado'
    export const REDIS_INIT_ERROR = 'ERROR, Redis not detected or not initialized'
    export const REDIS_INIT_SUCCESS = 'OK'
    export const USE_THE_NSFW_CHAT_FOR_THIS = 'UTILIZE O CHAT NSFW PARA ISSO'
    export const LOLI_DETECTOR_MESSAGE = 'you are goind to jail BOY!'
    export const HELP_COMMAND_DESCRIPTION = 'lista de todos os comandos disponíveis do bot, de categorias de comandos de usuário, administrador e de segundo plano'
    export const BOT_UPDATE_IMAGE_ERROR = "não foi possível atualizar a imagem do bot"
    export const SEARCH_RESULT_RETURNED_EMPTY = 'SEM RESULTADOS PRA PESQUISA'
    export const BOT_HELLO_MESSAGE = 'Pika Pika!'
    export const BOT_HELP_TITLE = 'Comandos disponíveis'

    export const BOT_LOGIN_MESSAGE = (user) => `Logado como ${user}!`

    export const RELATION_ROLES_WITH_EMOJIS = () => [
        {
            emoji: Application.welcome_emoji,
            role: process.env.WELCOME_ROLE
        },
        {
            emoji: Application.osu_emoji,
            role: process.env.OSU_ROLE
        },
        {
            emoji: Application.garrysmod_emoji,
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
        