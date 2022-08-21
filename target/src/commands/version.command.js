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
const utils_1 = require("../utils");
class BotVersion {
    getInfo() {
        return {
            description: "Comando para ver a versão do bot",
            type: 'active'
        };
    }
    getCommandOrName() {
        return process.env.PREFIX + process.env.BOT_VERSION_COMMAND;
    }
    handleMessage(userMessage) {
        return __awaiter(this, void 0, void 0, function* () {
            const Embed = new Discord.MessageEmbed()
                .setColor('#fcfc00')
                .setTitle('TheNextBot')
                .setAuthor('Author: Pedro Bohn Costa')
                .setThumbnail('https://i.imgur.com/NG0cOQO.gif')
                .setDescription(`Versão: 1.2.1`);
            const message_sent = yield userMessage.channel.send({ embeds: [Embed] });
            (0, utils_1.clearResponses)(message_sent, 10000, userMessage);
        });
    }
}
exports.default = BotVersion;
//# sourceMappingURL=version.command.js.map