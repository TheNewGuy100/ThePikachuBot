"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.moduleReady = exports.trackStart = exports.trackAdded = exports.searchResults = exports.searchInvalidResponse = exports.searchCancel = exports.queueEnd = exports.musicAddedToPlaylist = exports.channelEmptyError = exports.timeoutDisconnect = void 0;
const timeoutDisconnect = (client, message) => {
    message.channel.send(`${client.emotes.error} - A música parou porque fui desconectado do canal !`);
};
exports.timeoutDisconnect = timeoutDisconnect;
const channelEmptyError = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - A música parou porque não há mais nenhum membro no canal de voz!`);
};
exports.channelEmptyError = channelEmptyError;
const musicAddedToPlaylist = (client, message, queue, playlist) => {
    message.channel.send(`${client.emotes.music} - ${playlist.title} foi adicionado à fila (**${playlist.tracks.length}** songs) !`);
};
exports.musicAddedToPlaylist = musicAddedToPlaylist;
const queueEnd = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - A música parou porque não há mais música na fila !`);
};
exports.queueEnd = queueEnd;
const searchCancel = (client, message, query, tracks) => {
    message.channel.send(`${client.emotes.error} - Você não forneceu uma resposta válida ... Envie o comando novamente !`);
};
exports.searchCancel = searchCancel;
const searchInvalidResponse = (client, message, query, tracks, content, collector) => {
    if (content === 'cancel') {
        collector.stop();
        return message.channel.send(`${client.emotes.success} - A seleção foi ** cancelada **!`);
    }
    else
        message.channel.send(`${client.emotes.error} - Você deve enviar um número válido entre ** 1 ** e **${tracks.length}** !`);
};
exports.searchInvalidResponse = searchInvalidResponse;
const searchResults = (client, message, query, tracks) => {
    message.channel.send({
        embed: {
            color: 'BLUE',
            author: { name: `Aqui estão os resultados da sua pesquisa para ${query}` },
            footer: { text: 'bot criado por um genio louco' },
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    });
};
exports.searchResults = searchResults;
const trackAdded = (client, message, queue, track) => {
    message.channel.send(`${client.emotes.music} - ${track.title} foi adicionado à fila!`);
};
exports.trackAdded = trackAdded;
const trackStart = (client, message, track) => {
    message.channel.send(`${client.emotes.music} - tocando agora ${track.title} para dentro ${message.member.voice.channel.name} ...`);
};
exports.trackStart = trackStart;
const moduleReady = (client) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Ready on ${client.guilds.cache.size} servidores, para um total de ${client.users.cache.size} usuarios`);
    client.user.setActivity(client.config.discord.activity);
});
exports.moduleReady = moduleReady;
//# sourceMappingURL=bot_chat_responses.js.map