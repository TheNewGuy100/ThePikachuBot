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
exports.volume = void 0;
function volume(client, message, args) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!message.member.voice.channel)
            return message.channel.send(`${client.emotes.error} - Você não está em um canal de voz !`);
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id)
            return message.channel.send(`${client.emotes.error} - Você não está no mesmo canal de voz !`);
        if (!client.player.getQueue(message))
            return message.channel.send(`${client.emotes.error} - Nenhuma música tocando atualmente !`);
        if (!args[0] || isNaN(args[0]) || args[0] === 'Infinity')
            return message.channel.send(`${client.emotes.error} - Por favor insira um número válido !`);
        if (Math.round(parseInt(args[0])) < 1 || Math.round(parseInt(args[0])) > 100)
            return message.channel.send(`${client.emotes.error} - Insira um número válido (entre 1 e 100)!`);
        client.player.setVolume(message, parseInt(args[0]));
        message.channel.send(`${client.emotes.success} - Volume definido para **${parseInt(args[0])}%** !`);
    });
}
exports.volume = volume;
;
//# sourceMappingURL=volume.js.map