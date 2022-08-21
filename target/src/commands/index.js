"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commandMessage = void 0;
const application_1 = require("../application");
const curse_command_1 = __importDefault(require("./curse.command"));
const version_command_1 = __importDefault(require("./version.command"));
const help_command_1 = __importDefault(require("./help.command"));
const hello_command_1 = __importDefault(require("./hello.command"));
const praise_command_1 = __importDefault(require("./praise.command"));
const konachanSearch_command_1 = __importDefault(require("./konachanSearch.command"));
const rule34Search_command_1 = __importDefault(require("./rule34Search.command"));
const botLoLiDetector_passive_1 = __importDefault(require("./botLoLiDetector.passive"));
const keanuTapaNaGostosa_passive_1 = __importDefault(require("./keanuTapaNaGostosa.passive"));
const clearMessages_admin_commands_1 = __importDefault(require("./clearMessages.admin.commands"));
const whipeChat_admin_commands_1 = __importDefault(require("./whipeChat.admin.commands"));
const welcomePage_passive_1 = __importDefault(require("./welcomePage.passive"));
const categoriesPage_passive_1 = __importDefault(require("./categoriesPage.passive"));
const commandMessage = (command, isCommand) => `**${isCommand === true ? '!' : ''}` + command.name + "** | " + command.description + "\n";
exports.commandMessage = commandMessage;
class commands {
    constructor() {
        this.regExpString = `${process.env.PREFIX}[^ ]*`;
        this.regExpCommands = new RegExp(this.regExpString, 'gm');
        this.classes = [];
        this.command = {};
        this.passiveCommands = [];
        this.classes = [
            new curse_command_1.default(),
            new version_command_1.default(),
            new help_command_1.default(),
            new hello_command_1.default(),
            new praise_command_1.default(),
            new konachanSearch_command_1.default(),
            new rule34Search_command_1.default(),
            new botLoLiDetector_passive_1.default(),
            new keanuTapaNaGostosa_passive_1.default(),
            new clearMessages_admin_commands_1.default(),
            new whipeChat_admin_commands_1.default(),
            new welcomePage_passive_1.default(),
            new categoriesPage_passive_1.default()
        ];
        for (let command of this.classes) {
            const stringCommand = command.getCommandOrName();
            if (stringCommand.includes(process.env.PREFIX || process.env.ADMIN_PREFIX)) {
                this.command[stringCommand] = command;
            }
            else {
                this.passiveCommands.push(command);
            }
        }
        application_1.Application.client.on('messageCreate', (userMessage) => {
            if (userMessage.author.bot === true) {
                return null;
            }
            else {
                console.log("User message: " + userMessage.content);
                this.runPassiveCommands(userMessage);
                if (this.regExpCommands.test(userMessage.content)) {
                    try {
                        this.command[userMessage.content.match(this.regExpCommands)[0]].handleMessage(userMessage);
                    }
                    catch (err) {
                        console.log(err + "\ncommand possibly doesn't exist");
                    }
                }
                return null;
            }
        });
    }
    runPassiveCommands(userMessage) {
        for (let command of this.passiveCommands) {
            command.handleMessage(userMessage);
        }
    }
}
exports.default = commands;
//# sourceMappingURL=index.js.map