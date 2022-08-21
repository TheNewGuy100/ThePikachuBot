"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class CategoriesPage {
    getInfo() {
        return {
            description: 'Cria página de categorias (roles) do servidor na inicialização dele',
            type: 'entry'
        };
    }
    getCommandOrName() {
        return "Criador de Categorias";
    }
    handleMessage(userMessage) {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
    }
}
exports.default = CategoriesPage;
//# sourceMappingURL=categoriesPage.passive.js.map