import * as Discord from 'discord.js';
import * as Canvas from 'canvas';

import { StrategyInfoModel } from "../models/strategyInfo.model";
import { eventTable, IStrategyModel, strategyInfo } from '../interfaces/strategy';
import { Application } from '../application';
import { WelcomePageMock } from '../models';
import { applyText } from 'src/utils/canvas';

export default class WelcomeNewMemberCard implements IStrategyModel {
    public getInfo(): StrategyInfoModel {
        return {
            description: 'Cria uma página de boas-vinda onde manda mensagens e cards',
            type: 'entry'
        }
    }

    public getCommandOrName(): strategyInfo {
        return {
            command: "Gerador de Tela de boas-vindas",
            events: [
                'messageReactionAdd',
                'messageReactionRemove'
            ]
        }
    }

    public async handle() {

        (await Application.welcome_channel.messages.fetch({limit: 100})).map((content) => {
            content.delete().catch()
        })
    
        let messageSent = await Application.welcome_channel.send(WelcomePageMock);
        messageSent.react(Application.member_icon);
    }

    public async handleEvents(eventType: eventTable, eventData: Discord.GuildMember): Promise<any> {
        if (eventType === 'guildMemberAdd') {
            this.guildMemberAdd(eventData);
        }
    }

    private async guildMemberAdd(member: Discord.GuildMember) {
        try {

            // let channel_info = await USER_SERVICE.client.channels.cache.get();

            const canvas = Canvas.createCanvas(700, 250);
            const context = canvas.getContext('2d');
            const background = await Canvas.loadImage('https://i.imgur.com/QsnFI7l.gif').catch((error) => {throw error})

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

            // (channel_info as Discord.TextChannel).send(`Bem-vindo a ${member.guild.name}, <@${member}>!`, )
            return;
            
        } catch (error) {
            console.log(error);
        }
    }
}
