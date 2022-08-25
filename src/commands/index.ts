import * as Discord from 'discord.js';

import { Application } from '../application';
import { IStrategyModel } from '../interfaces/strategy';
import { HandlersGenericModel, KeyHandlers } from 'src/interfaces/handlers';

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
import WelcomePage from './welcomePage.entry';
import CategoriesPage from './categoriesPage.entry';
import ChangeBotAvatar from './changeAvatar.bot.commands';
import messageReactionAddController from '../events/discord.messageReactionAdd';
import messageReactionRemoveController from '../events/discord.messageReactionRemove';
import guildMemberAddController from '../events/guildMemberAdd';

export const commandMessage = (command, isCommand: boolean): string => `**${isCommand === true ? '!' : ''}` + command.name + "** | " + command.description + "\n";

export default class commands {
    private regExpString = `${process.env.PREFIX}[^ ]*`
    public regExpCommands = new RegExp(this.regExpString, 'gm');

    public loadedCommands: IStrategyModel[] = [
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
        new ChangeBotAvatar(),
    ];

    public loadedHandlers: KeyHandlers = {
        'messageReactionAdd': new messageReactionAddController(),
        'messageReactionRemove': new messageReactionRemoveController(),
        'guildMemberAdd': new guildMemberAddController()
    };

    public commands: {[key:string]: IStrategyModel} = {};
    public entryCommands: IStrategyModel[] = [];
    public passiveCommands: IStrategyModel[] = [];

    constructor() {
        this.loadCommands();

        Application.client.on('messageCreate', (userMessage: Discord.Message) => {
            if (userMessage.author.bot === true) {
                return null;
            } else {
                this.runPassiveCommands(userMessage);

                if (this.regExpCommands.test(userMessage.content)) {
                    Application.Logger.logUserRunCommand(userMessage);
                    try {
                        this.commands[userMessage.content.match(this.regExpCommands)[0]].handle(userMessage);
                    } catch (err) {
                        console.log(err + "\ncommand possibly doesn't exist")
                    }
                }
                
                return null;
            }
        })
    }

    private loadCommands(): void {
        for (let command of this.loadedCommands) {
            const commandData = command.getCommandOrName();
            const commandInfo = command.getInfo();

            if (commandData.command.includes(process.env.PREFIX || process.env.ADMIN_PREFIX)) {
                this.commands[commandData.command] = command;
            } else {
                if (commandInfo.type !== 'entry') {
                    this.passiveCommands.push(command);
                } else {
                    this.entryCommands.push(command);
                }
            }

            if (commandData.events) {
                for (let key of commandData.events) {
                    (this.loadedHandlers[key] as HandlersGenericModel).EventsPresent.push(command)
                }
            }
        }

        // Run's entry commands after Env Fetch
        for (let command of this.entryCommands) {
            command.handle();
        }
    }

    private runPassiveCommands(userMessage: Discord.Message): void {
        for (let command of this.passiveCommands) {
            command.handle(userMessage);
        }
    }
}