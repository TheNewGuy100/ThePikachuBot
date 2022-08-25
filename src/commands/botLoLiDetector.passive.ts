
import * as Discord from 'discord.js';

import { LOLI_DETECTOR_MESSAGE } from "../language";
import { StrategyInfoModel } from "src/models/strategyInfo.model";
import { IStrategyModel, strategyInfo } from 'src/interfaces/strategy';

class BotLoliDetector implements IStrategyModel {
    public getInfo(): StrategyInfoModel {
        return {
            description: 'Detecta quando alguém escreve loli e chama o FBI',
            type: 'passive'
        }
    }

    public getCommandOrName(): strategyInfo {
        return {
            command: "Detector de quem fala Loli"
        }
    }

    public async handle(
        userMessage: Discord.Message
    ) {
        var content = userMessage.content.toLowerCase().split(' ')
        for (const chave of content) {
            if (chave === process.env.LOLI_DETECTOR) {
                const embed = new Discord.MessageEmbed()
                .setTitle( "<@" + userMessage.author.id + "> " + LOLI_DETECTOR_MESSAGE )
                .setColor('#fcfc00')
                .setImage('https://thumbs.gfycat.com/FrailWelldocumentedBlackbuck-size_restricted.gif')
    
                userMessage.channel.send({embeds:[embed]});
            }
        }
    }
}

export default BotLoliDetector;
