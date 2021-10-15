
import * as Config from "./config";
import * as Discord from 'discord.js';
import { applicationCache } from './redis';
import { bot_version, CategoryPageInit, clearAll, elogieMe, helpMe, konachanSearch, meDaOi, memberLeaveServer, rule34search, WelcomePageInit, xingamentoFunction } from "./functions";
import { getLoliScum } from "./functions/chat/bot_loli_detector";
import { tapaNaGostosa } from "./functions/chat/bot_tapa_na_gostosa";
import { API_DISCORD, CLIENT_DISCORD } from "./config";

Config.setENV();

const API_SERVICE = new API_DISCORD;
const USER_SERVICE =  new CLIENT_DISCORD;

// const redisCache = new applicationCache;
//     redisCache.set("um_belo_dia", "vai dar o cu")
//     redisCache.get("um_belo_dia")

// WelcomePageInit(USER_SERVICE.client);
// CategoryPageInit(USER_SERVICE.client);


USER_SERVICE.client.on('guildMemberRemove', async (member: Discord.GuildMember | Discord.PartialGuildMember) => {
    memberLeaveServer(member, USER_SERVICE.client);
})

USER_SERVICE.client.on("messageCreate", async(message : Discord.Message): Promise<null> => {

    if (message.author.bot) return;

    getLoliScum(message, USER_SERVICE.client);
    tapaNaGostosa(message, USER_SERVICE.client);

    switch(true) {
        case message.content.includes(`${process.env.PREFIX}rule34`): {

            const array = message.content.split(' ');
                  array.shift();

            const query = `${array.join(" ")}`

            rule34search(message, {tagSearch: query})
            break;
        }
        case message.content.includes(`${process.env.PREFIX}konachan`): {

            const array = message.content.split(' ');
                  array.shift();

            const query = `${array.join(" ")}`

            konachanSearch(message, {tagSearch: query})
            break;
        }
        case message.content.includes(`${process.env.PREFIX}olá`):
            meDaOi(message, USER_SERVICE.client)
            break;

        case message.content.includes(`${process.env.PREFIX}help`):
            helpMe(message)
            break;

        case message.content.includes(`${process.env.PREFIX}clear`):
            clearAll(message, USER_SERVICE.client)
            break;

        case message.content.includes(`${process.env.PREFIX}version`):
            bot_version(message, USER_SERVICE.client)
            break;

        case message.content.includes(`${process.env.PREFIX}xingar`):
            xingamentoFunction(message, message.mentions) // arrumar
            break;

        case message.content.includes(`${process.env.PREFIX}elogio`):
            elogieMe(message, USER_SERVICE.client)  // arrumar
            break;

            default : return;
    }
});