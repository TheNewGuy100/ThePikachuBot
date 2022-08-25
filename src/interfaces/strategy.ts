
import * as Discord from 'discord.js';
import { StrategyInfoModel } from 'src/models/strategyInfo.model';

/**
 * @property events handler
 */

export type events = ('messageReactionAdd' | 'messageReactionRemove' | 'guildMemberAdd' | 'interactionCreate')[]
export type eventTable = 'messageReactionAdd' | 'messageReactionRemove' | 'guildMemberAdd' | 'interactionCreate'

export class strategyInfo {
    command: string;
    events?: events;
}

export interface IStrategyModel {
    getInfo(): StrategyInfoModel;
    getCommandOrName(): strategyInfo;
    handle(userMessage?: Discord.Message): Promise<any>;
    handleEvents?(eventType: eventTable, eventData: any, userData?: Discord.User | Discord.PartialUser): Promise<any>;
}