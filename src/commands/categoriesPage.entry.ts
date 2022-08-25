import * as Discord from 'discord.js';

import { StrategyInfoModel } from "../models/strategyInfo.model";
import { eventTable, IStrategyModel, strategyInfo } from '../interfaces/strategy';

class CategoriesPage implements IStrategyModel {
    public getInfo(): StrategyInfoModel {
        return {
            description: 'Cria página de categorias (roles) do servidor na inicialização dele',
            type: 'entry'
        }
    }

    public getCommandOrName(): strategyInfo {
        return {
            command: "Criador de Categorias",
            events: [
                'messageReactionAdd',
                'messageReactionRemove'
            ]
        }
    }

    public async handle(
        userMessage: Discord.Message
    ) {
        // if ( Application.category_channel.id === process.env.CATEGORY_CHANNEL) {
        //     (await Application.category_channel.messages.fetch({ limit: 100})).map((content) => {
        //         content.delete().catch()
        //     })
        // }
    
        // let mocksHolder = [categoryPageMock, gameCategoryMock, suxualityMock, programmerMock].map(async (message, index) => {
            
        //     let messageSent = await Application.category_channel.send(message);
    
        //     if (index === 1) {
        //         messageSent.react(Application.garrysmod_emoji);
        //         messageSent.react(Application.osu_emoji);
        //     }
    
        //     if (index === 2) {
                
        //     }
    
        //     if (index === 3) {
                
        //     }
        // });
    }

    public async handleEvents(eventType: eventTable, eventData: Discord.MessageReaction, userData: Discord.User): Promise<any> {
        if (eventData.message.channelId !== process.env.CATEGORY_CHANNEL) return;

        if (eventType === 'messageReactionAdd') {
            await this.messageReactionAdd(eventData, userData);
        } else if (eventType === 'messageReactionRemove') {
            await this.messageReactionRemove(eventData, userData);
        }
    }

    private async messageReactionAdd (eventData: Discord.MessageReaction, userData: Discord.User) {
        if (eventData.message.partial) await eventData.message.fetch();
        if (eventData.partial) await eventData.fetch();

        if (!eventData.message.guild) return;
    
        if (eventData.message.channel.id === process.env.CATEGORY_CHANNEL) {
            // const role_related = RELATION_ROLES_WITH_EMOJIS().filter((array_role) => array_role.emoji === eventData.emoji.id)[0];
            // await eventData.message.guild.members.cache.get(userData.id).roles.add(role_related.role);
        }
    }

    private async messageReactionRemove(eventData: Discord.MessageReaction, userData: Discord.User) {
        if (eventData.message.partial) await eventData.message.fetch();
        if (eventData.partial) await eventData.fetch();
        if (userData.bot) return;
        if (!eventData.message.guild) return;
    
        if (eventData.message.channel.id === process.env.CATEGORY_CHANNEL) {
            // const role_related = RELATION_ROLES_WITH_EMOJIS().filter((array_role) => array_role.emoji === eventData.emoji.id)[0];
            // await eventData.message.guild.members.cache.get(userData.id).roles.remove(role_related.role);
        }
    }
}

export default CategoriesPage;
