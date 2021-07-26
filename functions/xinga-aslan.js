const Discord = require('discord.js');

// FUNCTION CHINGA ASLAN <3
function xingamentoAslan(message, user_target) {
    const chingamentos = require('../data-base/aslan-xingamentos');
    var num = Math.floor(Math.random() * chingamentos.length)
    message.channel.send( user_target + ' ' + chingamentos[num])
}


module.exports = {xingamentoAslan}