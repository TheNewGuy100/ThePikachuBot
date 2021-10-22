import * as Discord from 'discord.js';

export const stringRemoveCommandFromParams = (message: Discord.Message) => {
    const array = message.content.split(' ');
                  array.shift();

    return `${array.join(" ")}`;
}