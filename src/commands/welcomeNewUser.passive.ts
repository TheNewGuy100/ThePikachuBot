import * as Discord from 'discord.js';

import { StrategyInfoModel } from "../models/strategyInfo.model";
import { IStrategyModel, strategyInfo } from '../interfaces/strategy';
import { Application } from '../application';
import { WelcomePageMock } from '../models';

class WelcomeNewUser implements IStrategyModel {
    public getInfo(): StrategyInfoModel {
        return {
            description: 'Cria um card de boas-vindas no chat de boas vindas para o novo membro',
            type: 'entry'
        }
    }

    public getCommandOrName(): strategyInfo {
        return {
            command: "Gerador de boas-vidas"
        }
    }

    public async handle(
        userMessage: Discord.Message
    ) {
        if ( Application.welcome_channel.id === process.env.WELCOME_CHANNEL) {
            (await Application.welcome_channel.messages.fetch({limit: 100})).map((content) => {
                content.delete().catch()
            })
        }
    
        let messageSent = await Application.welcome_channel.send(WelcomePageMock);
    }
}

export default WelcomeNewUser;
