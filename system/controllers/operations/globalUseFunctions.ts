export class globalUseFunctions {
    
    static clearAll(message) {
        try {
            if (message.member.hasPermission("ADMINISTRATOR")) {
                console.log(' | ACESSO PERMITIDO')
                const channel_tune = message.channel
                channel_tune.messages.fetch().then( (data) => {
                    var cal = 0
                    data.forEach( (data) => {
                        console.log(data.content)
                        cal = cal + 1;
                    })
                    console.log(cal)
                })
                    try {
                        message.channel.bulkDelete(100).then(() => {
                            message.channel.send("Deletei 100 mensagens").then(message => message.delete(3000))
                         });
                    } catch (error) {
                        console.log(' | HOUVE FALHA NO BULK DELETE, TENTANDO NORMAL DELETE')
                        message.channel.messages.fetch()
                        .then( messages => {
                            messages.forEach( message => {
                                message.delete()
                            });
                        })
                    }
            }
            else {
                console.log(' | ERRO - FALTA DE PERMISSÃO')
            }
        } catch (error) {
            console.log(' | ERRO - CODIGO "clearALL()"')
        }
    }

    static elogieMe(message) {
        try {
        var num = Math.floor( Math.random() /* * db.length*/)
        message.channel.send( '<@' + message.author.id + "> ")
        }
        catch (error) {
            console.log(' | ERRO AO MANDAR MENSAGEM NO function ElogieMe()')
        }
    }

    static xingamentoAslan(message, user_target) {
        const chingamentos = require('../data-base/aslan-xingamentos');
        var num = Math.floor(Math.random() * chingamentos.length)
        message.channel.send( user_target + ' ' + chingamentos[num])
    }

}
