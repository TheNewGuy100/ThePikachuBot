
import * as Discord from 'discord.js';
import { StrategyInfoModel } from 'src/models/strategyInfo.model';
import { strategyInfo } from './strategy';

export enum HandlerStrings {
    'messageReactionAdd'='messageReactionAdd',
    'messageReactionRemove'='messageReactionRemove',
    'guildMemberAdd'='guildMemberAdd'
};

export type KeyHandlers = {
    [key in HandlerStrings]: any;
};

export class HandlersGenericModel {
    public EventsPresent: any[]

    getInfo(): StrategyInfoModel {return};
    getCommandOrName(): strategyInfo {return};
}