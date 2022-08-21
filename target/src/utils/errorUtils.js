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
exports.systemError = exports.searchError = void 0;
const Discord = __importStar(require("discord.js"));
const _1 = require(".");
const searchError = (messageReceived, message) => __awaiter(void 0, void 0, void 0, function* () {
    const embed = new Discord.MessageEmbed()
        .setTitle(message);
    const errorSent = yield messageReceived.channel.send({ embeds: [embed] });
    setTimeout(() => {
        messageReceived.delete();
        errorSent.delete();
    }, 3000);
});
exports.searchError = searchError;
class systemError {
    constructor(code, description, exception, message) {
        this.code = code;
        this.description = description;
        console.log(' | exception caught: ', this.code = code, this.description = description);
        this.returnError(message, code, description, exception);
    }
    returnError(message, code, description, exception) {
        return __awaiter(this, void 0, void 0, function* () {
            const Embed = new Discord.MessageEmbed()
                .setColor('#fcfc00')
                .setAuthor(code === 0 ? ''
                : code >= 300 && code < 500
                    ? `Code status: ${code}🟨`
                    : `Code status: ${code}🟥`);
            if (`${description}` !== undefined ? '' : `${description}`) {
                Embed.setTitle(`${description}`);
            }
            if (`${exception}` !== undefined ? '' : `${exception}`) {
                Embed.setDescription(`${exception}`);
            }
            else {
                Embed.setDescription(`**NÃO ENTENDI O QUE FAZER**`);
            }
            const message_sent = yield message.channel.send({ embeds: [Embed] });
            (0, _1.clearResponses)(message_sent, 3000, message);
        });
    }
}
exports.systemError = systemError;
//# sourceMappingURL=errorUtils.js.map