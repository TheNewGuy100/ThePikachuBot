import * as Discord from 'discord.js';
import * as fs from 'fs';

require('module-alias/register');

const client = new Discord.Client();

import {
    globalUseFunctions,
    guildMemberAdd,
} from '@controllers';

import {
    botMessages,
    ChannelWelcome,
    systemError,
} from '@models';

import { Prefix, BotAvatar, BotToken } from '@botconfig';

client.on('ready', async function () {
    console.log(`
    /////////////////////////////////////////////////////////////////////////////////
                                        BOT INICIADO
    /////////////////////////////////////////////////////////////////////////////////`)
    
    client.user.setPresence({
    activity: {
        name : `Escreva ${Prefix}help para ajuda`,
        type: 0,
        },
    })

    client.on('guildMemberAdd', async function (member) {
        guildMemberAdd.memberJoinServer(member, client)
    });

    client.user.setAvatar(BotAvatar)
        .catch( (err) => console.log(" | ERROR CHANGE AVATAR - mundando avatar muito rápido, tente novamente mais tarde"));


        

    client.on('message', (message : Discord.Message) => {

        if (message.author.bot) return {};

        // CHECKUP PARA VER SE É O DONO DIGITANDO
        if (message.author.id == global.author_id) {
            console.log(' | O AUTOR DA MENSAGEM É O DONO')
        }
            
            // CÂNCER (LOLI DETECTOR COM DB DE IMAGENS)
            var content = message.content.toLowerCase().split(' ')
            var loli_num = Math.floor(Math.random() * 27)
            for (const chave of content) {
                if (chave === 'loli') {
                    
                    fs.readdir(`./images/`, () => {
                        const attachment = new Discord.MessageAttachment(``)
                        const embed = new Discord.MessageEmbed()
                        .setTitle('FBI OPEN UP!')
                        .setColor('#fcfc00')
                        .setImage(`attachment://loli_s_${loli_num}.gif`)
                    
                        message.channel.send(embed);
                    })
                }
            }

        if (/!/.test(message.content)) {
            switch (true) {
                
                case /!olá/.test(message.content): botMessages.meDaOi(message)                            // RESPOSTA REFERENTE A UMA CONVERSA COM O BOT
                break

                case /!help/.test(message.content) as any: botMessages.helpMe(message)                           // COMANDO PARA PEGAR LISTA DE COMANDOS
                break

                case /!clear/.test(message.content) as any: globalUseFunctions.clearAll(message, client.user)                        // COMANDO QUE VAI LIMPAR UM CANAL INTEIRO
                break

                case /!version/.test(message.content) as any: botMessages.bot_version(message)                  // EXIBE VERSÃO DO BOT
                break

                case /!boas-vindas/.test(message.content) as any: ChannelWelcome.bemVindo(message)                 // MENSAGEM DE BOAS VINDAS DO SERVER
                break

                case /!aslan/.test(message.content) as any: globalUseFunctions.xingamentoAslan(message, global.user_target)   // CHINGA O ASLAN OU QUEM VOCÊ QUISER...
                break

                case /!elogio/.test(message.content) as any: globalUseFunctions.elogieMe(message)                      // ELOGIA VOCÊ <3
                break

                default : botMessages.mensagemErro(message)                         // CASO USUÁRIO NÃO USE UM COMANDO VÁLIDO
                break
            }
        } 
    })
})
client.login(BotToken);
