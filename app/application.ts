
import * as Config from "./config";
import { API_DISCORD, CLIENT_DISCORD } from "./config";
import { ClientMessageCreate } from "./event/messageCreate";
import { guildMemberRemove } from "./event/guildMemberRemove";
import { interactionCreate } from "./event/interactionCreate";
import { CategoryPageInit, WelcomePageInit } from "./functions";
import { applicationCache } from "./redis";

Config.setENV();

export const API_SERVICE = new API_DISCORD;
export const USER_SERVICE = new CLIENT_DISCORD;

async function main() {

    await USER_SERVICE.init();

    WelcomePageInit(USER_SERVICE.client);
    CategoryPageInit(USER_SERVICE.client);
    
    // API SERVICES
    
    // REDIS SERVICE
        const redisCache = new applicationCache();
        redisCache.testRedis();
    
    // BOT SERVICES
        ClientMessageCreate();
        guildMemberRemove();
        interactionCreate();
}
main();






