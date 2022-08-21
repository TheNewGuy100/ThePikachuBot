import * as Discord from 'discord.js';

import { StrategyInfoModel } from "../models/strategyInfo.model";
import { IStrategyModel } from '../interfaces/strategy';
import { RELATION_ROLES_WITH_EMOJIS } from '../language';
import { Application } from '../application';
import { WelcomePageMock } from '../models';

class WelcomeNewUser implements IStrategyModel {
    public getInfo(): StrategyInfoModel {
        return {
            description: 'Cria um card de boas-vindas no chat de boas vindas para o novo membro',
            type: 'entry'
        }
    }

    public getCommandOrName(): string {
        return "Gerador de boas-vidas"
    }

    public async handleMessage(
        userMessage: Discord.Message
    ) {
        if ( Application.welcome_channel.id === process.env.WELCOME_CHANNEL) {
            (await Application.welcome_channel.messages.fetch({limit: 100})).map((content) => {
                content.delete().catch()
            })
        }
    
        let messageSent = await Application.welcome_channel.send(WelcomePageMock);
        messageSent.react( RELATION_ROLES_WITH_EMOJIS().filter((emoji) => emoji.role === process.env.WELCOME_ROLE)[0].emoji );
    }
}

export default WelcomeNewUser;
