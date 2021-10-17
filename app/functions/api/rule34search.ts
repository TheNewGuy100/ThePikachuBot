import * as Axios from 'axios';
import * as Discord from 'discord.js';
import { SEARCH_RESULT_RETURNED_EMPTY, USE_THE_NSFW_CHAT_FOR_THIS } from '../../../language/brazillian-portuguese/enviroment.BR.language';
import { searchError } from '../../utils/index';

export async function rule34search(messageReceived: Discord.Message, query: {tagSearch: string}) {
    if (messageReceived.channelId === process.env.NSFW_CHANNEL) {
        const response: [] = await (await Axios.default.get(`${process.env.RULE34_LINK}index.php?page=dapi&s=post&q=index`, {params: { json: 1, tags: query.tagSearch}})).data;

        if (response.length === 0) {
            return searchError(messageReceived.channel, SEARCH_RESULT_RETURNED_EMPTY);
        }
    
        const array_images: string[] = response.map((item: { file_url }) => {
            return item.file_url
        });
    
        const randomChoose = array_images[Math.floor(Math.random() * array_images.length)];
        messageReceived.channel.send(randomChoose);
        return;
    } else {
        searchError(messageReceived.channel, USE_THE_NSFW_CHAT_FOR_THIS)
    }
}