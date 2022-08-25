import { Application } from "../application";
import * as Discord from 'discord.js';
import { HandlersGenericModel } from "src/interfaces/handlers";
import { IStrategyModel, strategyInfo } from "../interfaces/strategy";
import { StrategyInfoModel } from "../models/strategyInfo.model";

export default class messageReactionAddController implements HandlersGenericModel {
    public EventsPresent: IStrategyModel[] = [];

    public getInfo(): StrategyInfoModel {
        return {
            description: 'Cuida de todos os eventos relacionado a adição de reações',
            type: 'event'
        }
    }

    public getCommandOrName(): strategyInfo {
        return { 
            command: 'ReactionAddEvent'
        };
    }

    constructor() {
        Application.client.on('messageReactionAdd', (Listener, User) => {
            if (User.bot) return;

            Application.Logger.logUserEvent(User, 'messageReactionAdd', Listener)
            this.runEventsRelated(Listener, User);
        })
    }

    private async runEventsRelated(Listener: Discord.MessageReaction | Discord.PartialMessageReaction, User: Discord.User | Discord.PartialUser) {
        for (let event of this.EventsPresent) {
            await event.handleEvents('messageReactionAdd', Listener, User);
        }
    }
}