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
exports.resume = void 0;
function resume(client, message) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!message.member.voice.channel)
            return message.channel.send(`${client.emotes.error} - Você não está em um canal de voz !`);
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id)
            return message.channel.send(`${client.emotes.error} - Você não está no mesmo canal de voz!`);
        if (!client.player.getQueue(message))
            return message.channel.send(`${client.emotes.error} - Nenhuma música tocando atualmente !`);
        if (!client.player.getQueue(message).paused)
            return message.channel.send(`${client.emotes.error} - A musica ja esta tocando !`);
        client.player.resume(message);
        message.channel.send(`${client.emotes.success} - Song ${client.player.getQueue(message).playing.title} resumed !`);
    });
}
exports.resume = resume;
;
//# sourceMappingURL=resume.js.map