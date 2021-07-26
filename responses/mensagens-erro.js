const Discord = require("discord.js");
const fs = require("fs");

module.exports = function mensagemErro(message) {
    try {
        fs.readdir(`./images/`, () => {
            const attachment = new Discord.MessageAttachment(`./images/error-pikachu.png`)
            const embed = new Discord.MessageEmbed()
            .setDescription("ERRO | COMANDO INEXISTENTE")
            .setColor('#fcfc00')
            .attachFiles(attachment)
            .setImage(`attachment://error-pikachu.png`);
        
            message.channel.send({embed})
            .then( (message) => {
                setTimeout(() => {
                    message.delete() 
                }, 5000);
            })
        });
    } catch (error) {
        console.log(' | ERROR - ocorrido em "mensagemErro()"')
    }
};