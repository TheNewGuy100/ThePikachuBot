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
application_1.Application.client.on('messageReactionAdd', (reaction, user) => __awaiter(void 0, void 0, void 0, function* () {
    // CATEGORIES PAGE HANDLE
    if (reaction.message.partial)
        yield reaction.message.fetch();
    if (reaction.partial)
        yield reaction.fetch();
    if (user.bot)
        return;
    if (!reaction.message.guild)
        return;
    if (reaction.message.channel.id === process.env.CATEGORY_CHANNEL) {
        const role_related = (0, language_1.RELATION_ROLES_WITH_EMOJIS)().filter((array_role) => array_role.emoji === reaction.emoji.id)[0];
        yield reaction.message.guild.members.cache.get(user.id).roles.add(role_related.role);
    }
    else {
        return;
    }
    // WELCOME PAGE
    if (reaction.message.partial)
        yield reaction.message.fetch();
    if (reaction.partial)
        yield reaction.fetch();
    if (user.bot)
        return;
    if (!reaction.message.guild)
        return;
    if (reaction.message.channel.id === process.env.WELCOME_CHANNEL) {
        if (reaction.emoji.name === process.env.WELCOME_ROLE_EMOJI) {
            yield reaction.message.guild.members.cache.get(user.id).roles.add(application_1.Application.welcome_role && application_1.Application.member_role);
        }
    }
    else {
        return;
    }
}));
//# sourceMappingURL=discord.messageReactionAdd.js.map