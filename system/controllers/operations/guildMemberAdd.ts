import * as Discord from 'discord.js';
import { Config } from '@botconfig';
import { systemError } from '@models';
import * as Canvas from 'canvas';


export class guildMemberAdd {

    static applyText = (canvas, text) => {
        const context = canvas.getContext('2d');
        let fontSize = 70;
    
        do {
            context.font = `${fontSize -= 10}px sans-serif`;
        } while (context.measureText(text).width > canvas.width - 300);
    
        return context.font;
    };
    
    static async memberJoinServer(member: Discord.GuildMember, client: Discord.Client) {
        try {

            let channel_info = await client.channels.cache.get(Config.mainChannel());

            const canvas = Canvas.createCanvas(700, 250);
            const context = canvas.getContext('2d');
            const background = await Canvas.loadImage('https://i.pinimg.com/originals/a9/0b/8c/a90b8cd4869368d99cf58a23fa57d0cd.png');

            context.drawImage(background, 0, 0, canvas.width, canvas.height);

            context.strokeStyle = '#74037b';
            context.strokeRect(0, 0, canvas.width, canvas.height);

            context.font = '28px sans-serif';
            context.fillStyle = '#ffffff';
            context.fillText('Bem-vindo ao servidor,', 275, 75);

            context.font = guildMemberAdd.applyText(canvas, `${member.displayName}!`);
            context.fillStyle = '#ffffff';
            context.fillText(`${member.displayName}`, 275, 150);

            context.font = "28px sans-serif";
            context.fillStyle = '#ffffff';
            context.fillText(`Membros: ${member.guild.memberCount}`, 275, 200);

            context.beginPath();
            context.arc(125, 125, 100, 0, Math.PI * 2, true);
            context.closePath();
            context.clip();

            const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'png' }));
            context.drawImage(avatar, 25, 25, 200, 200);


            const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
            console.log(attachment);

            return (channel_info as Discord.TextChannel).send(`Bem-vindo a ${member.guild.name}, <@${member}>!`, attachment)
        
        } catch (err) {
            console.log(err)
        }
    } 
}

