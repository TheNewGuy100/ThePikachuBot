import * as Discord from 'discord.js';

import { StrategyInfoModel } from "src/models/strategyInfo.model";
import { IStrategyModel } from 'src/interfaces/strategy';

class BotKeanuTapaNaGostosa implements IStrategyModel {
    public getInfo(): StrategyInfoModel {
        return {
            description: 'Keanu ta só observando esperando você dar um tapa na gostosa',
            type: 'passive'
        }
    }

    public getCommandOrName(): string {
        return "O Tapa na Gostosa"
    }

    public async handleMessage(
        userMessage: Discord.Message
    ) {
        var content = userMessage.content.toLowerCase()

        if (content === process.env.TAPA_NA_GOSTOSA) {
            const embed = new Discord.MessageEmbed()
            .setTitle(`${userMessage.author.username} deu um tapa na gostosa!`)
            .setColor('#fcfc00')
            .setImage('https://media.tenor.com/images/a46f5e9a57334b49e349b27736e03b4f/tenor.gif')
            .setFooter('Yes baby! Thank you!')
    
            userMessage.channel.send({embeds:[embed]});
        }
    }
}

export default BotKeanuTapaNaGostosa;
