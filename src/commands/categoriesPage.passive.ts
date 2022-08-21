import * as Discord from 'discord.js';

import { StrategyInfoModel } from "src/models/strategyInfo.model";
import { IStrategyModel } from 'src/interfaces/strategy';

class CategoriesPage implements IStrategyModel {
    public getInfo(): StrategyInfoModel {
        return {
            description: 'Cria página de categorias (roles) do servidor na inicialização dele',
            type: 'entry'
        }
    }

    public getCommandOrName(): string {
        return "Criador de Categorias"
    }

    public async handleMessage(
        userMessage: Discord.Message
    ) {
        // if ( Application.category_channel.id === process.env.CATEGORY_CHANNEL) {
        //     (await Application.category_channel.messages.fetch({ limit: 100})).map((content) => {
        //         content.delete().catch()
        //     })
        // }
    
        // let mocksHolder = [categoryPageMock, gameCategoryMock, suxualityMock, programmerMock].map(async (message, index) => {
            
        //     let messageSent = await Application.category_channel.send(message);
    
        //     if (index === 1) {
        //         messageSent.react(Application.garrysmod_emoji);
        //         messageSent.react(Application.osu_emoji);
        //     }
    
        //     if (index === 2) {
                
        //     }
    
        //     if (index === 3) {
                
        //     }
        // });
    }
}

export default CategoriesPage;
