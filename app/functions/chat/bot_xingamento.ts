
export const xingamentoFunction = (message, user_target) => {
    const chingamentos = require('../data-base/aslan-xingamentos');
    var num = Math.floor(Math.random() * chingamentos.length)
    message.channel.send( user_target + ' ' + chingamentos[num])
}