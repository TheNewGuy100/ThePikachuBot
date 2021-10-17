import * as Discord from "discord.js";
import * as Axios from 'axios';
import { searchError } from "../../utils/index";
import { SEARCH_RESULT_RETURNED_EMPTY } from "../../../language/enviroment.BR.language";

export async function konachanSearch(messageReceived: Discord.Message, query: {tagSearch: string}) {


    const response: [] = await (await Axios.default.get(`${process.env.KONACHAN_LINK}post.json`, {params: { tags: query.tagSearch }})).data;

    if (response.length === 0) {
        searchError(messageReceived.channel, SEARCH_RESULT_RETURNED_EMPTY);
    }

    const array_images: string[] = response.map((item: { file_url }) => {
        return item.file_url
    });

    const randomChoose = array_images[Math.floor(Math.random() * array_images.length)];
    return messageReceived.channel.send(randomChoose);
}