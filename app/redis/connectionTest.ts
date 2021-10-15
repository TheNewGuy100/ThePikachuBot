import axios from "axios"
import ioredis from "ioredis"

export class applicationCache {
    redis: any;

    constructor() {
        this.redis = new ioredis({
            host: process.env.REDIS_HOST,
            port: process.env.REDIS_PORT
        })
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
        return this.redis.del(key)
    }

}
