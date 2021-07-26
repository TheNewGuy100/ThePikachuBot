import Discord from 'discord.js'

export class ChannelWelcome {

    static bemVindo(message) {
    
        // MENSAGEM DE BOAS VINDAS DO BOT EM SÍ
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#fcfc00')
        .setTitle('Oi! meu nome é ' + global.bot_name + '\neu sou o bot desse servidor. Vou estar aqui para o ajudar no que precisar!')
        message.channel.send(exampleEmbed);
        // ENVIADO
    
        // MENSAGEM DE REGRAS 
        const embedInicial = new Discord.MessageEmbed()
        .setColor('#fcfc00')
        .setTitle('Atento as regras')
        .setDescription(`1° Respeito acima de tudo
                         2° Proibido referencia de outros servidores aqui, a não ser servidores parceiros
                         3° Qualquer mimimi referente a LGBTQ, Política, etc... será ignorado.
                         4° `)
        message.channel.send(embedInicial);
        // ENVIADO
    }
}

