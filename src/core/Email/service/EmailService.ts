require('../../../utils/environment')

import mail from '@sendgrid/mail'
mail.setApiKey(process.env.SENDGRID_API as string)
import { MailData } from '../../../types/EmailService'

export default class EmailService {
  static async sendEmail(
    data: MailData
  ) {
    try {
      return await mail.send(data)
    } catch (error) {
      throw error
    }
  }
}