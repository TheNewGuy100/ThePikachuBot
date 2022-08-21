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
exports.guildMemberAdd = void 0;
const Discord = __importStar(require("discord.js"));
const Canvas = __importStar(require("canvas"));
const canvas_1 = require("../utils/canvas");
const utils_1 = require("../utils");
const application_1 = require("../application");
function guildMemberAdd() {
    application_1.Application.client.on('guildMemberAdd', (member) => __awaiter(this, void 0, void 0, function* () {
        try {
            // let channel_info = await USER_SERVICE.client.channels.cache.get();
            const canvas = Canvas.createCanvas(700, 250);
            const context = canvas.getContext('2d');
            const background = yield Canvas.loadImage('https://i.imgur.com/QsnFI7l.gif').catch((error) => { throw error; });
            context.drawImage(background, 0, 0, canvas.width, canvas.height);
            context.strokeStyle = '#74037b';
            context.strokeRect(0, 0, canvas.width, canvas.height);
            context.font = '28px sans-serif';
            context.fillStyle = '#ffffff';
            context.fillText('Bem-vindo ao servidor,', 275, 75);
            context.font = (0, canvas_1.applyText)(canvas, `${member.displayName}!`);
            context.fillStyle = '#ffffff';
            context.fillText(`${member.displayName}`, 275, 150);
            context.font = "28px sans-serif";
            context.fillStyle = '#ffffff';
            context.fillText(`Membros: ${member.guild.memberCount}`, 275, 200);
            context.beginPath();
            context.arc(125, 125, 100, 0, Math.PI * 2, true);
            context.closePath();
            context.clip();
            const avatar = yield Canvas.loadImage(member.user.displayAvatarURL({ format: 'gif' }));
            context.drawImage(avatar, 25, 25, 200, 200);
            const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.gif');
            // (channel_info as Discord.TextChannel).send(`Bem-vindo a ${member.guild.name}, <@${member}>!`, )
            return;
        }
        catch (error) {
            console.log(error);
            throw new utils_1.systemError(500, `memberLeaveServer couldn't handle`, application_1.Application.client, error);
        }
    }));
}
exports.guildMemberAdd = guildMemberAdd;
//# sourceMappingURL=guildMemberAdd.js.map