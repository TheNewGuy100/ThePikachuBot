
import * as Config from "./config";
import { API_DISCORD, CLIENT_DISCORD } from "./config";
import { INIT_COMMANDS } from "./config/init/INIT_COMMANDS";
import { interactionCreate } from "./fixed-events/interactionCreate";
import { CategoryPageInit, WelcomePageInit } from "./functions";

Config.setENV();

export const API_SERVICE = new API_DISCORD;
export const USER_SERVICE = new CLIENT_DISCORD;
export const COMMANDS_SERVICE = new INIT_COMMANDS;

require('events').EventEmitter.defaultMaxListeners = 100;

async function main() {

    // await WelcomePageInit(USER_SERVICE.client);
    // await CategoryPageInit(USER_SERVICE.client);
    
    // API SERVICES
    
    // REDIS SERVICE
    //     const redisCache = new applicationCache();
    //     redisCache.testRedis();

    

    
    // BOT SERVICES
        interactionCreate();
}
main();






