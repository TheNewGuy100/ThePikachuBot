import * as Discord from 'discord.js';

import { Application } from '../application';
import { IStrategyModel } from 'src/interfaces/strategy';

import CurseSomeone from './curse.command';
import BotVersion from './version.command';
import BotHelp from './help.command';
import BotHello from './hello.command';
import BotPraise from './praise.command';
import BotKonachanSearchNSFW from './konachanSearch.command';
import BotRule34SearchNSFW from './rule34Search.command';
import BotLoliDetector from './botLoLiDetector.passive';
import BotKeanuTapaNaGostosa from './keanuTapaNaGostosa.passive';
import AdminClearMessages from './clearMessages.admin.commands';
import AdminWhipeChatMessages from './whipeChat.admin.commands';
import WelcomePage from './welcomePage.passive';
import CategoriesPage from './categoriesPage.passive';
import ChangeBotAvatar from './changeAvatar.bot.commands';

export const commandMessage = (command, isCommand: boolean): string => `**${isCommand === true ? '!' : ''}` + command.name + "** | " + command.description + "\n";

export default class commands {
    private regExpString = `${process.env.PREFIX}[^ ]*`
    public regExpCommands = new RegExp(this.regExpString, 'gm');

    public classes: IStrategyModel[] = [];
    public command: {[key:string]: IStrategyModel} = {};
    public passiveCommands: IStrategyModel[] = [];

    constructor() {
        this.classes = [
            new CurseSomeone(),
            new BotVersion(),
            new BotHelp(),
            new BotHello(),
            new BotPraise(),
            new BotKonachanSearchNSFW(),
            new BotRule34SearchNSFW(),
            new BotLoliDetector(),
            new BotKeanuTapaNaGostosa(),
            new AdminClearMessages(),
            new AdminWhipeChatMessages(),
            new WelcomePage(),
            new CategoriesPage(),
            new ChangeBotAvatar()
        ]

        for (let command of this.classes) {
            const stringCommand = command.getCommandOrName();

            if (stringCommand.includes(process.env.PREFIX || process.env.ADMIN_PREFIX)) {
                this.command[stringCommand] = command;
            } else {
                this.passiveCommands.push(command);
            }
        }

        Application.client.on('messageCreate', (userMessage: Discord.Message) => {
            if (userMessage.author.bot === true) {
                return null;
            } else {
                this.runPassiveCommands(userMessage);

                if (this.regExpCommands.test(userMessage.content)) {
                    Application.Logger.logUserRunCommand(userMessage);
                    try {
                        this.command[userMessage.content.match(this.regExpCommands)[0]].handleMessage(userMessage);
                    } catch (err) {
                        console.log(err + "\ncommand possibly doesn't exist")
                    }
                }
                
                return null;
            }
        })
    }

    private runPassiveCommands(userMessage: Discord.Message): void {
        for (let command of this.passiveCommands) {
            command.handleMessage(userMessage);
        }
    }
}