
import * as Discord from 'discord.js';

import { clearResponses } from "../utils";
import { BOT_HELLO_MESSAGE } from "../language";
import { StrategyInfoModel } from "src/models/strategyInfo.model";
import { IStrategyModel, strategyInfo } from "src/interfaces/strategy";

class BotHello implements IStrategyModel {
    public getInfo(): StrategyInfoModel {
        return {
            description: 'Dá um oi para o bot',
            type: 'active'
        }
    }

    public getCommandOrName(): strategyInfo {
        return {
            command: process.env.PREFIX + process.env.HELLO_COMMAND
        }
    }

    public async handle(
        userMessage: Discord.Message
    ) {
        const Embed = new Discord.MessageEmbed()
        .setColor('#fcfc00')
        .setTitle(BOT_HELLO_MESSAGE)
        .setImage('https://i.imgur.com/QsnFI7l.gif')
    
        const message_sent = await userMessage.channel.send({embeds:[Embed]})
        clearResponses(message_sent, 3500, userMessage)
    }
}

export default BotHello;
