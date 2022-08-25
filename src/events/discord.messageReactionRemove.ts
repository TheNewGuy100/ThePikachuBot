import { Application } from "../application";
import * as Discord from 'discord.js';
import { IStrategyModel, strategyInfo } from "../interfaces/strategy";
import { StrategyInfoModel } from "../models/strategyInfo.model";
import { HandlersGenericModel } from "src/interfaces/handlers";

export default class messageReactionRemoveController implements HandlersGenericModel  {
    public EventsPresent: IStrategyModel[] = [];

    public getInfo(): StrategyInfoModel {
        return {
            description: 'Cuida de todos os eventos relacionado a remoção de reações',
            type: 'event'
        }
    }

    public getCommandOrName(): strategyInfo {
        return { 
            command: 'ReactionRemoveEvent'
        };
    }

    constructor() {
        Application.client.on('messageReactionRemove', (Listener, User) => {
            if (User.bot) return;
            Application.Logger.logUserEvent(User, 'messageReactionRemove', Listener)
            this.runEventsRelated(Listener, User);
        })
    }

    private async runEventsRelated(Listener: Discord.MessageReaction | Discord.PartialMessageReaction, User: Discord.User | Discord.PartialUser) {
        for (let event of this.EventsPresent) {
            await event.handleEvents('messageReactionRemove', Listener, User);
        }
    }
}

