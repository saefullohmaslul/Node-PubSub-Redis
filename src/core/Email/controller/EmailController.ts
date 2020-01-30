import { Request, Response } from 'express'
import response from '../../../utils/response'
import RedisPubSub from '../helpers/redisPubSub'

const redisPubSub = new RedisPubSub('SEND_EMAIL')

export default class EmailController {
  async sendEmail(req: Request, res: Response) {
    try {
      const {
        to,
        from,
        subject,
        text,
        html
      } = req.body

      const data = {
        to,
        from,
        subject,
        text,
        html
      }

      redisPubSub.publish('SEND_EMAIL', JSON.stringify(data))

      return response.success('Success send email', res, true)
    } catch (error) {
      return response.error('Error email not send', res, 'EMAIL_NOT_SENDING')
    }
  }
}