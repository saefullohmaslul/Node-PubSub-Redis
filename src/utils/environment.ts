import dotenv from 'dotenv'

const env = process.env.NODE_ENV

if (env) {
  dotenv.config({ path: `.env.${env}` })
} else {
  dotenv.config()
}