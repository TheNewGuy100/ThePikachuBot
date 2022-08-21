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
class AdminWhipeChatMessages {
    getInfo() {
        return {
            description: "Comando para deletar todas as mensagens do canal recriando ele (não rode em um momento que você sente instabilidade)",
            type: 'admin'
        };
    }
    getCommandOrName() {
        return process.env.ADMIN_PREFIX + process.env.WHIPE_CHAT_COMMAND;
    }
    handleMessage(userMessage) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (userMessage.member.roles.cache.some((role) => role.name === process.env.OWNER_ROLE_NAME ||
                    role.name === process.env.ADMINISTRATOR_ROLE_NAME ||
                    role.name === process.env.MODERATOR_ROLE_NAME)) { }
            }
            catch (error) {
                console.log("deu erro");
            }
        });
    }
}
exports.default = AdminWhipeChatMessages;
//# sourceMappingURL=whipeChat.admin.commands.js.map