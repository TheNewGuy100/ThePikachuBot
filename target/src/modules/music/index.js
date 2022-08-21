"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// export function initMusicBot() {
//     app.get("/", (request, response) => {
//         const ping = new Date();
//         ping.setHours(ping.getHours() - 3);
//         console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
//         response.sendStatus(200);
//     });
//     app.listen(process.env.PORT);
//     const { Player } = require('discord-player');
//     client.player = new Player(client);
//     client.config = require('./config/bot');
//     client.emotes = client.config.emojis;
//     client.commands = new Discord.Collection();
//     fs.readdirSync('./commands').forEach(dirs => {
//         const commands = fs.readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));
//         for (const file of commands) {
//             const command = require(`./commands/${dirs}/${file}`);
//             console.log(`Loading command ${file}`);
//             client.commands.set(command.name.toLowerCase(), command);
//         };
//     });
//     const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
//     const player = fs.readdirSync('./player').filter(file => file.endsWith('.js'));
//     for (const file of events) {
//         console.log(`Loading discord.js event ${file}`);
//         const event = require(`./events/${file}`);
//         USER_SERVICE.client.on(file.split(".")[0], event.bind(null, USER_SERVICE.client));
//     };
//     for (const file of player) {
//         console.log(`Loading discord-player event ${file}`);
//         const event = require(`./player/${file}`);
//         USER_SERVICE.client.player.on(file.split(".")[0], event.bind(null, USER_SERVICE.client));
//     };
// }
//# sourceMappingURL=index.js.map