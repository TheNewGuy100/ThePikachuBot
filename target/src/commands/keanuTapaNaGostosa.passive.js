"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const Discord = __importStar(require("discord.js"));
class BotKeanuTapaNaGostosa {
    getInfo() {
        return {
            description: 'Detecta quando alguém quer dar um tapa na gostosa',
            type: 'passive'
        };
    }
    getCommandOrName() {
        return "O Tapa na Gostosa";
    }
    handleMessage(userMessage) {
        return __awaiter(this, void 0, void 0, function* () {
            var content = userMessage.content.toLowerCase();
            if (content === process.env.TAPA_NA_GOSTOSA) {
                const embed = new Discord.MessageEmbed()
                    .setTitle(`${userMessage.author.username} deu um tapa na gostosa!`)
                    .setColor('#fcfc00')
                    .setImage('https://media.tenor.com/images/a46f5e9a57334b49e349b27736e03b4f/tenor.gif')
                    .setFooter('Yes baby! Thank you!');
                userMessage.channel.send({ embeds: [embed] });
            }
        });
    }
}
exports.default = BotKeanuTapaNaGostosa;
//# sourceMappingURL=keanuTapaNaGostosa.passive.js.map