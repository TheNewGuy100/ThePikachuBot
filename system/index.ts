import * as Discord from 'discord.js';
import * as fs from 'fs';

require('module-alias/register');

const client = new Discord.Client();

import {
    functionOperations,
    textOperations
} from '@controllers';

import {
    botMessages,
    ChannelWelcome,
} from '@models';

import { Prefix, BotAvatar, BotToken } from '@botconfig';
import { globalModules } from '@global';

client.on('ready', async function () {
    console.log(`
    /////////////////////////////////////////////////////////////////////////////////
                                        BOT INICIADO
    /////////////////////////////////////////////////////////////////////////////////`)
    
    client.user.setPresence({
    activity: {
        name : `Escreva ${Prefix}help para ajuda`,
        type: "PLAYING",
        url: 'yourcustom.url.com'
        },
    })

    client.on('guildMemberAdd', async (member) => {
        textOperations.memberJoinServer(member, client)
    });

    client.user.setAvatar(BotAvatar)
        .catch( () => console.log(" | ERROR CHANGE AVATAR - mundando avatar muito rápido, tente novamente mais tarde"));

    client.on('guildMemberRemove', async (member: Discord.GuildMember | Discord.PartialGuildMember) => {
        textOperations.memberLeaveServer(member, client);
    })

    client.on('message', (message : Discord.Message) => {

        if (message.author.bot) return {};
            
        globalModules.getLoliScum(message, client);
        
        globalModules.tapaNaGostosa(message, client);

            

        if (/!/.test(message.content)) {
            switch (true) {
                
                case /!olá/.test(message.content): botMessages.meDaOi(message, client)
                break

                case /!help/.test(message.content) as any: botMessages.helpMe(message)
                break

                case /!clear/.test(message.content) as any: functionOperations.clearAll(message, client)
                break

                case /!version/.test(message.content) as any: botMessages.bot_version(message, client)
                break

                case /!xingar/.test(message.content) as any: functionOperations.xingamentoAslan(message, global.user_target)
                break

                case /!elogio/.test(message.content) as any: botMessages.elogieMe(message, client)
                break

                default : break
            }
        } 
    })
})
client.login(BotToken);
