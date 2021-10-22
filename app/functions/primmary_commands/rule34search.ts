import * as Axios from 'axios';
import * as Discord from 'discord.js';
import { SEARCH_RESULT_RETURNED_EMPTY, USE_THE_NSFW_CHAT_FOR_THIS } from '../../../language/brazillian-portuguese/enviroment.BR.language';
import { USER_SERVICE } from '../../application';
import { functionCommandsModel } from '../../models/informationModel';
import { searchError, stringRemoveCommandFromParams } from '../../utils/index';

export const information = (): functionCommandsModel => {
    return {
        name: process.env.RULE34_COMMAND,
        description: "Comando para utilizar a API do rule34"
    }
}

USER_SERVICE.client.on("messageCreate", async(message: Discord.Message): Promise<null | void> => {

    if (message.author.bot || !message.content.includes(process.env.RULE34_COMMAND)) return;

    if (message.channelId === process.env.NSFW_CHANNEL) {
        const response: [] = (await Axios.default.get(`${process.env.RULE34_LINK}index.php?page=dapi&s=post&q=index`, {params:  stringRemoveCommandFromParams(message)})).data;

        if (response.length === 0) {
            return searchError(message, SEARCH_RESULT_RETURNED_EMPTY);
        }
    
        const array_images: string[] = response.map((item: { file_url }) => {
            return item.file_url
        });
    
        const randomChoose = array_images[Math.floor(Math.random() * array_images.length)];
        message.channel.send(randomChoose);
        return;
    } else {
        searchError(message, USE_THE_NSFW_CHAT_FOR_THIS)
    }
})