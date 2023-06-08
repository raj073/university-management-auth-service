import mongoose from 'mongoose'
import config from './config/index'
import app from './app'
import { logger, errorLogger } from './shared/logger'

async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info(`Database Connected Sucessfully`)

    app.listen(config.port, () => {
      logger.info(`University Management Server Listening on ${config.port}`)
    })
  } catch (error) {
    errorLogger.error(`Failed to Connect Database, ${error}`)
  }
}

main()
