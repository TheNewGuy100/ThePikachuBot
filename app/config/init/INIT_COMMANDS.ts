import * as fs from 'fs';
import { functionCommandsModel } from '../../models/informationModel';

export const commandMessage = (command, isCommand: boolean): string => `**${isCommand === true ? '!' : ''}` + command.name + "** | " + command.description + "\n"

export class INIT_COMMANDS {
    primmaryCommands: functionCommandsModel[];
    secondaryCommands: functionCommandsModel[];
    administratorCommands: functionCommandsModel[];

    constructor() {
        const folders = [
            {
                folder_name: 'primmary_commands',
                class_content_name: 'primmaryCommands'
            },
            {
                folder_name: 'second_plan_commands',
                class_content_name: 'secondaryCommands'
            },
            {
                folder_name: 'administrator_commands',
                class_content_name: 'administratorCommands'
            }
        ]

        for ( let type of folders ) {
            const commands = [];
            const getFiles = fs.readdirSync(__dirname + `/../../functions/${type.folder_name}`)
            for (let informationContent of getFiles) {
                const fileContent = require(__dirname + `/../../functions/${type.folder_name}/` + informationContent);
                const fileInformation = fileContent.information();
                commands.push(fileInformation)
            }
            this[type.class_content_name] = commands;
        }
    }

    getHelpListFromCommands(type: 'primmaryCommands' | 'secondaryCommands' | 'administratorCommands', isCommand: boolean) {
        const commandsContent: functionCommandsModel[] = this[type];
        const mappedHelp = [];

        for (let information of commandsContent) {
            mappedHelp.push(commandMessage(information, isCommand))
        }
        
        return mappedHelp.join('');
    }
}