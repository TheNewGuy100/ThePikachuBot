import * as Axios from 'axios';
import * as Discord from 'discord.js';
import { searchError } from '../../utils/index';

export async function rule34search(messageReceived: Discord.Message, query: {tagSearch: string}) {

    const response: [] = await (await Axios.default.get(`${process.env.RULE34_LINK}index.php?page=dapi&s=post&q=index`, {params: { json: 1, tags: query.tagSearch}})).data;

    if (response.length === 0) {
        searchError(messageReceived.channel, "SEM RESULTADOS PRA PESQUISA");
    }

    const array_images: string[] = response.map((item: { file_url }) => {
        return item.file_url
    });

    const randomChoose = array_images[Math.floor(Math.random() * array_images.length)];
    messageReceived.channel.send(randomChoose);
    return;
}