import * as Discord from "discord.js";
import * as Axios from 'axios';
import { searchError } from "../../utils/index";
import { SEARCH_RESULT_RETURNED_EMPTY, USE_THE_NSFW_CHAT_FOR_THIS } from "../../../language";

export const information = () => {
    return {
        name: process.env.KONACHAN_COMMAND,
        description: "Comando para utilizar a API do konachan"
    }
}

export async function konachanSearch(messageReceived: Discord.Message, query: {tagSearch: string}) {
    if (messageReceived.channelId === process.env.NSFW_CHANNEL) {
        const response: [] = await (await Axios.default.get(`${process.env.KONACHAN_LINK}post.json`, {params: { tags: query.tagSearch }})).data;

        if (response.length === 0) {
            return searchError(messageReceived, SEARCH_RESULT_RETURNED_EMPTY);
        }

        const array_images: string[] = response.map((item: { file_url }) => {
            return item.file_url
        });

        const randomChoose = array_images[Math.floor(Math.random() * array_images.length)];
        return messageReceived.channel.send(randomChoose);
    } else {
        searchError(messageReceived, USE_THE_NSFW_CHAT_FOR_THIS)
    }
}