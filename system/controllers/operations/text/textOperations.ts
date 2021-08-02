import * as Discord from 'discord.js';
import { exitServerGif_embed, exitServerMessage_embed, MainChannel } from '@botconfig';
import { systemError } from '@global';
import * as Canvas from 'canvas';

export class textOperations {

    static applyText = (canvas, text) => {
        const context = canvas.getContext('2d');
        let fontSize = 70;
    
        do {
            context.font = `${fontSize -= 10}px sans-serif`;
        } while (context.measureText(text).width > canvas.width - 300);
    
        return context.font;
    };

    static async memberJoinServer(member: Discord.GuildMember, client: Discord.User | any): Promise< Discord.Message | systemError > {
        try {

            let channel_info = await client.channels.cache.get(MainChannel);

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

            context.font = textOperations.applyText(canvas, `${member.displayName}!`);
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

            return (channel_info as Discord.TextChannel).send(`Bem-vindo a ${member.guild.name}, <@${member}>!`, attachment)
        
        } catch (error) {
            console.log(error)
            return new systemError(500, `memberJoinServer couldn't handle`, client, error)
        }
    }

    static async memberLeaveServer( member: Discord.GuildMember | Discord.PartialGuildMember, client: Discord.Client): Promise< Discord.Message | systemError > {
        try {
            let channel_info = await client.channels.cache.get(MainChannel);

            const Embed = new Discord.MessageEmbed
            
            Embed.setTitle(`${member.displayName + ' ' + exitServerMessage_embed}`)
            Embed.setImage(`${exitServerGif_embed}`);
            

            
            return (channel_info as Discord.TextChannel).send(Embed);
        } catch (error) {
            console.log(error)
            return new systemError(500, `memberLeaveServer couldn't handle`, client, error)
        }
    }
}