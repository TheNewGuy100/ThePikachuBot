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
const language_1 = require("../language");
const application_1 = require("../application");
const models_1 = require("../models");
class WelcomePage {
    getInfo() {
        return {
            description: 'Cria uma página de boas-vinda onde manda mensagens e cards',
            type: 'entry'
        };
    }
    getCommandOrName() {
        return "Gerador de Tela de boas-vindas";
    }
    handleMessage(userMessage) {
        return __awaiter(this, void 0, void 0, function* () {
            if (application_1.Application.welcome_channel.id === process.env.WELCOME_CHANNEL) {
                (yield application_1.Application.welcome_channel.messages.fetch({ limit: 100 })).map((content) => {
                    content.delete().catch();
                });
            }
            let messageSent = yield application_1.Application.welcome_channel.send(models_1.WelcomePageMock);
            messageSent.react((0, language_1.RELATION_ROLES_WITH_EMOJIS)().filter((emoji) => emoji.role === process.env.WELCOME_ROLE)[0].emoji);
        });
    }
}
exports.default = WelcomePage;
//# sourceMappingURL=welcomePage.passive.js.map