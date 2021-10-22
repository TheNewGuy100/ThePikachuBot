import * as Discord from "discord.js";
import * as Axios from 'axios';
import { searchError, stringRemoveCommandFromParams } from "../../utils/index";
import { SEARCH_RESULT_RETURNED_EMPTY, USE_THE_NSFW_CHAT_FOR_THIS } from "../../../language";
import { functionCommandsModel } from "../../models/informationModel";
import { USER_SERVICE } from "../../application";

export const information = (): functionCommandsModel => {
    return {
        name: process.env.KONACHAN_COMMAND,
        description: "Comando para utilizar a API do konachan"
    }
}

USER_SERVICE.client.on("messageCreate", async(message: Discord.Message): Promise<null | void> => {

    // query: {tagSearch: string}

    if (message.author.bot || !message.content.includes(process.env.KONACHAN_COMMAND)) return;

    if (message.channelId === process.env.NSFW_CHANNEL) {
        const response: [] = (await Axios.default.get(`${process.env.KONACHAN_LINK}post.json`, {params:  stringRemoveCommandFromParams(message)})).data;

        if (response.length === 0) {
            return searchError(message, SEARCH_RESULT_RETURNED_EMPTY);
        }

        const array_images: string[] = response.map((item: { file_url }) => {
            return item.file_url
        });

        const randomChoose = array_images[Math.floor(Math.random() * array_images.length)];
        message.channel.send(randomChoose);
    } else {
        searchError(message, USE_THE_NSFW_CHAT_FOR_THIS)
    }
})