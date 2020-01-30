import '../environment'
import redis from 'redis'

export default class RedisConfig {
  public static config() {
    return redis.createClient({
      host: process.env.REDIS_HOST as string,
      port: parseInt(process.env.REDIS_PORT as string),
      auth_pass: process.env.REDIS_PASS as string,
      no_ready_check: true
    })
  }
}