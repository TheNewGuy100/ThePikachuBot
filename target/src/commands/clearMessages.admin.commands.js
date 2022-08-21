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
class AdminClearMessages {
    getInfo() {
        return {
            description: "Comando para limpar o chat",
            type: 'admin'
        };
    }
    getCommandOrName() {
        return process.env.ADMIN_PREFIX + process.env.CLEAR_ALL_COMMAND;
    }
    handleMessage(userMessage) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (userMessage.member.roles.cache.some((role) => role.name === process.env.OWNER_ROLE_NAME ||
                    role.name === process.env.ADMINISTRATOR_ROLE_NAME ||
                    role.name === process.env.MODERATOR_ROLE_NAME)) {
                    let userMessageContent = userMessage.content.split(' ');
                    if (!isNaN(userMessageContent[1])) {
                        const Embed = new Discord.MessageEmbed();
                        yield userMessage.channel.bulkDelete(parseInt(userMessageContent[1]), true)
                            .then((content) => {
                            Embed.setColor('#fcfc00');
                            Embed.setTitle(`Deletei ${content.size} mensagens`);
                            if (content.size < Number(userMessageContent[1])) {
                                Embed.setDescription("Não consigo deletar mensagens após 14 dias, desculpa.");
                            }
                        });
                        const message = yield userMessage.channel.send({ embeds: [Embed] });
                        (0, utils_1.clearResponses)(message, 8000);
                    }
                    else {
                        const Embed = new Discord.MessageEmbed()
                            .setColor('#fcfc00')
                            .setTitle(`Operação inválida`);
                        const message = yield userMessage.channel.send({ embeds: [Embed] });
                        (0, utils_1.clearResponses)(message, 3000, userMessage);
                    }
                }
                else {
                    const data = new Discord.MessageEmbed({
                        title: ""
                    });
                    userMessage.channel.send({
                        embeds: [
                            data
                        ]
                    });
                }
            }
            catch (error) {
                console.log("deu erro");
            }
        });
    }
}
exports.default = AdminClearMessages;
//# sourceMappingURL=clearMessages.admin.commands.js.map