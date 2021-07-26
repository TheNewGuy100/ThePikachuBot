import jimp from 'jimp';
import Discord, { TextChannel } from 'discord.js'

export class ChannelWelcome {

    static async Message(member: Discord.GuildMember, client: Discord.Client) {
        let channel = client.channels.cache.get(global.main_channel)
        let URL = `https://cdn.discordapp.com/avatars/${member.user.id}/${member.user.avatar}`
        let mask = await jimp.read('./assets/mask.png')
        let font = await jimp.loadFont(jimp.FONT_SANS_64_WHITE)
        let background = await jimp.read('./assets/BannerDiscord.png')
    
        await jimp.read(URL).then( (avatar) =>{
            avatar.resize(330 , 330);
            mask.resize(330,330);
            background.print(font, 30, 30, member.user.username);
            background.print(font, 790, 30, member.user.discriminator);
            background.composite( avatar, 28, 115).write('./assets/welcome.png');
        })
    
        await (channel as TextChannel).send({files: ['./assets/welcome.png']})
    } 

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

