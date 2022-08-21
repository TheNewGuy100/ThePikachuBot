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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.applicationCache = void 0;
const chalk_1 = __importDefault(require("chalk"));
const ioredis_1 = __importDefault(require("ioredis"));
const language_1 = require("../language");
class applicationCache {
    constructor() {
        this.redis = new ioredis_1.default({
            host: process.env.REDIS_HOST,
            port: process.env.REDIS_PORT
        });
    }
    testRedis() {
        return __awaiter(this, void 0, void 0, function* () {
            this.set("test_key", { test: 123 });
            const get = yield this.get("test_key");
            if (get.test === 123) {
                console.log("Redis status: " + chalk_1.default.green(language_1.REDIS_INIT_SUCCESS));
                return;
            }
            else {
                console.log("Redis status: " + chalk_1.default.red(language_1.REDIS_INIT_ERROR));
                return;
            }
        });
    }
    get(key) {
        return __awaiter(this, void 0, void 0, function* () {
            const value = yield this.redis.get(key);
            return value ? JSON.parse(value) : null;
        });
    }
    set(key, value, timeEX) {
        if (timeEX) {
            return this.redis.set(key, JSON.stringify(value), "EX", timeEX);
        }
        else {
            return this.redis.set(key, JSON.stringify(value));
        }
    }
    del(key) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.redis.del(key);
        });
    }
}
exports.applicationCache = applicationCache;
//# sourceMappingURL=connectionTest.js.map