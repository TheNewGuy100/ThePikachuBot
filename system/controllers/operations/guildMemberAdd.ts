import * as jimp from 'jimp';
import * as Discord from 'discord.js';
import { Config } from '@botconfig';

export class guildMemberAdd {
    
    static async memberJoinServer(member: Discord.GuildMember, client: Discord.Client) {

        let channel = client.channels.cache.get(Config.mainChannel())
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
    
        await (channel as Discord.TextChannel).send({files: ['./assets/welcome.png']})
    } 
}