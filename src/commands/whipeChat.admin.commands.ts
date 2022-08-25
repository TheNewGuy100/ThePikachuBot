import * as Discord from 'discord.js';

import { StrategyInfoModel } from "src/models/strategyInfo.model";
import { IStrategyModel, strategyInfo } from "src/interfaces/strategy";
import { Application } from '../application';
import { clearResponses } from '../utils';

class AdminWhipeChatMessages implements IStrategyModel {
    public getInfo(): StrategyInfoModel {
        return {
            description: "Comando para deletar todas as mensagens do canal recriando ele (não rode em um momento que você sente instabilidade)",
            type: 'admin'
        }
    }

    public getCommandOrName(): strategyInfo {
        return {
            command:  process.env.ADMIN_PREFIX + process.env.WHIPE_CHAT_COMMAND
        }
    }

    public async handle(
        userMessage: Discord.Message
    ) {
        try {
            if ( userMessage.member.roles.cache.some((role) =>
                role.name === process.env.OWNER_ROLE_NAME ||
                role.name === process.env.ADMINISTRATOR_ROLE_NAME ||
                role.name === process.env.MODERATOR_ROLE_NAME)
            ) {}

                    
        } catch (error) {
            console.log("deu erro")
        }
    }
}

export default AdminWhipeChatMessages;
