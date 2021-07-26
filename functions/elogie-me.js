const Discord = require('discord.js');
const db = require('../data-base/elogios')

// ELOGIA OS CARA
function elogieMe(message) {
    try {
    var num = Math.floor( Math.random() * db.length)
    message.channel.send( '<@' + message.author.id + "> " + db[num])
    }
    catch (error) {
        console.log(' | ERRO AO MANDAR MENSAGEM NO function ElogieMe()')
    }
}

module.exports = {elogieMe}