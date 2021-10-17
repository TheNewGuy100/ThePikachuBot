import { API_SERVICE, USER_SERVICE } from "../application";
import * as Discord from 'discord.js';

export function interactionCreate() {
    USER_SERVICE.client.on('interactionCreate', async (interaction: Discord.Interaction) => {
        interaction
    })
}
