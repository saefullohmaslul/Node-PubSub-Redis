import { Router } from 'express'
import EmailController from './controller/EmailController'

const router = Router()
const controller = new EmailController()

router.post(
  '/email',
  controller.sendEmail
)

module.exports = router