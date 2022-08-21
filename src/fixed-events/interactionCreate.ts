import * as Discord from 'discord.js';
import { Application } from '../application';

export function interactionCreate() {
    Application.client.on('interactionCreate', async (interaction: Discord.Interaction) => {
        interaction
    })
}
