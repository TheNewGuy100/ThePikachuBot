import * as Discord from "discord.js"

import { MODULES_INIT } from "../language";
import { Application } from "../application";
import { StrategyInfoModel, typeToString } from "../models/strategyInfo.model";
import { IStrategyModel } from "../interfaces/strategy";

class BotHelp implements IStrategyModel {
    public getInfo(): StrategyInfoModel {
        return {
            description: "Comando para obter a lista de help do bot",
            type: 'active'
        }
    }

    public getCommandOrName(): string {
        return process.env.PREFIX + process.env.HELP_BOT_COMMAND;
    }

    public async handleMessage(
        userMessage: Discord.Message
    ) {
        const mapModules = MODULES_INIT.map((command) => {
            return "Prefix **" + command.module_prefix + "** | " + command.module_description + "\n"
        })

        const modulesAsString = mapModules.join('');
        
        // const getModuleList = resolve(process.env.MODULES_PATH);
        
        // if (fs.existsSync(getModuleList)) {
        //     fields.push({
        //         name: "🔗 ***Módulos instalados no bot***",
        //         value: modulesAsString,
        //         inline: false
        //     })
        // }

        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#fcfc00')
        .setTitle(process.env.BOT_HELP_TITLE)
        .setAuthor('Pedro Bohn Costa', 'https://openjusticecourtofprotection.files.wordpress.com/2020/07/scale.gif')
        .setDescription(process.env.HELP_COMMAND_DESCRIPTION)
        .setThumbnail('https://www.clipartmax.com/png/full/99-991676_law-book-icon-png.png')
        .setFooter( process.env.BOT_NAME, 'https://www.pngrepo.com/png/92783/512/checked.png')
        .setFields(await this.getHelpFields(Application.Commands.classes))
        .setTimestamp(new Date())
        
        await userMessage.channel.send({embeds:[exampleEmbed]});
    }

    private async getHelpFields(commandsList: { [key:string]:any }): Promise<Discord.EmbedFieldData[]> {

        const arrayFields: Discord.EmbedFieldData[] = [];

        for (let data of Object.values(typeToString)) {
            arrayFields[data.position] = {
                name: data.text,
                value: "",
                inline: true
            }
        }

        for (let command of Object.values<IStrategyModel>(commandsList)) {
            for (let [key, value] of Object.entries(typeToString)) {
                const comandString = command.getCommandOrName();

                if (command.getInfo().type === key) {
                    arrayFields[value.position].value += (comandString === null ? "** Detector ** - " : "**" + comandString  + "** - ") + command.getInfo().description + "\n";
                }
            }
        }

        for (let object of arrayFields) {
            if (object.value === "") {
                object.value = "Nenhum comando encontrado";
            }
        }

        return arrayFields;
    }
}

export default BotHelp;