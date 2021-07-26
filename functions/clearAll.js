const Discord = require('discord.js');

module.exports = function clearAll(message) {
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