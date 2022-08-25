
import * as Discord from 'discord.js';
import { StrategyInfoModel } from 'src/models/strategyInfo.model';
import { IStrategyModel, strategyInfo } from 'src/interfaces/strategy';
import { CHAT_PRAISE_ME } from '../language';

class BotPraise implements IStrategyModel {
    public getInfo(): StrategyInfoModel {
        return {
            description: "Comando para o bot elogiar você",
            type: 'active'
        }
    }

    public getCommandOrName(): strategyInfo {
        return {
            command: process.env.PREFIX + process.env.PRAISE_YOU_COMMAND
        }
    }

    public async handle(
        userMessage: Discord.Message
    ) {
        const curses_list = CHAT_PRAISE_ME();
        var num = Math.floor(Math.random() * curses_list.length);
    
        const messageEmbed = new Discord.MessageEmbed;
    
        messageEmbed.setImage(curses_list[num].img);
        messageEmbed.setDescription( "<@" + userMessage.author.id + "> " + curses_list[num].chat)
    
        userMessage.channel.send({embeds: [messageEmbed]})
    }
}

export default BotPraise;