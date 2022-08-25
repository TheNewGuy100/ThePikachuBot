import * as Discord from 'discord.js';

import { StrategyInfoModel } from "../models/strategyInfo.model";
import { eventTable, IStrategyModel, strategyInfo } from '../interfaces/strategy';
import { Application } from '../application';
import { WelcomePageMock } from '../models';

class WelcomePage implements IStrategyModel {
    public getInfo(): StrategyInfoModel {
        return {
            description: 'Cria uma página de boas-vinda onde manda mensagens e cards',
            type: 'entry'
        }
    }

    public getCommandOrName(): strategyInfo {
        return {
            command: "Gerador de Tela de boas-vindas",
            events: [
                'messageReactionAdd',
                'messageReactionRemove'
            ]
        }
    }

    public async handle() {

        (await Application.welcome_channel.messages.fetch({limit: 100})).map((content) => {
            content.delete().catch()
        })
    
        let messageSent = await Application.welcome_channel.send(WelcomePageMock);
        messageSent.react(Application.member_icon);
    }

    public async handleEvents(eventType: eventTable, eventData: any, userData?: any): Promise<any> {
        if (eventType === 'messageReactionAdd') {
            this.messageReactionAdd(eventData, userData);
        } else if (eventType === 'messageReactionRemove') {
            this.messageReactionRemove(eventData, userData);
        }
    }

    private async messageReactionAdd (eventData: Discord.MessageReaction, userData: Discord.User) {
        if (eventData.message.partial) await eventData.message.fetch();
        if (eventData.partial) await eventData.fetch();
        if (!eventData.message.guild) return;
    
        if (eventData.message.channel.id === process.env.WELCOME_CHANNEL) {
            if (eventData.emoji.name === Application.member_icon) {
                await eventData.message.guild.members.cache.get(userData.id).roles.add(Application.member_role)
                    .catch((err) => Application.Logger.logError("Não foi possível atualizar o cargo do membro <@" + userData.id + ">"));
            }
        }
    }

    private async messageReactionRemove(eventData: Discord.MessageReaction, userData: Discord.User) {
        if (eventData.message.partial) await eventData.message.fetch();
        if (eventData.partial) await eventData.fetch();
        if (!eventData.message.guild) return;
    
        if (eventData.message.channel.id === process.env.WELCOME_CHANNEL) {
            if (eventData.emoji.name === Application.member_icon) {
                await Application.guild.members.cache.get(userData.id).roles.remove(Application.member_role)
                    .catch((err) => Application.Logger.logError("Não foi possível atualizar o cargo do membro <@" + userData.id + ">"));
            }
        }
    }
}

export default WelcomePage;
