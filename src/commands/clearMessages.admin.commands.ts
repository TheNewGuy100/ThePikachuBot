import * as Discord from 'discord.js';

import { StrategyInfoModel } from "src/models/strategyInfo.model";
import { IStrategyModel } from "src/interfaces/strategy";
import { Application } from '../application';
import { clearResponses } from '../utils';

class AdminClearMessages implements IStrategyModel {
    public getInfo(): StrategyInfoModel {
        return {
            description: "Comando para limpar o chat",
            type: 'admin'
        }
    }

    public getCommandOrName(): string {
        return process.env.ADMIN_PREFIX + process.env.CLEAR_ALL_COMMAND;
    }

    public async handleMessage(
        userMessage: Discord.Message
    ) {
        try {
            if ( userMessage.member.roles.cache.some((role) =>
                role.name === process.env.OWNER_ROLE_NAME ||
                role.name === process.env.ADMINISTRATOR_ROLE_NAME ||
                role.name === process.env.MODERATOR_ROLE_NAME)
            ) {
                let userMessageContent = userMessage.content.split(' ')
                    
                if (!isNaN((userMessageContent[1] as any))) {
                    const Embed = new Discord.MessageEmbed()

                    await (userMessage.channel as Discord.TextChannel).bulkDelete(parseInt(userMessageContent[1]), true)
                    .then((content) => {
                        Embed.setColor('#fcfc00')
                        Embed.setTitle(`Deletei ${content.size} mensagens`)

                        if (content.size < Number(userMessageContent[1])) {
                            Embed.setDescription("Não consigo deletar mensagens após 14 dias, desculpa.")
                        }
                    })
                
                    const message = await userMessage.channel.send({embeds:[Embed]});

                    clearResponses(message, 8000)

                } else {
                    const Embed = new Discord.MessageEmbed()
                    .setColor('#fcfc00')
                    .setTitle(`Operação inválida`)
                
                    const message = await userMessage.channel.send({embeds:[Embed]});

                    clearResponses(message, 3000, userMessage);
                }
            } else {
                const data = new Discord.MessageEmbed({
                    title: ""
                })

                userMessage.channel.send({
                    embeds: [
                        data
                    ]
                })
            }
        } catch (error) {
            console.log("deu erro")
        }
    }
}

export default AdminClearMessages;
