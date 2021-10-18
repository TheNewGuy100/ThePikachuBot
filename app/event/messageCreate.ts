import { USER_SERVICE } from "../application";
import { bot_version, clearAll, getLoliScum, helpMe, konachanSearch, meDaOi, praiseMe, rule34search, tapaNaGostosa, xingamentoFunction } from "../functions";
import * as Discord from 'discord.js';
import { searchError, stringRemoveCommandFromParams } from "../utils";

export function ClientMessageCreate() {
    USER_SERVICE.client.on("messageCreate", async(message : Discord.Message): Promise<null> => {

        if (message.author.bot) return;
    
        getLoliScum(message);
        tapaNaGostosa(message);
    
        if (message.content.includes(process.env.PREFIX)) {
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
                    meDaOi(message)
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
                    xingamentoFunction(message)
                    break;
        
                case message.content.includes(`${process.env.PREFIX}${process.env.PRAISE_YOU_COMMAND}`):
                    praiseMe(message)
                    break;
        
                    default : searchError(message, "COMANDO DESCONHECIDO");
            }
        }
    });
}
