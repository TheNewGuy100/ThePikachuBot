import * as Discord from 'discord.js';

import { Application } from "../application";
import { IStrategyModel, strategyInfo } from "../interfaces/strategy";
import { StrategyInfoModel } from "../models/strategyInfo.model";
import { HandlersGenericModel } from "src/interfaces/handlers";

export default class guildMemberAddController implements HandlersGenericModel  {
    public EventsPresent: IStrategyModel[] = [];

    public getInfo(): StrategyInfoModel {
        return {
            description: 'Cuida de eventos relacionado a entrada de novos membros no servidor',
            type: 'event'
        }
    }

    public getCommandOrName(): strategyInfo {
        return { 
            command: 'guildMemberAdd'
        };
    }

    constructor() {
        Application.client.on('guildMemberAdd', (member) => {
            if (member.user.bot) return;

            Application.Logger.logUserEvent(member.user, 'messageReactionRemove')
            this.runEventsRelated(member);
        })
    }

    private async runEventsRelated(guildMember: Discord.GuildMember) {
        for (let event of this.EventsPresent) {
            await event.handleEvents('guildMemberAdd', guildMember);
        }
    }
}

