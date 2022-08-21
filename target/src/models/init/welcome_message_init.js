"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelWelcome = void 0;
const discord_js_1 = __importDefault(require("discord.js"));
class ChannelWelcome {
    static bemVindo(message) {
        // MENSAGEM DE BOAS VINDAS DO BOT EM SÍ
        const exampleEmbed = new discord_js_1.default.MessageEmbed()
            .setColor('#fcfc00')
            .setTitle('Oi! meu nome é ' + global.bot_name + '\neu sou o bot desse servidor. Vou estar aqui para o ajudar no que precisar!');
        message.channel.send(exampleEmbed);
        // ENVIADO
        // MENSAGEM DE REGRAS 
        const embedInicial = new discord_js_1.default.MessageEmbed()
            .setColor('#fcfc00')
            .setTitle('Atento as regras')
            .setDescription(`1° Respeito acima de tudo
                         2° Proibido referencia de outros servidores aqui, a não ser servidores parceiros
                         3° Qualquer mimimi referente a LGBTQ, Política, etc... será ignorado.
                         4° `);
        message.channel.send(embedInicial);
        // ENVIADO
    }
}
exports.ChannelWelcome = ChannelWelcome;
//# sourceMappingURL=welcome_message_init.js.map