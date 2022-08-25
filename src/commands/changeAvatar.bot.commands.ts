import { Application } from '../application';
import * as Discord from 'discord.js';

import { StrategyInfoModel } from "../models/strategyInfo.model";
import { IStrategyModel, strategyInfo } from '../interfaces/strategy';
import { clearResponses } from '../utils';

class ChangeBotAvatar implements IStrategyModel {
    public getInfo(): StrategyInfoModel {
        return {
            description: 'Modifica a imagem do bot a partir de uma url fornecida',
            type: 'config'
        }
    }

    public getCommandOrName(): strategyInfo {
        return { 
            command: process.env.ADMIN_PREFIX + 'avatar'
        };
    }

    public async handle(
        userMessage: Discord.Message
    ) {
        if ( userMessage.member.roles.cache.some((role) => role.name === process.env.OWNER_ROLE_NAME || role.name === process.env.ADMINISTRATOR_ROLE_NAME)) {
            const replyMessage = await userMessage.reply({
                embeds: [
                    new Discord.MessageEmbed({
                        color: 'RED',
                        author: {
                            name: 'Você não tem permissão para executar este comando'
                        }
                    })
                ]
            })

            clearResponses(replyMessage, 8000, userMessage);
        }

        const response: Error & Discord.ClientUser = await Application.client.user.setAvatar(userMessage.content.split(' ')[1]).catch((error) => error) as any

        if (response.message) {
            const replyMessage = await userMessage.reply({
                embeds: [
                    new Discord.MessageEmbed({
                        color: 'RED',
                        author: {
                            name: response.message.includes('Try again later') 
                                ? 'você excedeu tentativas num período curto, tente novamente mais tarde'
                                : 'não foi possível alterar o avatar, certifique-se de que a url fornecida é válida'
                        }
                    })
                ]
            })

            clearResponses(replyMessage, 8000, userMessage);
        } else {
            const replyMessage = await userMessage.reply({
                embeds: [
                    new Discord.MessageEmbed({
                        color: 'GREEN',
                        author: {
                            name: 'avatar alterado com sucesso'
                        }
                    })
                ]
            })

            clearResponses(replyMessage, 8000, userMessage);
        }
    }
}

export default ChangeBotAvatar;
