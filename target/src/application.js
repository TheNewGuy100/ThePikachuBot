"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
const index_1 = __importDefault(require("./commands/index"));
const Config = __importStar(require("./config"));
const Discord = __importStar(require("discord.js"));
const language_1 = require("./language");
Config.setENV();
class application {
    constructor() {
        this.initializeAPI();
        this.initializeBOT();
        // await WelcomePageInit(USER_SERVICE.client);
        // await CategoryPageInit(USER_SERVICE.client);
        // API SERVICES
        // REDIS SERVICE
        //     const redisCache = new applicationCache();
        //     redisCache.testRedis();
        // BOT SERVICES
    }
    envFetch() {
        return __awaiter(this, void 0, void 0, function* () {
            this.guild = this.client.guilds.cache.get(process.env.GUILD_ID);
            this.welcome_channel = (yield this.guild.channels.fetch(process.env.WELCOME_CHANNEL));
            this.category_channel = (yield this.client.channels.fetch(process.env.CATEGORY_CHANNEL));
            this.nsfw_channel = (yield this.client.channels.fetch(process.env.NSFW_CHANNEL));
            this.welcome_role = yield this.guild.roles.fetch(process.env.WELCOME_ROLE);
            this.member_role = yield this.guild.roles.fetch(process.env.MEMBER_ROLE);
            this.osu_role = yield this.guild.roles.fetch(process.env.OSU_ROLE);
            this.garrysmod_emoji = this.guild.emojis.cache.find((emoji) => emoji.id === process.env.GARRYS_MOD_EMOJI);
            this.osu_emoji = this.guild.emojis.cache.find((emoji) => emoji.id === process.env.OSU_EMOJI);
            this.welcome_emoji = process.env.WELCOME_ROLE_EMOJI;
            this.music_module_error_emoji = process.env.MUSIC_BOT_ERROR_EMOJI;
            this.music_module_music_emoji = process.env.MUSIC_BOT_MUSIC_EMOJI;
            this.music_module_off_emoji = process.env.MUSIC_BOT_OFF_EMOJI;
            this.music_module_queue_emoji = process.env.MUSIC_BOT_QUEUE_EMOJI;
            this.music_module_success_emoji = process.env.MUSIC_BOT_SUCCESS_EMOJI;
        });
    }
    initializeAPI() {
        return __awaiter(this, void 0, void 0, function* () {
            // this.api = new REST({ version: '9' }).setToken(process.env.BOT_TOKEN);
            // console.log(process.env.API_SENDING_INFORMATION);
            // await this.api.put(
            // Routes.applicationGuildCommands(process.env.BOT_ID, process.env.GUILD_ID),
            // { body: {} },
            // ).catch(() => console.log(process.env.API_SENDING_INFORMATION_DENIED))
            // .then((axiosResponse: AxiosResponse) => {
            //     if (axiosResponse) {
            //     console.log(process.env.API_SENDING_INFORMATION_SUCCESS)
            //     }
            // });
        });
    }
    initializeBOT() {
        return __awaiter(this, void 0, void 0, function* () {
            this.client = new Discord.Client({
                intents: [
                    Discord.Intents.FLAGS.GUILDS,
                    Discord.Intents.FLAGS.GUILD_MESSAGES,
                    Discord.Intents.FLAGS.GUILD_MEMBERS,
                    Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
                    Discord.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS
                ]
            });
            yield this.client.login(process.env.BOT_TOKEN);
            this.client.on('ready', () => {
                console.log((0, language_1.BOT_LOGIN_MESSAGE)(this.client.user.tag));
                this.client.user.setPresence({
                    status: process.env.BOT_STATUS,
                    afk: Boolean(process.env.BOT_AFK),
                    activities: [{
                            name: process.env.BOT_ACTIVITY_NAME,
                            url: process.env.BOT_ACTIVITY_URL,
                            type: "LISTENING",
                        }]
                });
                this.client.user.setAvatar(process.env.BOT_AVATAR).catch(() => console.log(process.env.BOT_UPDATE_IMAGE_ERROR));
                this.client.user.setUsername(process.env.BOT_NAME);
                this.envFetch();
                this.Commands = new index_1.default();
            });
        });
    }
}
exports.Application = new application();
//# sourceMappingURL=application.js.map