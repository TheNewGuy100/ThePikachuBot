"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setENV = void 0;
const path_1 = require("path");
const fs_1 = require("fs");
const dotenv_1 = require("dotenv");
const chalk_1 = __importDefault(require("chalk"));
function setENV() {
    try {
        const getEnvironment = (0, path_1.resolve)(__dirname, '..', '..', '..', '.env');
        if ((0, fs_1.existsSync)(getEnvironment)) {
            (0, dotenv_1.config)({
                path: getEnvironment,
            });
            return console.log(chalk_1.default.green(`ENV ATUAL: ${process.env.NODE_STATUS_ENV}`));
        }
        else {
            return console.log(chalk_1.default.red(`ENV NÃO CARREGADA`));
        }
    }
    catch (error) {
        console.log(chalk_1.default.red(error));
    }
}
exports.setENV = setENV;
//# sourceMappingURL=getEnv.js.map