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
const language_1 = require("../language");
const application_1 = require("../application");
const strategyInfo_model_1 = require("../models/strategyInfo.model");
class BotHelp {
    getInfo() {
        return {
            description: "Comando para obter a lista de help do bot",
            type: 'active'
        };
    }
    getCommandOrName() {
        return process.env.PREFIX + process.env.HELP_BOT_COMMAND;
    }
    handleMessage(userMessage) {
        return __awaiter(this, void 0, void 0, function* () {
            const mapModules = language_1.MODULES_INIT.map((command) => {
                return "Prefix **" + command.module_prefix + "** | " + command.module_description + "\n";
            });
            const modulesAsString = mapModules.join('');
            // const getModuleList = resolve(process.env.MODULES_PATH);
            // if (fs.existsSync(getModuleList)) {
            //     fields.push({
            //         name: "🔗 ***Módulos instalados no bot***",
            //         value: modulesAsString,
            //         inline: false
            //     })
            // }
            const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#fcfc00')
                .setTitle(process.env.BOT_HELP_TITLE)
                .setAuthor('Pedro Bohn Costa', 'https://openjusticecourtofprotection.files.wordpress.com/2020/07/scale.gif')
                .setDescription(process.env.HELP_COMMAND_DESCRIPTION)
                .setThumbnail('https://www.clipartmax.com/png/full/99-991676_law-book-icon-png.png')
                .setFooter(process.env.BOT_NAME, 'https://www.pngrepo.com/png/92783/512/checked.png')
                .setFields(yield this.getHelpFields(application_1.Application.Commands.classes))
                .setTimestamp(new Date());
            yield userMessage.channel.send({ embeds: [exampleEmbed] });
        });
    }
    getHelpFields(commandsList) {
        return __awaiter(this, void 0, void 0, function* () {
            const arrayFields = [];
            for (let data of Object.values(strategyInfo_model_1.typeToString)) {
                arrayFields[data.position] = {
                    name: data.text,
                    value: "",
                    inline: true
                };
            }
            for (let command of Object.values(commandsList)) {
                for (let [key, value] of Object.entries(strategyInfo_model_1.typeToString)) {
                    const comandString = command.getCommandOrName();
                    if (command.getInfo().type === key) {
                        arrayFields[value.position].value += (comandString === null ? "** Detector ** - " : "**" + comandString + "** - ") + command.getInfo().description + "\n";
                    }
                }
            }
            for (let object of arrayFields) {
                if (object.value === "") {
                    object.value = "Nenhum comando encontrado";
                }
            }
            return arrayFields;
        });
    }
}
exports.default = BotHelp;
//# sourceMappingURL=help.command.js.map