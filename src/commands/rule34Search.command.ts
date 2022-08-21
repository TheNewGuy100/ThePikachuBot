import * as Discord from 'discord.js';
import * as Axios from 'axios';

import { StrategyInfoModel } from '../models/strategyInfo.model';
import { clearResponses, searchError } from '../utils';
import { SEARCH_RESULT_RETURNED_EMPTY, USE_THE_NSFW_CHAT_FOR_THIS } from '../language';
import { stringRemoveCommandFromParams } from '../utils/stringRemoveCommandFromParam';

import { IStrategyModel } from '../interfaces/strategy';

class BotRule34SearchNSFW implements IStrategyModel {
    public getInfo(): StrategyInfoModel {
        return {
            description: "Comando para utilizar a API do rule34 (NSFW)",
            type: 'active'
        }
    }

    public getCommandOrName(): string {
        return process.env.PREFIX + process.env.RULE34_COMMAND;
    }

    public async handleMessage(
        userMessage: Discord.Message
    ) {
        try {
            if (userMessage.channelId === process.env.NSFW_CHANNEL) {

                const messageEmbed = userMessage.channel.send({
                    embeds: [
                        new Discord.MessageEmbed().setImage('https://www.davidkingsbury.co.uk/wp-content/uploads/2021/08/lg.ring-loading-gif.gif')
                    ]
                });

                const response: [] = (await Axios.default.get(`${process.env.RULE34_LINK}&tags=${userMessage.content.split(' ')[1]}`, {params:  stringRemoveCommandFromParams(userMessage)})).data;
        
                if (response.length === 0) {
                    return searchError(userMessage, SEARCH_RESULT_RETURNED_EMPTY);
                }
            
                const array_images: string[] = response.map((item: { file_url }) => {
                    return item.file_url
                });
            
                const randomChoose = array_images[Math.floor(Math.random() * array_images.length)];

                (await messageEmbed).delete();
                userMessage.channel.send(randomChoose);
                userMessage.delete();
                return;
            } else {
                searchError(userMessage, USE_THE_NSFW_CHAT_FOR_THIS)
            }
        } catch (err) {
            await (userMessage.channel as Discord.TextChannel).bulkDelete(2)

            const message = await userMessage.channel.send({
                embeds: [
                    new Discord.MessageEmbed()
                        .setTitle("Lamento, tive uma falha na procura")
                        .setImage('https://c.tenor.com/lmA7VALYIAsAAAAC/sad-pikachu.gif')
                ]
            })

            clearResponses(message, 10000);
        }
    }
}

export default BotRule34SearchNSFW;