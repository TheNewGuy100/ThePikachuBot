"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CHAT_PRAISE_ME = exports.CHAT_CURSES = exports.RELATION_ROLES_WITH_EMOJIS = exports.BOT_LOGIN_MESSAGE = exports.BOT_HELP_TITLE = exports.BOT_HELLO_MESSAGE = exports.SEARCH_RESULT_RETURNED_EMPTY = exports.BOT_UPDATE_IMAGE_ERROR = exports.HELP_COMMAND_DESCRIPTION = exports.LOLI_DETECTOR_MESSAGE = exports.USE_THE_NSFW_CHAT_FOR_THIS = exports.REDIS_INIT_SUCCESS = exports.REDIS_INIT_ERROR = exports.API_SENDING_INFORMATION_DENIED = exports.API_SENDING_INFORMATION_SUCCESS = exports.API_SENDING_INFORMATION = void 0;
const application_1 = require("../../application");
exports.API_SENDING_INFORMATION = 'Enviando informações de comandos da aplicação';
exports.API_SENDING_INFORMATION_SUCCESS = 'Dados de comandos disponíveis enviados';
exports.API_SENDING_INFORMATION_DENIED = 'Envio negado';
exports.REDIS_INIT_ERROR = 'ERROR, Redis not detected or not initialized';
exports.REDIS_INIT_SUCCESS = 'OK';
exports.USE_THE_NSFW_CHAT_FOR_THIS = 'UTILIZE O CHAT NSFW PARA ISSO';
exports.LOLI_DETECTOR_MESSAGE = 'you are goind to jail BOY!';
exports.HELP_COMMAND_DESCRIPTION = 'lista de todos os comandos disponíveis do bot, de categorias de comandos de usuário, administrador e de segundo plano';
exports.BOT_UPDATE_IMAGE_ERROR = "não foi possível atualizar a imagem do bot";
exports.SEARCH_RESULT_RETURNED_EMPTY = 'SEM RESULTADOS PRA PESQUISA';
exports.BOT_HELLO_MESSAGE = 'Pika Pika!';
exports.BOT_HELP_TITLE = 'Comandos disponíveis';
const BOT_LOGIN_MESSAGE = (user) => `Logado como ${user}!`;
exports.BOT_LOGIN_MESSAGE = BOT_LOGIN_MESSAGE;
const RELATION_ROLES_WITH_EMOJIS = () => [
    {
        emoji: application_1.Application.welcome_emoji,
        role: process.env.WELCOME_ROLE
    },
    {
        emoji: application_1.Application.osu_emoji,
        role: process.env.OSU_ROLE
    },
    {
        emoji: application_1.Application.garrysmod_emoji,
        role: process.env.GARRYS_MOD_ROLE
    }
];
exports.RELATION_ROLES_WITH_EMOJIS = RELATION_ROLES_WITH_EMOJIS;
const CHAT_CURSES = () => [
    {
        img: 'https://66.media.tumblr.com/tumblr_m6rer0aO1X1r2fs0co1_500.gif',
        chat: 'vai se foder'
    },
    {
        img: 'https://i.kym-cdn.com/photos/images/original/001/027/169/b4a.gif',
        chat: 'já foi se foder hoje?'
    }
];
exports.CHAT_CURSES = CHAT_CURSES;
const CHAT_PRAISE_ME = () => [
    {
        img: 'https://66.media.tumblr.com/tumblr_m6rer0aO1X1r2fs0co1_500.gif',
        chat: 'está lindo hoje'
    },
    {
        img: 'https://i.kym-cdn.com/photos/images/original/001/027/169/b4a.gif',
        chat: 'está adorável hoje'
    }
];
exports.CHAT_PRAISE_ME = CHAT_PRAISE_ME;
//# sourceMappingURL=enviroment.BR.language.js.map