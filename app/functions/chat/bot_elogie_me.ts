
import * as Discord from 'discord.js';
import { systemError } from '../../utils';

export const elogieMe = (message: Discord.Message, client : Discord.Client) => {
    try {
    var num = Math.floor( Math.random() /* * db.length*/)
    message.channel.send( '<@' + message.author.id + "> ")
    }
    catch (error) {
        console.log(error)
        return new systemError(500, `elogieMe couldn't handle`, client, error)
    }
}