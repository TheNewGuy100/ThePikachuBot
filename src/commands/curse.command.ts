import * as Discord from "discord.js"
import { IStrategyModel } from "src/interfaces/strategy";
import { StrategyInfoModel } from "src/models/strategyInfo.model";
import { CHAT_CURSES } from "../language"

class CurseSomeone implements IStrategyModel {
    public getInfo(): StrategyInfoModel {
        return {
            description: "Comando para xingar alguém",
            type: 'active'
        }
    }

    public getCommandOrName(): string {
        return process.env.PREFIX + process.env.CURSE_SOMEONE_COMMAND;
    }

    public async handleMessage(
        userMessage: Discord.Message
    ) {
        const curses_list = CHAT_CURSES();
        var num = Math.floor(Math.random() * curses_list.length);
    
        const messageEmbed = new Discord.MessageEmbed;
    
        messageEmbed.setImage(curses_list[num].img);
        messageEmbed.setDescription( "<@" + userMessage.author.id + "> " + curses_list[num].chat + "<@" + userMessage.mentions.members.first() + ">" )
    
        userMessage.channel.send({embeds: [messageEmbed]})
    }
}

export default CurseSomeone;