
import * as Config from "./config";
import { API_DISCORD, CLIENT_DISCORD } from "./config";
import { ClientMessageCreate } from "./event/messageCreate";
import { guildMemberRemove } from "./event/guildMemberRemove";

Config.setENV();

export const API_SERVICE = new API_DISCORD;
export const USER_SERVICE =  new CLIENT_DISCORD;

// const redisCache = new applicationCache;
//     redisCache.set("um_belo_dia", "vai dar o cu")
//     redisCache.get("um_belo_dia")

// WelcomePageInit(USER_SERVICE.client);
// CategoryPageInit(USER_SERVICE.client);

// CLIENT EVENTS
    ClientMessageCreate();
    guildMemberRemove();


