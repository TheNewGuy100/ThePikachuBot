
// CONTEÚDO NECESSÁRIO ( PADRÃO )
const Discord = require("discord.js");
const fs = require('fs')
const {bot_token, author_id, user_target, main_channel} = require("./config.json");
const client = new Discord.Client();

// CONTEÚDO EXTERNO
const messageError = require('./responses/mensagens-erro')      // COMANDO DE ERRO
const helpMe = require('./responses/help')                      // COMANDO HELPER
const clearAll = require('./functions/clearAll')                // FUNÇÃO QUE LIMPA UM CHAT
const bot_version = require('./responses/bot-version')          // DIZ A VERSÃO DO BOT
const meDaOi = require('./responses/ola')                       // DA UMA RESPOSTA AMIGÁVEL <3
const bemVindo = require('./responses/mensagem-boas_vindas')    // MENSAGEM DE BOAS VINDAS PARA O SERVIDOR
const { xingamentoAslan } = require("./functions/xinga-aslan");  // FUNCTION QUE CHINGAO ASLAN OU QUEM VOCÊ QUISER...
const { elogieMe } = require("./functions/elogie-me");
const mensagem_bem_vindo = require('./responses/bem-vindo')
const {GetCargos} = require('./functions/get-cargos')

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
        try {
            GetCargos(client)
        } catch(error) {
            console.log(error, " | falha na execução GetCargos()")
        }




    // COMANDO COM PROCESSO INCLUIDO
        client.on('guildMemberAdd', function (member) {
            mensagem_bem_vindo(member, client)
        });

        client.on('message', async (message) => {
            console.log(' |\n | MENSAGEM RECEBIDA: ', message.content)
            if (message.author.bot) return;

            // CHECKUP PARA VER SE É O DONO DIGITANDO
            if (message.author.id == author_id) {
                console.log(' | O AUTOR DA MENSAGEM É O DONO')
            }
            
            // CÂNCER (LOLI DETECTOR COM DB DE IMAGENS)
            var content = message.content.toLowerCase().split(' ')
            var loli_num = Math.floor(Math.random() * 27)
            for (const chave of content) {
                if (chave === 'loli') {
                    console.log(' | PROTEÇÃO CONTRA LOLIS ATIVADO')
                    
                    fs.readdir(`./images/`, () => {
                        const attachment = new Discord.MessageAttachment(`./images/loli-fbi-images/loli_s_${loli_num}.gif`)
                        const embed = new Discord.MessageEmbed()
                        .setTitle('FBI OPEN UP!')
                        .setColor('#fcfc00')
                        .attachFiles(attachment)
                        .setImage(`attachment://loli_s_${loli_num}.gif`)
                    
                        message.channel.send(embed);
                    })
                }
            }


        if (message.content.startsWith('!')) {
            console.log(' | COMANDO DETECTADO')
            switch (message.content) {
                
                case '!olá': meDaOi(message)                            // RESPOSTA REFERENTE A UMA CONVERSA COM O BOT
                break

                case '!help': helpMe(message)                           // COMANDO PARA PEGAR LISTA DE COMANDOS
                break

                case '!clear': clearAll(message)                        // COMANDO QUE VAI LIMPAR UM CANAL INTEIRO
                break

                case '!version' : bot_version(message)                  // EXIBE VERSÃO DO BOT
                break

                case '!boas-vindas' : bemVindo(message)                 // MENSAGEM DE BOAS VINDAS DO SERVER
                break

                case '!aslan' : xingamentoAslan(message, user_target)   // CHINGA O ASLAN OU QUEM VOCÊ QUISER...
                break

                case '!elogio' : elogieMe(message)                      // ELOGIA VOCÊ <3
                break

                default : messageError(message)                         // CASO USUÁRIO NÃO USE UM COMANDO VÁLIDO
                break

            }
        }
    })

})

client.login(bot_token);