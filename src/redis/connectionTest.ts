
import chalk from "chalk";
import ioredis from "ioredis"
import { REDIS_INIT_ERROR, REDIS_INIT_SUCCESS } from "../language";

export class applicationCache {
    redis: ioredis;

    constructor() {
        this.redis = new ioredis({
            host: process.env.REDIS_HOST,
            port: process.env.REDIS_PORT
        })
    }

    async testRedis() {

        this.set("test_key", {test: 123});

        const get = await this.get("test_key");

        if (get.test === 123) {
            console.log("Redis status: " + chalk.green(REDIS_INIT_SUCCESS));
            return;
        } else {
            console.log("Redis status: " + chalk.red(REDIS_INIT_ERROR));
            return;
        }
    }

    async get(key) {
        const value = await this.redis.get(key)

        return value ? JSON.parse(value) : null;
    }

    set(key, value, timeEX?) {
        if (timeEX) {
            return this.redis.set( key, JSON.stringify(value), "EX", timeEX)
        } else {
            return this.redis.set( key, JSON.stringify(value))
        }
    }

    async del(key) {
        return await this.redis.del(key)
    }

}
