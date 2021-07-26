// CONTEÚDO NECESSÁRIO ( PADRÃO )
import * as Discord from 'discord.js';
import * as fs from 'fs';

const client = new Discord.Client();

// CONTEÚDO EXTERNO
import {
    globalUseFunctions,
} from './controllers/index';

import {
    botMessages,
    ChannelWelcome,
} from '../models/index.models';

import { Config } from '../config';



client.on('ready',async function () {
        console.log(`
 /////////////////////////////////////////////////////////////////////////////////
                                    BOT INICIADO
 /////////////////////////////////////////////////////////////////////////////////      
    `)
    // COMANDOS DE INICIALIZAÇÃO
        // COMANDO PARA SETAR A PRESENÇA DE JOGO DO BOT
        try {
        client.user.setPresence({
        activity: {
            name : '!help para ajuda',
            type: 0,
            },
        })
        console.log(' | CONFIGURAÇÃO DE PRESENÇA - FUNCIONAL')

        } catch (error) {
            console.log(' | CONFIGURAÇÃO DE PRESENÇA - | ERROR |')
        }

        // COMANDO PARA AJUSTAR A PÁGINA DE REAÇÃO PARA O BOT
        // try {
        //     GetCargos(client)
        // } catch(error) {
        //     console.log(error, " | falha na execução GetCargos()")
        // }




    // COMANDO COM PROCESSO INCLUIDO
        client.on('guildMemberAdd', function (member) {
            ChannelWelcome.Message(member, client)
        });

        client.on('message', async (message) => {
            console.log(' |\n | MENSAGEM RECEBIDA: ', message.content)
            if (message.author.bot) return;

            // CHECKUP PARA VER SE É O DONO DIGITANDO
            if (message.author.id == global.author_id) {
                console.log(' | O AUTOR DA MENSAGEM É O DONO')
            }
            
            // CÂNCER (LOLI DETECTOR COM DB DE IMAGENS)
            var content = message.content.toLowerCase().split(' ')
            var loli_num = Math.floor(Math.random() * 27)
            for (const chave of content) {
                if (chave === 'loli') {
                    console.log(' | PROTEÇÃO CONTRA LOLIS ATIVADO')
                    
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


        if (message.content.startsWith('!')) {
            console.log(' | COMANDO DETECTADO')
            switch (message.content) {
                
                case '!olá': botMessages.meDaOi(message)                            // RESPOSTA REFERENTE A UMA CONVERSA COM O BOT
                break

                case '!help': botMessages.helpMe(message)                           // COMANDO PARA PEGAR LISTA DE COMANDOS
                break

                case '!clear': globalUseFunctions.clearAll(message)                        // COMANDO QUE VAI LIMPAR UM CANAL INTEIRO
                break

                case '!version' : botMessages.bot_version(message)                  // EXIBE VERSÃO DO BOT
                break

                case '!boas-vindas' : ChannelWelcome.bemVindo(message)                 // MENSAGEM DE BOAS VINDAS DO SERVER
                break

                case '!aslan' : globalUseFunctions.xingamentoAslan(message, global.user_target)   // CHINGA O ASLAN OU QUEM VOCÊ QUISER...
                break

                case '!elogio' : globalUseFunctions.elogieMe(message)                      // ELOGIA VOCÊ <3
                break

                default :   botMessages.mensagemErro(message)                         // CASO USUÁRIO NÃO USE UM COMANDO VÁLIDO
                break

            }
        }
    })

})
client.login(Config.getBotToken());
