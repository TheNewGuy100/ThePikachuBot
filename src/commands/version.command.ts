import * as Discord from "discord.js"

import { IStrategyModel, strategyInfo } from "src/interfaces/strategy";
import { StrategyInfoModel } from "src/models/strategyInfo.model";
import { clearResponses } from "../utils";

class BotVersion implements IStrategyModel {
    public getInfo(): StrategyInfoModel {
        return {
            description: "Comando para ver a versão do bot",
            type: 'active'
        }
    }

    public getCommandOrName(): strategyInfo {
        return {
            command: process.env.PREFIX + process.env.BOT_VERSION_COMMAND
        }
    }

    public async handle(
        userMessage: Discord.Message
    ) {
        const Embed = new Discord.MessageEmbed()
        .setColor('#fcfc00')
        .setTitle('TheNextBot')
        .setAuthor('Author: Pedro Bohn Costa')
        .setThumbnail('https://i.imgur.com/NG0cOQO.gif')
        .setDescription(`Versão: 1.2.1`)
    
        const message_sent = await userMessage.channel.send({embeds:[Embed]});
        clearResponses(message_sent, 10000, userMessage);
    }
}

export default BotVersion;