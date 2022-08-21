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
const Axios = __importStar(require("axios"));
const index_1 = require("../utils/index");
const language_1 = require("../language");
const stringRemoveCommandFromParam_1 = require("../utils/stringRemoveCommandFromParam");
class BotKonachanSearchNSFW {
    getInfo() {
        return {
            description: "Comando para utilizar a API do konachan (NSFW)",
            type: 'active'
        };
    }
    getCommandOrName() {
        return process.env.PREFIX + process.env.KONACHAN_COMMAND;
    }
    handleMessage(userMessage) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (userMessage.channelId === process.env.NSFW_CHANNEL) {
                    const messageEmbed = userMessage.channel.send({
                        embeds: [
                            new Discord.MessageEmbed().setImage('https://www.davidkingsbury.co.uk/wp-content/uploads/2021/08/lg.ring-loading-gif.gif')
                        ]
                    });
                    const response = (yield Axios.default.get(`${process.env.KONACHAN_LINK}post.json`, { params: (0, stringRemoveCommandFromParam_1.stringRemoveCommandFromParams)(userMessage) })).data;
                    if (response.length === 0) {
                        return (0, index_1.searchError)(userMessage, language_1.SEARCH_RESULT_RETURNED_EMPTY);
                    }
                    const array_images = response.map((item) => {
                        return item.file_url;
                    });
                    const randomChoose = array_images[Math.floor(Math.random() * array_images.length)];
                    (yield messageEmbed).delete();
                    userMessage.channel.send(randomChoose);
                    userMessage.delete();
                }
                else {
                    (0, index_1.searchError)(userMessage, language_1.USE_THE_NSFW_CHAT_FOR_THIS);
                }
            }
            catch (err) {
                yield userMessage.channel.bulkDelete(2);
                const message = yield userMessage.channel.send({
                    embeds: [
                        new Discord.MessageEmbed()
                            .setTitle("Lamento, tive uma falha na procura")
                            .setImage('https://c.tenor.com/lmA7VALYIAsAAAAC/sad-pikachu.gif')
                    ]
                });
                (0, index_1.clearResponses)(message, 10000);
            }
        });
    }
}
exports.default = BotKonachanSearchNSFW;
//# sourceMappingURL=konachanSearch.command.js.map