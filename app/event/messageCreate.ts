import { USER_SERVICE } from "../application";
import { bot_version, clearAll, elogieMe, getLoliScum, helpMe, konachanSearch, meDaOi, rule34search, tapaNaGostosa, xingamentoFunction } from "../functions";
import * as Discord from 'discord.js';
import { stringRemoveCommandFromParams } from "../utils";

export function ClientMessageCreate() {
    USER_SERVICE.client.on("messageCreate", async(message : Discord.Message): Promise<null> => {

        if (message.author.bot) return;
    
        getLoliScum(message, USER_SERVICE.client);
        tapaNaGostosa(message, USER_SERVICE.client);
    
        switch(true) {
    
            case message.content.includes(`${process.env.PREFIX}${process.env.RULE34_COMMAND}`): {
                rule34search(message, {tagSearch: stringRemoveCommandFromParams(message)})
                break;
            }
    
            case message.content.includes(`${process.env.PREFIX}${process.env.KONACHAN_COMMAND}`): {
                konachanSearch(message, {tagSearch: stringRemoveCommandFromParams(message)})
                break;
            }
    
            case message.content.includes(`${process.env.PREFIX}${process.env.HELLO_COMMAND}`):
                meDaOi(message, USER_SERVICE.client)
                break;
    
            case message.content.includes(`${process.env.PREFIX}${process.env.HELP_BOT_COMMAND}`):
                helpMe(message)
                break;
    
            case message.content.includes(`${process.env.PREFIX}${process.env.CLEAR_ALL_COMMAND}`):
                clearAll(message, USER_SERVICE.client)
                break;
    
            case message.content.includes(`${process.env.PREFIX}${process.env.BOT_VERSION_COMMAND}`):
                bot_version(message, USER_SERVICE.client)
                break;
    
            case message.content.includes(`${process.env.PREFIX}${process.env.CURSE_SOMEONE_COMMAND}`):
                xingamentoFunction(message, message.mentions)
                break;
    
            case message.content.includes(`${process.env.PREFIX}${process.env.PRAISE_YOU_COMMAND}`):
                elogieMe(message, USER_SERVICE.client)
                break;
    
                default : return;
        }
    });
}
