    
import * as Discord from 'discord.js';
import { systemError } from '../../utils';
import * as Canvas from 'canvas';
import { applyText } from '../../utils/canvas';
    
export const memberJoinServer = async(member: Discord.GuildMember, client: Discord.User | any): Promise< Discord.Message | systemError > => {
    try {

        let channel_info = await client.channels.cache.get();

        const canvas = Canvas.createCanvas(700, 250);
        const context = canvas.getContext('2d');
        const background = await Canvas.loadImage('https://i.imgur.com/QsnFI7l.gif')
                                            .catch((error) => {throw error})

        context.drawImage(background, 0, 0, canvas.width, canvas.height);

        context.strokeStyle = '#74037b';
        context.strokeRect(0, 0, canvas.width, canvas.height);

        context.font = '28px sans-serif';
        context.fillStyle = '#ffffff';
        context.fillText('Bem-vindo ao servidor,', 275, 75);

        context.font = applyText(canvas, `${member.displayName}!`);
        context.fillStyle = '#ffffff';
        context.fillText(`${member.displayName}`, 275, 150);

        context.font = "28px sans-serif";
        context.fillStyle = '#ffffff';
        context.fillText(`Membros: ${member.guild.memberCount}`, 275, 200);

        context.beginPath();
        context.arc(125, 125, 100, 0, Math.PI * 2, true);
        context.closePath();
        context.clip();

        const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'gif' }));
        context.drawImage(avatar, 25, 25, 200, 200);

        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.gif');

        return (channel_info as Discord.TextChannel).send(`Bem-vindo a ${member.guild.name}, <@${member}>!`, )
    
    } catch (error) {
        console.log(error)
        return new systemError(500, `memberJoinServer couldn't handle`, client, error)
    }
}