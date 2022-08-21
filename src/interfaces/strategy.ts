
import * as Discord from 'discord.js';
import { StrategyInfoModel } from 'src/models/strategyInfo.model';

export interface IStrategyModel {
    getInfo(): StrategyInfoModel;
    getCommandOrName(): string;
    handleMessage(userMessage: Discord.Message): Promise<any>;
}