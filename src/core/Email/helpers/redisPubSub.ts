import RedisConfig from '../../../utils/redis'
import EmailService from '../service/EmailService'

const redisClientPub = RedisConfig.config()
const redisClientSub = RedisConfig.config()

export default class RedisPubSub {
  constructor(topic: string) {
    this.subscribe(topic)

    redisClientSub.on('message', (topic: string, message: string) => {
      const data = JSON.parse(message)

      if (topic === 'SEND_EMAIL') EmailService.sendEmail(data)
    })
  }

  public publish(
    topic: string,
    message: string
  ) {
    return redisClientPub.publish(
      topic,
      message,
      (error: Error | null, reply: number) => {
        if (error) {
          console.log(`> Redis: Error publish message`)
        } else {
          console.log(`> Redis: Success publish message`)
        }
      }
    )
  }

  public subscribe(
    topic: string
  ) {
    return redisClientSub.subscribe(
      topic
    )
  }
}